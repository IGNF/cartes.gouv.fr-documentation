---
title: Tuiles vectorielles TMS
tags:
    - TMS
eleventyNavigation:
    key: Tuiles vectorielles TMS
    parent: API de diffusion
    order: 2
    nav: guides-utilisateur
---

Ce service s’appuie sur le protocole TMS en version 1.0.0.

Il permet un affichage rapide d’images précalculées​, avec la possibilité de personnaliser l’affichage ​grâce à des légendes et à des filtres​.

Il propose les méthodes suivantes :

* Accès aux métadonnées du service
* Accès aux métadonnées d’une donnée
* Accès à une tuile

## Accès aux métadonnées du service

```plain
https://data.geopf.fr/tms/1.0.0
```

## Accès aux métadonnées d'une donnée

```plain
https://data.geopf.fr/tms/1.0.0/{Layer}/metadata.json
```

## Accès à une tuile

```plain
https://data.geopf.fr/tms/1.0.0/{Layer}/{z}/{x}/{y}.pbf
```

## Accès aux styles vectoriels

```plain
https://data.geopf.fr/annexes/ressources/vectorTiles/styles/{Layer}/{style}.json
```

L’IGN propose une [bibliothèque de styles disponible ici](https://geoservices.ign.fr/documentation/services/api-et-services-ogc/tuiles-vectorielles-tmswmts/styles).

