---
title: Correction d’un bug sur l’intégration vecteur sans reprojection + Correction d’autres bugs orchestrateur et entrepôt
description: Correction d’un bug sur l’intégration vecteur sans reprojection, correction d’un bug avec les fichiers .gz, correction de la casse pour les output WFS, blocage de la création d’une vue commençant par un chiffe, correction d’un bug sur le Swagger entrepôt
tags:
    - Orchestrateur
    - Vecteur
    - Entrepôt
eleventyNavigation:
    key: Correction d’un bug sur l’intégration vecteur sans reprojection + Correction d’autres bugs orchestrateur et entrepôt
    order: -20260930
date: 2026-09-30
---

## Corrections de bugs

- [Orchestrateur] [Vecteur] Correction d’un bug du traitement d’[intégration vecteur](../../../../guides-developpeur/tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/integration/) où une erreur pouvait apparaitre si aucune reprojection n’était demandée
- [Orchestrateur] Correction d’un bug où les fichiers .gz faisaient planter le traitement de [génération d’archive](../../../../guides-developpeur/tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/integration/)
- [Vecteur] [WFS] Correction du fait que les outputformat du [WFS](https://data.geopf.fr/wfs?SERVICE=WFS&REQUEST=GetCapabilities&VERSION=2.0.0) était sensible à la casse
- [Orchestrateur] Blocage de la création d’une vue commençant par un chiffre via la [dérivation vecteur](../../../../guides-developpeur/tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/integration/) (cela bloquait la donnée stockée contenant cette vue)
- [Entrepôt] Correction d’un bug où le `request_body` était indisponible pour faire des requêtes POST sur le [Swagger](https://data.geopf.fr/api/swagger-ui/index.html) 