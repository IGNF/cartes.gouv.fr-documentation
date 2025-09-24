---
title: Diffusion en tuiles vectorielles précalculée
mermaid: true
eleventyNavigation:
    key: Diffusion en tuiles vectorielles précalculée
    parent: Alimentation et diffusion simple
    order: 7
    nav: guides-developpeur
---

{% from "components/component.njk" import component with context %}

Cette étape supplémentaire permet une diffusion à plus grande échelle de données vecteurs. Seules les parties nouvelles sont détaillées.

## Calcul de la pyramide de tuiles vectorielle

### Consultation des traitements disponibles

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/processings"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/processings
```

```json
/data/tutoriels/alimentation-diffusion-simple/globales/{{ environnement }}/processings.json
```
???
### Consultation du traitement qui nous intéresse

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/processings/{{ ids.processings['db-to-pyramid'] }}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/processings/{{ ids.processings['db-to-pyramid'] }}
```

```json
{
    "name": "Calcul de pyramide vecteur",
    "description": "Génération ou mise à jour d'une pyramide de tuiles vectorielles à partir d'une donnée vecteur en base",
    "input_types": {
        "upload": [],
        "stored_data": [
            "VECTOR-DB",
            "ROK4-PYRAMID-VECTOR"
        ]
    },
    "output_type": {
        "stored_data": "ROK4-PYRAMID-VECTOR",
        "storage": [
            "S3"
        ]
    },
    "parameters": [
        {
            "name": "composition",
            "description": "Tables à exporter et niveaux limites d'utilisation",
            "mandatory": false,
            "constraints": {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "required": [
                    "table",
                    "bottom_level",
                    "top_level"
                ],
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
            "description": "Options de l'outil tippecanoe pour la généralisation des données vecteur",
            "mandatory": false
        },
        {
            "name": "area",
            "description": "WKT de la zone sur laquelle le moissonnage doit se faire, en EPSG:4326 (obligatoire si la base vecteur en entrée n'a pas d'étendue)",
            "mandatory": false
        },
        {
            "name": "height",
            "description": "Nombre de tuiles dans une dalle, dans le sens de la haureur",
            "mandatory": false,
            "default_value": 16
        },
        {
            "name": "parallelization",
            "description": "Nombre de scripts d'écriture des dalles en parallèle",
            "mandatory": false,
            "default_value": 1
        }
    ],
    "_id": "{{ ids.processings['db-to-pyramid'] }}"
    "required_checks": []
}
```
???
### Configuration d'une exécution de ce traitement

:::warning "Points d'attentions"

    Les niveaux sur lesquels on transforme les données vecteurs en tuiles vectorielles sont importants : en calculant un niveau trop résolu (trop bas), le temps de génération et le volume occupé par la pyramide en sortie sera inutilement grand. En utilisant une table volumineuse dans des niveaux trop hauts, les tuiles seront très lourdes car contenant trop de données (ou vidées de la majoraité des objets). Il faut donc prêter une attention particulière aux niveaux d'utilisation des tables.
:::

Dans notre exemple ici, on choisit un cas simple : les pays sont présents dans tous les niveaux, et les écorégions ne seront présents que jusqu'au niveau 5. On ne filtre pas les données et on ne change pas les noms des tables dans les tuiles. On veut tous les attributs.

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions
```

```json
{
    "processing": "{{ ids.processings['db-to-pyramid'] }}",
    "inputs": {
    "stored_data": [
        "{stored data}"
    ]
    },
    "output": {
        "stored_data": {
            "name": "Pays et éco-régions",
            "storage_tags": ["VECTEUR"]
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
### Consultation de la donnée stockée en sortie

À la fin du traitement, des informations concernant la donnée finale sont remontées afin d'apparaître au niveau de l'API (taille, étendue, système de coordonnées, grille et niveaux).

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored data pyramide}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored data pyramide}
```

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
                [
                    175,
                    -85
                ],
                [
                    175,
                    83.623596
                ],
                [
                    -175,
                    83.623596
                ],
                [
                    -175,
                    -85
                ],
                [
                    175,
                    -85
                ]
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
        "levels": [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ]
    }
}
```
???
## Diffusion des tuiles vectorielles

Les données de la pyramide de tuiles vectorielles sont diffusable selon l'API Tile Map Service. Cette API est disponible sur un point d'accès de type WMTS-TMS.

### Création de la configuration

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```

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
La donnée n'est pas représentée côté serveur, il n'y a donc pas de fichier de style à préciser au niveau de la configuration.

### Consultation des points de diffusion disponibles

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}
```

```json
/data/tutoriels/alimentation-diffusion-simple/globales/{{ environnement }}/endpoints.json
```


### Publication

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wmts-tms}/offerings"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wmts-tms}/offerings
```

```json
{
    "endpoint": "{{ ids.endpoints.open.wmts }}",
    "open": true
}
```
???
On peut vérifier la présence de notre couche `pays_ecoregions` dans le [getCapabilities du service TMS]({{ urls.public.tms }}/1.0.0). On peut également avoir des [détails sur cette couche]({{ urls.public.tms }}/1.0.0/pays_ecoregions).

On peut également récupérer nos données dans QGis. Il faut ajouter une source de donnée "Tuile vectorielle" et précisé comme URL `{{ urls.public.tms }}/1.0.0/pays_ecoregions/{z}/{x}/{y}.pbf`


### Hébergement du style sous forme d'annexe

L'affichage des tuiles vectorielles implique l'application d'un style côté client. Il suffit donc de fournir un style accessible pour faciliter la consommation de telles données. On va exploiter la fonctionnalité des annexes pour mettre à disposition une URL publique pour un tel style. 

Ce [style d'exemple](/data/tutoriels/alimentation-diffusion-simple/globales/production/pays_ecoregions.json) est format mapbox.

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/annexes"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/annexes
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<pays_ecoregions.json>`"],
        ["paths = `styles/mapbox/pays_ecoregions.json`"],
        ["published = `true`"]
    ]
}) }}   

```json
{
    "paths": [
        "/styles/mapbox/pays_ecoregions.json"
    ],
    "size": 10768,
    "mime_type": "application/json",
    "published": true,
    "_id": "{annexe}"
}
```
??? 
Nous avons demandé à ce que cette annexe soit directement publiée. Nous pouvons donc maintenant y accéder publiquement. On va pouvoir définir une couche "Tuile vectorielle" dans QGis, en précisant la source des tuiles et l'URL du style :

* URL = `{{ urls.public.tms }}/1.0.0/pays_ecoregions/{z}/{x}/{y}.pbf`
* URL du style = `{{ urls.annexes }}/{technical_name}/styles/mapbox/pays_ecoregions.json`

![Définition d'une source "Tulie vectorielle"](/img/guides-developpeur/vecteur/alimentation-diffusion/qgis_tms_definition.png)

En zoomant en dessous du niveau 5, on voit bien nos regions écologiques et les limites des payes, avec le style mis en ligne.

![Visualisation des données du tutoriel](/img/guides-developpeur/vecteur/alimentation-diffusion/qgis_tms_visualisation.png)
