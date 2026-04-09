---
title: Paramètre fields dans la lecture de collection
description: Il est désormais possible de préciser les champs à retourner pour chaque entité de la collection demandée. L'identifiant est toujours retourné. Ces changements ont eu lieu le 25 novembre 2024 
tags:
    - Evolution
    - Global
eleventyNavigation:
    key: Paramètre fields dans la lecture de collection
    order: 21
---
{% from "components/component.njk" import component with context %}

# Changements

Les entités suivantes sont concernées :

  - Livraisons
      - Champs de base
          - type
          - name
          - visibility
          - srs
          - description
          - status
      - Champs disponibles
          - name
          - description
          - type
          - visibility
          - status
          - srs
          - contact
          - size
          - last_event
          - tags
          - bbox (calculée à partir du champ extent)
  - Données stockées
      - Champs de base
          - name
          - type
          - visibility
          - srs
      - Champs disponibles
          - name
          - description
          - type
          - visibility
          - status
          - srs
          - contact
          - edition
          - size
          - last_event
          - tags
          - bbox
  - Configurations
      - Champs de base
          - name
          - layer_name
          - type
          - status
      - Champs disponibles
          - name
          - layer_name
          - type
          - status
          - attribution
          - metadata
          - tags
          - last_event
  - Offres
      - Champs de base
          - open
          - available
          - layer_name
          - type
          - status
      - Champs disponibles
          - open
          - available
          - layer_name
          - type
          - status
          - endpoint
          - configuration
          - urls
          - extra

Exemple d'utilisation pour des données stockées

??? GET "/datatores/{datastore}/stored_data"

``` title="Contenu" 
/datatores/{datastore}/stored_data
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["fields = `last_event,bbox,tags`"]
    ]
}) }}

```json
[
    {
        "bbox": {
        "west": 4.716841851,
        "south": 45.597425194,
        "east": 6.17889785,
        "north": 46.527234038
        },
        "last_event": {
            "title": "Création",
            "date": "2024-01-23T11:30:52.703181",
            "initiator": {
                "last_name": "Lopper",
                "first_name": "Dave",
                "_id": "{user}"
            }
        },
        "tags": {},
        "_id": "{stored data 1}"
    },
    {
        "bbox": {
            "west": -5.332540084,
            "south": 41.2061106614,
            "east": 9.854320085,
            "north": 51.2032464945
        },
        "last_event": {
            "title": "Génération",
            "date": "2024-09-16T08:05:46.68324",
            "initiator": {
                "last_name": "Lopper",
                "first_name": "Dave",
                "_id": "{user}"
            }
        },
        "tags": {},
        "_id": "{stored data 2}"
    }
]
```

???