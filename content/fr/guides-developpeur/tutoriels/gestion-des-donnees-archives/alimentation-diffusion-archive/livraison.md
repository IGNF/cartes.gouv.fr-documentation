---
title: Livraison des données archives
eleventyNavigation:
    key: Livraison des données archives
    parent: Alimentation et diffusion simple d'archives
    order: 1
    nav: guides-developpeur
summary:
    visible: true
    depth: 2
---

{% from "components/component.njk" import component with context %}

## Livraison des données

La livraison est une entité qui permet de déposer un ensemble de fichiers de données au sein de l'entrepôt. Une livraison et son contenu seront toujours utilisés comme un tout.

La livraison n'a qu'un rôle temporaire, le temps que les données soient transformées et stockées dans leur format pérenne sur la plateforme. Les fichiers déposés ne sont pas ceux utilisés par les services de diffusion.

### Déclarer la livraison

Le système de coordonnées ne sera jamais utilisé dans des calculs. Il sera simplement une information 

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads
```

```json
{
    "description": "Départements et limites départementales",
    "name": "Données départementales",
    "type": "ARCHIVE",
    "srs": "EPSG:2154"
}
```

```json
{
    "name": "Données départementales",
    "description": "Départements et limites départementales",
    "type": "ARCHIVE",
    "status": "OPEN",
    "srs": "EPSG:2154",
    "contact": "contact@ign.fr",
    "size": 0,
    "last_event": {
        "title": "Création",
        "date": "2023-07-03T14:01:15.108781764",
        "initiator": {
            "last_name": "Lopper",
            "first_name": "Dave",
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

Il n'y a aucune limitation aux formats de fichiers qui seront pris en charge. La seule contrainte est sur le nommage : on ne peut pas avoir deux fichiers qui ont le même nom à des endroits différents de l'arborescence de la livraison. La vérification sortirait en erreur. Les fichiers étant stockés de manière pérenne à plat, on ne veut pas de conflit sur le nommage.

📄 `<DEPARTEMENT.cpg>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.cpg"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.cpg
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<DEPARTEMENT.cpg>`"]
    ]
}) }}
???
<br>

📄 `<DEPARTEMENT.dbf>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.dbf"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.dbf
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<DEPARTEMENT.dbf>`"]
    ]
}) }}
???
<br>

📄 `<DEPARTEMENT.prj>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.prj"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.prj
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<DEPARTEMENT.prj>`"]
    ]
}) }}
???
<br>

📄 `<DEPARTEMENT.shp>`
??? request-post "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.shp"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.shp
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<DEPARTEMENT.shp>`"]
    ]
}) }}
???
<br>

📄 `<DEPARTEMENT.shx>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.shx"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.shx
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<DEPARTEMENT.shx>`"]
    ]
}) }}
???
<br>

📄 `<LIMITE_DEPARTEMENT.cpg>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.cpg"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.cpg
```
{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<LIMITE_DEPARTEMENT.cpg>`"]
    ]
}) }}
???
<br>

📄 `<LIMITE_DEPARTEMENT.dbf>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.dbf"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.dbf
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<LIMITE_DEPARTEMENT.dbf>`"]
    ]
}) }}
???
<br>

📄 `<LIMITE_DEPARTEMENT.prj>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.prj"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.prj
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<LIMITE_DEPARTEMENT.prj>`"]
    ]
}) }}
???
<br>

📄 `<LIMITE_DEPARTEMENT.shp>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.shp"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.shp
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<LIMITE_DEPARTEMENT.shp>`"]
    ]
}) }}

<br>

📄 `<LIMITE_DEPARTEMENT.shx>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.shx"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.shx
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<LIMITE_DEPARTEMENT.shx>`"]
    ]
}) }}
???
<br>

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
        "size": 7783564,
        "children": [
            {
                "type": "FILE",
                "name": "DEPARTEMENT.cpg",
                "size": 6
            },
            {
                "type": "FILE",
                "name": "DEPARTEMENT.dbf",
                "size": 17186
            },
            {
                "type": "FILE",
                "name": "DEPARTEMENT.prj",
                "size": 449
            },
            {
                "type": "FILE",
                "name": "DEPARTEMENT.shp",
                "size": 3125208
            },
            {
                "type": "FILE",
                "name": "DEPARTEMENT.shx",
                "size": 868
            },
            {
                "type": "FILE",
                "name": "LIMITE_DEPARTEMENT.cpg",
                "size": 6
            },
            {
                "type": "FILE",
                "name": "LIMITE_DEPARTEMENT.dbf",
                "size": 2039048
            },
            {
                "type": "FILE",
                "name": "LIMITE_DEPARTEMENT.prj",
                "size": 449
            },
            {
                "type": "FILE",
                "name": "LIMITE_DEPARTEMENT.shp",
                "size": 2527748
            },
            {
                "type": "FILE",
                "name": "LIMITE_DEPARTEMENT.shx",
                "size": 72596
            }
        ]
    }
]
```
???
<br>

## Terminer la livraison

Terminer la livraison va consister à retirer les droits en écriture sur les données déposées afin qu'elles puissent être traitées sans conflit. Des vérifications vont s'exécuter, lire les données livrées et détecter d'éventuels problèmes qui auraient mis en échec les traitements à suivre.

### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close
```
???
<br>

### Consultation des vérifications sur ma livraison

Plusieurs vérifications peuvent tourner sur une même livraison, celles-ci ne faisant que lire les données déposées.

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks
```

```json
{
    "asked": [],
    "in_progress": [
        {
            "check": {
                "name": "Vérification standard",
                "_id": "{{ ids.checks.standard }}"
            },
            "_id": "{execution}"
        },
        {
            "check": {
                "name": "Vérification archive",
                "_id": "{{ ids.checks.archive }}"
            },
            "_id": "{execution}"
        }
    ],
    "passed": [],
    "failed": []
}
```
???
<br>

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
                "name": "Vérification standard",
                "_id": "{{ ids.checks.standard }}"
            },
            "_id": "{execution}"
        },
        {
            "check": {
                "name": "Vérification archive",
                "_id": "{{ ids.checks.archive }}"
            },
            "_id": "{execution}"
        }
    ],
    "failed": []
}
```
???
