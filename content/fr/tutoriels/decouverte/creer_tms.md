---
title: Créer et publier un service TMS
date: git Last Modified
segments:
    - url: /producteur
      title: Documentation producteur
    - url: /tutoriels/decouverte/
      title: Publier ses propres données depuis cartes.gouv.fr
layout: layouts/profil_prod_tuto.njk
eleventyNavigation:
    key: Créer et publier un service TMS
    parent: Publier ses propres données depuis cartes.gouv.fr
    order: 6
    nav: prod
---

## Créer et publier un service TMS

1. Dans la fiche de votre donnée, cliquez sur **_Créer un service_** afin d’ouvrir une fenêtre permettant de **Choisir le service à configurer**&nbsp;: sélectionnez **Service de tuiles vectorielles (Tile Map Service - TMS)**.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Sélectionner Service de tuiles vectorielles (Tile Map Service - TMS)](/img/tutoriels/decouverte/6_service-tms.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

2. **Générer une pyramide de tuiles vectorielles**

    **Étape 1/5&nbsp;:** Après avoir choisi votre nom, il faut cocher la case de sélection de votre donnée en bas droite avant de cliquer sur **_Continuer_**.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Sélectionner les tables nécessaires au service](/img/tutoriels/decouverte/6_selection-tables.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    **Étape 2/5&nbsp;:** On choisit explicitement les tables à conserver dans la pyramide de tuiles vectorielles. Moins il y a d’attributs, plus la généralisation est efficace.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Choisir les attributs des tables sélectionnées](/img/tutoriels/decouverte/6_attributs.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    **Étape 3/5&nbsp;:** On choisit les niveaux de la pyramide à générer c’est-à-dire quelles données doivent apparaitre à quels niveaux de la pyramide.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Choisir les niveaux de zoom](/img/tutoriels/decouverte/6_zoom.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    Pour se faire une idée de la taille des tuiles à différents niveaux, vous pouvez vous référer à&nbsp;: <a href="https://rok4.github.io/#visualisation-du-quadrillage" target="_blank" rel="noopener noreferrer" title="rok4.github.io/#visualisation-du-quadrillage - ouvre une nouvelle fenêtre">rok4.github.io/#visualisation-du-quadrillage</a>

    **Étape 4/5&nbsp;:** Des options préconfigurées de généralisation sont proposées. Elles sont plus ou moins adaptées à certains types géométriques et leur efficacité va dépendre également des choix précédents. L’objectif est que les données s’affichent aux petites échelles sans que chaque tuile soit trop lourde à charger.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Option de généralisation](/img/tutoriels/decouverte/6_generalisation.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    **Étape 5/5&nbsp;:** La généralisation de la pyramide peut prendre du temps. Si vos données sont très volumineuses il est possible de créer d’abord un échantillon (étape 5), c’est à dire une pyramide sur une zone limitée, pour valider la pertinence de vos choix. Le calcul de cet échantillon sera plus rapide car moins de tuiles seront générées aux grandes échelles.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Définition d’un échantillon](/img/tutoriels/decouverte/6_echantillon.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    Générer un échantillon permet de visualiser rapidement la pyramide de tuiles vectorielles sur une zone limitée pour vérifier ou ajuster les paramètres avant de traiter l’ensemble des données.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Définition d’un échantillon, visualisation](/img/tutoriels/decouverte/6_echantillon2.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    :::callout Cas de l’échantillon
    Il faut publier cet échantillon en public pour que l’interface puisse l’afficher. Ensuite vous avez un accès direct à la génération de la pyramide complète sur l’ensemble de l’emprise de vos données avec le même paramétrage (cliquer sur **_Générer la pyramide complète_** dépublie l’échantillon)
    :::
    :::callout Ajouter des styles
    S’agissant d’un flux de données vecteur, comme pour le WFS, l’application d’un style est optionnelle car elle se fait côté client. En plus du SLD et du QML, vous pouvez utiliser le format de fichier JSON aux spécifications Mapbox Style, plus adapté à ce format.
    :::

3. Une fois la pyramide générée, vous aurez un bouton pour **_Publier le service TMS_**. La publication reprend les étapes de remplissage des métadonnées (déjà remplies, il faut juste faire attention au nom technique du service sélectionné) et le choix de publier en public ou en accès restreint.
