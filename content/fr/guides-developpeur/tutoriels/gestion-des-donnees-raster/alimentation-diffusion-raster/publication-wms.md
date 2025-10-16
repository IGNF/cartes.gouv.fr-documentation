---
title: Publication en WMS
mermaid: true
eleventyNavigation:
    key: Publication en WMS
    parent: Alimentation et diffusion simple raster
    order: 4
    nav: guides-developpeur
summary:
    visible: true
    depth: 2
---

## Configuration de la diffusion

La pyramide calculée va également pouvoir être diffusée en WMS

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```

```json
{
    "type": "WMS-RASTER",
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
        "keywords": ["Tutoriel", "Raster"],
        "interpolation": "NEAREST-NEIGHBOUR",
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

## Envoi sur les services de diffusion

Comme pour le WMTS-TMS, seule la création d'une offre sur un point d'accès (publication) permet d'envoyer les informations de configuration aux serveurs de diffusion.

### Consultation des points de diffusion disponibles

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}
```

```json
{{ "public/data/tutoriels/alimentation-diffusion-simple/globales/production/endpoints.json" | readJSON | safe }}
```

???
<br>

### Publication

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wms}/offerings"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wms}/offerings
```

```json
{
    "endpoint": "{{ ids.endpoints.open.wmsr }}",
    "open": true
}
```

???
<br>

On peut vérifier la présence de notre couche `scan1000` dans le [getCapabilities du service]({{ urls.public.wmsr }}?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0)
