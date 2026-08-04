---
title: Correction d’un bug à la lecture de l’encodage TIFF en 2 canaux en WMS-Raster + correction d’autres bugs
description: Correction d’un bug à la lecture de l’encodage TIFF en 2 canaux en WMS-Raster, ajout de la transparence à la volée en WMS-Raster, correction de bugs sur les GetCap WMTS et WMS-Raster, correction de l’absence de content-type et content-length sur les requêtes HEAD de Téléchargement
tags:
    - WMS-Raster
    - WMTS
    - Téléchargement
    - Entrepôt
eleventyNavigation:
    key: Correction d’un bug à la lecture de l’encodage TIFF en 2 canaux en WMS-Raster + correction d’autres bugs
    order: -20260803
date: 2026-08-03
---

## Changements

**Ajout de la transparence à la volée en [WMS-Raster](../../diffusion/wms-raster/)**

Pour cela, il faut livrer ce style ci-dessous en tant que `static` dans l’entrepôt :

```json
{
    "identifier": "white_to_alpha",
    "title": "Blanc transparent",
    "abstract": "Rend le blanc transparent",
    "keywords": ["white", "alpha"],
    "legend": {
        "format": "image/png",
        "url": "http://ign.fr",
        "height": 100,
        "width": 100,
        "min_scale_denominator": 0,
        "max_scale_denominator": 30
    },
    "colorize": {
        "source": [255,255,255],
        "destination": [255,255,255,0],
        "tolerance": 2
    }
}
```

Puis il faut déclarer ce style dans la configuration de la donnée dont on souhaite ajouter la transparence. Et, après la synchronisation de l’offre, les pixels blancs ou sans données deviennent transparents.

Une documentation plus approfondie devrait arriver prochainement dans la partie « Guides développeur » de la documentation.

## Corrections de bugs

- [WMS-Raster] Gestion de l’encodage TIFF en 2 canaux qui entrainaient des erreurs en [WMS-Raster](../../diffusion/wms-raster/)
- [Téléchargement] Correction de l’absence du `content-length` et du `content-type` dans le <span lang="en">_header_</span> des requêtes `HEAD`
- [WMTS] Ajout d’un préfixage de `Title` et `Abstract` sur le [GetCap WMTS](https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities) avec la valeur **`ows:`** afin de respecter la norme OGC
- [WMS-Raster] Correction d’un problème sur les reprojections de certaines BBOX du [GetCap WMS-Raster](https://data.geopf.fr/wms-r/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities) qui affichait des valeurs impossibles (par exemple, une valeur légèrement supérieure à 180 sur le WGS 84)