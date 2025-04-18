---
title: Créer et publier un service WMS
date: git Last Modified
segments:
    - url: /guides/producteur
      title: Guides producteur
    - url: /guides/producteur/publier-des-geodonnees-via-cartes-gouv
      title: Publier des géodonnées via cartes.gouv.fr
eleventyNavigation:
    key: Créer et publier un service WMS
    parent: Publier des géodonnées via cartes.gouv.fr
    order: 5
    nav: producteur
---

1. Dans la fiche de votre donnée, cliquez sur **_Créer un service_** afin d’ouvrir la fenêtre permettant de **Choisir le service à configurer**&nbsp;: sélectionnez **Service d’images (Web Map Service - WMS)**.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Sélectionner Service d’images (Web Map Service - WMS)](/img/tutoriels/decouverte/5_service-wms.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

2. **Créer et publier un service WMS**

    **Étape 1/6&nbsp;:** La première des six étapes pour publier un service WFS s’affiche. Il faut sélectionner la case de votre donnée, en bas à droite, pour sélectionner les tables nécessaires au service. Il n’est pas obligatoire de sélectionner toutes les tables.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Sélectionner les tables nécessaires au service](/img/tutoriels/decouverte/5_selection-tables.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    **Étape 2-3/6&nbsp;:** Étape obligatoire, il faut déposer un fichier de style SLD (Styled Layer Descriptor). Les messages d’erreur vous guident pour modifier votre SLD (seul format possible pour le WMS). Ce fichier sera déposé comme fichier statique.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Choix de fichier de style SLD](/img/tutoriels/decouverte/5_fichier-style.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    L’erreur ci-dessus est systématique, elle indique que le champ `name` du style SLD ne correspond au nom exact de la couche GeoPackage.Un fichier SLD est un document XML qui définit la symbolisation et le style de rendu des couches cartographiques dans les services web géographiques comme WMS.
    :::info
    La création d’un fichier SLD fait l’objet d’un autre tutoriel.
    :::

    **Étape 4/6&nbsp;:** Description de la ressource&nbsp;: Il faut éditer le **Nom technique du service**. Le reste est déjà rempli automatiquement, suite à la préalable publication du service WFS de ce tutoriel.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Description de la ressource](/img/tutoriels/decouverte/5_description.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    **Étape 5-6/6&nbsp;:** Informations supplémentaires et restrictions d’accès&nbsp;:
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Attribution, informations sur les metadonnées et type de représentation spatiale](/img/tutoriels/decouverte/5_info-metadonnees.png){.fr-responsive-img .frx-border-img}
      </div>
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Restrictions d’accès](/img/tutoriels/decouverte/5_restrictions.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    Vous pouvez sélectionner la restriction d’accès souhaitée pour votre fichier de données. Cliquez ensuite sur **_Publier le service maintenant_**. À la suite d’un écran **Création du service WFS en cours**, vous apercevrez votre fiche de données classée en **Publié**. Cliquer sur **_Visualiser_** vous permettra ensuite de consulter le service nouvellement créé sur une interface cartographique.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Services publiés](/img/tutoriels/decouverte/5_service-publie.png){.fr-responsive-img .frx-border-img}
      </div>
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Visualisation d’un service WMS](/img/tutoriels/decouverte/5_visualisation.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    L’affichage est déjà plus rapide que le WFS mais les images demandées sont générées à la demande, il n’y a pas encore de tuiles précalculées. Si vous voulez changer de style, il faut publier un autre service WMS ou modifier les informations de publication de ce service existant. Les services WMS ne sont pas personnalisables côté client. C’est-à-dire que tous les utilisateurs de votre service verront la même chose.
