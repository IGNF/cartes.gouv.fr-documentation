---
title: ArcGIS
description: Tutoriels pour utiliser les API de la Géoplateforme avec ArcGIS
tags:
    - ArcGIS
    - API
    - Géoplateforme
eleventyNavigation:
    key: ArcGIS
    order: 2
pictogram: digital/coding.svg
---

## Utiliser les données libres en flux WMS/WMTS

### Intégration d’un flux WMTS

Dans le menu **« Insérer »**, allez dans **« Connexions »** puis **« Nouveau serveur WMTS »**.

![Nouveau serveur WMTS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/01_serveur-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la boîte de dialogue **« Ajouter une connexion au serveur WMTS »**, renseignez le champ **« URL du serveur »** :

```plain
https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
```

Et cliquez sur **« OK »**.

![Ajouter une connexion - WMTS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/02_connexion-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Les couches issues du flux <span lang="en">_WMTS_</span> s’affichent dans l’onglet **« Serveurs »** du catalogue du projet.

![Ajout Plan IGN v2 - WMTS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/03_catalogue-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Ouvrir les images dans un nouvel onglet pour les avoir à leur taille réelle.
:::

### Intégration d’un flux WMS

Dans le menu **« Insérer »**, allez dans **« Connexions »** puis **« Nouveau serveur WMS »**.

![Nouveau serveur WMS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/04_serveur-wms.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la boîte de dialogue **« Ajouter une connexion au serveur WMS »**, renseignez le champ **« URL du serveur »** :
- **<span lang="en">_WMS_</span>-Raster :**

    ```plain
    https://data.geopf.fr/wms-r?
    ```

- **<span lang="en">_WMS_</span>-Vecteur :**

    ```plain
    https://data.geopf.fr/wms-v?
    ```

Et cliquez sur **« OK »**.

![Ajouter une connexion - WMS-r](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/05_connexion-wms.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Les couches issues du flux <span lang="en">_WMS_</span> s’affichent dans l’onglet **« Serveurs »** du catalogue du projet.

![Ajout Plan IGN v2 - WMS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/06_catalogue-wms.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Ouvrir les images dans un nouvel onglet pour les avoir à leur taille réelle.
:::

---

## Utiliser les données libres en flux WFS

### Intégration d’un flux WFS

Dans le menu **« Insérer »**, allez dans **« Connexions »** puis **« Nouveau serveur WFS »**.

![Nouveau serveur WFS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wfs/01_serveur-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la boîte de dialogue **« Ajouter une nouvelle connexion au serveur WFS »**, renseignez le champ **« URL du serveur »** :

```plain
https://data.geopf.fr/wfs?
```

Et cliquez sur **« OK »**.

![Ajouter une connexion - WFS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wfs/02_connexion-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la fenêtre **« Catalogue »**, vous retrouvez les couches disponibles du serveur <span lang="en">_WFS_</span> dans l’onglet **« Serveurs »**, puis **« WFS on data.geopf.fr.wfs »**.

Ajoutez les couches que vous souhaitez sur votre carte.

![Ajout ADMINEXPRESS - WFS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wfs/03_ajout-couche.png){.fr-responsive-img .frx-border-img .frx-img-contained}