---
title: OGR
description: Tutoriels pour utiliser les APIs de la Géoplateforme avec OGR
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

Installer [_<span lang="en">Osgeo4w64</span>_](https://trac.osgeo.org/osgeo4w/){target="_blank" rel="noopener noreferrer" title="Osgeo4w64"} (si ordi 64bits) avec les librairies *<span lang="en">gdal/ogr</span>*, *<span lang="en">Xerces</span>* ou *<span lang="en">Expat support</span>*, *<span lang="en">curl</span>* (les librairies manquantes seront proposées).

---

## Étape 2

Exécuter cette invite en ligne de commande :
```njk
{% raw %}
    C:\OSGeo4W64\OSGeo4W64.bat
{% endraw %}
```

---

## Étape 3

**Modifier le proxy de Gdal si vous en avez un, en entrant dans la ligne de commande :**

- Pour définir le *<span lang="en">proxy</span>* :
```njk
{% raw %}
    set GDAL_HTTP_PROXY=adresse_proxy:port_proxy
{% endraw %}
```

- Pour définir le *<span lang="en">login</span>* et mot de passe du *<span lang="en">proxy</span>* :
```njk
{% raw %}
    set GDAL_HTTP_PROXYUSERPWD=user:passwd
{% endraw %}
```

---

## Étape 4

**Requêter la donnée concernée en shape en entrant (exemple sur les parcelles)**

- pour obtenir les parcelles sur une commune (ici Bruz) :
```njk
{% raw %}
    ogr2ogr -f “Esri Shapefile” -t_srs “EPSG:2154” “parcelle.shp” “wfs:https://data.geopf.fr/wfs/ows?SERVICE=WFS” “CADASTRALPARCELS.PARCELLAIRE_EXPRESS:parcelle” -where “nom_com='Bruz'”
{% endraw %}
```

- pour obtenir les parcelles sur une commune par code INSEE (ici 02408) :
```njk
{% raw %}
    ogr2ogr -f “Esri Shapefile” -t_srs “EPSG:2154” “parcelle.shp” “https://data.geopf.fr/wfs/ows?SERVICE=WFS” “CADASTRALPARCELS.PARCELLAIRE_EXPRESS:parcelle” -where “code_dep='02' AND code_com='408'”
{% endraw %}
```

- pour obtenir les parcelles sur une emprise :
```njk
{% raw %}
    ogr2ogr -spat 705200 6734800 705300 6734900 -f “Esri Shapefile” -spat_srs “EPSG:2154” -t_srs “EPSG:2154” “parcelle.shp” “wfs:https://data.geopf.fr/wfs/ows?SERVICE=WFS” “CADASTRALPARCELS.PARCELLAIRE_EXPRESS:parcelle”
{% endraw %}
```

---


## Étape 5

Faire les mêmes opérations (hormis la configuration du *<span lang="en">proxy</span>* si l’invite en ligne de commande est toujours ouverte) pour :
```njk
{% raw %}
    CADASTRALPARCELS.PARCELLAIRE_EXPRESS:feuille
{% endraw %}
```
```njk
{% raw %}
    CADASTRALPARCELS.PARCELLAIRE_EXPRESS:localisant
{% endraw %}
```
```njk
{% raw %}
    CADASTRALPARCELS.PARCELLAIRE_EXPRESS:localisant
{% endraw %}
```

Où toutes autres données en adaptant éventuellement les requêtes aux attributs de la base de données concernées (les attributs peuvent être consultés de cette manière dans un navigateur) :
```njk
{% raw %}
    https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&Request=Describefeaturetype&typeName=NOM_de_la_Ressource
{% endraw %}
```

Où **NOM_de_la_Ressource** correspond au nom technique de la ressource *<span lang="en">WFS</span>*.

:::warning
L’usage courant des services WFS se limite à des emprises raisonnables (échelles du 1/25 000e et plus grandes) ou à un nombre d’objets limité (de l’ordre de 5000 objets). L’objet de ce tutoriel n’est pas de proposer un substitut au téléchargement sur des zones plus grandes. En cas de doutes, nous vous invitons à contacter le support de l’IGN.
:::