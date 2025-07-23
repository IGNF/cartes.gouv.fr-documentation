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
    parent: Publier des données via Cartes.gouv.fr
    order: 3
    nav: guides-producteur
pictogram: digital/internet.svg
---

{% from "components/component.njk" import component with context %}

## 1 - Créer un service WFS

### 1.1 - Lancer la création d’un service

Dans la fiche de votre donnée, cliquez sur **« Créer un service »** afin d’ouvrir une fenêtre permettant de **« Choisir le service à configurer »** : sélectionnez **« Service de sélection WFS »**.

![Jeux de données](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/01_jeux-donnees.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Sélectionner Service de sélection WFS](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/02_service-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### 1.2 - Sélectionner l’origine du service

Sélectionnez une ou plusieurs tables pour créer le service :

![Sélection des tables nécessaires au services](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/03_selection-tables.png){.fr-responsive-img .frx-border-img .frx-img-contained}
Le formulaire suivant se déplie, remplissez les champs et cliquez sur **« Continuer »**.

![Créer et publier un service WFS](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/04_creer-wfs.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### 1.3 - Importer directement vos métadonnées

Ignorez cette étape en cliquant sur **« Continuer »**, car la fonctionnalité est en cours de construction.

![Source des metadonnées](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/05_source-metadonnees.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### 1.4 - Décrire la ressource

Dans le parcours **« Découverte »**, les données ne seront pas visibles dans le catalogue. Toutefois, prenez l’habitude de renseigner soigneusement ces champs qui seraient visibles dans la fiche de donnée du catalogue dans l’offre **« Essentielle »**. Tous les champs sont obligatoires.

![Description](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/06_description.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Référence temporelle et responsable de la ressource](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/07_ref-temporelle.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Remplissez les informations complémentaires suivantes :

![Attribution, informations sur les métadonnées et type de représentation spatiale](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/08_info-supp.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Ces métadonnées sont à remplir uniquement pour le premier service de votre fiche de données. Vous retrouverez la plupart des champs déjà remplis lors de la publication d’autres services (WFS/WMS/TMS).

### 1.5 - Restricitons d’accès

La publication du service est obligatoirement **« Tout public »** lorsque les données sont dans le bac à sable. Dans votre entrepôt, il est possible de restreindre le service ou de le laisser en **« Tout public »** :

![Restrictions d’accès](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/09_restrictions.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### 1.6 - Publier le service

Cliquez sur **« Publier le service maintenant »**. À la suite d’un écran **« Création du service WFS en cours »**, vous apercevrez votre fiche de données classée en **« Publié »** :

![Création du service WFS en cours](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/10_creation-en-cours.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Référence temporelle et responsable de la ressource](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/11_service-publie.png){.fr-responsive-img .frx-border-img .frx-img-contained}

## 2 - Visualiser le service WFS

Pour visualiser cartographiquement les données du service WFS ainsi créé, cliquez sur **« Visualiser »** afin d’accéder à l’écran suivant :

![Visualisation d’un service WFS](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/12_visualisation.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Bonne pratique : choisir un niveau de zoom approprié au volume de vos données au risque de voir les performances d’affichage dégradées.
:::

## 3 - Ajouter un style au service WFS

Il n’existe pas d’interface graphique avancée à ce jour sur cartes.gouv.fr. Il faut donc préparer des fichiers _QML_ (_QGIS Markup Language_) ou _SLD_ (_Styled Layer Descriptor_) avec le logiciel de votre choix, par exemple le SIG _QGIS_, puis les charger en cliquant sur **« Ajouter un style »** dans l’onglet **« Gérer les styles »** lors de la visualisation du flux :

![Gérer les styles](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/13_gerer-style.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Ajouter un style](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/wfs/14_ajout-style.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
La création d’un fichier SLD fait l’objet d’un autre tutoriel.
:::

:::callout Ajouter des styles
S’agissant d’un flux de données vecteur, l’application d’un style est optionnelle car elle se fait côté client.
:::
