---
title: Notion d’organisme
description: L’organisme permet de regrouper des communautés et de permettre la consultation de leur contenu via un point d’entrée unique
tags:
    - Publication
eleventyNavigation:
    key: Notion d’organisme
    order: -20250215
date: 2025-02-15
---

## Changements

L’objectif est de faciliter le travail des personnes gérant plusieurs communautés, en permettant une lecture des entités des datastores via un point d’entrée unique. Cela permet également de définir des quotas de livraison globaux. Pour pouvoir accéder à ce contenu via l’organisme, il faut être un membre officiel de celui-ci. Être un membre d’une des communautés ne donne pas automatiquement d’accès aux <span lang="en">_API_</span> Organisme.

Pour savoir si votre communauté est rattachée à un organisme, faites la requête suivante.

??? GET "/communities/{community}"

```plain
/communities/{community}
```

```json
{
    "name": "Ma communauté",
    "technical_name": "community",
    "organization": {
        "name": "Mon organisme",
        "_id": "{organization}"
    },
    "datastore": {
        "active": true,
        "_id": "{datastore}"
    },
    "supervisor": {
        "last_name": "Lopper",
        "first_name": "Dave",
        "_id": "{user}"
    },
    "_id": "{community}",
    "public": false
}
```

???

<br>

Pour plus d’informations sur l’utilisation des organismes, lire le tutoriel [ici](../../../../guides-developpeur/tutoriels/gestion-des-espaces-travail/consultation-organisme){target="_blank" rel="noopener noreferrer" title="Consultation d’un organisme - ouvre une nouvelle fenêtre"}.