---
title: Publication du champ extra sur le service de recherche de couche
description: Il est possible d’ajouter des informations personnalisées au niveau du document de la couche sur le service de recherche via le champ extra de la configuration
tags:
    - Diffusion
    - Recherche
eleventyNavigation:
    key: Publication du champ « extra » sur le service de recherche de couche
    order: 18
---

## Changements

Pour avoir un champ « extra » personnalisé sur le service de recherche de couche, il suffit d’ajouter ces informations au niveau de la configuration

Avec la valeur « extra » suivante sur la configuration :

??? Champ extra personnalisé

```json
{
    ...
    "extra": {
        "_search": {
            "toto": "titi"
        },
        "interne": "secret"
    },
    ...
}
```

???

<br>

On retrouvera la valeur suivante sur le service de recherche :

??? Champ extra

```json
{
    ...
    "extra": {
        "toto": "titi"
    },
    ...
} 
```

???

<br>

Seule la sous-partie « _search » est publiée pour pouvoir utiliser le champ « extra » de la configuration pour des informations internes.