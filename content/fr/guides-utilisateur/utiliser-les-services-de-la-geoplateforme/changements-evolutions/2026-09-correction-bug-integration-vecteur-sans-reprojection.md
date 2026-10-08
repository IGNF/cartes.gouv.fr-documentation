---
title: Correction d’un bug sur l’intégration vecteur sans reprojection + Correction d’autres bugs orchestrateur et Entrepôt
description: Correction d’un bug sur l’intégration vecteur sans reprojection, correction d’un bug avec les fichiers GZ, correction de la casse pour les output WFS, blocage de la création d’une vue commençant par un chiffre, correction d’un bug sur le Swagger Entrepôt
tags:
    - Orchestrateur
    - Vecteur
    - Entrepôt
eleventyNavigation:
    key: Correction d’un bug sur l’intégration vecteur sans reprojection + Correction d’autres bugs orchestrateur et Entrepôt
    order: -20260930
date: 2026-09-30
---

## Corrections de bugs

- [Orchestrateur] [Vecteur] Correction d’un bug du traitement d’[intégration vecteur](../../../../guides-developpeur/tutoriels/gestion-des-donnees-vecteur/alimentation-diffusion-vecteur/integration/) où une erreur pouvait apparaitre si aucune reprojection n’était demandée
- [Orchestrateur] Correction d’un bug où les fichiers GZ faisaient planter le traitement de [génération d’archive](../../../../guides-developpeur/tutoriels/gestion-des-donnees-archive/alimentation-diffusion-archive/)
- [Vecteur] [WFS] Correction du fait que les `outputFormat` du [WFS]({{ urls.public.wfs }}?SERVICE=WFS&REQUEST=GetCapabilities&VERSION=2.0.0) étaient sensibles à la casse
- [Orchestrateur] Blocage de la création d’une vue commençant par un chiffre via la [dérivation vecteur](../../../../guides-developpeur/tutoriels/gestion-des-donnees-vecteur/derivation/) (cela bloquait la donnée stockée contenant cette vue)
- [Entrepôt] Correction d’un bug où le `request_body` était indisponible pour faire des requêtes `POST` sur le [Swagger]({{ urls.swagger }})