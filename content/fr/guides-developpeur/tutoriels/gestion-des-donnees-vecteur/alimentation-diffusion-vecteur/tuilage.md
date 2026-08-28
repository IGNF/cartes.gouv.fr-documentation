---
title: Diffusion en tuiles vectorielles précalculées
eleventyNavigation:
    key: Diffusion en tuiles vectorielles précalculées
    order: 7
eleventyComputed:
    markdownTemplateEngine: njk
summary:
    visible: true
    depth: 3
tertiaryTitle: Tuilage
---

{% from "components/component.njk" import component with context %}

Cette étape supplémentaire permet une diffusion à plus grande échelle de données vecteur. Seules les parties nouvelles sont détaillées.

### Calcul de la pyramide de tuiles vectorielles

#### Consultation des traitements disponibles

???? GET "{{ urls.api_entrepot }}/datastores/{datastore}/processings"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/processings
```
??? Corps de réponse JSON
```json
{{ "public/data/tutoriels/alimentation-diffusion-simple/globales/production/processings.json" | readFILE | safe }}
```
???
????
<br>

#### Consultation du traitement qui nous intéresse

???? GET "{{ urls.api_entrepot }}/datastores/{datastore}/processings/{{ ids.processings['db_to_pyramid'] }}"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/processings/{{ ids.processings['db_to_pyramid'] }}
```
??? Corps de réponse JSON
```json
{
    "name": "Calcul de pyramide vecteur",
    "description": "Génération ou mise à jour d’une pyramide de tuiles vectorielles à partir d’une donnée vecteur en base",
    "input_types": {
        "upload": [],
        "stored_data": ["VECTOR-DB", "ROK4-PYRAMID-VECTOR"]
    },
    "output_type": {
        "stored_data": "ROK4-PYRAMID-VECTOR",
        "storage": ["S3"]
    },
    "parameters": [
        {
            "name": "composition",
            "description": "Tables à exporter et niveaux limites d’utilisation",
            "mandatory": false,
            "constraints": {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "required": ["table", "bottom_level", "top_level"],
                "properties": {
                    "layer": {
                        "type": "string"
                    },
                    "table": {
                        "type": "string"
                    },
                    "filter": {
                        "type": "string"
                    },
                    "top_level": {
                        "type": "string"
                    },
                    "attributes": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "bottom_level": {
                        "type": "string"
                    }
                }
            }
        },
        {
            "name": "bottom_level",
            "description": "Niveau du bas de la pyramide (obligatoire si pas de composition fournie)",
            "mandatory": false
        },
        {
            "name": "width",
            "description": "Nombre de tuiles dans une dalle, dans le sens de la largeur",
            "mandatory": false,
            "default_value": 16
        },
        {
            "name": "top_level",
            "description": "Niveau du haut de la pyramide (obligatoire si pas de composition fournie)",
            "mandatory": false
        },
        {
            "name": "tippecanoe_options",
            "description": "Options de l’outil tippecanoe pour la généralisation des données vecteur",
            "mandatory": false
        },
        {
            "name": "area",
            "description": "WKT de la zone sur laquelle le moissonnage doit se faire, en EPSG:4326 (obligatoire si la base vecteur en entrée n’a pas d’étendue)",
            "mandatory": false
        },
        {
            "name": "height",
            "description": "Nombre de tuiles dans une dalle, dans le sens de la hauteur",
            "mandatory": false,
            "default_value": 16
        },
        {
            "name": "parallelization",
            "description": "Nombre de scripts d’écriture des dalles en parallèle",
            "mandatory": false,
            "default_value": 1
        }
    ],
    "_id": "{{ ids.processings['db_to_pyramid'] }}",
    "required_checks": []
}
```
???
????
<br>

#### Configuration d’une exécution de ce traitement

:::warning
Les niveaux sur lesquels on transforme les données vecteur en tuiles vectorielles sont importants : en calculant un niveau trop résolu (trop bas), le temps de génération et le volume occupé par la pyramide en sortie sera inutilement grand. En utilisant une table volumineuse dans des niveaux trop hauts, les tuiles seront très lourdes car contenant trop de données (ou vidées de la majorité des objets). Il faut donc prêter une attention particulière aux niveaux d’utilisation des tables.
:::

