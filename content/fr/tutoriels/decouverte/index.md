---
title: Publier ses propres données depuis cartes.gouv.fr
description: Fonctionnalité alimentation / diffusion
tags:
    - Découverte
    - Index des tutoriels
segments:
    - url: /producteur
      title: Documentation producteur
    - url: /tutoriels
      title: Tutoriels
sidemenu: true
---

{% from "components/component.njk" import component with context %}

<div class="fr-grid-row--gutters fr-mb-1w">

<div class="fr-col fr-col-md-12">

L'article suivant présente la fonctionnalité de chargement et diffusion de géo-données de cartes.gouv.fr. Elle permet aux utilisateurs de déposer de la donnée, la stocker, paramétrer des flux de diffusion et visualiser sur une carte.

:::info
Ce tutoriel détaille les étapes de mise en œuvre au travers du parcours « bac à sable », correspondant à l'offre « découverte ».
:::

---

:::callout Offre découverte
Une offre idéale pour éprouver les fonctionnalités disponibles et s'assurer de leur bonne adéquation à vos besoins.

-   100 Go hébergés sur un entrepôt mutualisé avec suppression trimestrielle
-   20 couches de donnée
-   Support par email <u>geoplateforme@ign.fr</u>
    :::

## Ouvrir cartes.gouv.fr

1. Ouvrir le site dans un navigateur web : <a href="https://cartes.gouv.fr" target="_blank" rel="noopener noreferrer" title="cartes.gouv.fr - ouvre une nouvelle fenêtre">cartes.gouv.fr</a>.

 <img src="/img/tutoriels/decouverte/img1.png" class="fr-responsive-img" style="border: 2px solid #000091; width: auto; max-width: 100%;" alt="[Page d'accueil cartes.gouv.fr]">
 <div style="height: 12px;"></div>

2. Cliquer sur **_Se connecter_** (en haut à droite), pour ouvrir la fenêtre de connexion. Pour s'identifier vous pouvez le faire avec **FranceConnect** ou **AgentConnect**. Pour vous inscrire par le biais du site, veuillez cliquer sur **_Pas encore de compte_** (en bas à droite).

 <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap;">
   <img src="/img/tutoriels/decouverte/img2.png" class="fr-responsive-img" style="border: 2px solid #000091; width: auto; max-width: 100%;" alt="[Se connecter par FranceConnect ou AgentConnect]">
   <img src="/img/tutoriels/decouverte/img3.png" class="fr-responsive-img" style="border: 2px solid #000091; width: auto; max-width: 100%;" alt="[Se connecter par le biais du site]"></div>
 <div style="height: 16px;"></div>

## Remplir le formulaire d'inscription

**Étape 1/5 :** Afin de renseigner votre profil, vous pouvez le faire par **FranceConnect** ou **AgentConnect**, en cliquant sur leurs boutons respectifs. Ou bien, vous pouvez aussi le faire par le biais du site cartes.gouv.fr. Pour cette seconde option, veuillez remplir les champs-ci-dessous. Tous les champs sont obligatoires.

<div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap;">
  <img src="/img/tutoriels/decouverte/img4.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Renseigner nom d'utilisateur et mot de passe]">
  <img src="/img/tutoriels/decouverte/img5.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Confirmation du mot de passe et courriel]">
</div>
<div style="height: 16px;"></div>

**Étape 2-4/5 :** Cliquer sur **_Étape suivante_** pour chacune de ces 3 étapes :

-   2/5 : Renseigner une identité
-   3/5 : Renseigner une adresse
-   4/5 : Renseigner vos informations personnelles

<div style="height: 16px;"></div>

**Étape 5/5 :** Pour finaliser votre formulaire d'inscription, veuillez remplir l'étape **Renseigner le captcha** en inscrivant les chiffres et lettres inscrites sur l'image. Cliquer ensuite sur **_Enregistrement_** pour arriver sur **Vérification du courriel**.

<div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap;">
  <img src="/img/tutoriels/decouverte/img6.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Renseigner le captcha]">
  <img src="/img/tutoriels/decouverte/img7.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Vérification du courriel]">
</div>
<div style="height: 16px;"></div>

## Découvrir l'espace de travail « bac à sable »

