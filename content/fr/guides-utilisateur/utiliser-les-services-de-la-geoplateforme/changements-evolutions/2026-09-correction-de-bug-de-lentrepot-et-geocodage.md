---
title: Des corrections de bugs sur l’Entrepôt et sur le Géocodage
description: Correction de bugs où l’extent était absent des livraisons raster et vecteur et modification de l’exemple du champ d’autocomplétion sur la page du Swagger.
tags:
    - Géocodage
    - Entrepôt
eleventyNavigation:
    key: Des corrections de bugs sur l’Entrepôt et sur le Géocodage
    order: -20260909
date: 2026-09-09
---

## Changements

- [Géocodage] Modification de l’exemple du champ d’autocomplétion sur la page du Swagger `https://data.geopf.fr/geocodage/completion/openapi`.

<br>

## Corrections de bugs

- [Entrepôt] Correction d’un bug où l’`extent` était absent des livraisons raster et vecteur fermées.
- [Géocodage] Correction d’un bug où le paramètre `depcode` était pris en compte des `capabilities` de l’opération `/reverse`.