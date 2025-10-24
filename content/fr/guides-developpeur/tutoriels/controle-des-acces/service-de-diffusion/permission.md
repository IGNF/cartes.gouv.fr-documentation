---
title: Gestion des permissions d'accès aux services de diffusion
mermaid: true
eleventyNavigation:
    key: Gestion des permissions d'accès aux services de diffusion
    parent: Contrôle des accès aux services de diffusion
    order: 2
    nav: guides-developpeur
summary:
    visible: true
    depth: 2
---

Certains points de diffusion des données ne sont pas en accès libre. Cela permet de définir les personnes qui pourront consommer la donnée à partir des flux mis en place.

La suite de ce tutoriel implique d'avoir accès dans son espace de travail à des points d'accès non ouverts, et d'y publier une offre.

Toutes les offres sur un point d'accès ouvert sont accessibles sans contrôle. Il est également possible d'avoir une offre sur un point d'accès a priori non ouvert, mais pour laquelle on précise qu'elle est accessible sans contrôle.

Nous allons travailler avec l'offre WFS suivante :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/offerings/{offering}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/offerings/{offering}
```

```json
{
    "open": false,
    "available": true,
    "layer_name": "pays_ecoregions",
    "type": "WFS",
    "status": "PUBLISHED",
    "configuration": {
        "name": "Pays et écorégions",
        "status": "PUBLISHED"
    },
    "endpoint": {
        "name": "privateWfs",
        "_id": "{{ ids.endpoints.private.wfs }}"
    },
    "urls": [
        
    ],
    "_id": "{offering}"
}
```
???
<br>

Le champ `available` permet facilement de bloquer tous les accès sans dépublier ni supprimer les permissions.

## Création de permissions

Une permission est un lien entre UN utilisateur **ou** UNE communauté et DES offres. L'appel de création permet de créer plusieurs permissions en une fois, c'est-à-dire de préciser une liste d'utilisateurs ou une liste de communautés. La réponse à un tel appel est donc une liste de permissions.

### Permissions personnelles

Il faut pour cela avoir les identifiants entrepôt des utilisateurs à qui on souhaite donner la permission.

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/permissions"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/permissions
```

```json
{
    "end_date": "2023-06-23T14:00:00Z",
    "licence": "Accès restreint",
    "offerings": [
        "{offering}"
    ],
    "type": "ACCOUNT",
    "users": [
        "{user}",
        "{user}"
    ]
}
```

```json
[
    {
        "licence": "Accès restreint",
        "end_date": "2023-06-23T14:00:00Z",
        "offerings": [
            {
                "type": "WFS",
                "status": "PUBLISHED",
                "layer_name": "pays_ecoregions",
                "open": false,
                "available": true,
                "_id": "{offering}"
            }
        ],
        "datastore_author": {
            "name": "Communauté des tutoriels",
            "technical_name": "tutoriels",
            "active": false,
            "_id": "{datastore}"
        },
        "beneficiary": {
            "_id": "{user}"
        },
        "only_oauth": false,
        "_id": "{permission utilisateur}"
    },
    {
        "licence": "Accès restreint",
        "end_date": "2023-06-23T14:00:00Z",
        "offerings": [
            {
                "type": "WFS",
                "status": "PUBLISHED",
                "layer_name": "pays_ecoregions",
                "open": false,
                "available": true,
                "_id": "{offering}"
            }
        ],
        "datastore_author": {
            "name": "Communauté des tutoriels",
            "technical_name": "tutoriels",
            "active": false,
            "_id": "{datastore}"
        },
        "beneficiary": {
            "_id": "{user}",
        },
        "only_oauth": false,
        "_id": "{permission utilisateur}"
    }
]
```
???
<br>

Le champ `only_oauth` permet de forcer les consommateurs de données à exploiter la permission uniquement avec leur compte personnel, et non des clés moins sécurisées (voir [Gestion des clés de consommation des services de diffusion](../cle/)).

### Permissions communautaires

Sensiblement de la même manière, on va pouvoir préciser la ou les communautés qui pourront consommer l'offre. Cela permet de déléguer à cette communauté la gestion des utilisateurs qui pourront concrètement exploiter cette permission. Cela implique donc d'avoir confiance en cette communauté et sa gestion.

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/permissions"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/permissions
```

```json
{
    "end_date": "2023-06-23T14:00:00Z",
    "licence": "Accès restreint",
    "offerings": [
        "{offering}"
    ],
    "type": "COMMUNITY",
    "users": [
        "{community}"
    ]
}
```


```json
[
    {
        "licence": "Accès restreint",
        "end_date": "2023-06-23T14:00:00Z",
        "offerings": [
            {
                "type": "WFS",
                "status": "PUBLISHED",
                "layer_name": "pays_ecoregions",
                "open": false,
                "available": true,
                "_id": "{offering}"
            }
        ],
        "datastore_author": {
            "name": "Communauté des tutoriels",
            "technical_name": "tutoriels",
            "active": false,
            "_id": "{datastore}"
        },
        "beneficiary": {
            "name": "Communauté de consommateurs de données",
            "technical_name": "consommateurs",
            "contact": "consommateurs@ign.fr",
            "public": true,
            "_id": "{community}"
        },
        "only_oauth": false,
        "_id": "{permission communauté}"
    }
]
```
???
<br>

Le travail du producteur de données s'arrête ici. C'est maintenant aux consommateurs de données de gérer leurs clés et leurs accès.

## Désactiver une offre

Si une anomalie est constatée (contenu des données, consommation abusive...), il est possible de bloquer facilement toutes les consommations en changeant le statut `available` au niveau de l'offre. Cela permet de ne rien perdre de la configuration des permissions et accès, et de pouvoir rapidement revenir en arrière.

??? PATCH "{{ urls.api_entrepot }}/datastores/{datastore}/offerings/{offering}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/offerings/{offering}
```

```json
{
    "available": false
}
```
???
<br>

Les couches correspondantes à l'offre n'apparaîtront plus dans les capacités du service et ne peuvent plus être consultées. Cela n'est possible que pour les offres liées à un point d'accès non ouvert.