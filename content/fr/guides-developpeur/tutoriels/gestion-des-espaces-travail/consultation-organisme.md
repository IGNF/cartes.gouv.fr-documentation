---
title: Consultation d’un organisme
description: Lecture du contenu des communautés via leur organisme de rattachement
eleventyNavigation:
    key: Consultation d’un organisme
    parent: Espaces de travail
    order: 2
    nav: guides-developpeur
---

Lorsque l’on appartient à un organisme, on a la possibilité d’en gérer les membres et de lire le contenu de ses communautés.

## Gestion des membres

Pour connaître les membres de l’organisme (pagination disponible) :

??? GET "{{ urls.api_entrepot }}/organizations/{organization}/users"

``` title="Contenu" 
{{ urls.api_entrepot }}/organizations/{organization}/users
```

```json
[
    {
        "last_name": "Lopper",
        "first_name": "Dave",
        "email": "dave.lopper@organization.org",
        "_id": "{user}"
    },
    {
        "last_name": "Oriale",
        "first_name": "Edith",
        "email": "edith.oriale@organization.org",
        "_id": "{user}"
    }
]
```
???
<br>

Pour ajouter un membre à l’organisme (pas de droits plus fins, être attaché à un organisme donne tous les droits de lecture et de gestion de ses membres) :

??? PUT "{{ urls.api_entrepot }}/organizations/{organization}/users/{user}"

``` title="Contenu" 
{{ urls.api_entrepot }}/organizations/{organization}/users/{user}
```

???
<br>

Pour supprimer un membre de l’organisme :

??? DELETE "{{ urls.api_entrepot }}/organizations/{organization}/users/{user}"

``` title="Contenu" 
{{ urls.api_entrepot }}/organizations/{organization}/users/{user}
```

???
<br>

## Lecture du contenu

Avoir la liste des communautés rattachées à l’organisme peut se faire via l’appel suivant :

??? GET "{{ urls.api_entrepot }}/organizations/{organization}/communities"

``` title="Contenu" 
{{ urls.api_entrepot }}/organizations/{organization}/communities
```

```json
[
    {
        "name": "Communauté 1",
        "technical_name": "community_1",
        "organization": {
            "name": "Organisme",
            "_id": "{organization}"
        },
        "_id": "{community 1}",
        "public": false
    },
    {
        "name": "Communauté 2",
        "technical_name": "community_2",
        "organization": {
            "name": "Organisme",
            "_id": "{organization}"
        },
        "_id": "{community 2}",
        "public": false
    }
]
```
???
<br>

La liste des entités suivantes est consultable au niveau de l’organisme. Dans les réponses, l’identifiant de la communauté et de l’entrepôt sont disponibles pour pouvoir en consulter le détail. Les filtres présents sur les routes de consultation de l’entrepôt sont également disponibles dans ces routes (consulter les spécifications OpenAPI pour avoir le détail). Il est possible en plus de filtrer par communauté ou entrepôt.

* les annexes : `GET {{ urls.api_entrepot }}/organizations/{organization}/annexes`
* les configurations : `GET {{ urls.api_entrepot }}/organizations/{organization}/configurations`
* les points d’accès disponibles, avec les quotas : `GET {{ urls.api_entrepot }}/organizations/{organization}/endpoints`
* les offres : `GET {{ urls.api_entrepot }}/organizations/{organization}/offerings`
* les permissions : `GET {{ urls.api_entrepot }}/organizations/{organization}/permissions`
* les exécutions de traitement : `GET {{ urls.api_entrepot }}/organizations/{organization}/processings/executions`
* les fichiers statiques : `GET {{ urls.api_entrepot }}/organizations/{organization}/statics`
* les données stockées : `GET {{ urls.api_entrepot }}/organizations/{organization}/stored_data`
* les livraisons : `GET {{ urls.api_entrepot }}/organizations/{organization}/uploads`
