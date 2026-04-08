---
title: Tuiles vectorielles TMS
description: Tous les détails sur les « Tile Map Service » de la Géoplateforme
tags:
    - TMS
eleventyNavigation:
    key: Tuiles vectorielles TMS
    order: 2
pictogram: digital/internet.svg
summary:
    visible: true
    depth: 1
---

## Généralités

Ce service s’appuie sur le protocole TMS en version 1.0.0.

Il permet un affichage rapide d’images précalculées​, avec la possibilité de personnaliser l’affichage ​grâce à des légendes et à des filtres​.

Il propose les méthodes suivantes :

- Accès aux métadonnées du service
- Accès aux métadonnées d’une donnée
- Accès à une tuile

---

## Accès aux métadonnées du service

```plain
https://data.geopf.fr/tms/1.0.0
```

---

## Accès aux métadonnées d’une donnée

```plain
https://data.geopf.fr/tms/1.0.0/{Layer}/metadata.json
```

---

## Accès à une tuile

```plain
https://data.geopf.fr/tms/1.0.0/{Layer}/{z}/{x}/{y}.pbf
```

---

## Accès aux styles vectoriels

```plain
https://data.geopf.fr/annexes/ressources/vectorTiles/styles/{Layer}/{style}.json
```

Retrouvez dans l’aperçu cartographique des fiches produits les flux TMS et les différents styles associés : [Accéder au catalogue](https://cartes.gouv.fr/rechercher-une-donnee/search).
