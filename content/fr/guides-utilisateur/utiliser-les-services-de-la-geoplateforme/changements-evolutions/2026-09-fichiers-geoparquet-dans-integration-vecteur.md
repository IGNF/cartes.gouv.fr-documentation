---
title: Prise en compte des fichiers Géoparquet dans l’intégration vecteur + correction de bugs
description: Prise en compte des fichiers Géoparquet dans l’intégration vecteur, correction de l’augmentation anormale du volume de stockage de certains datastores, correction de l’indisponibilité du swagger altimétrie
tags:
    - Orchestrateur
    - Vecteur
    - Entrepôt
    - Altimétrie
eleventyNavigation:
    key: Prise en compte des fichiers Géoparquet dans l’intégration vecteur + correction de bugs
    order: -20260902
date: 2026-09-02
---

## Changements

**Prise en compte des fichiers Géoparquet dans l’[intégration vecteur](../../../../guides-developpeur/tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/integration/)**

Les fichiers Géoparquet peuvent maintenant être intégrés en base pour ensuite être utilisés dans les configurations [WFS](../../../../guides-developpeur/tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/publication-wfs/) et [WMS-Vecteur](../../../../guides-developpeur/tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/publication-wms/).

## Corrections de bugs

- [Entrepôt] Correction d’un bug où la valeur du volume de stockage augmentait de manière anormale sur certains <span lang="en">_datastores_</span>.
- [Altimétrie] Correction d’un bug faisant qu’il n’était plus possible d’accéder au <span lang="en">_swagger_</span> de l’altimétrie. Dans le même temps, l’URL de celui-ci est maintenant `https://data.geopf.fr/altimetrie/api/index.html`.