---
title: Ajout d’une route d’intervisibilité sur l’altimétrie
description: Ajout d’une route d’intervisibilité sur l’altimétrie, correction de bugs entrepôt, WFS et sur le Swagger entrepôt
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

Cette route d’intervisibilité sera GET /altimetrie/1.0/calcul/alti/rest/intervisibility.json

Cette route prend en paramètre obligatoire 2 longitudes (`lon`), 2 latitudes (`lat`) et 1 ressource MNT ou MNS (`resource`).

Elle prend aussi un paramètre optionnel qui est la hauteur (`heights`).

Elle renverra `True` si les 2 positions définis (+ la hauteur éventuelle) peuvent être reliées par une ligne droite sans intersecter le MNT ou le MNS. Sinon, elle renverra `False`

Exemple : https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/intervisibility.json?lon=6.1165861015|6.2616509753&lat=44.5906727232|44.5985842992&heights=0.1|0.1&resource={ressource}
(ressource à compléter avec le nom MNT ou MNS)

## Corrections de bugs

- [Entrepôt] Correction de la lenteur parfois observée sur les requêtes [`GET /datastores/{datastore}`](https://data.geopf.fr/api/swagger-ui/index.html#/Entrep%C3%B4t/get_23)
- [Vecteur] [WFS] Correction du fait que les `outputFormat` du [WFS]({{ urls.public.wfs }}?SERVICE=WFS&REQUEST=GetCapabilities&VERSION=2.0.0) étaient sensibles à la casse
- [Extraction] Correction d’un bug où le request_body était indisponible pour faire des requêtes POST sur le [Swagger](https://data.geopf.fr/extraction/swagger-ui/index.html)