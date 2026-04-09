---
title: Nouveau service Validateurs + changements sur l'API Entrepot
description: Divers modifications sont prévues sur l'API entrepot. Ces changements auront lieu le 9 octobre 2025.
tags:
    - Keycloak
    - Publication
    - Orchestrateur
    - Entrepôt
    - Géocodage
    - Recherche
eleventyNavigation:
    key: Nouveau service Validateurs + changements sur l'API Entrepot
    order: 11
---

# Changements

## Nouveau service de Validateur

Ajout d'un service de validation de données qui permet de vérifier si la donnée est conforme à un modèle de validation. Le Swagger du service sera disponible après la livraison : https://data.geopf.fr/validation/swagger-ui/index.html

## Définition d'un callback au niveau des exécutions

Les exécutions, qu'elles soient de vérification ou de traitement, sont les actions sur l'entrepôt qui peuvent prendre du temps et dont la fin est attendue pour passer à la suite du workflow. Pour éviter à une personne de devoir consulter régulièrement un portail, ou un outil de devoir régulièrement interroger l'API, un système de callback est mis en place.

Ce callback est appelé à la fin de l'exécution, en précisant le statut (SUCCESS, ABORTED, FAILURE).

Il peut être défini au niveau de l'exécution, dans le nouveau champ callback : - à la création :

* pour les traitements : POST /datastores/{id}/processings/executions
* pour les vérifications : POST /datastores/{id}/uploads/{id}/close



    à la modification, si l'exécution n'a pas déjà un statut final : SUCCESS, ABORTED, FAILURE.
        pour les traitements : PATCH /datastores/{id}/processings/executions/{id}
        pour les vérifications : PATCH /datastores/{id}/checks/executions/{id}

Plusieurs types de callback ont été identifié :

    Un envoi de mail 
```title="Contenu"
{
    "callback": {
        "type": "email",
        "to": ["email1@ign.fr", "email2@ign.fr"],
        "entity_url": "https://cartes.gouv.fr/entrepot/{{ datastore }}/donnees/{{ output }}/details?datasheetName=CarHab-Jura"
    }
}
```



* dans entity_url, les variables autorisées (avec la syntaxe moustache) sont :

    * { datastore } : ID de l'entrepôt

    * { community } : ID de la communauté

    * { execution } : ID de l'exécution
            
    * { processing } : ID du traitement dans le cas d'une exécution de traitement

    * { check } : ID de la vérification dans le cas d'une exécution de vérification

    * { output } : ID de la livraison ou donnée stockée en sortie


*    Informations envoyées :

        *    Sujet : contenant le statut et le nom du traitement

        *    Message : contenant l'ID, le statut, le lien vers l'entité (en accord avec le template entity_url fourni, si non fourni, on met l'appel API pour récupérer l'exécution).

* Un appel à une API 

```json
{
    "callback": {
        "type": "api",
        "method": "POST", // PUT et PATCH aussi acceptés, on veut juste avoir un body
        "url": "https://api.chez.moi/sous/route",
        "query_params" : {
            "key1": "value1",
            "key2": "value2"
        },
        "headers" : {
            "key1": "value1",
            "key2": "value2"
        }
    }
}
```

* Informations envoyées, dans le body 

```json
{
    "type": "PROCESSING", // ou "CHECK"
    "id": "{id}",
    "status": "{status}", // SUCCESS, FAILURE ou ABORTED
    "execution_url": "{endpoint api entrepôt}/datastores/{id}/{checks|processings}/executions/{id}",
    "log_url": "{endpoint api entrepôt}/datastores/{id}/{checks|processings}/executions/{id}"
}
```

## Ajout de routes d'activités des éléments d'un entrepôt

Des routes permettant de récupérer le flux d'évènements de 3 entités d'un entrepôt ont été ajoutées. Les entités concernées sont les données stockées, livraisons et configurations : - GET /datastores/{datastore}/stored_data/activity - GET /datastores/{datastore}/uploads/activity - GET /datastores/{datastore}/configurations/activity

