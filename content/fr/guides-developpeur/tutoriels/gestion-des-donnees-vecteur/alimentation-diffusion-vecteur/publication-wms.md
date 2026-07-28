---
title: Configuration de la diffusion de données vecteur en WMS
eleventyNavigation:
    key: Configuration de la diffusion de données vecteur en WMS
    order: 5
summary:
    visible: true
    depth: 3
tertiaryTitle: WMS
---

### Configuration de la diffusion

Contrairement au WFS, une configuration WMS va définir une seule couche finale. Il est possible d’utiliser plusieurs tables, mais seul l’agrégat sera consultable, avec les styles définis.

La création de la configuration WMS va permettre de vérifier de nombreuses informations :
- nom de couche déjà pris (il doit y avoir unicité sur toutes les configurations WMS Vecteur de la plateforme)
- table absente de la donnée stockée
- style ou FTL exploitant des attributs absents de la table utilisée

<br>

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```
??? Corps de requête JSON
```json
{
    "type": "WMS-VECTOR",
    "name": "Écorégions et frontières des pays",
    "layer_name": "ecoregions_tutoriel",
    "type_infos": {
        "title": "Mes écorégions",
        "abstract": "Grandes régions naturelles mondiales",
        "keywords": ["Tutoriel", "Données mondiales"],
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
                        "name": "pays",
                        "style": "{sld pays}",
                        "ftl": "{ftl pays}"
                    },
                    {
                        "name": "ecoregions",
                        "style": "{sld ecoregions}",
                        "ftl": "{ftl ecoregions}"
                    }
                ],
                "stored_data": "{stored data}"
            }
        ]
    }
}
```
???
??? Plus d'aide sur la configuration WMS-V
- Description des paramètres en entrée :
    - **_type_** : La valeur est contrainte par une liste de valeur définie à tout moment dans le swagger. "WMS-V" pour une publication WMS à partir de données vecteur. La définition de cette valeur est sensible à la casse.

    - **_name_** : Permet de nommer cette configuration. **Cette information n'est lisible que par un autre utilisateur membre de cet entrepôt, pas par l'utilisateur final. Vous êtes donc invité à renseigner ici des informations parlantes pour  vous - producteur de donnée.** Cette information est modifiable après coup.

    - **_layer_name_** : Définit le nom technique par lequel le flux sera rendu disponible au sein du webservice. **Cette information est visible de l'utilisateur final**

    - **_type_infos_** : L'essentiel des spécificités de la configuration liées à vos données est à retrouver ici : 

        - **_title_** : C'est le titre en texte libre (accents, espaces, minuscules et majuscules autorisés) de votre service web. **Cette information est visible de l'utilisateur final**

        - **_abstract_** : Présente une courte description informative en toutes lettre de la couche publiée (ou du lot de couche publié). **Cette information est visible de l'utilisateur final**

        - **_keywords_** : Il s'agit d'une liste de mots clés, chaque mot ou expression clé étant placée entre doubles quotes, pour permettre à un utilisateur de retrouver plus facilement une donnée. **Cette information est visible de l'utilisateur final**

        - **_bbox_** : Permet de forcer une bbox lors de la publication. Les valeurs de coordonnées sont systématiquement à renseigner en EPSG:4326. 
        :::info
        L'élément "bbox" est optionnel, s'il n'est pas mentionné dans la configuration, le système calcule automatiquement l'emprise du service publié à partir de l'emprise de la stored_data renseignée plus bas.
        :::

        - **_used_data_** : Permet de définir, au sein d'une stored_data placée comme dernier paramètre de l'élément, les couches de données qui seront publiées. ainsi une offre WFS peut permettre de publier plusieurs couches de données unitaires :

            - **_relations_** : Il s'agit de la liste des couches à publier. Pour chacune on retrouve la possibilité de définir 4 éléments :

                - **name_** :  C'est le nom technique de la couche tel qu'il est défini dans la stored_data.

                - **_sld_** : C'est l'identifiant entrepôt (_id) du fichier de style sld chargé à l'étape précédente. **Cette information est optionnelle**. Si un tel fichier n'est mentionné, la couche sera rendue en bleu, style par défaut, sans que l'utilisateur final puisse influer sur le rendu.

                - **_ftl_** : C'est l'identifiant entrepôt (_id) du fichier de présentation des attributs ftl chargé à l'étape précédente.**Cette information est optionnelle**. Si un tel fichier n'est mentionné, l'ensemble des attributs est présenté par l'opération getFeatureInfo du WMS.
 
            - **_stored_data_** : Il s'agit ici de l'identifiant entrepôt de la stored_data qui va être publiée
???
????
<br>

:::warning
Une configuration WMS-VECTOR donnera une unique couche. Même si elle utilise plusieurs tables, ces dernières ne seront pas consultables individuellement en WMS. Si c’est votre besoin, faites une configuration (et donc une couche) par table.

Dans le cas où vous souhaitez bien déclarer plusieurs table dans votre WMS, pense zà régler correctement l'ordre des couches dans l'élément json "used_data"/"relations" : La première couche lisible sera au dessus, la dernière tou en dessous.
:::

### Envoi sur les services de diffusion

Comme pour le WFS, seule la création d’une offre sur un point d’accès (publication) permet d’envoyer les informations de configuration aux serveurs de diffusion.

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

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wms}/offerings"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wms}/offerings
```
??? Corps de requête JSON
```json
{
    "endpoint": "{{ ids.endpoints.open.wmsv }}",
    "open": true
}
```
???
??? Plus d'aide sur la configuration de la publication

L'exemple ci-dessus présente une publication en mode opendata.

Si vous choisissez de publier en mode privé, le corps de requête sera : 

```json
{
    "endpoint": "{{ ids.endpoints.private.wmsv }}",
    "open": false
}
```
Pour accéder à une donnée publiée en privé, référez vous au [tutoriel sur le contrôle des accès](https://cartes.gouv.fr/aide/fr/guides-developpeur/tutoriels/controle-des-acces/service-de-diffusion/)

???
????
<br>

On peut vérifier la présence de notre couche `ecoregions_tutoriel` dans le [GetCapabilities du service]({{ urls.public.wmsv }}?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0).
