---
title: Images tuilées WMTS
tags:
    - WMTS
eleventyNavigation:
    key: Images tuilées WMTS
    parent: API de diffusion
    order: 1
    nav: guides-utilisateur
pictogram: "digital/internet.svg"
description: Tous les détails sur les « Web Map Tile Service » de la Géoplateforme
summary:
    visible: true
    depth: 1
---

## Généralités

Ce service s’appuie sur le protocole WMTS en version 1.0.0.

Il permet un affichage rapide d’images précalculées​ dans un format, un système de référence​ et des niveaux de zoom prédéfinis​.

Il propose les méthodes suivantes :

- **GetCapabilities** pour obtenir les métadonnées du service
- **GetTile** pour obtenir une tuile
- **GetFeatureInfo** pour obtenir les métadonnées d’une tuile

---

## Requête GetCapabilities

```plain
https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
```

La requête a pour caractéristiques :

- Paramètres obligatoires :
    - SERVICE=WMTS
    - REQUEST=GetCapabilities
    - VERSION=1.0.0
- Méthode possible : GET
- Format de réponse : XML

---

## Requête GetTile

```plain
https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER={Couche}&STYLE={Style}&FORMAT={format}&TILEMATRIXSET={TileMatrixSet}&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}
```

La requête a pour caractéristiques :

- Paramètres obligatoires :
    - SERVICE=WMTS
    - REQUEST=GetTile
    - VERSION=1.0.0
    - LAYER : la donnée consultée
    - STYLE : le style de rendu à appliquer
    - FORMAT
    - TILEMATRIXSET : le nom de la pyramide d’images
    - TILEMATRIX : le nom de la matrice qui contient la tuile
    - TILEROW : le numéro de ligne du coin supérieur gauche de la tuile
    - TILECOL : le numéro de colonne du coin supérieur gauche de la tuile
- Méthode possible : GET
- Format de réponse : dépend du format de la donnée (PNG, JPEG, TIFF, BIL...)

---

## Requête GetFeatureInfo

```plain
https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetFeatureInfo&VERSION=1.0.0&LAYER={Couche}&STYLE={Style}&FORMAT={Format}&I={abscisse}&J={ordonnée}&INFOFORMAT={format}
```

La requête a pour caractéristiques :

- Paramètres obligatoires :
    - SERVICE=WMTS
    - REQUEST=GetFeatureInfo
    - VERSION=1.0.0
    - I : abscisse d’un point dans l’image en pixels
    - J : ordonnée d’un point dans l’image en pixels
    - INFOFORMAT
    - LAYER : la couche demandée
    - STYLE : le nom d’un style de rendu de la couche à appliquer
    - FORMAT
- Méthode possible : GET