Ces requêtes peuvent prendre comme paramètres : - before (type date , par defaut=NOW) : permet de filtrer sur les événements ayant eu lieu avant la date indiquée - after (type date , par defaut=NOW-15jours) : permet de filtrer sur les événements ayant eu lieu après la date indiquée.

Exemple :

??? GET "/datastores/{datastore}/stored_data/activity"

```title="Contenu"
/datastores/{datastore}/stored_data/activity
```
```json
{
    "id": "string",
    "title": "string",
    "subtitle": "string",
    "updated": "2025-08-08T08:40:54.056Z",
    "links": [
        {
        "href": "string",
        "rel": "self",
        "type": "string",
        "title": "string"
        }
    ],
    "rights": "string",
    "author": {
        "name": "string",
        "email": "string"
    },
    "entries": [
        {
        "id": "string",
        "title": "string",
        "subtitle": "string",
        "updated": "2025-08-08T08:40:54.057Z",
        "links": [
            {
            "href": "string",
            "rel": "self",
            "type": "string",
            "title": "string"
            }
        ],
        "content": "string",
        "categories": [
            {
            "term": "string",
            "label": "string"
            }
        ],
        "polygon": {
            "west": 0,
            "south": 0,
            "east": 0,
            "north": 0
        }
        }
    ]
}
```
???

## Ajout de routes d'activités d'une communauté

Des routes permettant de récupérer le flux d'évènements d'une communauté ont été ajoutées : - GET /communities/{community}/users/activity - GET /communities/{community}/permissions/activity

Ces requêtes peuvent prendre comme paramètres : - before (type date , par defaut=NOW) : permet de filtrer sur les événements ayant eu lieu avant la date indiquée - after (type date , par defaut=NOW-15jours) : permet de filtrer sur les événements ayant eu lieu après la date indiquée.

Exemple :

??? GET "/communities/{community}/users/activity"

```title="Contenu"
/communities/{community}/users/activity
```
```json
{
    "id": "string",
    "title": "string",
    "subtitle": "string",
    "updated": "2025-08-08T09:03:54.104Z",
    "links": [
        {
        "href": "string",
        "rel": "self",
        "type": "string",
        "title": "string"
        }
    ],
    "rights": "string",
    "author": {
        "name": "string",
        "email": "string"
    },
    "entries": [
        {
        "id": "string",
        "title": "string",
        "subtitle": "string",
        "updated": "2025-08-08T09:03:54.104Z",
        "links": [
            {
            "href": "string",
            "rel": "self",
            "type": "string",
            "title": "string"
            }
        ],
        "content": "string",
        "categories": [
            {
            "term": "string",
            "label": "string"
            }
        ],
        "polygon": {
            "west": 0,
            "south": 0,
            "east": 0,
            "north": 0
        }
        }
    ]
}
```
???

## Ajout de la date de rattachement d'un utilisateur à une communauté

Dans la route de listage des utilisateurs d'une commuanuté (GET /communities/{community}/users), des dates creation et update sont ajoutés pour chaque utilisateur.

Le champ creation correspond à la date d'ajout de l'utilisateur à la communauté. Le champ update correspond à la dernière modification des droits de l'utilisateur sur la communauté.

Lors de la livraison, une date fixe de création et de modification est ajoutée à chaque utilisateur : 1er janvier 2025.

Les champs creation et upadate sont actualisés lors d'un appel PUT /communities/{community}/users/{user} pour l'ajout d'un utilisateur.

Le champ update est actualisé lors de l'appel PUT /communities/{community}/users/{user} pour une modification de droits d'un utilisateur.

## Ajout de la notion de "publicité" d'un évènement

Ajout de la notion de "publicité" d'un évènement pour déterminer si ceux-ci doivent être publics dans la nouvelle route présenté ci-dessous.

Cette notion est représenté par le champ public_activity ajoutés aux données stockées et offres. Par défaut et pour l'existant, sa valeur est à false.

La valeur de ce champ peut être modifié grâce à ses routes : - PATCH /datastores/{datastore}/stored_data/{stored_data} - POST /datastores/{datastore}/configurations/{configuration}/offerings - PATCH /datastores/{datastore}/offerings/{offering}

