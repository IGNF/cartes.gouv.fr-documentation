---
title: Mise en cohérence de la notion de publicité des offres
description: Afin de mettre en cohérence la notion de publicité des offres, des modifications ont été apportées sur les champs des offres et sur le fonctionnement du contrôle des accès.
tags:
    - Évolution
    - Publication
eleventyNavigation:
    key: Mise en cohérence de la notion de publicité des offres
    order: 20
---

## Changements

- Le champ visibility des offres a été supprimé
- Le champ open est forcément à true lorsque l'offre est sur un point d'accès ouvert (open = true)
- Pour consommer une offre sur un point d'accès privé avec une clé, il faut nécessairement créer un accès explicite entre la clé et l'offre
- Pour ajouter un accès entre une clé et une offre d'un point d'accès privé, on peut ne pas préciser de permission si l'offre est ouverte (open = true)
- Si l'offre ouverte sur une point d'accès privé est passée en privé, tous les accès à cette offre sans permission sont supprimés
- La route de catalogue des offres retourne les offres ouvertes (open = true). Il est possible de filtrer sur l'aspect ouvert du point d'accès via le paramètre de requête is_endpoint_open.