Dans notre exemple ici, on choisit un cas simple : les pays sont présents dans tous les niveaux, et les écorégions ne seront présentes que jusqu’au niveau 5. On ne filtre pas les données et on ne change pas les noms des tables dans les tuiles. On veut tous les attributs.

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions
```
??? Corps de requête JSON
```json
{
    "processing": "{{ ids.processings['db_to_pyramid'] }}",
    "inputs": {
        "stored_data": ["{stored data}"]
    },
    "output": {
        "stored_data": {
            "name": "Pays et éco-régions",
            "storage_tags": ["PYRAMIDE"]
        }
    },
    "parameters": {
        "composition": [
            {
                "table": "ecoregions",
                "bottom_level": "9",
                "top_level": "5",
                "attributes": ["*"]
            },
            {
                "table": "pays",
                "bottom_level": "9",
                "top_level": "0",
                "attributes": ["*"]
            }
        ]
    }
}
```
???
??? Plus d’aide sur la configuration d’une exécution de traitement de création d’une pyramide de tuiles vectorielles
Description des paramètres en entrée :
- `inputs/stored_data` : Il s’agit ici d’une liste (présence des caractères « `[ ]` ») qui prend comme valeur au moins un identifiant entrepôt de **`stored_data`** de type `VECTOR-DB` (voir étape précédente)
- `output/stored_data/name` : Le nom défini ici est un nommage libre.

    **Cette information n’est lisible que par un autre utilisateur membre de cet entrepôt, pas par l’utilisateur final. Vous êtes donc invité à renseigner ici des informations parlantes pour vous - producteur de donnée.**

    Cette information est modifiable après coup.
- `output/stored_data/storage_tags` : Il s’agit ici d’une liste (présence des caractères « `[ ]` ») qui prend comme valeur au moins un tag associé au stockage qui va accueillir la donnée de sortie.

    Vous pouvez retrouver ces tags via la route `GET /datastores/{datastore}/storages` (rubrique Entrepôt du swagger) dans l’attribut de réponse `labels` associé à chaque stockage.

    Pour une donnée de type tuiles vecteur pré-calculées en sortie, seul le stockage S3 est accessible, ce qui correspond au label, donc au `storage_tag` : `PYRAMIDE`.
- `parameters` : C’est là que toute la configuration du traitement prend corps :
    - `composition` : Définit les couches qui vont être tuilées avec pour chaque couche :
        - `table` : Le nom technique de la relation à tuiler, tel que défini dans la `stored_data`.
        - `layer` : Le nom technique de la relation telle qu’elle sera présentée dans le flux. Paramètre optionnel, utile à définir en cas de renommage.
        - `filter` : Critère de filtrage pour ne diffuser que le objets correspondant au critère de filtrage. Utilisez une syntaxe de type PostgreSQL : `"filter": "mon_champ='ma valeur'"`.
        - `top_level` : Niveau haut (le plus dézoomé, le chiffre le plus faible) de la pyramide auquel la couche sera tuilée et donc visible.
        - `bottom_level` : Niveau bas (le plus zoomé, le chiffre le plus grand) de la pyramide auquel la couche sera tuilée et donc visible.
        - `attributes` : Liste des attributs, entre doubles quotes et séparés par des virgules à diffuser dans le flux. Pour diffuser tous les attributs, déclarez le caractère « `*` » .
    - `top_level` : Niveau haut (le plus dézoomé, le chiffre le plus faible) de la pyramide auquel la couche sera tuilée et donc visible. Permet de définir un niveau global à l’ensemble de la pyramide.
        :::warning
        Ce paramètre est obligatoire s’il n’est pas défini pour chaque table dans la composition.

        S’il est précisé en plus de la composition, il est préférable d’adopter une valeur cohérente au regard de celles définies dans la composition : à savoir égale au plus grand `top_level` de la composition.
        :::
    - `bottom_level` : Niveau bas (le plus zoomé, le chiffre le plus grand) de la pyramide auquel la couche sera tuilée et donc visible. Permet de définir un niveau global à l’ensemble de la pyramide.
        :::warning
        Ce paramètre est obligatoire s’il n’est pas défini pour chaque table dans la composition.

        S’il est précisé en plus de la composition, il est préférable d’adopter une valeur cohérente au regard de celles définies dans la composition : à savoir égale au plus petit `bottom_level` de la composition.
        :::
    - `area` : WKT de la zone sur laquelle le moissonnage doit se faire, en EPSG:4326. Ce paramètre est obligatoire si la base vecteur en entrée n’a pas d’étendue et est utile si la donnée est disséminée à travers le globe (France + DOM par exemple).
    - `tippecanoe_options` : Plus d’informations sur ces options et leur syntaxe peuvent être trouvées sur la [documentation de l’outil](https://github.com/mapbox/tippecanoe/blob/master/README.md).
        ::: info
        La caractéristique à retenir d’une tuile vectorielle générée avec Tippecanoe est qu’elle ne peut contenir plus de 5 000 objets, et ce quelle que soit la tuile ou son niveau.

        C’est la première cause d’échec de traitement par les utilisateurs

        Les options sont donc essentielles pour adapter le jeu de donnée en entrée à cette contrainte. Elles proposent différentes méthodes de généralisation à petite échelle pour assurer une représentation fiable de la donnée tout en limitant le nombre d’objets par tuile.
        :::

Vous êtes invités à vous référer au swagger pour avoir les détails et options complètes sur cette partie.

:::info
Comme pour la livraison il vous est possible de configurer l’envoi d’un courriel automatique à la fin du traitement.

Pour ce faire, il suffit d’ajouter l’élément JSON ci-dessous après l’élément `parameters` dans le corps de requête de déclaration d’exécution.
```json
"callback": {
    "type": "email",
    "to_address": [
        "example@mail.fr"
    ]
}
```
:::
???
????
<br>

#### Consultation de la donnée stockée en sortie

À la fin du traitement, des informations concernant la donnée finale sont remontées afin d’apparaître au niveau de l’API (taille, étendue, système de coordonnées, grille et niveaux).

???? GET "{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored data pyramide}"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored data pyramide}
```
??? Corps de réponse JSON
```json
{
    "name": "Pays et éco-régions",
    "type": "ROK4-PYRAMID-VECTOR",
    "srs": "EPSG:3857",
    "contact": "contact@ign.fr",
    "extent": {
        "type": "Polygon",
        "coordinates": [
            [
                [175, -85],
                [175, 83.623596],
                [-175, 83.623596],
                [-175, -85],
                [175, -85]
            ]
        ]
    },
    "last_event": {
        "title": "Génération",
        "date": "2023-07-12T09:04:07.271074",
        "initiator": {
            "_id": "{user}"
        }
    },
    "tags": {},
    "storage": {
        "type": "S3",
        "labels": []
    },
    "size": 79570364,
    "status": "GENERATED",
    "_id": "{stored data pyramide}",
    "type_infos": {
        "tms": "PM",
        "levels": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    }
}
```
???
??? Plus d’aide sur l’identification de la donnée stockée de sortie
Dès le lancement de l’exécution du traitement, dans le corps de réponse ou à chaque interrogation de la requête d’état d’exécution vous disposez dans le corps de réponse de ces requêtes de l’élément JSON :
```json
"output": {
    "stored_data": {
        "name": "Pays et éco-régions",
        "type": "ROK4-PYRAMID-VECTOR",
        "status": "GENERATING",
        "_id": "{stored data}"
    }
}
```
Ce qui vous donne l’élément `_id` à isoler pour identifier ensuite votre `stored_data` de sortie.

