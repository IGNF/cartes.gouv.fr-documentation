---
title: QGIS
description: Tutoriels pour utiliser les APIs de la Géoplateforme avec QGIS
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


### Intégration d'un flux WMS

Dans le menu **Couche**, aller sur **Ajouter une couche** puis **Ajouter une couche WMS/WMTS**.

![Ajouter une couche WMS/WMTS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/01_ajout-wmswmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Cliquer sur **Nouveau** pour ajouter un nouveau flux WMS.

![Gestionnaire QGIS - WMS/WMTS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/02_gestionnaire-wmswmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la boîte de dialogue **Créer une nouvelle connexion WMS**, renseigner les champs :
- **Nom** : (nom que vous souhaitez donner à la connexion au serveur)
- _<span lang="en">URL</span>_ : (flux ci-dessous)


<p class="fr-text--blue-france">Flux WMS :</p>

- WMS Raster : 
```njk
{% raw %}
    https://data.geopf.fr/wms-r/wms?
{% endraw %}
```

- WMS Vecteur : 
```njk
{% raw %}
    https://data.geopf.fr/wms-v/wms?
{% endraw %}
```

Valider par **OK**.

![Créer une Nouvelle Connexion - WMS-Raster](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/03_nouvelle-connexion.png){.fr-responsive-img .frx-border-img .frx-img-contained}


Puis cliquer sur **Connexion** pour vous connecter au flux WMS ainsi créé.

Sélectionner la/les couches que vous souhaitez afficher.

Choisir l’**Encodage de l’image**. Le choix de l’encodage est facultatif (JPEG sélectionné par défaut).

Une image en JPEG prendra moins de ressources mais ne gérera pas les transparences comme le PNG.

Cliquer sur **Ajouter**.

![Connexion WMS-Raster - QGIS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/04_gestionnaire-sources.png){.fr-responsive-img .frx-border-img .frx-img-contained}

La couche s’adapte automatiquement à la projection sélectionnée pour la carte. Vous pouvez cependant modifier la projection en cliquant sur **Changer**.

![Sélectionneur de SCR - QGIS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/05_selectionneur-scr.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Intégration d'un flux WMTS

Dans la boîte de dialogue **Créer une nouvelle connexion WMTS**, renseigner les champs :
- **Nom** : (nom que vous souhaitez donner à la connexion au serveur)
- _<span lang="en">URL</span>_ : 
```njk
{% raw %}
    https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities
{% endraw %}
```

Valider par **OK**.

![Créer une Nouvelle Connexion - WMTS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/06_details-wmswmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Puis cliquer sur **Connexion** pour vous connecter au flux WMTS ainsi créé.

Sélectionner la couche que vous souhaitez afficher.

Cliquer sur **Ajouter**.

![Ajout ADMINEXPRESS dans QGIS - WMS/WMTS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/07_ajout-couche.png){.fr-responsive-img .frx-border-img .frx-img-contained}


### Affichage


La/Les couches sélectionnées apparaissent dans la partie **Couches**.

![Affichage dans QGIS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/08_affichage-qgis.png){.fr-responsive-img .frx-border-img .frx-img-contained}


### Chargement par fichier XML


Dans la fenêtre **Ajouter une couche WMS/WMTS**, Cliquer sur **Charger**.

![Gestionnaire - GPF-WMTS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/09_chargement-xml.png){.fr-responsive-img .frx-border-img .frx-img-contained}

À titre d’exemple, l’IGN met à disposition un [_<span lang="en">fichier XML</span>_](https://data.geopf.fr/annexes/ressources/documentation/wms-wmts.xml){target="_blank" rel="noopener noreferrer" title="Chargement par fichier XML"}, qui contient les différentes couches à intégrer.

Sélectionner la famille de couche qui vous intéresse et cliquer sur **Importer**.

![Gérer les connexions](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/10_thematiques-xml.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionner dans la liste déroulante la famille de couches ajoutée et cliquer sur **Connexion**.

![Géoplateforme WMS-Raster "Image aérienne"](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wms-wmts/11_connexion-xml.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionner la couche que vous souhaitez et cliquer sur **Ajouter**.


---


## Utiliser les données libres en flux WFS


### Intégration d'un flux WFS


Dans le menu **Couche**, aller sur **Ajouter une couche** puis **Ajouter une couche WFS**.

![Ajouter une couche WFS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/01_ajout-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Cliquer sur **Nouveau** pour ajouter un nouveau flux WFS.

![Gestionnaire QGIS - WFS](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/02_gestionnaire-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la boîte de dialogue **Créer une nouvelle connexion WFS**, renseigner les champs :
- **Nom** : (nom que vous souhaitez donner à la connexion au serveur)
- _<span lang="en">URL</span>_ : 
```njk
{% raw %}
    https://data.geopf.fr/wfs?
{% endraw %}
```

Valider par **OK**.

![Détails connexion - WFS GPF](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/03_detail-connexion.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Puis cliquer sur **Connexion** pour vous connecter au flux WFS ainsi créé.

:::warning
L’affichage des WFS du Géoportail est **limité à 5000 objets par requête**.
:::

Cliquer sur **Ajouter**.

![Partie à propos](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/04_connexion-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

La/Les couches sélectionnées apparaissent dans la partie **Couches**.

![Partie à propos](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/05_qgis-couches.png){.fr-responsive-img .frx-border-img .frx-img-contained}


### Chargement par fichier XML


Dans la fenêtre **Ajouter une couche WFS**, Cliquer sur **Charger**.

![Partie à propos](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/06_gestionnaire-qgis.png){.fr-responsive-img .frx-border-img .frx-img-contained}

À titre d’exemple, l’IGN met à disposition un [_<span lang="en">fichier XML</span>_](https://data.geopf.fr/annexes/ressources/documentation/wfs.xml){target="_blank" rel="noopener noreferrer" title="Chargement par fichier XML"}, qui contient les différentes couches à intégrer.

Sélectionner la famille de couche qui vous intéresse et cliquer sur **Importer**.

![Partie à propos](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/07_gerer-connexions.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionner dans la liste déroulante la famille de couches ajoutée et cliquer sur **Connexion**.

![Partie à propos](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/qgis/wfs/08_ajout-couche.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionner la couche que vous souhaitez et cliquer sur **Ajouter**.