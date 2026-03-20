---
title: OGR
description: Tutoriels pour utiliser les API de la Géoplateforme avec OGR
tags:
    - OGR
    - API
    - Géoplateforme
eleventyNavigation:
    key: OGR
    order: 4
pictogram: digital/coding.svg
---

## Étape 1

Installer [<span lang="en">_OSGeo4W_</span>](https://trac.osgeo.org/osgeo4w/){target="_blank" rel="noopener noreferrer" title="OSGeo4W - ouvre une nouvelle fenêtre"} avec les librairies <span lang="en">_GDAL/OGR_</span>, <span lang="en">_Xerces_</span> ou <span lang="en">_Expat support_</span>, <span lang="en">_curl_</span> (les librairies manquantes seront proposées).

---

## Étape 2

Exécuter cette invite en ligne de commande :
```bash
C:\OSGeo4W64\OSGeo4W64.bat
```

---

## Étape 3

**Modifier le <span lang="en">_proxy_</span> de <span lang="en">_GDAL_</span> si vous en avez un, en entrant dans la ligne de commande :**
- Pour définir le <span lang="en">_proxy_</span> :

    ```bash
    set GDAL_HTTP_PROXY=adresse_proxy:port_proxy
    ```

- Pour définir le <span lang="en">_login_</span> et mot de passe du <span lang="en">_proxy_</span> :

    ```bash
    set GDAL_HTTP_PROXYUSERPWD=user:passwd
    ```

---

## Étape 4

**Requêter la donnée concernée en shape en entrant (exemple sur les parcelles) :**
- pour obtenir les parcelles sur une commune (ici Bruz) :

    ```bash
    ogr2ogr -f “Esri Shapefile” -t_srs “EPSG:2154” “parcelle.shp” “wfs:https://data.geopf.fr/wfs/ows?SERVICE=WFS” “CADASTRALPARCELS.PARCELLAIRE_EXPRESS:parcelle” -where “nom_com='Bruz'”
    ```

- pour obtenir les parcelles sur une commune par code INSEE (ici 02408) :

    ```bash
    ogr2ogr -f “Esri Shapefile” -t_srs “EPSG:2154” “parcelle.shp” “https://data.geopf.fr/wfs/ows?SERVICE=WFS” “CADASTRALPARCELS.PARCELLAIRE_EXPRESS:parcelle” -where “code_dep='02' AND code_com='408'”
    ```

- pour obtenir les parcelles sur une emprise :

    ```bash
    ogr2ogr -spat 705200 6734800 705300 6734900 -f “Esri Shapefile” -spat_srs “EPSG:2154” -t_srs “EPSG:2154” “parcelle.shp” “wfs:https://data.geopf.fr/wfs/ows?SERVICE=WFS” “CADASTRALPARCELS.PARCELLAIRE_EXPRESS:parcelle”
    ```

---

## Étape 5

Faire les mêmes opérations (hormis la configuration du <span lang="en">_proxy_</span> si l’invite en ligne de commande est toujours ouverte) pour :

```plain
CADASTRALPARCELS.PARCELLAIRE_EXPRESS:feuille
```

```plain
CADASTRALPARCELS.PARCELLAIRE_EXPRESS:localisant
```

Ou toutes autres données en adaptant éventuellement les requêtes aux attributs de la base de données concernée (les attributs peuvent être consultés de cette manière dans un navigateur) :
```plain
https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&Request=Describefeaturetype&typeName=NOM_de_la_Ressource
```

Où **« NOM_de_la_Ressource »** correspond au nom technique de la ressource <span lang="en">_WFS_</span>.

:::warning
L’usage courant des services WFS se limite à des emprises raisonnables (échelles du 1/25 000e et plus grandes) ou à un nombre d’objets limité (de l’ordre de 5000 objets). L’objet de ce tutoriel n’est pas de proposer un substitut au téléchargement sur des zones plus grandes. En cas de doutes, nous vous invitons à contacter le support de l’IGN.
:::