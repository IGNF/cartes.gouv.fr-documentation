---
title: Correction de bugs de l’entrepôt
description: Correction de plusieurs anomalies concernant les publications de métadonnées, d’annexes et de documents, ainsi qu’un cas d’erreur de livraison. Petite correction dans la documentation Swagger
tags:
    - Entrepôt
eleventyNavigation:
    key: Correction de bugs de l’entrepôt
    order: -20260819
date: 2026-08-19
---

## Corrections de bugs

- [Entrepôt] Correction d’une erreur 500 lors de la [publication de métadonnées](https://data.geopf.fr/api/swagger-ui/index.html#/M%C3%A9tadonn%C3%A9es/publish)
- [Entrepôt] Correction des fichiers de livraison bloqués lorsqu’une erreur a lieu [pendant la livraison](https://data.geopf.fr/api/swagger-ui/index.html#/Livraisons%20et%20v%C3%A9rifications/uploadData)
- [Entrepôt] Correction de la création de compte dans l’entrepôt
- [Entrepôt] Correction d’un bug pour la [publication des annexes](https://data.geopf.fr/api/swagger-ui/index.html#/Annexes/publish_1) et des [documents personnels](https://data.geopf.fr/api/swagger-ui/index.html#/Documents%20personnels/create)
- [Entrepôt] Correction du Swagger de l’entrepôt qui avait le paramètre `tag` qui était rempli automatiquement et de la mise en forme `multipart` qui a disparu pour certaines requêtes