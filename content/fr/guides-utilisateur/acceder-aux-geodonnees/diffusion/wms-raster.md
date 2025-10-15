---
title: Images WMS-Raster
tags:
    - WMS-Raster
eleventyNavigation:
    key: Images WMS-Raster
    parent: API de diffusion
    order: 3
    nav: guides-utilisateur
---

Ce service s’appuie sur le protocole WMS en version 1.3.0

Il est limité à 40 requêtes/s.

Il permet un affichage d’images avec des possibilités de ​personnalisation (style, système de référence, ​emprise, format et taille d’image)​.

Il propose les méthodes suivantes :

- **GetCapabilities** pour obtenir les métadonnées du service
- **GetMap** pour obtenir une carte
- **GetFeatureInfo** pour obtenir les métadonnées d’une carte

## Requête GetCapabilities

```plain
https://data.geopf.fr/wms-r?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities
```

## Requête GetMap

```plain
https://data.geopf.fr/wms-r?LAYERS={couche}&FORMAT={format}&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&STYLES=&CRS={crs}&BBOX={Xmin,Ymin,Xmax,Ymax}&WIDTH={largeur}&HEIGHT={hauteur}
```

## Requête GetFeatureInfo

```plain
https://data.geopf.fr/wms-r?LAYERS={couche}&QUERY_LAYERS={donnée_requêtée}&INFO_FORMAT={format_de_sortie}&FORMAT={format}&SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo&STYLES={style}&CRS={crs}&BBOX={Xmin,Ymin,Xmax,Ymax}&WIDTH={largeur}&HEIGHT={hauteur}&I={abscisse}&J={ordonnée}
```
