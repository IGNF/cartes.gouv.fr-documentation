---
title: Correction du filtrage sur des catégories avec virgule sur le Gécocodage
description: Correction du filtrage sur des catégories avec virgule sur le Gécocodage, correction de la description d’une route Extraction dans le Swagger
tags:
    - Géocodage
    - Extraction
eleventyNavigation:
    key: Correction de bugs sur le WFS et le WMS Unique
    order: -20261125
date: 2026-11-25
---

## Corrections de bugs

- [Géocodage] Correction du filtrage sur des catégories comportant une virgule. La virgule était interprété comme un séparateur et donc la requête était considéré comme un filtrage sur 2 catégories. Pour éviter cela, il faudra mettre la catégorie entre guillemet. Par exemple, pour la catégorie "Glacier, névé", la requête devra ressembler à ceci : {{ urls.geocodage }}/search?q=Glacier&index=poi&limit=1&category="glacier, névé"
- [Extraction] Correction de la description de la route `GET /jobs/{jobID}/results` dans le [Swagger]({{ urls.extraction_swagger }}) en ’Récupère le résultat d’un job’