---
title: FME
description: Tutoriels pour utiliser les API de la Géoplateforme avec FME
tags:
    - FME
    - API
    - Géoplateforme
eleventyNavigation:
    key: FME
    order: 3
pictogram: digital/coding.svg
---

## Utiliser les données IGN avec FME (version 2022.2)

Dans le menu **« File »**, cliquez sur **« Open Dataset »**.

![Ouvrir un jeu de données](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/fme/01_open-dataset.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Déroulez la liste de formats pour choisir **« More Formats »** ou accédez à **« OGC WMS (Web Map Service) »** ou **« OGC WMTS (Web Map Tile Service) »** si vous avez déjà utilisé un tel format dans FME récemment.

![Plus de formats](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/fme/02_more-formats.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionnez **« OGC WMS (Web Map Service) »** ou **« OGC WMTS (Web Map Tile Service) »** et cliquez sur **« Parameters »**.

Dans la partie **« URL »**, utilisez les services libres IGN :

- **<span lang="en">_WMS_</span>-Raster :**

    ```plain
    https://data.geopf.fr/wms-r/wms?
    ```

- **<span lang="en">_WMTS_</span> :**

    ```plain
    https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
    ```

:::warning
La version est obligatoire pour les flux <span lang="en">_WMS_</span>, FME utilisant par défaut la version 1.1.1.
:::

- **Exemple <span lang="en">_WMS_</span>-Raster :**
    
    Choisissez la couche **« Layers »** à afficher et vous avez la possibilité de jouer sur les **« Map Options »** que vous pouvez trouver dans le <span lang="en">_GetCapabilities_</span>.

    ![Paramètres du WMS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/fme/03_wms-parameters.png){.fr-responsive-img .frx-border-img .frx-img-contained}

- **Exemple <span lang="en">_WMTS_</span> :**
    
    Choisissez la couche **« Layers »** à afficher et vous avez la possibilité de jouer sur les **« Layer Options »** ou de restreindre l’affichage selon une **« Bounding Box »** (emprise) que vous pouvez définir dans la projection de votre choix (qui n’est pas forcément celle du flux).

    ![Paramètres du WMTS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/fme/04_wmts-parameters.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::warning
Si vous êtes connecté via un <span lang="en">_proxy_</span>, il est possible de le régler dans les paramètres FME.
:::

Une fois les différentes options choisies, cliquez sur **« OK »** et attendez que la ou les couches s’affichent.

![Visualisation du Plan IGN v2](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/fme/05_plan-ign.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Pour afficher l’image dans sa taille originale, **clic droit**, puis **« Ouvrir l’image dans un nouvel onglet »**.
:::