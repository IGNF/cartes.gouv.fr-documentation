---
title: FME
description: Tutoriels pour utiliser les APIs de la Géoplateforme avec FME
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

Dans le menu **File**, cliquer sur **Open Dataset**.

![Ouvrir un jeu de donnée](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/fme/01_open-dataset.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dérouler la liste de formats pour choisir **"More Format"** ou accéder à OGC WMTS / OGC WMS si vous aviez déjà utilisé un tel format dans FME récemment.

![Plus de formats](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/fme/02_more-formats.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionner **OGC WMS (Web Map Service)** ou **OGC WMTS (Web Map Tile Service)** et cliquer sur **Parameters**.

Dans la partie **URL :**

**<p class="fr-text--blue-france">Utiliser les services libres IGN</p>**

- **WMS-Raster :**
```njk
{% raw %}
    https://data.geopf.fr/wms-r/wms?
{% endraw %}
```
- **WMS-Raster :**
```njk
{% raw %}
    https://data.geopf.fr/wms-r/wms?
{% endraw %}
```
- **WMTS :**
```njk
{% raw %}
    https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
{% endraw %}
```


:::warning
La version est obligatoire pour les flux WMS, FME utilisant par défaut la version 1.1.1.
:::


- **Exemple WMS-Raster :**

Choisissez la couche (_<span lang="en">**Layers**</span>_) à afficher et vous avez la possibilité de jouer sur les _<span lang="en">**Map Options**</span>_ que vous pouvez retrouver dans le _<span lang="en">GetCapabilities</span>_.

![Paramètres du WMS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/fme/03_wms-parameters.png){.fr-responsive-img .frx-border-img .frx-img-contained}

- **Exemple WMTS :**

Choisissez la couche (**Layers**) à afficher et vous avez la possibilité de jouer sur les _<span lang="en">**Layer Options**</span>_ voir restreindre l'affichage selon une _<span lang="en">**Bounding Box**</span>_ (emprise) que vous pouvez définir dans la projection de votre choix (qui n'est pas forcément celle du flux).

![Paramètres du WMTS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/fme/04_wmts-parameters.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::warning
Si vous êtes connecté par un *<span lang="en">proxy</span>*, il est possible de le régler dans les paramètres FME.
:::

Une fois les différentes options choisies, cliquer sur **OK** et attendez que la ou les couches s’affichent.

![Visualisation du Plan IGN v2](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/fme/05_plan-ign.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Pour afficher l'image dans sa taille originale, clic droit, afficher l'image dans un nouvel onglet.
:::