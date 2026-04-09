---
title: Liste des point d'accès d'un entrepôt
description: Nouvelle route d'API avec des filtrages sur les noms, types et quotas. Ces changements ont eu lieu le 30 juin 2025 
tags:
    - Evolution
    - Entrepot
eleventyNavigation:
    key: Liste des point d'accès d'un entrepôt
    order: 15
---

{% from "components/component.njk" import component with context %}

# Changements

Il est possible de consulter les points d'accès disponible pour un entrepôt avec la nouvelle route d'API GET /datastores/{datastore}/endpoints, avec des filtrages sur les noms, types et quotas.

??? GET "/datastores/{datastore}/endpoints"

``` title="Contenu" 
/datastores/{datastore}/endpoints
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["name = `%25téléchargement%25`"],
        ["type = `DOWNLOAD`"],
        ["open = `true`"],
        ["use_ratio = `50 pour avoir tous les points d'accès dont le quota est consommé à plus de 50%`"]
    ]
}) }}

```json
[
    {
        "use": 8,
        "quota": 10,
        "endpoint": {
        "name": "Service de téléchargement partiel",
        "technical_name": "gpf-download-chunk",
        "type": "DOWNLOAD",
        "urls": [
            {
            "type": "DOWNLOAD",
            "url": "https://data.geopf.fr/chunk/telechargement"
            }
        ],
        "force_metadata": false,
        "force_attribution": false,
        "search_publish": true,
        "_id": "304515ec-502a-4d1b-9353-326cbbec10f9",
        "open": true,
        "metadata_fi": "gpf-download-chunk"
        }
    }
]
```

???