??? POST "/datastores/{datastore}/stored_data/{stored_data}"

```title="Contenu"
/datastores/{datastore}/stored_data/{stored_data}
```
```json

{
    "name": "string",
    "open": true,
    "description": "string",
    "edition": {
        "from": "2025-08-08",
        "to": "2025-08-08"
    },
    "extent": {},
    "extra": {},
    "public_activity": true
}
```
???

## Ajout d'une route d'activité publique d'une communauté

Une route permet de récupérer le flux d'évènements publics d'une communauté : GET /communities/{technical_name}/activity

Les paramètres possibles de la requêtes sont : - before (type date , par defaut=NOW) : permet de filtrer sur les entitées crées avant la date indiquée - after (type date , par defaut=NOW-15jours) : permet de filtrer sur les entitées crées après la date indiquée.

Seuls la création et la modification des données stockées et des offerings qui ont un champ public_activity à true sont affichées dans le flux.

??? GET "/communities/{technical_name}/activity"

```title="Contenu"
/communities/{technical_name}/activity
```
```json
{
    "id": "string",
    "title": "string",
    "subtitle": "string",
    "updated": "2025-08-08T09:29:15.762Z",
    "links": [
        {
        "href": "string",
        "rel": "self",
        "type": "string",
        "title": "string"
        }
    ],
    "rights": "string",
    "author": {
        "name": "string",
        "email": "string"
    },
    "entries": [
        {
        "id": "string",
        "title": "string",
        "subtitle": "string",
        "updated": "2025-08-08T09:29:15.762Z",
        "links": [
            {
            "href": "string",
            "rel": "self",
            "type": "string",
            "title": "string"
            }
        ],
        "content": "string",
        "categories": [
            {
            "term": "string",
            "label": "string"
            }
        ],
        "polygon": {
            "west": 0,
            "south": 0,
            "east": 0,
            "north": 0
        }
        }
    ]
}
```
???

## Permission de la suppression d'une livraison au statut UNSTABLE

La suppression d'une livraison au statut UNSTABLE est maintenant possible avec la route :
??? DELETE "/datastores/{datastore}/uploads/{upload}"

```title="Contenu"
/datastores/{datastore}/uploads/{upload}
```
???

## API de téléchargelent d'un fichier d'une livraison

Mise en place d’une API permettant de récupérer un fichier contenu dans une livraison.

Le paramètres à préciser dans la requête : - path : Le "chemin" relatif du fichier souhaité au sein de la livraison en request param

??? GET "/datastores/{datastore}/uploads/{upload}"

```title="Contenu"
/datastores/{datastore}/uploads/{upload}/data
```
???

En sortie, le fichier demandé est téléchargé.
## Changement API modification d'une livraison

Pour la route API PATCH /datastores/{datastore}/uploads/{upload}, il est maintenant possible de modifier le srs de la livraison dans le request body de l'API.

## Ignorer les fichiers préfixés par le double underscore __ lors des vérifications et traitements

Afin d'améliorer la maintenabilité du système, les fichiers préfixés par le double underscore __ sont ignorés lors des vérifications de la livraison et lors des traitements. En conséquence, par exemple, pour la génération d’une donnée stockée ARCHIVE depuis une livraison ARCHIVE, les fichiers « ignorés » présents dans la livraison ne se retrouvent pas dans la donnée stockée.

# Correction de bugs

- [ENTREPOT] Correction de mauvais filtrage sur les noms de livraison lorsque le nom contenait un underscore _ 
- [ENTREPOT] Correction d'un bug où le nombre de résultat était différent sur la route /api/datastores/{datastore}/permissions selon l'utilisation ou non du paramètre sort.
- [ENTREPOT] Pour les lignes API GET /datastores/{datastore}/uploads/{upload}/data et GET /datastores/{datastore}/statics/{static}/file, correction du content-type renvoyé : pour le gpkg, retourne "application/geopackage+sqlite3" et, si le mime type n'est pas connu, renvoie "application/octet-stream".