:::info
La `stored_data` de sortie n’est exploitable et interrogeable qu’une fois l’exécution du traitement terminée avec succès.
:::
???
????
<br>

### Diffusion des tuiles vectorielles

Les données de la pyramide de tuiles vectorielles sont diffusables selon l’API Tile Map Service. Cette API est disponible sur un point d’accès de type `WMTS-TMS`.

#### Création de la configuration

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```
??? Corps de requête JSON
```json
{
    "type": "WMTS-TMS",
    "name": "Pays et écorégions",
    "layer_name": "pays_ecoregions",
    "type_infos": {
        "title": "Mes écorégions",
        "abstract": "Grandes régions naturelles mondiales",
        "used_data": [
            {
                "bottom_level": "9",
                "top_level": "0",
                "stored_data": "{stored data}"
            }
        ]
    }
}
```
???
????
<br>

La donnée n’est pas représentée côté serveur, il n’y a donc pas de fichier de style à préciser au niveau de la configuration.

#### Consultation des points de diffusion disponibles

???? GET "{{ urls.api_entrepot }}/datastores/{datastore}"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}
```
??? Corps de réponse JSON (champ endpoints)
```json
{{ "public/data/tutoriels/alimentation-diffusion-simple/globales/production/endpoints.json" | readFILE | safe }}
```
???
??? Plus d’aide sur le choix de son point de diffusion
Cette étape est l’étape clé pour décider si le flux que vous vous apprêtez à publier va être publié en <span lang="en">_open data_</span> ou au contraire seulement aux utilisateurs accrédités. Dans l’écosystème Géoplateforme on appelle ce dernier mode, le mode privé.

