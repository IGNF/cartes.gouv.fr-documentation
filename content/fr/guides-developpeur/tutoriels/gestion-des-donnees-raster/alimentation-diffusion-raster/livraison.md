---
title: Livraison des données raster
eleventyNavigation:
    key: Livraison des données raster
    order: 1
summary:
    visible: true
    depth: 2
---

{% from "components/component.njk" import component with context %}

## Livraison des données

La livraison est une entité qui permet de déposer un ensemble de fichiers de données au sein de l'entrepôt. Une livraison et son contenu seront toujours utilisés comme un tout.

La livraison n'a qu'un rôle temporaire, le temps que les données soient transformées et stockées dans leur format pérenne sur la plateforme. Les fichiers déposés ne sont pas ceux utilisés par les services de diffusion.

### Déclarer la livraison

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads
```

```json
{
    "description": "Données SCAN1000 sur la Corse",
    "name": "SCAN1000 - Corse",
    "type": "RASTER",
    "srs": "EPSG:2154"
}
```

```json
{
    "name": "SCAN1000 - Corse",
    "description": "Données SCAN1000 sur la Corse",
    "type": "RASTER",
    "status": "OPEN",
    "srs": "EPSG:2154",
    "contact": "contact@ign.fr",
    "size": 0,
    "last_event": {
        "title": "Création",
        "date": "2023-05-22T08:07:13.812601878",
        "initiator": {
            "_id": "{user}"
        }
    },
    "_id": "{upload}",
    "type_infos": {}
}
```

???
<br>

### Téléverser un fichier

Les formats de fichier raster gérés sont :

- GeoTIFF
- TIFF + TFW
- JPEG2000

📄 `<scan1000_corse.tif>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/scan1000_corse.tif"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/scan1000_corse.tif
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<scan1000_corse.tif>`"]
    ]
}) }}

???
<br>

📄 `<scan1000_corse.tfw>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/scan1000_corse.tfw"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/scan1000_corse.tfw
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<scan1000_corse.tfw>`"]
    ]
}) }}

???
<br>

### Contrôler le contenu

Afin de vérifier que tous les fichiers ont bien été déposés, et l'éventuelle arborescence :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/tree"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/tree
```

```json
[
    {
        "type": "DIRECTORY",
        "name": "data",
        "size": 6308587,
        "children": [
            {
                "type": "FILE",
                "name": "scan1000_corse.tfw",
                "size": 47
            },
            {
                "type": "FILE",
                "name": "scan1000_corse.tif",
                "size": 6308540
            }
        ]
    }
]
```

???
<br>

## Terminer la livraison

Terminer la livraison consiste à retirer les droits en écriture sur les données déposées afin que l'on puisse les traiter sans conflit. Des vérifications s'exécuteront, liront les données livrées et détecteront d'éventuels problèmes qui auraient pu mettre en échec les traitements suivants.

### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close
```

???
<br>

### Consultation des vérifications sur ma livraison

Plusieurs vérifications peuvent tourner sur une même livraison, celles-ci ne faisant que lire les données déposées.

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks
```

```json
{
    "asked": [
        {
            "check": {
                "name": "Vérification raster",
                "_id": "{{ ids.checks.raster }}"
            },
            "_id": "{execution}"
        },
        {
            "check": {
                "name": "Vérification standard",
                "_id": "{{ ids.checks.standard }}"
            },
            "_id": "{execution}"
        }
    ],
    "in_progress": [],
    "passed": [],
    "failed": []
}
```

???
<br>

Lorsque toutes les vérifications seront passées, la livraison passera en statut `CLOSED` et la réponse à l'appel précédent sera :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks
```

```json
{
    "asked": [],
    "in_progress": [],
    "passed": [
        {
            "check": {
                "name": "Vérification raster",
                "_id": "{{ ids.checks.raster }}"
            },
            "_id": "{execution}"
        },
        {
            "check": {
                "name": "Vérification standard",
                "_id": "{{ ids.checks.standard }}"
            },
            "_id": "{execution}"
        }
    ],
    "failed": []
}
```

???
<br>
