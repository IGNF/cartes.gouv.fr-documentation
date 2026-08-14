---
title: Publication en WMTS/TMS
eleventyNavigation:
    key: Publication en WMTS/TMS
    order: 3
summary:
    visible: true
    depth: 3
tertiaryTitle: WMTS/TMS
---

### Configuration de la diffusion tuilée

La configuration centralise toutes les informations nécessaires à la diffusion de données sur les services. On va contrôler à ce moment les paramètres et détecter les erreurs ou conflits potentiels :
- Nom de couche déjà pris (il doit y avoir unicité sur toutes les configurations WMTS/TMS de la plateforme)
- Niveau absent de la donnée stockée

<br>

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```
??? Corps de requête JSON
```json
{
    "type": "WMTS-TMS",
    "name": "SCAN 1000 Corse",
    "layer_name": "scan1000",
    "metadata": [
        {
            "format": "application/xml",
            "url": "https://data.geopf.fr/csw?REQUEST=GetRecordById&SERVICE=CSW&VERSION=2.0.2&OUTPUTSCHEMA=http://standards.iso.org/iso/19115/-3/mdb/2.0&elementSetName=full&ID=IGNF_SCAN-1000",
            "type": "ISO19115:2003"
        }
    ],
    "type_infos": {
        "title": "SCAN 1000 Corse",
        "abstract": "Données SCAN 1000 sur la Corse",
        "keywords": ["Tutoriel", "Raster"],
        "used_data": [
            {
                "bottom_level": "10",
                "top_level": "0",
                "stored_data": "{stored data}"
            }
        ],
        "getfeatureinfo": {
            "stored_data": true
        }
    }
}
```
???
??? Pour plus d’aide sur la création d’une configuration WMTS
Description des paramètres en entrée :
- `type` : La valeur est contrainte par une liste de valeurs définies à tout moment dans le <span lang="en">_swagger_</span>. `WMTS-TMS` pour une publication WMTS. La définition de cette valeur est sensible à la casse.
- `name` : Permet de nommer cette configuration. **Cette information n’est lisible que par un autre utilisateur membre de cet entrepôt, pas par l’utilisateur final. Vous êtes donc invité à renseigner ici des informations parlantes pour vous - producteur de donnée.** Cette information est modifiable après coup.
- `layer_name` : Définit le nom technique par lequel le flux sera rendu disponible au sein du webservice. **Cette information est visible de l’utilisateur final.** Cette valeur est l’objet d’un contrôle d’unicité sur l’ensemble de la plateforme.
- `metadata` : Lien vers une fiche de métadonnée associée déjà publiée sur la Géoplateforme. Voir le tutoriel « [Gestion des métadonnées](../../../gestion-des-donnees-complementaires/gestion-des-metadonnees/) ».
- `type_infos` : L’essentiel des spécificités de la configuration liées à vos données est à retrouver ici :
    - `title` : Permet de définir un « joli libellé » (espaces, accents et caractères spéciaux autorisés) permettant à l’utilisateur de découvrir la donnée. **Cette information est visible de l’utilisateur final.**
    - `abstract` : Présente une courte description informative en toutes lettres de la couche publiée (ou du lot de couches publié). **Cette information est visible de l’utilisateur final.**
    - `keywords` : Il s’agit d’une liste de mots clés, chaque mot ou expression clé étant placée entre doubles quotes, pour permettre à un utilisateur de retrouver plus facilement une donnée. **Cette information est visible de l’utilisateur final.**
    - `bbox` : Permet de forcer une `bbox` lors de la publication. Les valeurs de coordonnées sont systématiquement à renseigner en EPSG:4326.
        :::info
        L’élément `bbox` est optionnel, s’il n’est pas mentionné dans la configuration, le système calcule automatiquement l’emprise du service publié à partir de l’emprise de la `stored_data` renseignée plus bas.
        :::
    - `used_data` : Permet de définir, au sein d’une `stored_data` placée comme dernier paramètre de l’élément, les couches de données qui seront publiées. Ainsi une offre WMTS peut permettre de publier plusieurs couches raster de données unitaires pour publier des données de résolution différentes s’adaptant à l’échelle de visualisation. Par exemple : SCAN1000 en vue France et Régionale puis SCAN100 en vue départementale et locale :
        - `bottom_level` : Il s’agit du niveau de tuilage le plus détaillé (parmi ceux disponibles dans la `stored_data` associée) qui sera disponible pour l’utilisateur final dans le service diffusé.
        - `top_level` : Il s’agit du niveau de tuilage le plus généralisé (parmi ceux disponibles dans la `stored_data` associée) qui sera disponible pour l’utilisateur final dans le service diffusé.
        - `stored_data` : Il s’agit ici de l’identifiant entrepôt de la `stored_data` qui va être publiée.
    - `getfeatureinfo` : Permet de rendre le WMTS interrogeable côté utilisateur :
        - `"stored_data": true` : Il s’agit du réglage par défaut qui permettra à l’utilisateur final d’avoir accès à la valeur du pixel interrogé (valeur numérique de la bande rouge, verte et bleue).
        - `"server_url": "https://mon_url"` : Dans le cas où la pyramide diffusée en WMTS est en réalité issue d’une donnée vecteur ou associable à une donnée vecteur (de l’occupation du sol par exemple), il peut être intéressant de donner accès aux attributs de cette donnée vecteur via une URL de flux WMS-V par exemple. Dans le cas d’un flux porté par la Géoplateforme `mon_url` sera de la forme `https://data.geopf.fr/wms-v/ows?service=wms&version=1.3.0&QUERY_LAYERS={layer_name_wms_v}&LAYERS={layer_name_wms_v}`.
