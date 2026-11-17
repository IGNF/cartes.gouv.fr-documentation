---
title: Limitation du nombre de couches simultanées pour le WMS Unique
description: Limitation du nombre de couches simultanées pour le WMS Unique, correction restriction projection WMS Unique, correction de la désignation du catalogue de métadonnées
tags:
    - WMS Unique
    - Métadonnées
eleventyNavigation:
    key: Limitation du nombre de couches simultanées pour le WMS Unique
    order: -20261104
date: 2026-11-04
---

## Changements

**Limitation du nombre de couches appelées simultanément pour le [WMS Unique]({{ urls.public.wms }}?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities)**

Le nombre de couches simultanées pouvant être appelé avec une requête `GetMap` va être limité à 2.

## Corrections de bugs

- [WMS Unique] Correction de la restriction des projections disponibles sur les flux du [WMS Unique]({{ urls.public.wms }}?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities)
- [Métadonnées] Correction de la désignation du catalogue de métadonnées (passage de My GeoNetwork catalogue à cartes.gouv.fr)