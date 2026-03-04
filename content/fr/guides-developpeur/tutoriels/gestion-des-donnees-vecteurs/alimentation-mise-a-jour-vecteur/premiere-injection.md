---
title: Injection d'un premier lot de données
eleventyNavigation:
    key: Injection d'un premier lot de données
    order: 2
summary:
    visible: true
    depth: 2
---

{% from "components/component.njk" import component with context %}

## Ajout du premier lot de données

### Déclarer la livraison

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads
```

```json
{
    "description": "Données sur les Ardennes",
    "name": "Installations classées pour la protection de l'environnement",
    "type": "VECTOR",
    "srs": "EPSG:4326"
}
```

```json
{
    "description": "Données sur les Ardennes",
    "name": "Installations classées pour la protection de l'environnement",
    "type": "VECTOR",
    "status": "OPEN",
    "srs": "EPSG:4326",
    "contact": "contact@ign.fr",
    "size": 0,
    "last_event": {
        "title": "Création",
        "date": "2023-05-10T14:52:29.004734134",
        "initiator": {
            "last_name": "Lopper",
            "first_name": "Dave",
            "_id": "{user}"
        }
    },
    "_id": "{upload injection 1}"
}
```
???
<br>

### Téléverser le fichier Geopackage

📄 `<installation.gpkg>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 1}/data?path=data/installation.gpkg"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 1}/data?path=data/installation.gpkg
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<installation.gpkg>`"]
    ]
}) }}

???
<br>

### Contrôler le contenu

Afin de vérifier que tous les fichiers ont bien été déposés, et l'éventuelle arborescence :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 1}/tree"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 1}/tree
```

```json
[
    {
        "type": "DIRECTORY",
        "name": "data",
        "size": 368640,
        "children": [
            {
                "type": "FILE",
                "name": "installation.gpkg",
                "size": 368640
            }
        ]
    }
]
```
???
<br>

## Finalisation de la livraison

### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 1}/close"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 1}/close
```

???
<br>

### Consultation des vérifications sur ma livraison

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 1}/checks"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 1}/checks
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

:::warning Points d'attention
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
            "{upload injection 1}"
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
    "creation": "2023-05-24T16:29:24.113049487Z",
    "inputs": {
        "upload": [
            {
                "type": "VECTOR",
                "name": "Installations classées pour la protection de l'environnement",
                "status": "CLOSED",
                "srs": "EPSG:4326",
                "_id": "{upload injection 1}"
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
    "_id": "{execution injection 1}"
}
```
???
<br>

### Déclenchement de cette exécution

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution injection 1}/launch"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution injection 1}/launch
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
                    5.35581878,
                    49.2396879
                ],
                [
                    5.35581878,
                    50.15761815
                ],
                [
                    4.0492738,
                    50.15761815
                ],
                [
                    4.0492738,
                    49.2396879
                ],
                [
                    5.35581878,
                    49.2396879
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
    "size": 270336,
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

On note qu'une étendue a pu être calculée, et que la taille est passée de 16 384 octets à 270 336. Le dernier événement est une modification et plus une génération.

## Nettoyage de la livraison

Maintenant que la donnée a été stockée de manière pérenne, on peut supprimer la livraison et son contenu :

??? DELETE "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 1}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload injection 1}
```

???
<br>

## Consultation du flux WMS

Sans avoir à modifier la configuration de la diffusion, notre flux WMS retourne désormais de la donnée sur les Ardennes

![Visualisation du premier lot de données](/img/guides-developpeur/vecteur/donnees_wms_inj1.png){.fr-responsive-img .frx-border-img .frx-img-contained}

On peut voir les cercles en dessous qui sont les données livrées. Les données accessibles en WMS (diamant rose, bleu ou vert) sont bien un sous-ensemble seulement.