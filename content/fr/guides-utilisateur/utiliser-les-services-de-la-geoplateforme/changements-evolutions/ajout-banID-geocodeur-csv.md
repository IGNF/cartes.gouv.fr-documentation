---
title: Ajout du champ banID dans la réponse du géocodeur CSV
description: Ajout du champ banID dans la réponse du géocodeur CSV, correction de l'URL du GetCap itinéraire sensible à la casse
tags:
    - Géocodage
    - Itinéraire
    - Keycloak
eleventyNavigation:
    key: Ajout du champ banID dans la réponse du géocodeur CSV
    order: -20260527
date: 2026-05-27
---

## Changements

Ajout du champ banID dans la réponse du géocodeur CSV

## Corrections de bugs

- [Itinéraire] Correction de l’URL du GetCap itinéraire qui était sensible à la casse (par exemple, https://data.geopf.fr/navigation/GetCapabilities sera de nouveau fonctionnel)
- [Keycloak] Correction d'un bug où le captcha était demandé dès la première authentification (alors qu'il ne doit être demandé qu'après une erreur d'authentification)
