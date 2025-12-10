---
title: Sélection d’objets WFS
tags:
    - WFS
eleventyNavigation:
    key: Sélection d’objets WFS
    parent: API de diffusion
    order: 5
    nav: guides-utilisateur
pictogram: "digital/internet.svg"
description: Tous les détails sur les « Web Feature Service » de la Géoplateforme
summary:
    visible: true
    depth: 1
---

## Généralité

Ce service s’appuie sur le protocole WFS en version 2.0.0.

Il est limité à 30 requêtes/s.

Il permet la récupération d’extraits de bases de données ​via des requêtes fondées sur des critères et valeurs​.

Il propose les méthodes suivantes :

- **GetCapabilities** pour obtenir les métadonnées du service
- **DescribeFeatureType** pour obtenir la description de la structure d’une donnée
- **GetFeature** (hits) pour obtenir le nombre d’objets associés à une demande
- **GetFeature** (results) pour obtenir les objets associés à une demande

---

## Requête GetCapabilities

```plain
https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetCapabilities
```

---

## Requête DescribeFeatureType

```plain
https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&REQUEST=DescribeFeatureType&TYPENAMES={classes}&OUTPUTFORMAT={format_de_sortie}
```

---

## Requête GetFeature (hits)

```plain
https://data.geopf.fr/wfs/ows?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES={classes}&RESULTTYPE=hits
```

---

## Requête GetFeature (results)

```plain
https://data.geopf.fr/wfs/ows?SERVICE=WFS&TYPENAMES={classes}&REQUEST=GetFeature&VERSION=2.0.0
```

La bascule entre le Géoportail et la Géoplateforme entraîne des différences dans les réponses WFS. Certains éléments de vos requêtes peuvent être impactés. [Plus d’informations](https://geoservices.ign.fr/documentation/flux-wfs-les-changements-entre-geoservices-et-geoplateforme).
