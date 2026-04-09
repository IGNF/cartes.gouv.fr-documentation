---
title: Champ extra sur les entités
description: Un nouveau champ extra est disponible sur les entités d'un entrepôt. Celui ci est un objet JSON libre et permet de stocker des informations complexes adaptées à vos usages. Ces changements ont eu lieu le 10 novembre 2024 
tags:
    - Evolution
    - Global
eleventyNavigation:
    key: Champ extra sur les entités
    order: 22
---

# Changements

Les entités suivantes sont concernées :

   - upload
   - annexe
   - document
   - stored data
   - configuration
   - static
   - metadata
   - offering

Il peut être ajouté et mis à jour via la route PATCH/datastores/{datastore}/{entity}/{id}. Ce champ n'est pas interprété par l'entrepôt, c'est-à-dire qu'il n'est pas possible de filtrer sur sa valeur dans les routes de liste des entités. Il permet en revanche à une application de stocker des informations structurées propres à son fonctionnement sans avoir besoin de stockage persistent de son côté.
Exemple d'utilisation pour une livraison

??? PATCH "/datastores/{datastore}/uploads/{upload}"

``` title="Contenu" 
/datastores/{datastore}/uploads/{upload}
```

```json
{
    "extra": {
        "test": "toto",
        "titi": [{"tutu": "tata"}]
    }
}
```

```json
{
    "name": "SCAN1000 - Corse",
    "description": "Données SCAN1000 sur la Corse",
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
    "extra": {
        "test": "toto",
        "titi": [{"tutu": "tata"}]
    },
    "_id": "{upload}",
    "type_infos": {}
}
```
???