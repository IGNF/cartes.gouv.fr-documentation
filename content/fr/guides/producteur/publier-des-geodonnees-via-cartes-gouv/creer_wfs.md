---
title: Créer et publier un service WFS
date: git Last Modified
segments:
    - url: /guides/producteur
      title: Guides producteur
    - url: /guides/producteur/publier-des-geodonnees-via-cartes-gouv
      title: Publier des géodonnées via cartes.gouv.fr
eleventyNavigation:
    key: Créer et publier un service WFS
    parent: Publier des géodonnées via cartes.gouv.fr
    order: 4
    nav: producteur
---

1.  Dans la fiche de votre donnée, cliquez sur **_Créer un service_** afin d’ouvrir une fenêtre permettant de **Choisir le service à configurer**&nbsp;: sélectionnez **_Service de sélection WFS_**.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Jeux de données](/img/tutoriels/decouverte/4_jeux-donnees.png){.fr-responsive-img .frx-border-img}
      </div>
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
      
      ![Sélectionner Service de sélection WFS](/img/tutoriels/decouverte/4_service-wfs.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

2.  **Créer et publier un service WFS**

    **Étape 1/5&nbsp;:** Il faut sélectionner au moins une table pour créer le service.
    <div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
      
      ![Sélection des tables nécessaires au services](/img/tutoriels/decouverte/4_selection-tables.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    Le formulaire suivant se déplie, remplir les champs et cliquer sur continuer.

    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Créer et publier un service WFS](/img/tutoriels/decouverte/4_creer-wfs.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    **Étape 2/5&nbsp;:** Ignorer cette étape car la fonctionnalité est en cours de construction en cliquant sur continuer.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Source des metadonnées](/img/tutoriels/decouverte/4_source-metadonnees.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    **Étape 3/5&nbsp;:** Description de la ressource. Dans le parcours Découverte, les données ne seront pas visibles dans le catalogue. Toutefois, prenez l’habitude de renseigner soigneusement ces champs qui seraient visibles dans la fiche de donnée du catalogue dans l’offre Essentielle. Tous les champs sont obligatoires.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Description](/img/tutoriels/decouverte/4_description.png){.fr-responsive-img .frx-border-img}
      </div>
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Référence temporelle et responsable de la ressource](/img/tutoriels/decouverte/4_ref-temporelle.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    **Étape 4/5&nbsp;:** Informations supplémentaires
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Attribution, informations sur les métadonnées et type de représentation spatiale](/img/tutoriels/decouverte/4_info-supp.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

    Ces métadonnées sont à remplir uniquement pour le premier service de votre fiche de données. Vous retrouverez la plupart des champs déjà remplis lors de la publication d’autres services (WMS/TMS).

    **Étape 5/5&nbsp;:** Restrictions d’accès&nbsp;: La publication est « Tout public » lorsque les données sont dans le bac à sable, ce qui est notre cas ici. Afin de définir des restrictions d’accès sur des données privées il faudra passer par la création préalable d’un espace de travail (processus qui fait l’objet d’un autre tutoriel), correspondant à l’offre Essentielle.
    Cliquer sur **Publier le service maintenant**.
    <div class="fr-container">
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Création du service WFS en cours](/img/tutoriels/decouverte/4_creation-en-cours.png){.fr-responsive-img .frx-border-img}
      </div>
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Référence temporelle et responsable de la ressource](/img/tutoriels/decouverte/4_restrictions.png){.fr-responsive-img .frx-border-img}
      </div>
      <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Service publié](/img/tutoriels/decouverte/4_service-publie.png){.fr-responsive-img .frx-border-img}
      </div>
    </div>

3.  Visualiser un service WFS&nbsp;: visualiser cartographiquement les données.
    Cliquer sur **visualiser** (image ci-dessus) afin d’accéder à l’écran suivant.
    <div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Visualisation d’un service WFS](/img/tutoriels/decouverte/4_visualisation.png){.fr-responsive-img .frx-border-img}
      </div>
        </div>

    :::info
    Bonne pratique&nbsp;: choisir un niveau de zoom approprié au volume de vos données au risque de voir les performances d’affichage dégradées.
    :::

4.  Ajouter un style au service WFS&nbsp;: Il n’existe pas d’interface graphique avancée à ce jour sur cartes.gouv.fr. Il faut donc préparer des fichiers QML (QGIS Markup Language) ou SLD (Styled Layer Descriptor) avec le logiciel de votre choix, par exemple le SIG QGIS, puis les charger en cliquant sur **Ajouter un style** dans l’onglet **Gérer les styles**.
    :::callout Ajouter des styles
    S’agissant d’un flux de données vecteur, comme pour le WFS, l’application d’un style est optionnelle car elle se fait côté client. En plus du SLD et du QML, vous pouvez utiliser le format de fichier JSON aux spécifications Mapbox Style, plus adapté à ce format.
    :::
    :::info
    La création d’un fichier SLD fait l’objet d’un autre tutoriel.
    :::
    <div class="fr-container">  
     <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

          ![Gérer les styles](/img/tutoriels/decouverte/4_gerer-style.png){.fr-responsive-img .frx-border-img}
          </div>
          <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

    ![Ajouter un style](/img/tutoriels/decouverte/4_ajout-style.png){.fr-responsive-img .frx-border-img}
      </div>
        </div>
