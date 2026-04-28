---
title: Optimisation des services pg_tileserv et ROK4
description: Optimisation du service pg_tileserv et montée de version ROK4 (WMTS et WMS Raster)
tags:
    - pg_tileserv
    - Keycloak
    - WMTS
    - WMS-Raster
eleventyNavigation:
    key: Optimisation des services pg_tileserv et ROK4
    order: 26
---

## Changements

Optimisation du service pg_tileserv

Jusqu'à présent, le postgresql proxy faisait des requêtes sur le postgresql source sans filtrage géométrique. Ce qui faisait une lecture longue et gourmande qui pouvait fortement ralentir le service. Cela va être corrigé pour accélérer le service.

Montée de version ROK4 (WMTS et WMS Raster)
   - Gestion du style TerrainRGB
   - Définition du timeout pour les intéraction S3 ou WMS (GFI) (afin de limiter des fuites mémoires sur le service)


## Correction de bugs

- [Keycloak] Retour de la page de modification du TOTP.