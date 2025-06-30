---
title: Créer et publier un service WMTS
tags:
    - WMTS
    - Raster
    - Service
    - Publier
    - Métadonnée
    - Style
    - SLD
eleventyNavigation:
    key: Créer et publier un service WMTS
    parent: Publier des données via Cartes.gouv.fr
    order: 7
    nav: guides-producteur
pictogram: digital/internet.svg
---

{% from "components/component.njk" import component with context %}

:::warning
Pour publier un service WMTS il est nécessaire d'avoir au préalable créé un service WMS-Vecteur
:::

## 1 - Créer une pyramide raster

Dans la fiche de votre donnée, cliquez sur l’onglet **« Jeux de données »** : si la pyramide raster souhaitée n’existe pas encore dans la partie **« Pyramides de tuiles raster »**, alors suivez les étapes suivantes jusqu’à la partie **2-**. Sinon vous pouvez sauter ces étapes.

### 1.1 - Lancer la création d’une pyramide raster

Dans la fiche de votre donnée, cliquez sur l’onglet **« Services »**. puis sur le bouton menu à droite du service WMS-V que vous souhaitez, et enfin sur **« Créer un service raster WMS/WMTS »** :
![Image décrivant comment lancer la création d'un service WMS-V](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/01_creer-service-raster.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### 1.2 - Générer une pyramide de tuiles raster

Renseignez le nom technique que vous souhaitez attribuer à votre pyramide raster :
![Image décrivant la saisie du nom technique du flux WMS-R](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/02_nom-pyramide-raster.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### 1.3 - Choisir les niveaux de pyramide

Définissez la plage de visibilité de votre pyramide :
![Image décrivant le choix de la plage de visibilité](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/03_plage-de-visibilite-pyramide-raster.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Puis cliquez sur **« Publier »**. La pyramide apparaît à présent dans la partie **« Pyramides de tuiles raster »** de l’onglet **« Jeux de données »** :
![Image décrivant la pyramide raster publiée dans les jeux de données](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/04_pyramide-publiee.png){.fr-responsive-img .frx-border-img .frx-img-contained}

## 2 - Créer le service WMTS

### 2.1 - Démarrer la publication du service

Il faut maintenant créer le service WMTS à partir de cette pyramide. Cliquez sur **« Publier »** :
![Image décrivant la création d’un service WMS-R à partir de la pyramide raster publiée](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/05_publier-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Choisissez le type de service à configurer (ici **« Web Map Tile Service - WMTS »**) :
![Image décrivant le choix du type de service à créer](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/06_type-de-service.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### 2.2 - Importer directement vos métadonnées

Ignorez cette étape en cliquant sur continuer, car la fonctionnalité est en cours de construction.
![Image décrivant la possibilité de tester sur un échantillon](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/07_source-metadonnees-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### 2.3 - Décrire la ressource

Dans le parcours **« Découverte »**, les données ne seront pas visibles dans le catalogue. Toutefois, prenez l’habitude de renseigner soigneusement ces champs qui seraient visibles dans la fiche de donnée du catalogue dans l’offre **« Essentielle »**. Tous les champs sont obligatoires.
![Description de la ressource](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/08_description-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Remplissez les informations complémentaires suivantes :
![Description de la ressource](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/09_info-complementaires-metadonnees-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Ces métadonnées sont à remplir uniquement pour le premier service de votre fiche de données. Vous retrouverez la plupart des champs déjà remplis lors de la publication d’autres services (WFS/WMS/TMS).

### 2.4 - Restriction d’accès

La publication du service est obligatoirement **« Tout public »** lorsque les données sont dans le bac à sable. Dans votre entrepôt, il est possible de restreindre le service ou de le laisser en **« Tout public »** :
![Restrictions d’accès](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/10_restrictions-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### 2.5 - Publier le service

Cliquez sur **« Publier le service maintenant »**. À la suite d’un écran **« Création du service WMTS en cours »**, vous apercevrez votre fiche de données classée en **« Publié »** :
![Image décrivant la publication en cours du service](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/11_chargement-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}
![Image décrivant service publié](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/12_service-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

## 3 - Visualiser le service WMTS

Pour visualiser cartographiquement les données du service WMTS ainsi créé, cliquez sur **« Visualiser »** afin d’accéder à l’écran suivant :
![Visualisation d’un service WMS](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wmts/13_visualisation-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Bonne pratique : choisissez un niveau de zoom approprié au volume de vos données au risque de voir les performances d’affichage dégradées.
:::