???
????
<br>

Si les niveaux d’utilisation ne sont pas cohérents avec ce que contient la pyramide, une erreur est retournée.

On précise ici une métadonnée qui apparaîtra dans le `GetCapabilities` du service. On configure également le `GetFeatureInfo` : il retournera ici la valeur du pixel dans la donnée.

### Envoi sur les services de diffusion

À ce stade, aucune information n’a été envoyée aux serveurs ROK4 assurant la diffusion. Cette synchronisation de la configuration sur les serveurs de diffusion, représentés par le point d’accès, se fait via la création d’une offre, la publication. Elle matérialise la présence d’une configuration sur un point d’accès.

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

Si vous souhaitez publier en <span lang="en">_open data_</span>, vous allez chercher, dans la réponse ci-dessus, un <span lang="en">_endpoint_</span> du type de la configuration créée (pour le tutoriel, `WMTS-TMS`) dont **l’élément `open` est à `true`**.

Si vous souhaitez publier en mode **privé**, vous allez chercher, dans la réponse ci-dessus, un <span lang="en">_endpoint_</span> du type de la configuration créée (pour le tutoriel, `WMTS-TMS`) dont **l’élément `open` est à `false`**.

Le tutoriel est déroulé en mode <span lang="en">_open data_</span>. Pour accéder à une donnée publiée en privé, référez-vous au [tutoriel sur le contrôle des accès](../../../controle-des-acces/service-de-diffusion/).
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
Pour accéder à une donnée publiée en privé, référez-vous au [tutoriel sur le contrôle des accès](../../../controle-des-acces/service-de-diffusion/)
???
????
<br>

On peut vérifier la présence de nos couches `scan1000` dans :
- le [`GetCapabilities` du service WMTS]({{ urls.public.wmts }}?REQUEST=GetCapabilities&SERVICE=WMTS&VERSION=1.0.0)
- le [`GetCapabilities` du service TMS]({{ urls.public.tms }}/1.0.0)

<br>

On peut visualiser nos données dans QGIS en WMTS.

![Visualisation des données du tutoriel](/img/guides-developpeur/raster/alimentation-diffusion/donnees_wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}