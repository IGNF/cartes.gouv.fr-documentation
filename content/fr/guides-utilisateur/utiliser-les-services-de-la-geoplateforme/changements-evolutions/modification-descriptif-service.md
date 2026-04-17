---
title: Modification descriptif service
description: Des modifications des descriptions des services.
tags:
    - WFS
    - WMS-V
    - Géocodage
    - Téléchargement
    - WMTS
eleventyNavigation:
    key: Modification descriptif service
    order: 7
---

## Changements

Modification des informations dans les Get Cap WFS, WMS-V et Téléchargement
Modification de la description du champ terr dans le GetCap Geocodage

Passage de :

```title="Contenu"
"une limitation de la zone de recherche de localisants. Les valeurs acceptés sont METROPOLE, DOMTOM, les codes département et les codes communes (INSEE)."
```

à :
```title="Contenu"
"une limitation de la zone de recherche de localisants. Les valeurs acceptés sont METROPOLE, DOMTOM, code(s) INSEE de département, code(s) postaux de commune"
```

WMTS, WMS, WFS : envoi d'une erreur si un paramètre présent X fois avec une valeur différente

## Correction de bugs

- [Téléchargement privés] : nombre de résultats affichés par défaut incorrects corrigés
