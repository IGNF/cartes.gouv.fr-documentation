---
title: Publication en WMTS/TMS
mermaid: true
eleventyNavigation:
    key: Publication en WMTS/TMS
    parent: Alimentation et diffusion simple
    order: 3
    nav: guides-developpeur
---

## Configuration de la diffusion tuilée

La configuration centralise toutes les informations nécessaire à la diffusion de données sur les services. On va contrôler à ce moment les paramètres et détecter les erreurs ou conflits potentiels :

* nom de couche déjà pris (il doit y avoir unicité sur toutes les configurations WMTS-TMS de la plateforme)
* Niveau absent de la donnée stockée

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```

```json
{
    "type": "WMTS-TMS",
    "name": "SCAN 1000 Corse",
    "layer_name": "scan1000",
    "metadata": [
        {
            "format": "application/xml",
            "url": "https://geoservices.ign.fr/sites/default/files/2021-07/IGNF_SCAN1000r_2-1.xml",
            "type": "ISO19115:2003"
        }
    ],
    "type_infos": {
        "title": "SCAN 1000 Corse",
        "abstract": "Données SCAN 1000 sur la Corse",
        "keywords": [
            "Tutoriel", "Raster"
        ],
        "used_data": [
            {
                "bottom_level": "10",
                "top_level": "0",
                "stored_data": "{stored data}"
            }
        ]
    },
    "getfeatureinfo": {
        "stored_data": true
    }
}
```
???
<br>

Si les niveaux d'utilisation ne sont pas cohérent avec ce que contient la pyramide, une erreur est retournée.

On précise ici une métadonnée qui apparaîtra dans le GetCapabilities du service. On configure également le GetFeatureInfo : il retournera ici la valeur du pixel dans la donnée.

## Envoi sur les services de diffusion

À ce stade, aucune information n'a été envoyée aux serveurs ROK4 assurant la diffusion. Cette synchronisation de la configuration sur les serveurs de diffusion, représentés par le point d'accès, se fait via la création d'une offre, la publication. Elle matérialise la présence d'une configuration sur un point d'accès.

### Consultation des points de diffusion disponibles

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}
```

```json
{{ "public/data/tutoriels/alimentation-diffusion-simple/globales/production/endpoints.json" | readJSON | safe }}
```
???
<br>


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
<br>

On peut vérifier la présence de nos couches `scan1000` dans :
- le [getCapabilities du service WMTS]({{ urls.public.wmts }}?REQUEST=GetCapabilities&SERVICE=WMTS&VERSION=1.0.0)
- le [getCapabilities du service TMS]({{ urls.public.tms }}/1.0.0)

On peut visualiser nos données dans QGis en WMTS.

![Visualisation des données du tutoriel](/img/guides-developpeur/raster/alimentation-diffusion/donnees_wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}