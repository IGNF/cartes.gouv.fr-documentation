---
title: Livraison des données archives
mermaid: true
eleventyNavigation:
    key: Livraison des données archives
    parent: Alimentation et diffusion simple
    order: 1
    nav: guides-developpeur
---

{% from "components/component.njk" import component with context %}

## Livrer les données

La livraison est une entité qui permet de déposer un ensemble de fichiers de données au sein de l'entrepôt. Une livraison et son contenu seront toujours utilisés comme un tout.

La livraison n'a qu'un rôle temporaire, le temps que les données soient transformées et stockées dans leur format pérenne sur la plateforme. Les fichiers déposés ne sont pas ceux utilisés par les services de diffusion.

### Déclarer la livraison

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"
``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads 
```

```json
{
    "description": "Données mondiales : pays et éco-régions",
    "name": "Données mondiales",
    "type": "VECTOR",
    "srs": "EPSG:4326"
}
```

```json
{
    "name": "Données mondiales",
    "description": "Données mondiales : pays et éco-régions",
    "type": "VECTOR",
    "status": "OPEN",
    "srs": "EPSG:4326",
    "contact": "contact@ign.fr",
    "size": 0,
    "last_event": {
        "title": "Création",
        "date": "2023-05-10T14:42:29.004734134",
        "initiator": {
            "last_name": "Lopper",
            "first_name": "Dave",
            "_id": "{user}"
        }
    },
    "_id": "{upload}"
}
```
???
### Téléverser un fichier

Les formats de fichier vecteur gérés sont :

* Geopackage
* GeoJSON
* Shapefile
* CSV : 
    * si la géométrie est dans un colonne, cette dernière doit avoir comme nom `json`, `geom`, `the_geom`, `wkb` ou `wkt`
    * si la donnée est ponctuelle et que les coordonnées sont dans deux colonnes, elles doivent avoir comme nom :
        * `lon`, `x`, `longitude`
        * `lat`, `y`, `latitude`
* SQL. Les instructions autorisées sont les suivantes, sans préciser de nom de schéma :
    * CREATE TABLE
    * CREATE VIEW
    * CREATE INDEX
    * CREATE SEQUENCE
    * ALTER TABLE
    * ALTER SEQUENCE

:material-file: `<monde.gpkg>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/monde.gpkg"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/monde.gpkg
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<monde.gpkg>`"]
    ]
}) }}
???

### Contrôler le contenu

Afin de vérifier que tous les fichiers ont bien été déposés et leur éventuelle arborescence :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/tree"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/tree
```

```json
[
    {
        "type": "DIRECTORY",
        "name": "data",
        "size": 11153408,
        "children": [
            {
                "type": "FILE",
                "name": "monde.gpkg",
                "size": 11153408
            }
        ]
    }
]
```
???

## Terminer la livraison

Terminer la livraison va consister à retirer les droits en écriture sur les données déposées afin qu'elles puissent être traitées sans conflit. Des vérifications vont s'exécuter, lire les données livrées et détecter d'éventuels problèmes qui auraient mis en échec les traitements à suivre.

### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close"
``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close
```
???
### Consultation des vérifications sur ma livraison

Plusieurs vérifications peuvent tourner sur une même livraison, celles ci ne faisant que lire les données déposées.

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks
```

```json
{
    "asked": [
        {
            "check": {
                "name": "Vérification vecteur",
                "_id": "{{ ids.checks.vector }}"
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

Lorsque toutes les vérifications seront passées, la livraison passera en statut `CLOSED` et la réponse à l'appel précédent sera :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks
```

```json
{
    "asked": [],
    "in_progress": [],
    "passed": [
        {
            "check": {
                "name": "Vérification vecteur",
                "_id": "{{ ids.checks.vector }}"
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