1. Ouvrir l'onglet **Découverte** : Une fois votre compte validé par courriel, votre connexion vous mènera à ce tableau de bord. Pour utiliser la brique alimentation / diffusion, veuillez cliquer sur **_Découverte à des fins de test_** afin d'ouvrir une page **Données découverte**.
   :::info
   Cet espace est commun à tous les utilisateurs. Y sont donc listées les données de tous les utilisateurs. Nous vous recommandons de choisir vos intitulés avec précaution et veiller à n'interagir qu'avec vos propres données.
   :::
    <div style="height: 16px;"></div>
    <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap;">
      <img src="/img/tutoriels/decouverte/img8.jpg" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Page d'accueil espace Découverte]">
      <img src="/img/tutoriels/decouverte/img9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Données Découverte]">
    </div>
    <div style="height: 16px;"></div>

    :::info
    La demande de création d'un espace de travail fait l'objet d'un autre tutoriel. Toutefois les étapes qui suivent restent identiques.
    :::
    <div style="height: 16px;"></div>

2. Créer une fiche de données : Dans l'onglet **Découverte** cliquez sur **_Créer une fiche de données_**. Cela ouvrira une page associée, dans laquelle vous pourrez définir le nom de votre fiche de données.
   :::info
   Prenez soin de définir un titre pertinent. En effet dans le mode découverte bac à sable, cette info a peu d'importance car elle ne sera pas visible dans le catalogue, toutefois en mode « essentiel » (c'est-à-dire quand vous aurez créé votre propre espace de travail dans un second temps) ce titre est celui qui apparaitra dans le catalogue général de cartes.gouv. Prenez ainsi l'habitude de renseigner un titre informatif et évocateur, tousles caractères sont autorisés ainsi que les espaces.
   :::
    <div style="height: 16px;"></div>

    Téléversez votre fichier en cliquant sur **_Déposer votre fichier de données_**. Le format de fichier autorisé étant Geopackage (ou archive zip contenant un Geopackage). La projection de votre donnée est détectée automatiquement.

    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Création d'une fiche de données]">
    </div>
    <div style="height: 8px;"></div>

    Avant de cliquer sur **_Déposer votre fichier_**, vous pouvez, si besoin, modifier deux champs identifiés dans votre donnée : le **Nom technique de votre donnée** et la **Projection de vos données en entrée**.

    Le processus **Vos données vecteur sont en cours de dépôt** se met en route. Voici en quatre étapes sont fonctionnement côté API :

    - Chargement du fichier
    - Vérifications standard
    - Vérification vecteur
    - Intégration en base de données

    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Données vecteurs en cours de dépôt]">
    </div>
    <div style="height: 16px;"></div>

    :::info
    Ce processus peut prendre quelques minutes. Des travaux d'amélioration des performances sont en cours.
    :::
    <div style="height: 16px;"></div>
    Une fiche de donnée avec une base de données vecteur associée est créée.
    <div style="height: 16px;"></div>
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Fiche de données]">
    </div>
    <div style="height: 16px;"></div>

    Si vous quittez à partir d'ici la plateforme, vous pourrez éventuellement revenir à votre fiche de données et cliquer sur « reprendre l'intégration ».

    La fiche de données est désormais stockée et classée en **Non publié**, dans l'onglet **Données Découvertes**.

    :::info
    Vos données sont stockées avec d'autres données de test dans le « bac à sable » dont vous voyez la liste.
    :::
    <div style="height: 16px;"></div>
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Données publiées]">
    </div>
    <div style="height: 8px;"></div>

    De là, nous pouvons créer un service, en sélectionnant **_Créer un service_**.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Choix du service à configurer]">
    </div>

## Créer et publier un service WFS

1. Dans la fiche de votre donnée, cliquez sur **_Créer un service_** afin d'ouvrir une fenêtre de choix **Choisir le service à configurer** : sélectionnez **_Service de sélection WFS_**.
 <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap;">
   <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Jeux de données]">
   <img src="/img/placeholder.1x1.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Sélectionner Service de sélection WFS]">
 </div>
 <div style="height: 16px;"></div>

