---
title: Publication sur le service d'altimétrie
mermaid: true
eleventyNavigation:
    key: Publication sur le service d'altimétrie
    parent: Gestion de données MNT
    order: 4
    nav: guides-developpeur
summary:
    visible: true
    depth: 2
---

{% from "components/component.njk" import component with context %}

La pyramide générée va être également utilisable par le service d'altimétrie. Ce dernier permet de récupérer les altitudes en un point, ainsi que demander un profil altimétrique. Nous allons ici utiliser la donnée MNT ainsi que le MNS.

## Configuration de la diffusion

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```

```json
{
    "type": "ALTIMETRY",
    "name": "LidarHD : MNT et MNS",
    "layer_name": "lidarhd_test",
    "type_infos": {
        "title": "LidarHD : MNT et MNS",
        "abstract": "LidarHD : MNT et MNS, à 50 cm",
        "keywords": ["LidarHD", "MNT", "MNS"],
        "used_data": [
            {
                "title": "MNT à 50cm, issu du Lidar HD",
                "stored_data": "{stored data MNT}",
                "source": {
                    "value": "Lidar HD"
                },
                "accuracy": {
                    "value": "Moins de 1m"
                }
            },
            {
                "title": "MNS à 50cm, issu du Lidar HD",
                "stored_data": "{stored data MNS}",
                "source": {
                    "value": "Lidar HD"
                },
                "accuracy": {
                    "value": "Moins de 1m"
                }
            }
        ]
    }
}
```

???
<br>

Les informations pour la source et la précision de la donnée peuvent être définies de manière statiques, comme ici, ou bien s'appuyer sur des pyramides raster (1 canal entier). On précisera alors la correspondance entre la valeur entière du pixel et l'intitulé de l'information.

## Envoi sur les services de diffusion

### Consultation des points de diffusion disponibles

Ce sont les points d'accès de type `ALTIMETRY` qui nous intéressent ici.

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

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration altimétrie}/offerings"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration altimétrie}/offerings
```

```json
{
    "endpoint": "{{ ids.endpoints.open.alti }}",
    "open": true
}
```

???
<br>

On peut vérifier la présence de notre ressource couche `lidarhd_test` dans le [getCapabilities du service]({{ urls.public.alti }}/resources). Voici un exemple de demande d'altitude en deux points :

??? GET "{{ urls.open.alti }}/calcul/alti/rest/elevation.json"

```title="Contenu"
{{ urls.open.alti }}/calcul/alti/rest/elevation.json
```

    {{ component("table", {
        headers: ["Paramètres de requête"],
        data: [
            ["resource = `lidarhd_test`"],
            ["lon = `5.96|5.961`"],
            ["lat = `45.13|45.131`"],
            ["measures = `true`"]
        ]
    }) }}

```json
{
    "elevations": [
        {
            "lon": 5.96,
            "lat": 45.13,
            "z": 1995.53,
            "acc": "Moins de 1m",
            "measures": [
                {
                    "z": 1995.53,
                    "source_name": "Lidar HD",
                    "source_measure": "Fixed value",
                    "acc": "Moins de 1m",
                    "title": "MNS \u00e0 50cm, issu du Lidar HD"
                },
                {
                    "z": 1989.14,
                    "source_name": "Lidar HD",
                    "source_measure": "Fixed value",
                    "acc": "Moins de 1m",
                    "title": "MNT \u00e0 50cm, issu du Lidar HD"
                }
            ]
        },
        {
            "lon": 5.961,
            "lat": 45.131,
            "z": 2098.24,
            "acc": "Moins de 1m",
            "measures": [
                {
                    "z": 2098.24,
                    "source_name": "Lidar HD",
                    "source_measure": "Fixed value",
                    "acc": "Moins de 1m",
                    "title": "MNT \u00e0 50cm, issu du Lidar HD"
                },
                {
                    "z": 2098.24,
                    "source_name": "Lidar HD",
                    "source_measure": "Fixed value",
                    "acc": "Moins de 1m",
                    "title": "MNS \u00e0 50cm, issu du Lidar HD"
                }
            ]
        }
    ]
}
```

???
<br>
