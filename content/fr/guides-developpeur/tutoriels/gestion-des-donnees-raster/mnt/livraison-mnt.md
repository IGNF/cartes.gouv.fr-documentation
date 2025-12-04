---
title: Téléversement des données
eleventyNavigation:
    key: Téléversement des données
    parent: Gestion de données MNT
    order: 1
    nav: guides-developpeur
summary:
    visible: true
    depth: 2
---

{% from "components/component.njk" import component with context %}

## Livraison des données

La livraison est une entité qui permet de déposer un ensemble de fichiers de données au sein de l'entrepôt. Une livraison et son contenu seront toujours utilisés comme un tout.

La livraison n'a qu'un rôle temporaire : elle existe uniquement le temps que les données soient transformées et stockées dans leur format pérenne sur la plateforme. Les fichiers déposés ne sont pas ceux utilisés par les services de diffusion.

### Déclarer la livraison

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads
```

```json
{
    "description": "Dalle kilométrique de MNT 50 cm issue du LidarHD",
    "name": "Dalle MNT LidarHD",
    "type": "RASTER",
    "srs": "EPSG:2154"
}
```

```json
{
    "name": "Dalle MNT LidarHD",
    "description": "Dalle kilométrique de MNT 50 cm issue du LidarHD",
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
    "_id": "{upload MNT}",
    "type_infos": {}
}
```

???
<br>

### Téléverser un fichier

Les formats de fichier raster gérés pour du MNT sont :

- GeoTIFF
- TIFF + TFW

{{ component("download", {
    title: "[GeoTIFF] LHD_FXX_0932_6453_MNT_0M50_LAMB93_IGN69.tif",
    href: "/data/tutoriels/raster/mnt/LHD_FXX_0932_6453_MNT_0M50_LAMB93_IGN69.tif",
    detail: "TIFF - 15.3 Mo"
}) }}

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload MNT}/data?path=data/LHD_FXX_0932_6453_MNT_0M50_LAMB93_IGN69.tif"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload MNT}/data?path=data/LHD_FXX_0932_6453_MNT_0M50_LAMB93_IGN69.tif
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<LHD_FXX_0932_6453_MNT_0M50_LAMB93_IGN69.tif>`"]
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
        "size": 16012500,
        "children": [
            {
                "type": "FILE",
                "name": "LHD_FXX_0932_6453_MNT_0M50_LAMB93_IGN69.tif",
                "size": 16012500
            }
        ]
    }
]
```

???
<br>

## Terminer la livraison

Terminer la livraison va consister à retirer les droits en écriture sur les données déposées afin que l'on puisse le traiter sans conflit. Des vérifications vont s'exécuter, lire les données livrées et détecter d'éventuels problèmes qui auraient mis en échec les traitements à suivre.

### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload MNT}/close"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload MNT}/close
```

???
<br>

### Consultation des vérifications sur ma livraison

Plusieurs vérifications peuvent tourner sur une même livraison, celles-ci ne faisant que lire les données déposées.

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload MNT}/checks"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload MNT}/checks
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

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload MNT}/checks"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload MNT}/checks
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
