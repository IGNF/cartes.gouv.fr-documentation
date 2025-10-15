---
title: Images WMS-Vecteur
tags:
    - WMS-Vecteur
eleventyNavigation:
    key: Images WMS-Vecteur
    parent: API de diffusion
    order: 4
    nav: guides-utilisateur
---

Ce service s’appuie sur le protocole WMS en version 1.3.0.

Il est limité à 50 requêtes/s.

Il permet un affichage d’images de données vectorielles ​avec des possibilités de personnalisation ​(style, système de référence, emprise, ​format et taille d’image)​.

Il propose les méthodes suivantes :

- **GetCapabilities** pour obtenir les métadonnées du service
- **GetMap** pour obtenir une carte
- **GetFeatureInfo** pour obtenir les métadonnées d’une carte

## Requête GetCapabilities

```plain
https://data.geopf.fr/wms-v/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities
```

## Requête GetMap

```plain
https://data.geopf.fr/wms-v/ows?LAYERS={couche}&FORMAT={format}&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&STYLES={style}&CRS={crs}&BBOX={Xmin,Ymin,Xmax,Ymax}&WIDTH={largeur}&HEIGHT={hauteur}
```

## Requête GetFeatureInfo

```plain
https://data.geopf.fr/wms-v/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo&FORMAT={format}&QUERY_LAYERS={donnée_requêtée}&LAYERS={couche}&INFO_FORMAT={format_de_sortie}&I={abscisse}&J={ordonnée}&CRS={crs}&STYLES={style}&WIDTH={largeur}&HEIGHT={hauteur}&BBOX={Xmin,Ymin,Xmax,Ymax}
```
