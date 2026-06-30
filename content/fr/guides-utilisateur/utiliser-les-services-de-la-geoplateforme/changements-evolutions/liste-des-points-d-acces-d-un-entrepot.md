---
title: Liste des points d’accès d’un entrepôt
description: Nouvelle route d’API avec des filtrages sur les noms, types et quotas
tags:
    - Entrepôt
eleventyNavigation:
    key: Liste des points d’accès d’un entrepôt
    order: -20250630
date: 2025-06-30
---

{% from "components/component.njk" import component with context %}

## Changements

Il est possible de consulter les points d’accès disponibles pour un entrepôt avec la nouvelle route d’<span lang="en">_API_</span> « GET /datastores/{datastore}/endpoints », avec des filtrages sur les noms, types et quotas.

???? GET "/datastores/{datastore}/endpoints"
```plain
/datastores/{datastore}/endpoints
```
{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["name = `%25téléchargement%25`"],
        ["type = `DOWNLOAD`"],
        ["open = `true`"],
        ["use_ratio = `50 pour avoir tous les points d’accès dont le quota est consommé à plus de 50%`"]
    ]
}) }}
??? Corps de réponse JSON
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
????