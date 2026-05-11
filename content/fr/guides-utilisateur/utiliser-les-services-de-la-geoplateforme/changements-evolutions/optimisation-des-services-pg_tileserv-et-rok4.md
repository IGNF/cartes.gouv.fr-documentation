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
    order: -20260401
date: 2026-04-01
---

## Changements

**Optimisation du service pg_tileserv**

Jusqu’à présent, le PostgreSQL <span lang="en">_proxy_</span> faisait des requêtes sur le PostgreSQL source sans filtrage géométrique. Ce qui faisait une lecture longue et gourmande qui pouvait fortement ralentir le service. Cela va être corrigé pour accélérer le service.

Montée de version ROK4 (<span lang="en">_WMTS_</span> et <span lang="en">_WMS Raster_</span>)
- Gestion du style TerrainRGB
- Définition du timeout pour les intéraction S3 ou <span lang="en">_WMS_</span> (GFI) (afin de limiter des fuites mémoires sur le service)

<br>

## Correction de bugs

- [Keycloak] Retour de la page de modification du TOTP