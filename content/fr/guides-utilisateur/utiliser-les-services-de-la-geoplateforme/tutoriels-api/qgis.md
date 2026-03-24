---
title: QGIS
description: Tutoriels pour utiliser les API de la Géoplateforme avec QGIS
tags:
    - QGIS
    - API
    - Géoplateforme
eleventyNavigation:
    key: QGIS
    order: 1
pictogram: digital/coding.svg
---

## Utiliser les données libres en flux WMS/WMTS

### Intégration d’un flux WMS

Dans le menu **« Couche »**, allez sur **« Ajouter une couche »** puis **« Ajouter une couche WMS/WMTS »**.

![Ajouter une couche WMS/WMTS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/01_ajout-wmswmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Cliquez sur **« Nouveau »** pour ajouter un nouveau flux <span lang="en">_WMS_</span>.

![Gestionnaire QGIS - WMS/WMTS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/02_gestionnaire-wmswmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la boîte de dialogue **« Créer une nouvelle connexion WMS »**, renseignez les champs :
- **« Nom »** : nom que vous souhaitez donner à la connexion au serveur
- **« URL »** :
    - Flux <span lang="en">_WMS_</span>-Raster :

    ```plain
    https://data.geopf.fr/wms-r/wms?
    ```

    - Flux <span lang="en">_WMS_</span>-Vecteur :

    ```plain
    https://data.geopf.fr/wms-v/wms?
    ```

Validez en cliquant sur **« OK »**.

![Créer une Nouvelle Connexion - WMS-Raster](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/03_nouvelle-connexion.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Puis cliquez sur **« Connexion »** pour vous connecter au flux <span lang="en">_WMS_</span> ainsi créé.

Sélectionnez les couches que vous souhaitez afficher.

Choisissez l’**« Encodage de l’image »**. Le choix de l’encodage est facultatif (<span lang="en">_JPEG_</span> est sélectionné par défaut).

Une image en <span lang="en">_JPEG_</span> prendra moins de ressources mais ne gérera pas les transparences comme le <span lang="en">_PNG_</span>.

Cliquez sur **« Ajouter »**.

![Connexion WMS-Raster - QGIS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/04_gestionnaire-sources.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Les couches s’adaptent automatiquement à la projection sélectionnée pour la carte. Vous pouvez cependant modifier la projection en cliquant sur **« Changer »**.

![Sélectionneur de SCR - QGIS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/05_selectionneur-scr.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Intégration d’un flux WMTS

Dans la boîte de dialogue **« Créer une nouvelle connexion WMTS »**, renseignez les champs :
- **« Nom »** : nom que vous souhaitez donner à la connexion au serveur
- **« URL »** :

    ```plain
    https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
    ```

Validez en cliquant sur **« OK »**.

![Créer une Nouvelle Connexion - WMTS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/06_details-wmswmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Puis cliquez sur **« Connexion »** pour vous connecter au flux <span lang="en">_WMTS_</span> ainsi créé.

Sélectionnez la couche que vous souhaitez afficher.

Cliquez sur **« Ajouter »**.

![Ajout ADMINEXPRESS dans QGIS - WMS/WMTS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/07_ajout-couche.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Affichage

Les couches sélectionnées apparaissent dans la partie **« Couches »**.

![Affichage dans QGIS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/08_affichage-qgis.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Chargement par fichier XML

Dans la fenêtre **« Ajouter une couche WMS/WMTS »**, cliquez sur **« Charger »**.

![Gestionnaire - GPF-WMTS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/09_chargement-xml.png){.fr-responsive-img .frx-border-img .frx-img-contained}

À titre d’exemple, l’IGN met à disposition un [fichier <span lang="en">_XML_</span>](https://data.geopf.fr/annexes/ressources/documentation/wms-wmts.xml){target="_blank" rel="noopener noreferrer" title="Chargement par fichier XML"}, qui contient les différentes couches à intégrer.

Sélectionnez la famille de couches qui vous intéresse et cliquez sur **« Importer »**.

![Gérer les connexions](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/10_thematiques-xml.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionnez dans la liste déroulante la famille de couches ajoutée et cliquez sur **« Connexion »**.

![Géoplateforme WMS-Raster "Image aérienne"](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/11_connexion-xml.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionnez la couche que vous souhaitez et cliquez sur **« Ajouter »**.

---

## Utiliser les données libres en flux WFS

### Intégration d’un flux WFS

Dans le menu **« Couche »**, allez sur **« Ajouter une couche »** puis **« Ajouter une couche WFS »**.

![Ajouter une couche WFS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/01_ajout-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Cliquez sur **« Nouveau »** pour ajouter un nouveau flux <span lang="en">_WFS_</span>.

![Gestionnaire QGIS - WFS](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/02_gestionnaire-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la boîte de dialogue **« Créer une nouvelle connexion WFS »**, renseignez les champs :
- **« Nom »** : nom que vous souhaitez donner à la connexion au serveur
- **« URL »** :

    ```plain
    https://data.geopf.fr/wfs?
    ```

Validez en cliquant sur **« OK »**.

![Détails connexion - WFS GPF](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/03_detail-connexion.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Puis cliquez sur **« Connexion »** pour vous connecter au flux <span lang="en">_WFS_</span> ainsi créé.

:::warning
L’affichage des <span lang="en">_WFS_</span> du Géoportail est **limité à 5000 objets par requête**.
:::

Cliquez sur **« Ajouter »**.

![Partie à propos](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/04_connexion-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Les couches sélectionnées apparaissent dans la partie **« Couches »**.

![Partie à propos](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/05_qgis-couches.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Chargement par fichier XML

Dans la fenêtre **« Ajouter une couche WFS »**, cliquez sur **« Charger »**.

![Partie à propos](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/06_gestionnaire-qgis.png){.fr-responsive-img .frx-border-img .frx-img-contained}

À titre d’exemple, l’IGN met à disposition un [fichier <span lang="en">_XML_</span>](https://data.geopf.fr/annexes/ressources/documentation/wfs.xml){target="_blank" rel="noopener noreferrer" title="Chargement par fichier XML"}, qui contient les différentes couches à intégrer.

Sélectionnez la famille de couches qui vous intéresse et cliquez sur **« Importer »**.

![Partie à propos](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/07_gerer-connexions.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionnez dans la liste déroulante la famille de couches ajoutée et cliquez sur **« Connexion »**.

![Partie à propos](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/08_ajout-couche.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionnez la couche que vous souhaitez et cliquez sur **« Ajouter »**.