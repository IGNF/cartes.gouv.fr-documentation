---
title: Livraison des données archive
eleventyNavigation:
    key: Livraison des données archive
    order: 1
summary:
    visible: true
    depth: 3
tertiaryTitle: Livraison
---

{% from "components/component.njk" import component with context %}

### Livraison des données

La livraison est une entité qui permet de déposer un ensemble de fichiers de données au sein de l’entrepôt. Une livraison et son contenu seront toujours utilisés comme un tout.

La livraison n’a qu’un rôle temporaire, le temps que les données soient transformées et stockées dans leur format pérenne sur la plateforme. Les fichiers déposés ne sont pas ceux utilisés par les services de diffusion.

#### Déclarer la livraison

Le système de coordonnées ne sera jamais utilisé dans des calculs. Il sera simplement une information.

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"

```plain
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

#### Téléverser un fichier

Il n’y a aucune limitation aux formats de fichiers qui seront pris en charge. La seule contrainte est sur le nommage : on ne peut pas avoir deux fichiers qui ont le même nom à des endroits différents de l’arborescence de la livraison. La vérification sortirait en erreur. Les fichiers étant stockés de manière pérenne à plat, on ne veut pas de conflit sur le nommage.

📄 `<DEPARTEMENT.cpg>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.cpg"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.cpg
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;DEPARTEMENT.cpg&gt;"]
    ]
}) }}

???

<br>

📄 `<DEPARTEMENT.dbf>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.dbf"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.dbf
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;DEPARTEMENT.dbf&gt;"]
    ]
}) }}

???

<br>

📄 `<DEPARTEMENT.prj>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.prj"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.prj
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;DEPARTEMENT.prj&gt;"]
    ]
}) }}

???

<br>

📄 `<DEPARTEMENT.shp>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.shp"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.shp
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;DEPARTEMENT.shp&gt;"]
    ]
}) }}

???

<br>

📄 `<DEPARTEMENT.shx>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.shx"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/DEPARTEMENT.shx
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;DEPARTEMENT.shx&gt;"]
    ]
}) }}

???

<br>

📄 `<LIMITE_DEPARTEMENT.cpg>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.cpg"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.cpg
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;LIMITE_DEPARTEMENT.cpg&gt;"]
    ]
}) }}

???

<br>

📄 `<LIMITE_DEPARTEMENT.dbf>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.dbf"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.dbf
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;LIMITE_DEPARTEMENT.dbf&gt;"]
    ]
}) }}

???

<br>

📄 `<LIMITE_DEPARTEMENT.prj>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.prj"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.prj
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;LIMITE_DEPARTEMENT.prj&gt;"]
    ]
}) }}

???

<br>

📄 `<LIMITE_DEPARTEMENT.shp>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.shp"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.shp
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;LIMITE_DEPARTEMENT.shp&gt;"]
    ]
}) }}

???

<br>

📄 `<LIMITE_DEPARTEMENT.shx>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.shx"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/LIMITE_DEPARTEMENT.shx
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;LIMITE_DEPARTEMENT.shx&gt;"]
    ]
}) }}

???

<br>

#### Contrôler le contenu

Afin de vérifier que tous les fichiers ont bien été déposés, ainsi que leur éventuelle arborescence :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/tree"

```plain
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

### Terminer la livraison

Terminer la livraison va consister à retirer les droits en écriture sur les données déposées afin qu’elles puissent être traitées sans conflit. Des vérifications vont s’exécuter, lire les données livrées et détecter d’éventuels problèmes qui auraient mis en échec les traitements à suivre.

#### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close
```

???

<br>

#### Consultation des vérifications sur ma livraison

Plusieurs vérifications peuvent tourner sur une même livraison, celles-ci ne faisant que lire les données déposées.

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"

```plain
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

Lorsque toutes les vérifications seront passées, la livraison passera en statut `CLOSED` et la réponse à l’appel précédent sera :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"

```plain
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