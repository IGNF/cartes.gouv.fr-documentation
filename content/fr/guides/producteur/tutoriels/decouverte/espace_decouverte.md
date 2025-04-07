---
title: Accéder à l’espace de travail « Découverte »
date: git Last Modified
segments:
    - url: /guides/producteur
      title: Guides producteur
    - url: /guides/producteur/tutoriels/decouverte
      title: Publier des géodonnées via cartes.gouv.fr
eleventyNavigation:
    key: Accéder à l’espace de travail « Découverte »
    parent: Publier des géodonnées via cartes.gouv.fr
    order: 3
    nav: producteur
---

1. Ouvrir l’onglet **Découverte**&nbsp;: Une fois votre compte validé par courriel, votre connexion vous mènera à ce tableau de bord. Pour utiliser la brique alimentation / diffusion, veuillez cliquer sur **_Découverte à des fins de test_** afin d’ouvrir une page **Données découverte**.
   :::info
   Cet espace «&nbsp;bac à sable&nbsp;» est commun à tous les utilisateurs. Y sont donc listées les données de tous les utilisateurs. Nous vous recommandons de choisir vos intitulés avec précaution et veiller à n’interagir qu’avec vos propres données.
   :::
     <div class="fr-container">
     <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Page d’accueil espace Découverte](/img/tutoriels/decouverte/3_decouverte.png){.fr-responsive-img .frx-border-img}
    </div>
    <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Données Découverte](/img/tutoriels/decouverte/3_donnees.png){.fr-responsive-img .frx-border-img}
    </div>
    </div>

    :::info
    Remarque&nbsp;: La demande de création d’un espace de travail dédié fait l’objet d’un autre tutoriel. Toutefois les étapes qui suivent restent identiques.
    :::

2. **Créer une fiche de données**&nbsp;: Dans l’onglet **Découverte** cliquez sur **_Créer une fiche de données_**. Cela ouvrira une page associée, dans laquelle vous pourrez définir le nom de votre fiche de données.
   :::info
   Prenez soin de définir un titre pertinent. En effet dans l’offre découverte «&nbsp;bac à sable&nbsp;», cette information a peu d’importance car elle ne sera pas visible dans le catalogue, toutefois en mode «&nbsp;essentielle&nbsp;» (c’est-à-dire quand vous aurez créé votre propre espace de travail dans un second temps) ce titre est celui qui apparaitra dans le catalogue général de cartes.gouv. Prenez ainsi l’habitude de renseigner un titre informatif et évocateur, tous les caractères sont autorisés ainsi que les espaces.
   :::
     <div class="fr-container">
     <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Création d’une fiche de données](/img/tutoriels/decouverte/3_creer-fiche.png){.fr-responsive-img .frx-border-img}
    </div>
    </div>
    Téléversez votre fichier en cliquant sur **_Déposer votre fichier de données_**. Le format de fichier autorisé étant Geopackage (ou archive zip contenant un Geopackage). La projection de votre donnée est détectée automatiquement.

    Avant de cliquer sur **_Déposer votre fichier_**, vous pouvez, si besoin, modifier deux champs identifiés dans votre donnée&nbsp;: le **Nom technique de votre donnée** et la **Projection de vos données en entrée**.

    Le processus **Vos données vecteur sont en cours de dépôt** se met en route. Voici en quatre étapes sont fonctionnement côté API&nbsp;:

    - Chargement du fichier
    - Vérifications standard
    - Vérification vecteur
    - Intégration en base de données
      <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

        ![Données vecteurs en cours de dépôt](/img/tutoriels/decouverte/3_depot.png){.fr-responsive-img .frx-border-img .fr-mt-6v}
        </div>
        </div>

    :::info
    Ce processus peut prendre quelques minutes. Des travaux d’amélioration des performances sont en cours.
    :::
    Une fiche de donnée avec une base de données vecteur associée est créée.
      <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Fiche de données](/img/tutoriels/decouverte/3_fiche-donnees.png){.fr-responsive-img .frx-border-img}
    </div>
    </div>

    Si vous quittez à partir d’ici la plateforme, vous pourrez éventuellement revenir à votre fiche de données et cliquer sur « reprendre l’intégration ».

    La fiche de données est désormais stockée et classée en **Non publié**, dans l’onglet **Données Découvertes**.
    :::info
    Vos données sont stockées avec d’autres données de test dans le « bac à sable » dont vous voyez la liste.
    :::
      <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Données publiées](/img/tutoriels/decouverte/3_liste.png){.fr-responsive-img .frx-border-img}
    </div>
    </div>

    Il est possible de créer un service, en sélectionnant **_Créer un service_**. La fenêtre suivante s’ouvre. Choisissez le type de service à configurer en vous référant au paragraphe suivant correspondant.
      <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Choisir le service à configurer](/img/tutoriels/decouverte/3_creer-service.png){.fr-responsive-img .frx-border-img}
    </div>
    </div>
