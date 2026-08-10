---
title: Correction d’un bug à la lecture de l’encodage TIFF en 2 canaux en WMS-Raster + Modification sur l’entrepôt
description: Correction d’un bug à la lecture de l’encodage TIFF en 2 canaux en WMS-Raster, modification gestion stockage livraison, ajout champ extra à la route catalogs/organizations, correction valeurs aberrantes sur occupaaation de l’espace de livraison
tags:
    - WMS-Raster
    - WMTS
    - Entrepôt
eleventyNavigation:
    key: Correction d’un bug à la lecture de l’encodage TIFF en 2 canaux en WMS-Raster + Modification sur l’entrepôt
    order: -20260812
date: 2026-08-12
---

## Changements

**Modification de la gestion du stockage d’une livraison au niveau de l’entité <span lang="en">_upload_</span>**

Le stockage est directement porté par l’<span lang="en">_upload_</span> et plus par le datastore. Ce qui va permettre aux administrateurs de changer le stockage des livraisons du datastore sans impacter les livraisons en cours.

Ainsi les nouvelles livraisons se créeront sur le nouveau stockage tandis que les anciennes livraisons resteront sur l’ancien stockage jusqu’à leur suppression.

**Ajout du champ `extra` dans la réponse de la route [/catalogs/organizations](https://data.geopf.fr/api/swagger-ui/index.html#/Acc%C3%A8s%20publics/getOrganizations)**

## Corrections de bugs

- [WMS-Raster] Gestion de l’encodage TIFF en 2 canaux qui entrainaient des erreurs en [WMS-Raster](../../diffusion/wms-raster/) (nouvelle livraison suite à une correction partielle la semaine dernière)
- [Entrepôt] Correction des valeurs aberrantes sur l’[occupation de l’espace de livraison des datastores](https://data.geopf.fr/api/swagger-ui/index.html#/Entrep%C3%B4t/getStorages)
- [Entrepôt] Correction du schéma de réponse de la route [GET /users/me/keys/{key}/accesses](https://data.geopf.fr/api/swagger-ui/index.html#/Utilisateurs/getAccessesByKey) où le retour du champ permission était marqué comme obligatoire alors que cela n’est pas nécessairement le cas pour les données privées en "open=false"