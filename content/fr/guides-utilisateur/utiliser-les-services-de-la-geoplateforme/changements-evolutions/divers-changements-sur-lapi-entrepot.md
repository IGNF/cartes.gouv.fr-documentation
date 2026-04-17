---
title: Divers changements sur l'API Entrepôt
description: Divers modifications ont été faites sur l'API entrepot.
tags:
    - Évolution
    - Entrepot
eleventyNavigation:
    key: Divers changements sur l'API Entrepôt
    order: 14
---
## Changements

### Suppression de l'API de catalogue des uploads

Afin d’harmoniser les livraisons avec les données stockées, la ligne de catalogage des livraisons est supprimée : GET /catalogs/uploads

### API d'ajout, de création et suppression de visibilité d'une donnée stockée

Ajout d’une API permettant à un utilisateur d’un datastore d’accorder la visibilité d’une de ses données stockées à une ou plusieurs communautés pour leur permettre d'utiliser la donnée en lecture.

??? POST "/datastores/{datastore}/stored_data/{stored_data}/visibility"

```title="Contenu"
/datastores/{datastore}/stored_data/{stored_data}/visibility
```
```json
[
"{id_community}"
]
```
```json
[
    {
        "creation": "2025-07-30T08:12:04.934Z",
        "update": "2025-07-30T08:12:04.934Z",
        "name": "string",
        "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
]
```
???

Il est ensuite possible de récupérer la liste des visibilités accordées à une de ses données stockées :

??? GET "/datastores/{datastore}/stored_data/{stored_data}/visibility"

```title="Contenu"
/datastores/{datastore}/stored_data/{stored_data}/visibility
```
```json
[
    {
        "creation": "2025-07-30T08:12:04.934Z",
        "update": "2025-07-30T08:12:04.934Z",
        "name": "string",
        "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
]
```
???

Il est aussi possible de supprimer la visibilité d'une donnée stockée :

??? DELETE "/datastores/{datastore}/stored_data/{stored_data}/visibility"

```title="Contenu"
/datastores/{datastore}/stored_data/{stored_data}/visibility
```
```json
[
"{id_community}"
]
```
???

### Amélioriation des évènements sur les livraisons, les données stockées et les configurations

Les titres des évènements sont améliorés pour être plus parlant pour les utilisateurs. Les évènements sont accessibles à ces URls :

??? GET "/datastores/{datastore}/uploads/{upload}/events"

```title="Contenu"
/datastores/{datastore}/uploads/{upload}/events
```
???

??? GET "/datastores/{datastore}/stored_data/{stored_data}/events"

```title="Contenu"
/datastores/{datastore}/stored_data/{stored_data}/events
```
???

??? GET "/datastores/{datastore}/configurations/{configuration}/events"

```title="Contenu"
/datastores/{datastore}/configurations/{configuration}/events
```
???

### Ajout d'un filtrage sur les clés utilisateurs

Ajout d'un filtrage sur la recherche des clés utilisateur : GET /users/me/keys

Les champs sur lesquels il est possible de filtrer sont : * type (valeurs possibles : HASH, HEADER, BASIC, OAUTH2) * user_agent (possibilité de joker "%") * referer (possibilité de joker "%") * whitelist (possibilité de joker "%") * blacklist (possibilité de joker "%") * name (possibilité de joker "%")

### Ajout du champ "creation" pour toutes les entités

Les exécutions de traitement et de vérification possède un champ "creation" de type date. Ce champ est généraliser à toutes les entités : * upload * annex * stored data * configuration * static file * metadata * offering * document * datastore * community * permission * processing

Dans le cas des exécutions de traitement, les champs suivant sont renommés pour l'occasion : * creationDate -> creation * lauchDate -> lauch * startDate -> start * finishDate -> finish

### Généralisation de la date de mise à jour sur les entités

Ce nouveau permet de connaitre facilement la date de dernière modification "importante" sur les entités. Le nouveau champ est appelé "update" et est ajouté à ces entités : * annex * configuration * static file * metadata * offering * document

