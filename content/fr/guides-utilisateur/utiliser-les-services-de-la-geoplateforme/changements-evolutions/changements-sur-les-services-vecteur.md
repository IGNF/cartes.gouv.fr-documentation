---
title: Changements sur les services Vecteur
description: Des changements sur les services Vecteur (entre autres) sont prévus le 4 mars 2026
tags:
    - WFS
    - WMS Vecteur
    - CSW
    - WMTS
eleventyNavigation:
    key: Changements sur les services Vecteur
    order: 1
---

## Changements
Ajout du format de sortie application/geo+json en WFS.

Contrôle des noms des tables des uploads Vector.

Lorsque l’on souhaite livrer une donnée Vecteur, le check-vector va contrôler le nom des tables de la donnée (pour qu’elle puisse être comprise par Geoserver). Les tables devront respecter ces règles :
- doit commencer par un caractère de [a-z_]
- ne doit contenir que des caractères de [a-z0-9_]

<br>

Changements d’informations dans le GetCap CSW.

## Correction de bugs
- [WMTS] Avoir un code d’erreur 400 au lieu de 404 lorsqu’il y a des paramètres manquants dans la requête.