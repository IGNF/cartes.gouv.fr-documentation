---
title: Créer et publier un service TMS
tags:
    - Producteur
    - TMS
    - Vecteur
    - Service
    - Publier
    - Métadonnée
eleventyNavigation:
    key: Créer et publier un service TMS
    parent: Publier des données via Cartes.gouv.fr
    order: 5
    nav: guides-producteur
pictogram: digital/internet.svg
---

{% from "components/component.njk" import component with context %}

---

## 1 - Créer un service TMS :

---

### 1.1 - Lancer la création d’un service 

Dans la fiche de votre donnée, cliquez sur **« Créer un service »** afin d’ouvrir une fenêtre permettant de **« Choisir le service à configurer »** : sélectionnez **« Service de tuiles vectorielles (Tile Map Service - TMS) »**.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Image décrivant le choix du service à créer](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/01_service-tms.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

---

### 1.2 - Sélectionner l’origine du service :

Sélectionnez une ou plusieurs tables pour créer le service :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Image décrivant les tables à sélectionner](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/02_selection-tables.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

:::warning
Pour éviter les erreurs lors de la génération du service, vérifiez que les noms des tables et attributs ne contiennent ni espace, ni caractère spécial.
:::

---

### 1.3 - Choisir les attributs à conserver :

Sélectionnez un ou plusieurs attributs à conserver dans la pyramide de tuiles vectorielles. Moins il y a d’attributs, plus la généralisation est efficace.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Image décrivant les attributs à sélectionner](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/03_attributs.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

---

### 1.4 - Choisir les niveaux de pyramide :

Définissez la plage de visibilité pour chaque donnée sélectionnée précédemment :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Image décrivant le choix des plages de visibilité](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/04_zoom.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

:::info
Pour se faire une idée de la taille des tuiles à différents niveaux, vous pouvez vous référer à : <a href="https://rok4.github.io/#visualisation-du-quadrillage" target="_blank" rel="noopener noreferrer" title="rok4.github.io/#visualisation-du-quadrillage - ouvre une nouvelle fenêtre">rok4.github.io/#visualisation-du-quadrillage</a>
:::

---

### 1.5 - Option de généralisation :

Des options préconfigurées de généralisation sont proposées. Elles sont plus ou moins adaptées à certains types géométriques et leur efficacité va dépendre également des choix précédents. L’objectif est que les données s’affichent aux petites échelles sans que chaque tuile soit trop lourde à charger.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Image décrivant les options de généralisation](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/05_generalisation.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

---

### 1.6 - Échantillon :

La génération des pyramides peut prendre du temps. Si vos données sont très volumineuses il est possible de créer d’abord un échantillon (une pyramide sur une zone limitée) pour valider la pertinence de vos choix. Le calcul de cet échantillon sera plus rapide car moins de tuiles seront générées aux grandes échelles.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Image décrivant la possibilité de tester sur un échantillon](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/06_echantillon.png){.fr-responsive-img .frx-border-img}
      </div>

      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Image décrivant l’emprise de l’échantillon](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/07_echantillon2.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

Vous pourrez alors vérifier que tous les tests de vérification ont bien été passés avec succès en cliquant sur le bouton de menu à droite de l’échantillon, puis sur **« Voir les détails »** :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Image décrivant la possibilité de tester sur un échantillon](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/08_verifier-echantillon.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

---

## 2 - Publication :

---

### 2.1 - Publier le service :

Publiez ensuite le service en entier en cliquant sur **« Publier le service TMS »**. Cela permettra de créer le service sur l’ensemble de l’emprise de vos données avec le même paramétrage que pour l’échantillon (cela dépubliera automatiquement l’échantillon) :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Image décrivant la possibilité de tester sur un échantillon](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/09_publier-echantillon.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

---

### 2.2 - Importer directement vos métadonnées :

Ignorez cette étape en cliquant sur **« Continuer »**, car la fonctionnalité est en cours de construction.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Image décrivant la possibilité de tester sur un échantillon](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/10_source-metadonnees.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

:::info
S’agissant d’un flux de données vecteur, comme pour le WFS, l’application d’un style est optionnelle car elle se fait côté client. En plus du _SLD_ et du _QML_, vous pouvez utiliser le format de fichier _JSON_ aux spécifications _Mapbox Style_, plus adapté à ce format.
:::

---

### 2.3 - Décrire la ressource :

Dans le parcours **« Découverte »**, les données ne seront pas visibles dans le catalogue. Toutefois, prenez l’habitude de renseigner soigneusement ces champs qui seraient visibles dans la fiche de donnée du catalogue dans l’offre **« Essentielle »**. Tous les champs sont obligatoires.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Description de la ressource](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/11_description-ressource.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

Remplissez les informations complémentaires suivantes :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Description de la ressource](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/12_description-ressource2.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

Ces métadonnées sont à remplir uniquement pour le premier service de votre fiche de données. Vous retrouverez la plupart des champs déjà remplis lors de la publication d’autres services (WFS/WMS/TMS).

---

### 2.4 - Restriction d’accès :

La publication du service est obligatoirement **« Tout public »** lorsque les données sont dans le bac à sable. Dans votre entrepôt, il est possible de restreindre le service ou de le laisser en **« Tout public »** :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Description de la ressource](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/13_restrictions.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

---

### 2.5 - Publier le service :

Cliquez sur **« Publier le service maintenant »**. À la suite d’un écran **« Création du service TMS en cours »**, vous apercevrez votre service classé en **« Publié »** :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Description de la ressource](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/14_service-tms-publie.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

---

## 3 - Visualiser le service TMS :

Pour visualiser cartographiquement les données du service TMS ainsi créé, cliquez sur **« Visualiser »** afin d’accéder à l’écran suivant :

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
        ![Visualisation d’un service WMS](/img/guides-producteur/publier-des-donnees-via-cartes-gouv/tms/15_visualiser-service.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

L’affichage est alors optimisé pour être plus performant qu’un service WFS ou WMS puisqu’il ne chargera que les tuiles nécessaires selon l’emprise et la plage de visibilité.
