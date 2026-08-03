---
title: Correction d’un bug à la lecture de l’encodage tiff en 2 canaux en WMS Raster + correction d’autres bugs
description: Correction d’un bug à la lecture de l’encodage tiff en 2 canaux en WMS Raster, ajout d’un style permettant de rendre transparent les pixels blancs en WMS Raster, correction de bugs sur les GetCap WMTS et WMS ratser, Correction de l’absence de content-type et content-length sur les requêtes HEAD de Téléchargement
tags:
    - WMS Raster
    - WMTS
    - Téléchargement
    - Entrepôt
    - orchestrateur
eleventyNavigation:
    key: Correction d’un bug à la lecture de l’encodage tiff en 2 canaux en WMS Raster + correction d’autres bug
    order: -20260803
date: 2026-08-03
---

## Changements

**Ajout d’un nouveau style à appliquer sur le processing ["Calcul ou mise à jour de pyramide raster"](../../../../guides-developpeur/tutoriels/gestion-des-donnees-raster/alimentation-diffusion-raster/calcul-pyramide/) permettant de rendre transparent à la volée les pixels blancs en WMS Raster**

Ce nouveau style s’appelle `colorize` et est ajouté à la liste des styles disponibles dans le processing.

## Corrections de bugs

- [WMS Raster] Gestion de l’encodage tiff en 2 canaux qui entrainaient des erreurs en [WMS Raster](../diffusion/wms-raster/)
- [Téléchargement] Correction de l’absence de du content-length et du content-type dans le header des requêtes HEAD
- [WMTS] Ajout d’un préfixage de Title et Abstract sur le [GetCap WMTS](https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities) avec la valeur **ows:** afin de respecter la norme OGC
- [WMS Raster] Correction d’un problème sur les reprojections de certaines BBOX du [GetCap WMS Raster](https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities) qui affichait des valeurs impossible (par exemple, une valeur légèrement suprieur à 180 sur le WGS 84)