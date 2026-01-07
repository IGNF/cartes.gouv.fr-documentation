---
title: Créer et publier un service WFS
tags:
    - WFS
    - Vecteur
    - Service
    - Métadonnée
    - Style
    - SLD
    - QML
eleventyNavigation:
    key: Créer et publier un service WFS
    parent: Publier des données via cartes.gouv.fr
    order: 3
    nav: guides-producteur
pictogram: digital/internet.svg
description: Procédure pour publier un flux WFS
summary:
    visible: true
    depth: 2
---

## Créer un service WFS

### Lancer la création d’un service

Dans la fiche de votre donnée, cliquez sur **« Créer un service »** afin d’ouvrir une fenêtre permettant de **« Choisir le service à configurer »** : sélectionnez **« Service de sélection WFS »**.

![Jeux de données](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/01_jeux-donnees.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Sélectionner Service de sélection WFS](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/02_service-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Sélectionner l’origine du service

Sélectionnez une ou plusieurs tables pour créer le service :

![Sélection des tables nécessaires au services](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/03_selection-tables.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Le formulaire suivant se déplie, remplissez les champs et cliquez sur **« Continuer »**.

![Créer et publier un service WFS](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/04_creer-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Importer directement vos métadonnées

Ignorez cette étape en cliquant sur **« Continuer »**, car la fonctionnalité est en cours de construction.

![Source des metadonnées](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/05_source-metadonnees.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Décrire la ressource

Dans le parcours **« Découverte »**, les données ne seront pas visibles dans le catalogue. Toutefois, prenez l’habitude de renseigner soigneusement ces champs qui seraient visibles dans la fiche de donnée du catalogue dans l’offre **« Essentielle »**. Tous les champs sont obligatoires.

![Description](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/06_description.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Référence temporelle et responsable de la ressource](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/07_ref-temporelle.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Remplissez les informations complémentaires suivantes :

![Attribution, informations sur les métadonnées et type de représentation spatiale](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/08_info-supp.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Ces métadonnées sont à remplir uniquement pour le premier service de votre fiche de données. Vous retrouverez la plupart des champs déjà remplis lors de la publication d’autres services (WFS/WMS/TMS).

### Restricitons d’accès

La publication du service est obligatoirement **« Tout public »** lorsque les données sont dans le bac à sable. Dans votre entrepôt, il est possible de restreindre le service ou de le laisser en **« Tout public »** :

![Restrictions d’accès](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/09_restrictions.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Publier le service

Cliquez sur **« Publier le service maintenant »**. À la suite d’un écran **« Création du service WFS en cours »**, vous apercevrez votre fiche de données classée en **« Publié »** :

![Création du service WFS en cours](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/10_creation-en-cours.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Référence temporelle et responsable de la ressource](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/11_service-publie.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Visualiser le service WFS

Pour visualiser cartographiquement les données du service WFS ainsi créé, cliquez sur **« Visualiser »** afin d’accéder à l’écran suivant :

![Visualisation d’un service WFS](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/12_visualisation.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Bonne pratique : choisir un niveau de zoom approprié au volume de vos données au risque de voir les performances d’affichage dégradées.
:::

---

## Ajouter un style au service WFS

Vous pouvez soit téléverser votre propre fichier _SLD_, soit créer ou modifier un style directement depuis l’interface de gestion des styles de cartes.gouv.fr. Le producteur de données peut créer et modifier directement les styles associés à ses flux sans avoir à préparer de fichiers externes.

:::info
La gestion des styles pour le service WFS se fait en aval de la publication dans l'onglet **« Gérer les styles »** lors de la visualisation du flux.
:::


![Ajouter les styles](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/13_ajouter-styles.png){.fr-responsive-img .frx-border-img .frx-img-contained}


:::callout Ajouter des styles
S’agissant d’un flux de données vecteur, l’application d’un style est optionnelle car elle se fait côté client.
:::
