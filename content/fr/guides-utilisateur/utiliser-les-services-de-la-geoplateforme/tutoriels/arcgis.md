---
title: ArcGIS
description: Tutoriels pour utiliser les APIs de la Géoplateforme avec ArcGis
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


### Intégration d'un flux WMTS

Dans le menu **Insérer**, aller dans **Connexions** puis **Nouveau serveur WMTS**.


![Nouveau serveur WMTS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/01_serveur-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la boîte de dialogue **Ajouter une connexion au serveur WMTS**, renseigner le champ :
- **URL du serveur** : 
```njk
{% raw %}
    https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
{% endraw %}
```

Et cliquer sur **OK**.

![Ajouter une connexion - WMTS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/02_connexion-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Les couches issues du flux WMTS s’affichent dans l’onglet **Serveurs du Catalogue du projet**.

![Ajout Plan IGN v2 - WMTS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/03_catalogue-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Ouvrir les images dans un nouvel onglet pour les avoir à leur taille réelle.
:::

### Intégration d'un flux WMS

Dans le menu **Insérer**, aller dans **Connexions** puis **Nouveau serveur WMS**.

![Nouveau serveur WMS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/04_serveur-wms.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la boîte de dialogue **Ajouter une connexion au serveur WMS**, renseigner le champ :
- **URL du serveur WMS-Raster** : 
```njk
{% raw %}
    https://data.geopf.fr/wms-r?
{% endraw %}
```
- **URL du serveur WMS-Vecteur** : 
```njk
{% raw %}
    https://data.geopf.fr/wms-v?
{% endraw %}
```

Et cliquer sur **OK**.

![Ajouter une connexion - WMS-r](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/05_connexion-wms.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Les couches issues du flux WMS s’affichent dans l’onglet **Serveurs du Catalogue du projet**.

![Ajout Plan IGN v2 - WMS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wms-wmts/06_catalogue-wms.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Ouvrir les images dans un nouvel onglet pour les avoir à leur taille réelle.
:::

---

## Utiliser les données libres en flux WFS


### Intégration d'un flux WFS

Dans le menu **Insérer**, aller dans **Connexions** puis **Nouveau serveur WFS**.

![Nouveau serveur WFS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wfs/01_serveur-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la boîte de dialogue Ajouter une nouvelle connexion au serveur WFS, renseigner le champ suivant :
- _<span lang="en">URL</span>_ : (flux ci-dessous)


<p class="fr-text--blue-france">Flux WMS :</p>

- **WFS** : 
```njk
{% raw %}
    https://data.geopf.fr/wfs?
{% endraw %}
```


Valider par **OK**.

![Ajouter une connexion - WFS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wfs/02_connexion-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la fenêtre Catalogue, vous retrouver les couches disponibles du serveur WFS dans l’onglet **Serveurs, _<span lang="en">WFS on data.geopf.fr.wfs</span>_**.

Ajouter les couches que vous souhaitez sur votre carte.

![Ajout ADMINEXPRESS - WFS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/arcgis/wfs/03_ajout-couche.png){.fr-responsive-img .frx-border-img .frx-img-contained}