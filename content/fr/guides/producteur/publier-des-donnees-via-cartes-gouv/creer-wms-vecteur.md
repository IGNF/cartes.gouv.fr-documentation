---
title: Créer et publier un service WMS-Vecteur
tags:
    - Producteur
    - WMS
    - WMS-Vecteur
    - Vecteur
    - Raster
    - Service
    - Publier
    - Métadonnée
    - Style
    - SLD
eleventyNavigation:
    key: Créer et publier un service WMS-Vecteur
    parent: Publier des données via Cartes.gouv.fr
    order: 4
    nav: producteur
pictogram: digital/internet.svg
---

{% from "components/component.njk" import component with context %}

## 1 - Créer un service WMS-Vecteur :

### 1.1 - Lancer la création d’un service :

Dans la fiche de votre donnée, cliquez sur **« Créer un service »** afin d’ouvrir une fenêtre permettant de **« Choisir le service à configurer »** : sélectionnez **« Service d’images (Web Map Service - WMS) »**.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Sélectionner Service d’images (Web Map Service - WMS)](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/01_service-wms.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

### 1.2 - Sélectionner l’origine du service :

Sélectionnez une ou plusieurs tables pour créer le service :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Sélectionner les tables nécessaires au service](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/02_selection-tables.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

### 1.3 - Importer directement vos métadonnées :

Ignorez cette étape en cliquant sur continuer, car la fonctionnalité est en cours de construction.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Source des metadonnées](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/03_source-metadonnees.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

### 1.4 - Déposer un fichier de style SLD :

Étape obligatoire, il faut déposer un fichier de style _SLD_ (_Styled Layer Descriptor_). Les messages d’erreur vous guident pour modifier votre _SLD_ (seul format possible pour le WMS). Ce fichier sera déposé sur la Géoplateforme comme fichier statique.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Choix de fichier de style SLD](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/04_fichier-style.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

L’erreur ci-dessus est systématique, elle indique que le champ _name_ du style _SLD_ ne correspond pas au nom exact de la couche _GeoPackage_. Un fichier _SLD_ est un document _XML_ qui définit la symbolisation et le style de rendu des couches cartographiques dans les services web géographiques comme WMS. Vous pouvez donc facilement l’éditer avec un éditeur de texte.

:::info
La création d’un fichier _SLD_ fait l’objet d’un autre tutoriel.
:::

### 1.5 - Décrire la ressource :

Dans le parcours **« Découverte »**, les données ne seront pas visibles dans le catalogue. Toutefois, prenez l’habitude de renseigner soigneusement ces champs qui seraient visibles dans la fiche de donnée du catalogue dans l’offre **« Essentielle »**. Tous les champs sont obligatoires.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Description de la ressource](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/05_description.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

Remplissez les informations complémentaires suivantes :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Attribution, informations sur les metadonnées et type de représentation spatiale](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/06_info-metadonnees.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

Ces métadonnées sont à remplir uniquement pour le premier service de votre fiche de données. Vous retrouverez la plupart des champs déjà remplis lors de la publication d’autres services (WFS/WMS/TMS).

### 1.6 - Restriction d’accès :

La publication du service est obligatoirement **« Tout public »** lorsque les données sont dans le bac à sable. Dans votre entrepôt, il est possible de restreindre le service ou de le laisser en **« Tout public »** :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Restrictions d’accès](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/07_restrictions.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

### 1.7 - Publier le service :

Cliquez sur **« Publier le service maintenant »**. À la suite d’un écran **« Création du service WMS en cours »**, vous apercevrez votre fiche de données classée en **« Publié »** :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Services publiés](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/08_service-publie.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

## 2 - Visualiser le service WMS :

Pour visualiser cartographiquement les données du service WMS ainsi créé, cliquez sur **« Visualiser »** afin d’accéder à l’écran suivant :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Visualisation d’un service WMS](/img/guides/producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/09_visualisation.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    L’affichage est déjà plus rapide que le WFS mais les images demandées sont générées à la demande, il n’y a pas encore de tuiles précalculées.

    Si vous voulez changer de style, il faut publier un autre service WMS ou modifier les informations de publication de ce service existant.

    Les services WMS ne sont pas personnalisables côté client. C’est-à-dire que tous les utilisateurs de votre service verront la même chose.
