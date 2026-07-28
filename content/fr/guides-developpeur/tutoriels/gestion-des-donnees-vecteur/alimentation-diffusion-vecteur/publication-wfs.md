---
title: Configuration de la diffusion de données vecteur en WFS
eleventyNavigation:
    key: Configuration de la diffusion de données vecteur en WFS
    order: 3
summary:
    visible: true
    depth: 3
tertiaryTitle: WFS
---

### Configuration de la diffusion

La configuration centralise toutes les informations nécessaires à la diffusion de données sur les services. À ce moment, on va contrôler les paramètres et détecter les erreurs ou conflits potentiels :
- nom de couche déjà pris (il doit y avoir unicité sur toutes les configurations WFS de la plateforme)
- table absente de la donnée stockée

<br>

Dans le cas du WFS, une configuration va donner plusieurs couches finales, le `layer_name` défini va servir de préfixe au nom des tables. On aura dans notre exemple les couches WFS :
- `pays_ecoregions:regions_ecologiques`
- `pays_ecoregions:pays`

<br>

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```
??? Corps de requête JSON
```json
{
    "type": "WFS",
    "name": "Pays et écorégions",
    "layer_name": "pays_ecoregions",
    "type_infos": {
        "bbox": {
            "west": -175,
            "south": -75,
            "east": 175,
            "north": 85
        },
        "used_data": [
            {
                "relations": [
                    {
                        "native_name": "ecoregions",
                        "public_name": "regions_ecologiques",
                        "title": "Régions écologiques",
                        "keywords": ["Tutoriel", "Données mondiales"],
                        "abstract": "Grandes régions naturelles mondiales"
                    },
                    {
                        "native_name": "pays",
                        "title": "Pays du monde",
                        "keywords": ["Tutoriel", "Données mondiales"],
                        "abstract": "Pays du monde"
                    }
                ],
                "stored_data": "{stored data}"
            }
        ]
    }
}
```
???
??? Pour plus d'aide sur la création d'une configuration WFS
- Description des paramètres en entrée :
    - **_type_** : La valeur est contrainte par une liste de valeur définie à tout moment dans le swagger. "WFS" pour une publication WFS. La définition de cette valeur est sensible à la casse.

    - **_name_** : Permet de nommer cette configuration. **Cette information n'est lisible que par un autre utilisateur membre de cet entrepôt, pas par l'utilisateur final. Vous êtes donc invité à renseigner ici des informations parlantes pour  vous - producteur de donnée.** Cette information est modifiable après coup.

    - **_layer_name**_ : Définit le nom technique par lequel le flux sera rendu disponible au sein du webservice. **Cette information est visible de l'utilisateur final**

    - **_type_infos_** : L'essentiel des spécificités de la configuration liées à vos données est à retrouver ici : 

        - **_bbox_** : Permet de forcer une bbox lors de la publication. Les valeurs de coordonnées sont systématiquement à renseigner en EPSG:4326. 
        :::info
        L'élément "bbox" est optionnel, s'il n'est pas mentionné dans la configuration, le système calcule automatiquement l'emprise du service publié à partir de l'emprise de la stored_data renseignée plus bas.
        :::

        - **_used_data_** : Permet de définir, au sein d'une stored_data placée comme dernier paramètre de l'élément, les couches de données qui seront publiées. ainsi une offre WFS peut permettre de publier plusieurs couches de données unitaires :

            - **_relations_** : Il s'agit de la liste des couches à publier. Pour chacune on retrouve la possibilité de définir 4 éléments :

                - **_native_name_** :  C'est le nom technique de la couche tel qu'il est défini dans la stored_data. **Si le public name n'est pas défini, cette information est visible de l'utilisateur final**

                - **_public_name_** : C'est le nom technique (donc sans espace, accent ou autre caractère spécial) sous lequel vous voulez publier la couche.  **Cette information est visible de l'utilisateur final**

                - **_keywords_** : Il s'agit d'une liste de mots clés, chaque mot ou expression clé étant placée entre doubles quotes, pour permettre à un utilisateur de retrouver plus facilement une donnée. **Cette information est visible de l'utilisateur final**

                - **_abstract_** : Présente une courte description informative en toutes lettre de la couche publiée. **Cette information est visible de l'utilisateur final**
            
            - **_stored_data_** : Il s'agit ici de l'identifiant entrepôt de la stored_data qui va être publiée
???
????
<br>

Si on ne précise pas de `public_name`, c’est le nom natif de stockage qui est utilisé.

### Envoi sur les services de diffusion

À ce stade, aucune information n’a été envoyée aux serveurs GeoServer assurant la diffusion. Cette synchronisation de la configuration sur les serveurs de diffusion, représentés par le point d’accès, se fait via la création d’une offre : la publication. Elle matérialise la présence d’une configuration sur un point d’accès.

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
??? Plus d'aide sur le choix de son point de diffusion

Cette étape est l'étape clé pour décider si le flux que vous vous apprêtez à publier va être publié en opendata ou au contraire seulement aux utilisateurs accrédités. Dans l'écosystème Géoplateforme on appelle ce dernier mode, le mode privé.

Si vous souhaitez publier en opendata, vous allez chercher, dans la réponse si dessus, un endpoint du type de la configuration créée (pour le tutoriel, WFS) dont l'**élément "open" est à true**.

Si vous souhaitez publier en mode **privé**, vous allez chercher, dans la réponse si dessus, un endpoint du type de la configuration créée (pour le tutoriel, WFS) dont l'**élément "open" est à false**.

Le tutoriel est déroulé en mode opendata. Pour accéder à une donnée publiée en privé, référez vous au [tutoriel sur le contrôle des accès](https://cartes.gouv.fr/aide/fr/guides-developpeur/tutoriels/controle-des-acces/service-de-diffusion/)


???
????
<br>

#### Publication

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wfs}/offerings"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wfs}/offerings
```
??? Corps de requête JSON
```json
{
    "endpoint": "{{ ids.endpoints.open.wfs }}",
    "open": true
}
```
???
??? Plus d'aide sur la configuration de la publication

L'exemple ci-dessus présente une publication en mode opendata.

Si vous choisissez de publier en mode privé, le corps de requête sera : 

```json
{
    "endpoint": "{{ ids.endpoints.private.wfs }}",
    "open": false
}
```
Pour accéder à une donnée publiée en privé, référez vous au [tutoriel sur le contrôle des accès](https://cartes.gouv.fr/aide/fr/guides-developpeur/tutoriels/controle-des-acces/service-de-diffusion/)

???
????
<br>

On peut vérifier la présence de nos couches `pays_ecoregions:regions_ecologiques` et `pays_ecoregions:pays` dans le [GetCapabilities du service]({{ urls.public.wfs }}?REQUEST=GetCapabilities&SERVICE=WFS&VERSION=2.0.0).

On peut également récupérer nos données dans QGIS. Pour les régions écologiques, le service se limite à 1000 objets, ils ne seront donc pas tous téléchargés en une fois.

![Visualisation des données du tutoriel](/img/guides-developpeur/vecteur/alimentation-diffusion/donnees_wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}