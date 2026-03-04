---
title: Initialisation d'une donnée vecteur pour des mises à jour postérieures
eleventyNavigation:
    key: Initialisation d'une donnée vecteur pour des mises à jour postérieures
    order: 1
summary:
    visible: true
    depth: 2
---

{% from "components/component.njk" import component with context %}

## Livraison des informations d'initialisation

### Déclarer la livraison

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads
```

```json
{
    "description": "Seule la structure est définie : une table et une vue",
    "name": "Installations classées pour la protection de l'environnement",
    "type": "VECTOR",
    "srs": "EPSG:4326"
}
```


```json
{
    "name": "Installations classées pour la protection de l'environnement",
    "description": "Seule la structure est définie : une table et une vue",
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
    "_id": "{upload initialisation}"
}
```
???
<br>

### Téléverser le fichier SQL

```sql
{{ "public/data/tutoriels/alimentation-maj/installation-init.sql" | readFILE | safe }}
```

📄 `<installation-init.sql>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload initialisation}/data?path=data/installation-init.sql"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload initialisation}/data?path=data/installation-init.sql
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<installation-init.sql>`"]
    ]
}) }}

???
<br>

### Contrôler le contenu

Afin de vérifier que tous les fichiers ont bien été déposés, et l'éventuelle arborescence :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload initialisation}/tree"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload initialisation}/tree
```

```json
[
    {
        "type": "DIRECTORY",
        "name": "data",
        "size": 411,
        "children": [
            {
                "type": "FILE",
                "name": "installation-init.sql",
                "size": 411
            }
        ]
    }
]
```
???
<br>

## Finalisation de la livraison

### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload initialisation}/close"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload initialisation}/close
```

???
<br>

### Consultation des vérifications sur ma livraison

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload initialisation}/checks"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload initialisation}/checks
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

## Création de la donnée vide

### Configuration de l'exécution de traitement

On utilise le traitement d'intégration de données vecteur.

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions
```

```json
{
    "processing": "{{ ids.processings['vector_to_db'] }}",
    "inputs": {
        "upload": [
            "{upload initialisation}"
        ]
    },
    "output": {
        "stored_data": {
            "name": "Installations classées pour la protection de l'environnement",
            "storage_tags": ["VECTEUR"]
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
    "creation": "2023-05-24T15:21:21.279291196Z",
    "inputs": {
        "upload": [
            {
                "type": "VECTOR",
                "name": "Installations classées pour la protection de l'environnement",
                "status": "CLOSED",
                "srs": "EPSG:4326",
                "_id": "{upload initialisation}"
            }
        ],
        "stored_data": []
    },
    "output": {
        "stored_data": {
            "name": "Installations classées pour la protection de l'environnement",
            "type": "VECTOR-DB",
            "status": "CREATED",
            "_id": "{stored data}"
        }
    },
    "parameters": [],
    "_id": "{execution initialisation}"
}
```
???
<br>

### Déclenchement de cette exécution

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution initialisation}/launch"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution initialisation}/launch
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
    "last_event": {
        "title": "Génération",
        "date": "2023-05-24T15:23:04.928879",
        "initiator": {
            "_id": "{user}"
        }
    },
    "tags": {},
    "storage": {
        "type": "POSTGRESQL",
        "labels": []
    },
    "size": 16384,
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

On retrouve bien notre table et notre vue, qu'on distingue grâce au champ `type`.

## Nettoyage de la livraison

Maintenant que la donnée a été stockée de manière pérenne, on peut supprimer la livraison et son contenu :

??? DELETE "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload initialisation}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload initialisation}
```

???
<br>

## Publication du flux

### Téléversement du style

{{ component("download", {
    title: "installation.sld",
    href: "/data/tutoriels/alimentation-maj/installation.sld",
    detail: "sld - 4.3 Ko"
}) }}

📄 `<installation.sld>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/statics"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/statics
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<installation.sld>`"],
        ["type = GEOSERVER-STYLE"],
        ["name = Style pour les installations"]
    ]
}) }}
  

```json
{
    "name": "Style pour les installations",
    "type": "GEOSERVER-STYLE",
    "_id": "{sld}",
    "type_infos": {
        "used_attributes": [
            "lib_seveso"
        ]
    }
}
```
???
<br>

### Téléversement du template d'info-bulle

{{ component("download", {
    title: "installation.ftl",
    href: "/data/tutoriels/alimentation-maj/installation.delete",
    detail: "Ftl - 45 octets"
}) }}

📄 `<installation.ftl>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/statics"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/statics
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<installation.ftl>`"],
        ["type = GEOSERVER-FTL"],
        ["name = FTL pour les installations"]
    ]
}) }}
  

```json
{
    "name": "FTL pour les installations",
    "type": "GEOSERVER-FTL",
    "_id": "{sld}",
    "type_infos": {
        "used_attributes": [
            "nom_ets",
            "url_fiche",
            "commune",
            "adresse",
            "lib_regime"
        ]
    }
}
```
???
<br>

### Création de la configuration WMS

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```

```json
{
    "type": "WMS-VECTOR",
    "name": "Installations classées pour la protection de l'environnement",
    "layer_name": "installations_classees",
    "type_infos": {
        "title": "Installations classées pour la protection de l'environnement",
        "abstract": "Ce jeu de données correspond aux Installations classées pour la protection de l'environnement (ICPE) soumises à autorisation ou à enregistrement (en fonctionnement ou en cessation d'activité).",
        "keywords": [
            "Tutoriel", "Géorisques", "Installations classées"
        ],
        "bbox": {
            "west": -175,
            "south": -75,
            "east": 175,
            "north": 85
        },
        "used_data": [
        {
            "relations": [
                {
                    "name": "installation_autorisation",
                    "style": "{sld}",
                    "ftl": "{ftl}"
                }
            ],
            "stored_data": "{stored data}"
        }
        ]
    }
}
```
???
<br>

:::warning Points d'attention
    - Comme les tables sont vides, il est indispensable de surcharger le rectangle englobant, en mettant la couverture cible des données (ici une bbox mondiale)
    - On publie bien la vue et non la table
:::

### Publication

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration}/offerings"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration}/offerings
```


```json
{
    "endpoint": "{{ ids.endpoints.open.wmsv }}",
    "open": true
}
```
???
<br>

On peut vérifier la présence de notre couche `installations_classees` dans le [getCapabilities du service]({{ urls.public.wmsv }}?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0)

Si on consulte la donnée sur QGis, on ne verra pour le moment aucune donnée.