---
title: MapLibre GL JS
description: Tutoriels pour utiliser les API de la Géoplateforme avec MapLibre GL JS
tags:
    - MapLibre GL JS
    - JavaScript
    - API
    - Géoplateforme
eleventyNavigation:
    key: MapLibre GL JS
    order: 7
pictogram: digital/coding.svg
---

## Introduction

[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/){target="_blank" rel="noopener noreferrer" title="MapLibre GL JS - ouvre une nouvelle fenêtre"} est une bibliothèque JavaScript <span lang="en">_open-source_</span> qui affiche des cartes interactives dans un navigateur, à partir de tuiles vectorielles ou d’images tuilées. Elle lit directement les fichiers de styles de la Géoplateforme et, depuis sa version 6.15, elle affiche aussi des tuiles dans une autre projection que Web Mercator, comme Lambert 93.

Dans cet article nous allons apprendre à :

- Afficher le Plan IGN en tuiles vectorielles
- Afficher une couche WMTS en Lambert 93

Les exemples sont des pages HTML complètes. Servez-les avec un serveur web local, par exemple avec la commande `python -m http.server` lancée dans leur dossier, puis ouvrez `http://localhost:8000` dans un navigateur.

<br>

## Afficher le Plan IGN en tuiles vectorielles

Les fichiers de styles du Plan IGN suivent la spécification de style MapLibre, il suffit donc d’en donner l’URL à la carte :

```html
<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.css" />
        <style>
            body {
                margin: 0;
            }
            #map {
                height: 100vh;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script type="module">
            import * as maplibregl from "https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.mjs";

            const map = new maplibregl.Map({
                container: "map",
                style: "https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/standard.json",
                center: [2.35, 48.85],
                zoom: 12,
            });
            map.addControl(new maplibregl.NavigationControl());
        </script>
    </body>
</html>
```

![Plan IGN en tuiles vectorielles avec MapLibre GL JS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maplibre/01_plan-ign-vecteur.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Pour une autre représentation du Plan IGN, remplacez `standard.json` par `classique.json`, `accentue.json`, `gris.json` ou `sans_toponymes.json`.

<br>

## Afficher une couche WMTS en Lambert 93

Les couches WMTS en Lambert 93, comme celles dont le nom se termine par `.L93`, sont publiées dans les pyramides `2154_10cm_6_20`, `2154_5cm_6_22`, etc. Elles partagent la même grille : la tuile de niveau 0 a son coin haut gauche en (0, 12 000 000) et une résolution de 209 715,2 m par pixel, soit 53 687 091,2 m pour ses 256 pixels.

On déclare d’abord cette projection avec `addProjection`, en utilisant [proj4js](https://proj4js.org/){target="_blank" rel="noopener noreferrer" title="proj4js - ouvre une nouvelle fenêtre"} pour passer des longitudes et latitudes aux coordonnées Lambert 93. Le style de la carte l’utilise ensuite par son nom :

```html
<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.css" />
        <script src="https://unpkg.com/proj4@2.22.0/dist/proj4.js"></script>
        <style>
            body {
                margin: 0;
            }
            #map {
                height: 100vh;
            }
        </style>
    </head>
    <body>
        <div id="map"></div>
        <script type="module">
            import * as maplibregl from "https://unpkg.com/maplibre-gl@6.16.0/dist/maplibre-gl.mjs";

            // Lambert 93 et la grille des pyramides 2154 de la Géoplateforme :
            // le coin haut gauche de la tuile de niveau 0 et sa largeur en mètres.
            maplibregl.addProjection({
                name: "EPSG:2154",
                projection: proj4(
                    "EPSG:4326",
                    "+proj=lcc +lat_0=46.5 +lon_0=3 +lat_1=49 +lat_2=44 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
                ),
                tileMatrixSet: { origin: [0, 12000000], extentAtZoom0: 53687091.2 },
            });

            const map = new maplibregl.Map({
                container: "map",
                style: {
                    version: 8,
                    projection: { type: "EPSG:2154" },
                    sources: {
                        "plan-ign": {
                            type: "raster",
                            tiles: [
                                "https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2.L93&STYLE=normal&FORMAT=image/jpeg&TILEMATRIXSET=2154_10cm_6_20&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
                            ],
                            tileSize: 256,
                            // La pyramide 2154_10cm_6_20 va du niveau 6 au niveau 20.
                            minzoom: 6,
                            maxzoom: 20,
                            // L'emprise de la couche, pour ne demander que des tuiles qui existent.
                            bounds: [-5.15, 41.32, 9.56, 51.09],
                            attribution: '© <a href="https://www.ign.fr/">IGN</a>',
                        },
                    },
                    layers: [{ id: "plan-ign", type: "raster", source: "plan-ign" }],
                },
                center: [2.35, 48.85],
                zoom: 13,
                minZoom: 5,
            });
            map.addControl(new maplibregl.NavigationControl());
        </script>
    </body>
</html>
```

![Plan IGN v2 en Lambert 93 avec MapLibre GL JS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maplibre/02_plan-ign-lambert93.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info

- Le centre de la carte, les marqueurs et les emprises s’expriment toujours en longitude et latitude.
- Les niveaux de zoom suivent la grille Lambert 93 et non celle de Web Mercator. Autour de la France, le zoom 13 en Lambert 93 montre à peu près la même zone que le zoom 12 en Web Mercator.
- Pour une autre couche, reprenez les valeurs `LAYER`, `FORMAT` et `TILEMATRIXSET` du [`GetCapabilities`](https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities){target="_blank" rel="noopener noreferrer" title="GetCapabilities WMTS - ouvre une nouvelle fenêtre"}, par exemple `HR.ORTHOIMAGERY.ORTHOPHOTOS.L93` pour les photographies aériennes, et adaptez `minzoom` et `maxzoom` aux niveaux de sa pyramide.
  :::