2. Créer et publier un service WFS :<br>
   **Étape 1/5 :** Il faut sélectionner la case de votre donnée, en bas à droite, pour sélectionner les tables nécessaires au service. Il n'est pas obligatoire de sélectionner toutes les tables.
    <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Créer et publier un service WFS]">
      <img src="/img/placeholder.1x1.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Sélection des tables nécessaires au services]">
    </div>
    <div style="height: 16px;"></div>

    **Étape 2/5 :** Il faut ignorer cette étape car la fonctionnalité est en cours de construction.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Source des metadonnées]">
    </div>
    <div style="height: 16px;"></div>

    **Étape 3/5 :** Description de la ressource. Cette étape est primordiale. Toutes les cases sont obligatoires, afin de permettre à votre service d’être découvrable sur le catalogue.
    <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap;">
      <img src="/img/placeholder.1x1.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Description]">
      <img src="/img/placeholder.1x1.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Référence temporelle et responsable de la ressource]">
    </div>
    <div style="height: 16px;"></div>

    **Étape 4/5 :** Informations supplémentaires
    <div style="text-align: center;">
      <img src="/img/placeholder.1x1.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Attribution, informations sur les métadonnées et type de représentation spatiale]">
    </div>
    <div style="height: 8px;"></div>

    Ces métadonnées sont à remplir uniquement pour le premier service de votre fiche de données. Vous retrouverezla plupart des champs déjà remplis lors de la publication d’autres services (WMS/TMS).

    **Étape 5/5 :** Restrictions d’accès : La publication est « Tout public » lorsque les données sont dans le bac à sable, ce qui est notre cas ici. Afin de définir des restrictions d’accès sur des données privées il faudra passer par la création préalable d’un espace de travail (processus qui fait l’objet d’un autre tutoriel).
    <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Création du service WFS en cours]">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Restrictions d'accès]">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Services]">
    </div>
    <div style="height: 16px;"></div>

3. Visualiser un service WFS : visualiser cartographiquement les données.
:::info
Bonne pratique : choisir un niveau de zoom approprié au volume de vos données au risque de voir les performances d’affichage dégradées.
:::
 <div style="height: 16px;"></div>
 <div style="text-align: center;">
   <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Visualisation d'un service WFS]">
 </div>
 <div style="height: 16px;"></div>

4. Ajouter un style au service WFS : Il n’existe pas d’interface graphique avancée à ce jour. Il faut donc préparer des fichiers QML (QGIS Markup Language) ou SLD (Styled Layer Descriptor), à charger dans l’onglet **Choisir un fichier** de la fenêtre **Gérer les styles**.

    :::callout Ajouter des styles
    S'agissant d'un flux de données vecteur, comme pour le WFS, l'application d'un style est optionnelle car elle se fait côté client. En plus du SLD et du QML, vous pouvez utiliser le format de fichier JSON aux spécifications Mapbox Style, plus adapté à ce format.
    :::

    :::info
    La création d’un fichier SLD fait l’objet d’un autre tutoriel.
    :::
    <div style="height: 16px;"></div>
    <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap;">
      <img src="/img/placeholder.1x1.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Ajouter un style]">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Gérer les styles]">
    </div>

## Créer et publier un service WMS

1. Dans la fiche de votre donnée, cliquez sur **_Créer un service_** afin d’ouvrir une fenêtre de choix **Choisir le service à configurer** : sélectionnez **Service d'images (Web Map Service - WMS)**.
 <div style="text-align: center;">
   <img src="/img/placeholder.1x1.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Sélectionner Service d'images (Web Map Service - WMS)]">
 </div>
 <div style="height: 16px;"></div>

2. Créer et publier un service WMS<br>
   **Étape 1/6 :** La première des six étapes pour publier un service WFS s’affiche. Il faut sélectionner la case de votre donnée, en bas à droite, pour sélectionner les tables nécessaires au service. Il n’est pas obligatoire de sélectionner toutes les tables.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Selectionner les tables nécessaires au service]">
    </div>
    <div style="height: 16px;"></div>

    **Étape 2-3/6 :** Étape obligatoire, il faut déposer un fichier de style SLD (Styled Layer Descriptor). Les messages d’erreur vous guident pour modifier votre SLD (seul format possible pour le WMS). Ce fichier sera déposé comme fichier statique.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Fichier de style SLD]">
    </div>
    <div style="height: 8px;"></div>
    L’erreur ci-dessus est systématique, elle indique que le champ ‘name’ du style SLD ne correspond au nom exact de la couche GeoPackage.Un fichier SLD est un document XML qui définit la symbolisation et le style de rendu des couches cartographiques dans les services web géographiques comme WMS.
    <div style="height: 16px;"></div>

    :::info
    La création d’un fichier SLD fait l’objet d’un autre tutoriel.
    :::
    <div style="height: 16px;"></div>

    **Étape 4/6 :** Description de la ressource : Il faut éditer le **Nom technique du service**. Le reste est déjà rempli automatiquement, suite à la préalable publication du service WFS de ce tutoriel.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Description de la ressource]">
    </div>
    <div style="height: 16px;"></div>

    **Étape 5/6 :** Informations supplémentaires et restrictions d’accès :
    <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap;">
      <img src="/img/placeholder.1x1.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Attribution, informations sur les metadonnées et type de représentation spatiale]">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Restriction d'accès]">
    </div>
    <div style="height: 8px;"></div>

    Vous pouvez sélectionner la restriction d’accès souhaitée pour votre fichier de données. Cliquez ensuite sur **_Publier le service maintenant_**. À la suite d’une fenêtre **Création du service WFS en cours**, vous apercevrez votre fiche de données classée en **Publié**. Cliquer sur **_Visualiser_** vous permettra ensuite de la visualiser cartographiquement.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Services]">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Visualisation d'un service WFS]">
    </div>
    <div style="height: 8px;"></div>

    L'affichage est déjà plus rapide que le WFS mais les images demandées sont générées à la volée, il n'y a pas encore de tuiles précalculées. Si vous voulez changer de style, il faut publier un autre service WMS. Les services WMS ne sont pas personnalisables côté client.

