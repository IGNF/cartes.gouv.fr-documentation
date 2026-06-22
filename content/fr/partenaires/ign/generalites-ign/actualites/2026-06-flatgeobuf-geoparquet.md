---
title: Testez les données BD TOPO® et Admin Express COG aux formats FlatGeobuf et GeoParquet
description: De nouveaux formats optimisés pour le cloud se développent. L’IGN vous propose de tester les formats FlafGeobuf (pour la visualisation) et GeoParquet (pour l’analyse de données) sur deux données vectorielles emblématiques, la BD TOPO® en édition mars 2026 et Admin Express COG en édition 2026.
tags:
    - Formats
    - Donnée vecteur
eleventyNavigation:
    key: Testez les données BD TOPO® et Admin Express COG aux formats FlatGeobuf et GeoParquet
    order: -20260619
date: 2026-06-19
---

De nouveaux formats optimisés pour le cloud se développent. L’IGN vous propose de tester les formats FlafGeobuf (pour la visualisation) et GeoParquet (pour l’analyse de données) sur deux données vectorielles emblématiques, la BD TOPO® en édition mars 2026 et Admin Express COG en édition 2026.

Ces formats partagent un objectif commun : rendre les données vectorielles plus compactes et plus rapides à utiliser qu’avec les formats plus anciens.

Pour nous aider à améliorer la diffusion des données IGN, n’hésitez pas à [nous transmettre vos retours](mailto:contact.geoservices@ign.fr?subject=FlatGeobuf%20et%20GeoParquet).

---

#### Testez le format FlatGeobuf

Supporté par QGIS, PostGIS et les principales librairies JavaScript (notamment OpenLayers, Leaflet et MapLibre), FlatGeobuf met surtout l’accent sur la lecture rapide, le streaming et l’accès spatial via index intégré.

Vous pouvez tester le format FlatGeobuf sur les données suivantes : 

##### BD TOPO® France entière – Édition mars 2026 – Format FlatGeobuf zippé
 
La liste des liens vers les classes d’objets proposées (région, département, commune...) est accessible via la requête suivante : 

 ```plain
https://data.geopf.fr/chunk/telechargement/resource/BDTOPO_PQT/BDTOPO_3-5_TOUSTHEMES_FLATGEOBUF-ZIP_WGS84G_FRA_2026-03-15?page=1&limit=50
```

Par exemple, le lien vers la classe « département » est : 

 ```plain
https://data.geopf.fr/chunk/telechargement/download/BDTOPO_PQT/BDTOPO_3-5_TOUSTHEMES_FLATGEOBUF-ZIP_WGS84G_FRA_2026-03-15/departement.fgb.zip
```

##### Admin Express COG – Édition 2026 – Format FlatGeobuf

La liste des liens vers les classes d’objets proposées (région, département, commune...) est accessible via la requête suivante :  

 ```plain
https://data.geopf.fr/chunk/telechargement/resource/ADMIN-EXPRESS-COG-PARTIEL/ADMIN-EXPRESS-COG_4-0__FLATGEOBUF_WGS84G_FRA_2026-01-01?page=1&limit=50
```

Par exemple, le lien vers la classe « département » est : 

 ```plain
https://data.geopf.fr/chunk/telechargement/download/ADMIN-EXPRESS-COG-PARTIEL/ADMIN-EXPRESS-COG_4-0__FLATGEOBUF_WGS84G_FRA_2026-01-01/departement.fgb
```

---

#### Accédez aux données FlatGeobuf et GeoParquet dans QGIS

L’accès aux données FlatGeobuf et GeoParquet dans QGIS est possible en mode « flux » (sans télécharger localement les fichiers).

Dans le cas du FlatGeobuf zippé, les fichiers zip sont directement lisibles en flux et l’utilisation du zip réduit de façon sensible le volume de données qui transite sur le réseau.

:::info
Pour ouvrir un fichier FlatGeobuf ou GeoParquet en flux dans QGIS, il vous suffit « d’ajouter une couche vecteur » (Ctrl+Maj+V) en sélectionnant : 
- Type de source : « Protocole »
- Type de protocole : « HTTP/HTTPS/FTP »
- URI : le lien vers la classe d’objets FlatGeobuf ou GeoParquet choisie
:::

Les données FlatGeobuf et GeoParquet peuvent aussi être téléchargées localement puis ouvertes en mode « fichier » (dans le cas des données zippées, vous devrez les dézipper avant de les ouvrir).

---

#### Testez le format GeoParquet

Issu du big data et supporté notamment par QGIS, GeoParquet est un format optimisé pour les grandes bases spatiales. Simple et compact, il est équivalent à un fichier CSV qui aurait été rangé par colonne plutôt que par ligne et il permet des analyses avec des performances accrues par rapport aux formats plus anciens.

Vous pouvez tester le format GeoParquet sur les données suivantes : 

##### BD TOPO® France entière – Édition mars 2026 – Format GeoParquet

La liste des liens vers les classes d’objets proposées (région, département, commune...) est accessible via la requête suivante : 

 ```plain
https://data.geopf.fr/chunk/telechargement/resource/BDTOPO_PQT/BDTOPO_3-5_TOUSTHEMES_GEOPARQUET_WGS84G_FRA_2026-03-15?page=1&limit=50
```

Par exemple, le lien vers la classe « département » est : 

 ```plain
https://data.geopf.fr/chunk/telechargement/download/BDTOPO_PQT/BDTOPO_3-5_TOUSTHEMES_GEOPARQUET_WGS84G_FRA_2026-03-15/departement.parquet
```

##### Admin Express COG – Édition 2026 – Format GeoParquet

La liste des liens vers les classes d’objets proposées (région, département, commune...) est accessible via la requête suivante : 

 ```plain
https://data.geopf.fr/chunk/telechargement/resource/ADMIN-EXPRESS-COG-PARTIEL/ADMIN-EXPRESS-COG_4-0__GEOPARQUET_WGS84G_FRA_2026-01-01?page=1&limit=50
```

Par exemple, le lien vers la classe « département » est : 

 ```plain
https://data.geopf.fr/chunk/telechargement/download/ADMIN-EXPRESS-COG-PARTIEL/ADMIN-EXPRESS-COG_4-0__GEOPARQUET_WGS84G_FRA_2026-01-01/departement.parquet
```

---

:::callout Transmettez-nous vos avis et commentaires
Pour améliorer la diffusion des données IGN, vous pouvez nous transmettre vos retours sur l’utilisation des formats FlatGeobuf et GeoParquet, ainsi que vos souhaits d’application de ces formats à d’autres données de l’IGN, à l’adresse [contact.geoservices@ign.fr](mailto:contact.geoservices@ign.fr?subject=FlatGeobuf%20et%20GeoParquet), en indiquant en objet « FlatGeobuf et GeoParquet ».
:::