Ce champ est mise à jour lors de ces évènements :

   * lors du téléversement d'un nouveau fichier annexe pour écraser l'ancien (PUT /datastore/{datastore}/annexes/{annexe} )
   * lors du téléversement d'un nouveau fichier metadonnée pour écraser l'ancien (PUT /datastore/{datastore}/metadata/{metadata} )
   * lors du téléversement d'un nouveau fichier statique pour écraser l'ancien (PUT /datastore/{datastore}/statics/{static} )
   * lors d'un appel de modification de la configuration (PUT /datastore/{datastore}/configurations/{configuration} )
   * lors d'un appel de synchronisation d'une offre (PUT /datastore/{datastore}/offerings/{offering} )
   * lors du téléversement d'un nouveau fichier document (PUT /users/me/documents/{document} )

Modification du système de tri dans les listes d'entités.

Le tri par "lastEvent" est remplacé par "last_event". Exemple :

??? GET "/datastores/{datastore}/configurations?sort=last_event,desc"

```title="Contenu"
/datastores/{datastore}/configurations?sort=last_event,desc
```
```json
[
    {
        "name": "BDORTHO en infrarouge fausses couleurs",
        "layer_name": "ORTHOIMAGERY.ORTHOPHOTOS.IRC",
        "type": "WMS-RASTER",
        "status": "PUBLISHED",
        "_id": "bc5c244f-1528-41d3-bad9-d6557cbefce5"
    },
    {
        "name": "BDORTHO en infrarouge fausses couleurs",
        "layer_name": "ORTHOIMAGERY.ORTHOPHOTOS.IRC",
        "type": "WMTS-TMS",
        "status": "PUBLISHED",
        "_id": "578fb2b4-3246-4900-9776-ad533cc0cf4e"
    },
    {
        "name": "Ortho_20_cm-wmsr",
        "layer_name": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
        "type": "WMS-RASTER",
        "status": "PUBLISHED",
        "_id": "c4206604-6f96-47a5-bed5-32cf3b63c571"
    }
]
```
???

De plus, ajout de la possibilité de trier par date de création (creation) et par date de mise à jour (update) pour les API suivantes :

   * GET /datastores/{datastore}/annexes
   * GET /organizations/{organization}/annexes
   * GET /administrator/annexes
   * GET /datastores/{datastore}/configurations
   * GET /organizations/{organization}/configurations
   * GET /administrator/configurations
   * GET /datastores/{datastore}/statics
   * GET /organizations/{organization}/statics
   * GET /administrator/statics
   * GET /datastores/{datastore}/metadata
   * GET /datastores/{datastore}/offerings
   * GET /organizations/{organization}/offerings
   * GET /administrator/offerings
   * GET /users/me/documents

Et, pour les API suivantes, ajout uniquement de la possibilité de trier par date de création (creation) :

   * GET /datastores/{datastore}/uploads
   * GET /datastores/{datastore}/checks
   * GET /datastores/{datastore}/permissions
   * GET /datastores/{datastore}/stored_data
   * GET /datastores/{datastore}/processings
   * GET /datastores/{datastore}/processings/executions
   * GET /organizations/{organization}/uploads
   * GET /organizations/{organization}/stored_data
   * GET /organizations/{organization}/permissions
   * GET /organizations/{organization}/processings/executions
   * GET /administrator/uploads
   * GET /administrator/stored_data
   * GET /administrator/datastores
   * GET /administrator/communities
   * GET /administrator/checks
   * GET /administrator/processings
   * GET /administrator/processings/executions

### Nouvelle route de listage des stockages

Liste les stockages disponibles pour le datastore. Les paramètres disponibles pour la route sont : * type : type de stockage (valeurs disponibles : POSTGRESQL, S3, FILESYSTEM, OPENSEARCH, POSTGRESQL-ROUTING) * use_ratio : Pourcentage minimum d'utilisation du quota

??? GET "/datastores/{datastore}/storages"