Si vous souhaitez publier en <span lang="en">_open data_</span>, vous allez chercher, dans la réponse ci-dessus, un <span lang="en">_endpoint_</span> du type de la configuration créée (pour le tutoriel, `WMTS-TMS`) dont l’**élément `open` est à `true`**.

Si vous souhaitez publier en mode **privé**, vous allez chercher, dans la réponse ci-dessus, un <span lang="en">_endpoint_</span> du type de la configuration créée (pour le tutoriel, `WMTS-TMS`) dont l’**élément `open` est à `false`**.

Le tutoriel est déroulé en mode <span lang="en">_open data_</span>. Pour accéder à une donnée publiée en privé, référez vous au [tutoriel sur le contrôle des accès](../../../controle-des-acces/service-de-diffusion/).
???
????
<br>

#### Publication

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wmts-tms}/offerings"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wmts-tms}/offerings
```
??? Corps de requête JSON
```json
{
    "endpoint": "{{ ids.endpoints.open.wmts }}",
    "open": true
}
```
???
??? Plus d’aide sur la configuration de la publication
L’exemple ci-dessus présente une publication en mode <span lang="en">_open data_</span>.

Si vous choisissez de publier en mode privé, le corps de requête sera : 
```json
{
    "endpoint": "{{ ids.endpoints.private.wmts }}",
    "open": false
}
```
Pour accéder à une donnée publiée en privé, référez vous au [tutoriel sur le contrôle des accès](../../../controle-des-acces/service-de-diffusion/).
???
????
<br>

On peut vérifier la présence de notre couche `pays_ecoregions` dans le [GetCapabilities du service TMS]({{ urls.public.tms }}/1.0.0). On peut également avoir des [détails sur cette couche]({{ urls.public.tms }}/1.0.0/pays_ecoregions).

On peut également récupérer nos données dans QGIS. Il faut ajouter une source de donnée « Tuile vectorielle » et préciser comme URL `{{ urls.public.tms }}/1.0.0/pays_ecoregions/{z}/{x}/{y}.pbf`

#### Hébergement du style sous forme d’annexe

L’affichage des tuiles vectorielles implique l’application d’un style côté client. Il suffit donc de fournir un style accessible pour faciliter la consommation de telles données. On va exploiter la fonctionnalité des annexes pour mettre à disposition une URL publique pour un tel style.

Ce [style d’exemple](/data/tutoriels/alimentation-diffusion-simple/globales/production/pays_ecoregions.json) est au format Mapbox.

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/annexes"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/annexes
```
{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;pays_ecoregions.json&gt;"],
        ["paths = styles/mapbox/pays_ecoregions.json"],
        ["published = true"]
    ]
}) }}
??? Corps de réponse JSON
```json
{
    "paths": ["/styles/mapbox/pays_ecoregions.json"],
    "size": 10768,
    "mime_type": "application/json",
    "published": true,
    "_id": "{annexe}"
}
```
???
????
<br>

Nous avons demandé à ce que cette annexe soit directement publiée. Nous pouvons donc maintenant y accéder publiquement. On va pouvoir définir une couche « Tuile vectorielle » dans QGIS, en précisant la source des tuiles et l’URL du style :
- URL : `{{ urls.public.tms }}/1.0.0/pays_ecoregions/{z}/{x}/{y}.pbf`
- URL du style : `{{ urls.annexes }}/{technical_name}/styles/mapbox/pays_ecoregions.json`

<br>

![Définition d’une source "Tuile vectorielle"](/img/guides-developpeur/vecteur/alimentation-diffusion/qgis_tms_definition.png){.fr-responsive-img .frx-img-contained}

En zoomant en dessous du niveau 5, on voit bien nos régions écologiques et les limites des pays, avec le style mis en ligne.

![Visualisation des données du tutoriel](/img/guides-developpeur/vecteur/alimentation-diffusion/qgis_tms_visualisation.png){.fr-responsive-img .frx-border-img .frx-img-contained}