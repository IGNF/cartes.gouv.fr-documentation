---
title: Corrections de bugs lidar, entrepôt et extraction
description: Correction d’un bug d’emprise sur le Lidar, correction de lenteur sur des routes entrepôt, correction d’un bug d’extraction 
tags:
    - Orchestrateur
    - LiDAR
    - Entrepôt
    - Extraction
eleventyNavigation:
    key: Corrections de bugs lidar, entrepôt et extraction
    order: -20261021
date: 2026-10-21
---

## Corrections de bugs

- [Orchestrateur] [LiDAR] Correction du manque d’emprise sur les livraisons de pyramide EPT et les calculs des pyramides EPT
- [Entrepôt] Correction de la lenteur parfois observée sur les requêtes [`GET /datastores/{datastore}`]({{ urls.swagger }}#/Entrep%C3%B4t/get_23)
- [Extraction] Correction de `job` d’extraction coincé en `running` et non supprimable