---
title: Changements sur les services Vecteur
description: Ajout du format de sortie « application/geo+json » en WFS et contrôle des noms des tables des uploads Vector
tags:
    - WFS
    - WMS-Vecteur
    - CSW
    - WMTS
eleventyNavigation:
    key: Changements sur les services Vecteur
    order: -20260304
date: 2026-03-04
---

## Changements

Lorsque l’on souhaite livrer une donnée vecteur, le <span lang="en">_check-vector_</span> va contrôler le nom des tables de la donnée (pour qu’elle puisse être comprise par GeoServer). Les tables devront respecter ces règles :
- doit commencer par un caractère de [a-z_]
- ne doit contenir que des caractères de [a-z0-9_]

<br>

Changements d’informations dans le GetCapabilities CSW.

## Correction de bugs

- [WMTS] Avoir un code d’erreur 400 au lieu de 404 lorsqu’il y a des paramètres manquants dans la requête.