## Créer et publier un service TMS

1. Dans la fiche de votre donnée, cliquez sur **_Créer un service_** afin d’ouvrir une fenêtre de choix **Choisir le service à configurer** : sélectionnez **Service de tuiles vectorielles (Tile Map Service - TMS)**.
 <div style="text-align: center;">
   <img src="/img/placeholder.1x1.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Sélectionner Service de tuiles vectorielles (Tile Map Service - TMS)]">
 </div>
 <div style="height: 16px;"></div>

2. Générer une pyramide de tuiles vectorielles :<br>
   **Étape 1/5 :** Après avoir choisi votre nom, il faut cocher la case de sélection de votre donnée en bas droite avant de cliquer sur **_Continuer_**.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Générer une pyramide de tuiles vectorielles]">
    </div>
    <div style="height: 16px;"></div>

    **Étape 2/5 :** On choisit explicitement les tables à conserver dans la pyramide de tuiles vectorielles. Moins il y a d'attributs, plus la généralisation est efficace.
    <div style="text-align: center;">
      <img src="/img/placeholder.1x1.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Choisir les attributs des tables sélectionnées]">
    </div>
    <div style="height: 16px;"></div>

    **Étape 3/5 :** : On choisit les niveaux de la pyramide à générer c’est-à-dire quelles données doivent apparaitre à quels niveaux de la pyramide.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Choisir les niveaux de zoom]">
    </div>
    <div style="height: 8px;"></div>

    Pour se faire une idée de la taille des tuiles à différents niveaux, vous pouvez vous référer à : <a href="https://rok4.github.io/#visualisation-du-quadrillage" target="_blank" rel="noopener noreferrer" title="rok4.github.io/#visualisation-du-quadrillage - ouvre une nouvelle fenêtre">rok4.github.io/#visualisation-du-quadrillage</a>

    **Étape 4/5 :** Des options préconfigurées de généralisation sont proposées. Elles sont plus ou moins adaptées à certains types géométriques et leur efficacité va dépendre également des choix précédents. L’objectif est que les données s’affichent aux petites échelles sans que chaque tuile soit trop lourde à charger.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Option de généralisation]">
    </div>
    <div style="height: 16px;"></div>

    **Étape 5/5 :** La généralisation de la pyramide peut prendre du temps. Si vos données sont très volumineuses il est possible de créer d'abord un échantillon (étape 5), c'est à dire une pyramide sur une zone limitée, pour valider la pertinence de vos choix. Le calcul de cet échantillon sera plus rapide car moins de tuiles seront générées aux grandes échelles.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Définition d'un échantillon]">
    </div>
    <div style="height: 8px;"></div>

    Générer un échantillon permet de visualiser rapidement la pyramide de tuiles vectorielles sur une zone limitée pour vérifier ou ajuster les paramètres avant de traiter l’ensemble des données.
    <div style="text-align: center;">
      <img src="/img/placeholder.16x9.png" class="fr-responsive-img" style="border: 2px solid #000091; max-width: 100%; width: auto;" alt="[Définition d'un échantillon 2]">
    </div>
    <div style="height: 16px;"></div>

    :::callout Cas de l’échantillon
    Il faut publier cet échantillon en public pour que l'interface puisse l'afficher. Ensuite vous avez un accès direct à la génération de la pyramide complète sur l'ensemble de l'emprise de vos données avec le même paramétrage (cliquer sur **_Générer la pyramide complète_** dépublie l'échantillon)
    :::

    :::callout Ajouter des styles
    S'agissant d'un flux de données vecteur, comme pour le WFS, l'application d'un style est optionnelle car elle se fait côté client. En plus du SLD et du QML, vous pouvez utiliser le format de fichier JSON aux spécifications Mapbox Style, plus adapté à ce format.
    :::

3. Une fois la pyramide générée, vous aurez un bouton pour **_Publier le service TMS_**. La publication reprend les étapes de remplissage des métadonnées (déjà remplies, il faut juste faire attention au nom technique du service sélectionné) et le choix de publier en public ou en accès restreint.

</div>

</div>
