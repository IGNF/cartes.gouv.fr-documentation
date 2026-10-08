---
title: Ajout d’une route d’intervisibilité sur l’altimétrie
description: Ajout d’une route d’intervisibilité sur l’altimétrie, correction de bugs Entrepôt, WFS et sur le Swagger Entrepôt
tags:
    - Altimétrie
    - Vecteur
    - Entrepôt
    - Extraction
eleventyNavigation:
    key: Ajout d’une route d’intervisibilité sur l’altimétrie
    order: -20261007
date: 2026-10-07
---

## Changements

**Ajout d’une route d’intervisibilité sur l’altimétrie**

Cette route d’intervisibilité sera `GET /altimetrie/1.0/calcul/alti/rest/intervisibility.json`.

Cette route prend en paramètres obligatoires deux longitudes (`lon`), deux latitudes (`lat`) et une ressource MNT ou MNS (`resource`).

Elle prend aussi un paramètre optionnel qui est la hauteur (`heights`).

Elle renverra `true` si les deux positions définies (+ la hauteur éventuelle) peuvent être reliées par une ligne droite sans intersecter le MNT ou le MNS. Sinon, elle renverra `false`.

Exemple : `{{ urls.public.alti }}/1.0/calcul/alti/rest/intervisibility.json?lon=6.1165861015|6.2616509753&lat=44.5906727232|44.5985842992&heights=0.1|0.1&resource={ressource}` (`ressource` à compléter avec le nom MNT ou MNS)

## Corrections de bugs

- [Entrepôt] Correction de la lenteur parfois observée sur les requêtes [`GET /datastores/{datastore}`]({{ urls.swagger }}#/Entrep%C3%B4t/get_23)
- [Extraction] Correction d’un bug où le `request_body` était indisponible pour faire des requêtes `POST` sur le [Swagger]({{ urls.extraction_swagger }})