```title="Contenu"
/datastores/{datastore}/storages
```
```json
{
    "data": [
        {
        "use": 0,
        "quota": 0,
        "storage": {
            "creation": "2025-07-30T08:44:31.208Z",
            "update": "2025-07-30T08:44:31.208Z",
            "name": "string",
            "type": "POSTGRESQL",
            "labels": [
            "string"
            ],
            "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        }
        }
    ],
    "uploads": {
        "use": 0,
        "quota": 0,
        "storage": {
        "creation": "2025-07-30T08:44:31.208Z",
        "update": "2025-07-30T08:44:31.208Z",
        "name": "string",
        "type": "POSTGRESQL",
        "labels": [
            "string"
        ],
        "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        }
    },
    "annexes": {
        "use": 0,
        "quota": 0,
        "storage": {
        "creation": "2025-07-30T08:44:31.208Z",
        "update": "2025-07-30T08:44:31.208Z",
        "name": "string",
        "type": "POSTGRESQL",
        "labels": [
            "string"
        ],
        "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        }
    }
}
```
???

### Suppression de la visibilité associée aux livraisons et données stockées et ajout d'une notion de publicité

Une harmonisation est réalisée en supprimant la visibilité associée aux entités et en ajoutant une notion de publicité.

Pour les livraisons et les données stockées, le champs "visibility" est remplacé par "open".

Ainsi, les livraisons et données stockées en "visibility=PUBLIC" deviennent "open=true" et celles en "visibility=REFERENCED" ou "visibility=PRIVATE" deviennent "open=false".

Les livraisons et données stockées en "open=true" pourront donc être utilisé dans les traitements d'autres datastores.

Cette modification impacte la création de la livraison et il faut bien remplacé le champ "visibility" par "open" pour que la création fonctionne.

### API de récupération des données stockées visibles d'un utilisateur

Ajout d’une API permettant à un utilisateur de connaitre les données stockées qui lui sont visibles.

Les paramètres de filtrage sont identiques à ceux de GET /datastores/{datastore}/stored_data, sauf owned, shared

??? GET "/users/me/stored_data"

```title="Contenu"
/users/me/stored_data
```
```json
[
    {
        "creation": "2025-07-30T09:29:22.332Z",
        "update": "2025-07-30T09:29:22.332Z",
        "name": "string",
        "type": "ROK4-PYRAMID-RASTER",
        "open": true,
        "srs": "string",
        "description": "string",
        "status": "CREATED",
        "contact": "string",
        "bbox": {
        "west": 0,
        "south": 0,
        "east": 0,
        "north": 0
        },
        "size": 0,
        "last_event": {
        "title": "string",
        "text": "string",
        "date": "2025-07-30T09:29:22.332Z",
        "initiator": {
            "creation": "2025-07-30T09:29:22.332Z",
            "update": "2025-07-30T09:29:22.332Z",
            "last_name": "string",
            "first_name": "string",
            "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        }
        },
        "tags": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
        },
        "edition": {
        "from": "2025-07-30",
        "to": "2025-07-30"
        },
        "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
]
```
???

De plus, une route supplémentaire permet de récupérer les informations d'une donnée stockée visisible de l'utilisateur :

??? GET "/users/me/stored_data/{stored_data}"

```title="Contenu"
/users/me/stored_data/{stored_data}
```
```json
[
    {
        "creation": "2025-07-30T09:29:22.332Z",
        "update": "2025-07-30T09:29:22.332Z",
        "name": "string",
        "type": "ROK4-PYRAMID-RASTER",
        "open": true,
        "srs": "string",
        "description": "string",
        "status": "CREATED",
        "contact": "string",
        "bbox": {
        "west": 0,
        "south": 0,
        "east": 0,
        "north": 0
        },
        "size": 0,
        "last_event": {
        "title": "string",
        "text": "string",
        "date": "2025-07-30T09:29:22.332Z",
        "initiator": {
            "creation": "2025-07-30T09:29:22.332Z",
            "update": "2025-07-30T09:29:22.332Z",
            "last_name": "string",
            "first_name": "string",
            "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        }
        },
        "tags": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
        },
        "edition": {
        "from": "2025-07-30",
        "to": "2025-07-30"
        },
        "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
]
```
???

### Ajout du champ "fields" pour l'API de récupération de la liste des traitements disponibles

Pour l'API, GET /datastores/{datastore}/processings, le champ d'énumération "fields" a été ajouté pour préciser les champs souhaités dans la réponse. Les valeurs disponibles sont : * creation * name * descritption * priority * input_types * output_types

Par défaut, la réponse contient les champs "name" et "description"