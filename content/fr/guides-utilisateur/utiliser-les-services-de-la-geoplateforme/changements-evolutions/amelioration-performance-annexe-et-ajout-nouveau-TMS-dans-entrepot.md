---
title: Amélioration performance du service annexe et ajout d’un nouveau TMS dans l’entrepôt
description: Amélioration performance du service annexe, ajout d’un nouveau TMS dans l’entrepôt et suppression d’un message d’erreur du Swagger autocomplétion
tags:
    - Annexe
    - Entrepôt
    - Altimétrie
    - Autocomplétion
eleventyNavigation:
    key: Amélioration performance du service annexe et ajout d’un nouveau TMS dans l’entrepôt
    order: -20260603
date: 2026-06-03
---

## Changements

**Amélioration des performances sur le service d’[annexe](../../../../guides-developpeur/tutoriels/gestion-des-donnees-complementaires/gestion-des-annexes/).**

**Ajout d’un nouveau TMS dans l’[entrepôt](../../../../guides-developpeur/openapi/).**

Le TMS `2154_50cm_MNx` va être ajouté dans l’entrepôt. Il va permettre de recaler correctement les [données alti](../../calcul-altimetrique/) de l’IGN qui étaient décalés de 50 cm sur les deux axes. (décalage de 25 cm vers le nord-ouest à l’échelle 18 par rapport au TMS `2154_50cm`)

## Corrections de bugs

- [Autocomplétion] Suppression d’un message d’erreur qui apparaissait à l’ouverture du [Swagger](https://data.geopf.fr/geocodage/completion/openapi)