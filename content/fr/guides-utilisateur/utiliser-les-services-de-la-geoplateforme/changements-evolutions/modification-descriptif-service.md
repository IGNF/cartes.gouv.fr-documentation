---
title: Modification descriptif service
description: Modifications des descriptions des services
tags:
    - WFS
    - WMS-Vecteur
    - Géocodage
    - Téléchargement
    - WMTS
eleventyNavigation:
    key: Modification descriptif service
    order: -20260107
date: 2026-01-07
---

## Changements

Modification des informations dans les <span lang="en">_GetCap WFS_</span>, <span lang="en">_WMS-V_</span> et « Téléchargement ».

Modification de la description du champ « terr » dans le <span lang="en">_GetCap_</span> Géocodage.

Passage de :

```plain
"une limitation de la zone de recherche de localisants. Les valeurs acceptées sont METROPOLE, DOMTOM, les codes département et les codes communes (INSEE)."
```

à :

```plain
"une limitation de la zone de recherche de localisants. Les valeurs acceptées sont METROPOLE, DOMTOM, code(s) INSEE de département, code(s) postaux de commune"
```

<span lang="en">_WMTS_</span>, <span lang="en">_WMS_</span>, <span lang="en">_WFS_</span> : envoi d’une erreur si un paramètre présent X fois avec une valeur différente.

## Correction de bugs

- [Téléchargement privés] : nombre de résultats affichés par défaut incorrect corrigé