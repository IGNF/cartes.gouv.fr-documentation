---
title: Injection d'un deuxième lot de données
eleventyNavigation:
    key: Injection d'un deuxième lot de données
    parent: Alimentation par mise à jour vecteur
    order: 3
    nav: guides-developpeur
---

{% from "components/component.njk" import component with context %}


## Ajout du deuxième lot de données

### Déclarer la livraison

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads
```

```json
{
    "description": "Données sur le Doubs",
    "name": "Installations classées pour la protection de l'environnement",
    "type": "VECTOR",
    "srs": "EPSG:4326"
}
```


```json
{
    "description": "Données sur le Doubs",
    "name": "Installations classées pour la protection de l'environnement",
    "type": "VECTOR",
    "status": "OPEN",
    "srs": "EPSG:4326",
    "contact": "contact@ign.fr",
    "size": 0,
    "last_event": {
        "title": "Création",
        "date": "2023-05-10T14:57:29.004734134",
        "initiator": {
            "last_name": "Lopper",
            "first_name": "Dave",
            "_id": "{user}"
        }
    },
    "_id": "{upload injection 2}"
}
```
???
<br>

### Téléverser les fichiers CSV et CSVT

📄 `<installation.csv>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}/data?path=data/installation.csv"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}/data?path=data/installation.csv
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<installation.csv>`"]
    ]
}) }}

???
<br>

📄 `<installation.csvt>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}/data?path=data/installation.csvt"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}/data?path=data/installation.csvt
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<installation.csvt>`"]
    ]
}) }}

???
<br>

### Contrôler le contenu

Afin de vérifier que tous les fichiers ont bien été déposés, et l'éventuelle arborescence :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}/tree"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}/tree
```

```json
[
    {
        "type": "DIRECTORY",
        "name": "data",
        "size": 676441,
        "children": [
            {
                "type": "FILE",
                "name": "installation.csv",
                "size": 676357
            },
            {
                "type": "FILE",
                "name": "installation.csvt",
                "size": 84
            }
        ]
    }
]
```

???
<br>

## Finalisation de la livraison

### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}/close"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}/close
```

???
<br>

### Consultation des vérifications sur ma livraison

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}/checks"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}/checks
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
<br>

## Injection des données

### Configuration de l'exécution de traitement

On utilise à nouveau le traitement d'intégration de données vecteur.

:::warning Points d'attentions
    Pour la donnée en sortie, on ne précise pas un nom, mais l'identifiant de notre donnée stockée initialisée juste avant. On va donc modifier une donnée plutôt qu'en créer une nouvelle.
:::

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions
```

```json
{
    "processing": "{{ ids.processings['vector_to_db'] }}",
    "inputs": {
        "upload": [
            "{upload injection 2}"
        ]
    },
    "output": {
        "stored_data": {
            "id": "{stored data}"
        }
    }
}
```

```json
{
    "processing": {
        "name": "Intégration de données vecteur livrées en base",
        "_id": "{{ ids.processings['vector_to_db'] }}"
    },
    "status": "CREATED",
    "creation": "2023-05-24T16:35:24.113049487Z",
    "inputs": {
        "upload": [
            {
                "type": "VECTOR",
                "name": "Installations classées pour la protection de l'environnement",
                "status": "CLOSED",
                "srs": "EPSG:4326",
                "_id": "{upload injection 2}"
            }
        ],
        "stored_data": []
    },
    "output": {
        "stored_data": {
            "name": "Installations classées pour la protection de l'environnement",
            "type": "VECTOR-DB",
            "status": "GENERATED",
            "srs": "EPSG:4326",
            "_id": "{stored data}"
        }
    },
    "parameters": [],
    "_id": "{execution injection 2}"
}
```
???
<br>

### Déclenchement de cette exécution

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution injection 2}/launch"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution injection 2}/launch
```

???
<br>

## Consultation de la donnée

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored data}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored data}
```

```json
{
    "name": "Installations classées pour la protection de l'environnement",
    "type": "VECTOR-DB",
    "srs": "EPSG:4326",
    "contact": "contact@ign.fr",
    "extent": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    7.11555778,
                    46.26953767
                ],
                [
                    7.11555778,
                    50.15761815
                ],
                [
                    4.0492738,
                    50.15761815
                ],
                [
                    4.0492738,
                    46.26953767
                ],
                [
                    7.11555778,
                    46.26953767
                ]
            ]
        ]
    },
    "last_event": {
        "title": "Modification",
        "date": "2023-05-24T16:32:50.838863",
        "initiator": {
            "_id": "{user}"
        }
    },
    "tags": {},
    "storage": {
        "type": "POSTGRESQL",
        "labels": []
    },
    "size": 1073152,
    "status": "GENERATED",
    "_id": "{stored data}",
    "type_infos": {
        "relations": [
            {
                "name": "installation",
                "type": "TABLE",
                "attributes": [
                    "id",
                    "nom_ets",
                    "adresse",
                    "commune",
                    "lib_regime",
                    "url_fiche",
                    "lib_seveso",
                    "geom"
                ],
                "primary_key": [
                    "id"
                ]
            },
            {
                "name": "installation_autorisation",
                "type": "VIEW",
                "attributes": [
                    "id",
                    "nom_ets",
                    "adresse",
                    "commune",
                    "lib_regime",
                    "url_fiche",
                    "lib_seveso",
                    "geom"
                ],
                "primary_key": []
            }
        ]
    }
}
```
???
<br>

L'étendue a été mise à jour ainsi que la taille (de 270 336 octets à 1 073 152).

## Nettoyage de la livraison

Maintenant que la donnée a été stockée de manière pérenne, on peut supprimer la livraison et son contenu :

??? DELETE "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 2}
```

???
<br>

## Consultation du flux WMS

Notre flux WMS retourne désormais de la donnée sur les Ardennes et le Doubs.

![Visualisation du premier lot de données](/img/guides-developpeur/vecteur/donnees_wms_inj2.png){.fr-responsive-img .frx-border-img .frx-img-contained}