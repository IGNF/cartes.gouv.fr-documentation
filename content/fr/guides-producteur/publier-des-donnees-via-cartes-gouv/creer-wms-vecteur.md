---
title: Créer et publier un service WMS-Vecteur
tags:
    - WMS
    - WMS-Vecteur
    - Vecteur
    - Raster
    - Service
    - Métadonnée
    - Style
    - SLD
eleventyNavigation:
    key: Créer et publier un service WMS-Vecteur
    parent: Publier des données via cartes.gouv.fr
    order: 4
    nav: guides-producteur
pictogram: digital/internet.svg
description: Procédure pour publier un flux WMS-v
summary:
    visible: true
    depth: 2
---

## Créer un service WMS-Vecteur

### Lancer la création d’un service

Dans la fiche de votre donnée, cliquez sur **« Créer un service »** afin d’ouvrir une fenêtre permettant de **« Choisir le service à configurer »** : sélectionnez **« Service d’images (Web Map Service - WMS) »**.

![Sélectionner Service d’images (Web Map Service - WMS)](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/01_service-wms.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Sélectionner l’origine du service

Sélectionnez une ou plusieurs tables pour créer le service :

![Sélectionner les tables nécessaires au service](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/02_selection-tables.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Ajouter ou créer un fichier de style

Étape obligatoire, un style doit être associé au service WMS-Vecteur. Vous pouvez soit téléverser votre propre fichier _SLD_, soit créer ou modifier un style directement depuis l’interface de gestion des styles de cartes.gouv.fr


![Choix de fichier de style SLD](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/03_fichier-style.png){.fr-responsive-img .frx-border-img .frx-img-contained}


:::info
Pour chaque couche, il est possible de définir les règles de représentation (symbole, filtre, échelles) et de paramétrer finement la symbolisation (remplissage, contour, couleurs, opacité) via l’éditeur dédié, sans dépôt préalable d’un fichier SLD externe.
:::


![Éditeur de symbolisation](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/03_editeur-symbolisation.png){.fr-responsive-img .frx-border-img .frx-img-contained}


### Importer directement vos métadonnées

Ignorez cette étape en cliquant sur continuer, car la fonctionnalité est en cours de construction.

![Source des metadonnées](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/04_source-metadonnees.png){.fr-responsive-img .frx-border-img .frx-img-contained}


### Décrire la ressource

Dans le parcours **« Découverte »**, les données ne seront pas visibles dans le catalogue. Toutefois, prenez l’habitude de renseigner soigneusement ces champs qui seraient visibles dans la fiche de donnée du catalogue dans l’offre **« Essentielle »**. Tous les champs sont obligatoires.

![Description de la ressource](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/05_description.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Remplissez les informations complémentaires suivantes :

![Attribution, informations sur les metadonnées et type de représentation spatiale](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/06_info-metadonnees.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Ces métadonnées sont à remplir uniquement pour le premier service de votre fiche de données. Vous retrouverez la plupart des champs déjà remplis lors de la publication d’autres services (WFS/WMS/TMS).

### Restriction d’accès

La publication du service est obligatoirement **« Tout public »** lorsque les données sont dans le bac à sable. Dans votre entrepôt, il est possible de restreindre le service ou de le laisser en **« Tout public »** :

![Restrictions d’accès](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/07_restrictions.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Publier le service

Cliquez sur **« Publier le service maintenant »**. À la suite d’un écran **« Création du service WMS en cours »**, vous apercevrez votre fiche de données classée en **« Publié »** :

![Services publiés](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/08_service-publie.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Visualiser le service WMS

Pour visualiser cartographiquement les données du service WMS ainsi créé, cliquez sur **« Visualiser »** afin d’accéder à l’écran suivant :

![Visualisation d’un service WMS](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wms-vecteur/09_visualisation.png){.fr-responsive-img .frx-border-img .frx-img-contained}

L’affichage est déjà plus rapide que le WFS mais les images demandées sont générées à la demande, il n’y a pas encore de tuiles précalculées.

Si vous voulez changer de style, il faut publier un autre service WMS ou modifier les informations de publication de ce service existant.

Les services WMS ne sont pas personnalisables côté client. C’est-à-dire que tous les utilisateurs de votre service verront la même chose.