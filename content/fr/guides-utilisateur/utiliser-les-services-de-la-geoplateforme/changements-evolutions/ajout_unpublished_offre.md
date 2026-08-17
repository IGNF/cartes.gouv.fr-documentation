---
title: Ajout du statut `UNPUBLISHED` pour les offres + correction de bugs de l’entrepôt
description: Ajout du statut `UNPUBLISHED` pour les offres, corrections de multiples bugs dans l’entrepôt
tags:
    - Entrepôt
eleventyNavigation:
    key: Ajout du statut `UNPUBLISHED` pour les offres + correction de bugs de l’entrepôt
    order: -20260819
date: 2026-08-19
---

## Changements

**Ajout du statut `UNPUBLISHED` pour les offres**

Afin de gérer la désactivation de couches sans les supprimer (pour en garder l’ID, les permissions et les statistiques), on ajoute un statut `UNPUBLISHED` aux offres. Ce statut implique les nouveaux comportements suivants :

- [DELETE sur une offre en statut PUBLISHED](https://data.geopf.fr/api/swagger-ui/index.html#/Configurations%20et%20publications/delete_2) : l’offre passe en `UNPUBLISHING` puis en `UNPUBLISHED` une fois la dépublication terminé. A ce moment, l’offre n’est plus accessible (absent du GetCap par exemple) mais n’est pas encore supprimé de l’entrepôt
- Si on fait un [PUT sur une offre `UNPUBLISHED`](https://data.geopf.fr/api/swagger-ui/index.html#/Configurations%20et%20publications/synchronize), l’offre passe en `PUBLISHING` puis en `PUBLISHED` une fois la publication terminée. L’offre est de nouveau disponible comme après une publication classique
- Si on fait de nouveau un [DELETE sur une offre `UNPUBLISHED`](https://data.geopf.fr/api/swagger-ui/index.html#/Configurations%20et%20publications/delete_2), l’offre est supprimée avec toutes ses dépendances (accès et permission)

Ainsi, si on souhaite supprimer une offre, il faudra faire 2 DELETE à la suite sur celle-ci. De même pour supprimer une configuration, il faudra bien faire 2 DELETE sur son offre avant de pouvoir supprimer la configuration

De plus, il sera impossible de créer une nouvelle offre sur un endpoint s’il existe déjà une autre offre en `UNPUBLISHED` pour la même configuration sur cet endpoint

## Corrections de bugs

- [Entrepôt] Correction d’une erreur 500 lors de la [publication de métadonnées](https://data.geopf.fr/api/swagger-ui/index.html#/M%C3%A9tadonn%C3%A9es/publish)
- [Entrepôt] Correction des fichiers de livraison bloqués lorsqu’une erreur a lieu [pendant la livraison](https://data.geopf.fr/api/swagger-ui/index.html#/Livraisons%20et%20v%C3%A9rifications/uploadData)
- [Entrepôt] Correction de la création de compte dans l’entrepôt
- [Entrepôt] Correction d’un bug pour la [publication des annexes](https://data.geopf.fr/api/swagger-ui/index.html#/Annexes/publish_1) et des [documents personnels](https://data.geopf.fr/api/swagger-ui/index.html#/Documents%20personnels/create)
- [Entrepôt] Correction du Swagger de l’entrepôt qui avait le paramètre `tag` qui était rempli automatiquement et de la mise en forme `multipart` qui a disparu pour certaines requêtes