---
title: Publier ses propres données depuis cartes.gouv.fr
description: Fonctionnalité alimentation / diffusion
tags:
    - Découverte
segments:
    - url: /producteur
      title: Documentation producteur
sidemenu: true
---

{% from "components/component.njk" import component with context %}

<div class="fr-grid-row--gutters fr-mb-1w">
<div class="fr-col fr-col-md-12">
L'article suivant présente la fonctionnalité de chargement et diffusion de géo-données de cartes.gouv.fr. Elle permet aux utilisateurs de déposer de la donnée, la stocker, paramétrer des flux de diffusion et visualiser sur une carte.

:::info
Ce tutoriel détaille les étapes de mise en œuvre au travers du parcours « bac à sable », correspondant à l'offre « découverte ».
:::
:::callout Offre découverte
Une offre idéale pour éprouver les fonctionnalités disponibles et s'assurer de leur bonne adéquation à vos besoins.

-   100 Go hébergés sur un entrepôt mutualisé avec suppression trimestrielle
-   20 couches de donnée
-   Support par email [geoplateforme@ign.fr](mailto:geoplateforme@ign.fr)
    :::

## Ouvrir cartes.gouv.fr

1. Ouvrir le site dans un navigateur web : <a href="https://cartes.gouv.fr" target="_blank" rel="noopener noreferrer" title="cartes.gouv.fr - ouvre une nouvelle fenêtre">cartes.gouv.fr</a>.
    <center>

    ![Page d'accueil cartes.gouv.fr](/img/tutoriels/decouverte/1_accueil.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

2. Cliquer sur **_Se connecter_** (en haut à droite), pour ouvrir la fenêtre de connexion. Pour s'identifier vous pouvez le faire avec **FranceConnect** ou **AgentConnect**. Pour vous inscrire par le biais du site, veuillez cliquer sur **_Pas encore de compte_** (en bas à droite).
    <center>

    ![Se connecter par FranceConnect ou AgentConnect](/img/tutoriels/decouverte/1_franceconnect.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    ![Se connecter par le biais du site](/img/tutoriels/decouverte/1_identifiant.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

## Remplir le formulaire d'inscription

**Étape 1/5 :** Afin de renseigner votre profil, vous pouvez le faire par **FranceConnect** ou **AgentConnect**, en cliquant sur leurs boutons respectifs. Ou bien, vous pouvez aussi le faire par le biais du site cartes.gouv.fr. Pour cette seconde option, veuillez remplir les champs-ci-dessous. Tous les champs sont obligatoires.

<center>

![Renseigner nom d'utilisateur et mot de passe](/img/tutoriels/decouverte/2_profil.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
![Confirmation du mot de passe et courriel](/img/tutoriels/decouverte/2_profil2.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}

</center>

**Étape 2-3/5 :** Cliquer sur **_Étape suivante_** pour chacune de ces 2 étapes :

-   2/5 : **Renseigner une identité**
-   3/5 : **Renseigner une adresse**<br><br>

**Étape 4/5 :** Renseigner vos informations personnelles puis cliquer sur **_Valider_**.

**Étape 5/5 :** Pour finaliser votre formulaire d'inscription, veuillez remplir l'étape **Renseigner le captcha** en inscrivant les chiffres et lettres inscrites sur l'image. Cliquer ensuite sur **_Enregistrement_** pour arriver sur **Vérification du courriel**.

<center>

![Renseigner le captcha](/img/tutoriels/decouverte/2_captcha.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
![Vérification du courriel](/img/tutoriels/decouverte/2_verification.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}

</center>

## Découvrir l'espace de travail «&nbsp;bac à sable&nbsp;»

1. Ouvrir l'onglet **Découverte** : Une fois votre compte validé par courriel, votre connexion vous mènera à ce tableau de bord. Pour utiliser la brique alimentation / diffusion, veuillez cliquer sur **_Découverte à des fins de test_** afin d'ouvrir une page **Données découverte**.
   :::info
   Cet espace est commun à tous les utilisateurs. Y sont donc listées les données de tous les utilisateurs. Nous vous recommandons de choisir vos intitulés avec précaution et veiller à n'interagir qu'avec vos propres données.
   :::
    <center>

    ![Page d'accueil espace Découverte](/img/tutoriels/decouverte/3_decouverte.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    ![Données Découverte](/img/tutoriels/decouverte/3_donnees.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

    :::info
    La demande de création d'un espace de travail fait l'objet d'un autre tutoriel. Toutefois les étapes qui suivent restent identiques.
    :::

2. **Créer une fiche de données** : Dans l'onglet **Découverte** cliquez sur **_Créer une fiche de données_**. Cela ouvrira une page associée, dans laquelle vous pourrez définir le nom de votre fiche de données.
   :::info
   Prenez soin de définir un titre pertinent. En effet dans le mode découverte bac à sable, cette info a peu d'importance car elle ne sera pas visible dans le catalogue, toutefois en mode « essentiel » (c'est-à-dire quand vous aurez créé votre propre espace de travail dans un second temps) ce titre est celui qui apparaitra dans le catalogue général de cartes.gouv. Prenez ainsi l'habitude de renseigner un titre informatif et évocateur, tousles caractères sont autorisés ainsi que les espaces.
   :::
   Téléversez votre fichier en cliquant sur **_Déposer votre fichier de données_**. Le format de fichier autorisé étant Geopackage (ou archive zip contenant un Geopackage). La projection de votre donnée est détectée automatiquement.
    <center>

    ![Création d'une fiche de données](/img/tutoriels/decouverte/3_creer-fiche.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

    Avant de cliquer sur **_Déposer votre fichier_**, vous pouvez, si besoin, modifier deux champs identifiés dans votre donnée : le **Nom technique de votre donnée** et la **Projection de vos données en entrée**.

    Le processus **Vos données vecteur sont en cours de dépôt** se met en route. Voici en quatre étapes sont fonctionnement côté API :

    - Chargement du fichier
    - Vérifications standard
    - Vérification vecteur
    - Intégration en base de données
      <center>

    ![Données vecteurs en cours de dépôt](/img/tutoriels/decouverte/3_depot.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%" .fr-mt-6v}
    </center>

    :::info
    Ce processus peut prendre quelques minutes. Des travaux d'amélioration des performances sont en cours.
    :::
    Une fiche de donnée avec une base de données vecteur associée est créée.
    <center>

    ![Fiche de données](/img/tutoriels/decouverte/3_fiche-donnees.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

    Si vous quittez à partir d'ici la plateforme, vous pourrez éventuellement revenir à votre fiche de données et cliquer sur « reprendre l'intégration ».

    La fiche de données est désormais stockée et classée en **Non publié**, dans l'onglet **Données Découvertes**.
    :::info
    Vos données sont stockées avec d'autres données de test dans le « bac à sable » dont vous voyez la liste.
    :::
    <center>

    ![Données publiées](/img/tutoriels/decouverte/3_liste.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

    De là, nous pouvons créer un service, en sélectionnant **_Créer un service_**.
    <center>

    ![Choisir le service à configurer](/img/tutoriels/decouverte/3_creer-service.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

## Créer et publier un service WFS

1. Dans la fiche de votre donnée, cliquez sur **_Créer un service_** afin d'ouvrir une fenêtre de choix **Choisir le service à configurer** : sélectionnez **_Service de sélection WFS_**.
    <center>

    ![Jeux de données](/img/tutoriels/decouverte/4_jeux-donnees.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    ![Sélectionner Service de sélection WFS](/img/tutoriels/decouverte/4_service-wfs.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

2. **Créer et publier un service WFS**

    **Étape 1/5 :** Il faut sélectionner la case de votre donnée, en bas à droite, pour sélectionner les tables nécessaires au service. Il n'est pas obligatoire de sélectionner toutes les tables.
     <center>

    ![Créer et publier un service WFS](/img/tutoriels/decouverte/4_creer-wfs.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    ![Sélection des tables nécessaires au services](/img/tutoriels/decouverte/4_selection-tables.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

    **Étape 2/5 :** Il faut ignorer cette étape car la fonctionnalité est en cours de construction.
     <center>

    ![Source des metadonnées](/img/tutoriels/decouverte/4_source-metadonnees.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

    **Étape 3/5 :** Description de la ressource. Cette étape est primordiale. Toutes les cases sont obligatoires, afin de permettre à votre service d'être découvrable sur le catalogue.
     <center>

    ![Description](/img/tutoriels/decouverte/4_description.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    ![Référence temporelle et responsable de la ressource](/img/tutoriels/decouverte/4_ref-temporelle.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

    **Étape 4/5 :** Informations supplémentaires
     <center>

    ![Attribution, informations sur les métadonnées et type de représentation spatiale](/img/tutoriels/decouverte/4_info-supp.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

    Ces métadonnées sont à remplir uniquement pour le premier service de votre fiche de données. Vous retrouverezla plupart des champs déjà remplis lors de la publication d'autres services (WMS/TMS).

    **Étape 5/5 :** Restrictions d'accès : La publication est « Tout public » lorsque les données sont dans le bac à sable, ce qui est notre cas ici. Afin de définir des restrictions d'accès sur des données privées il faudra passer par la création préalable d'un espace de travail (processus qui fait l'objet d'un autre tutoriel).
     <center>

    ![Création du service WFS en cours](/img/tutoriels/decouverte/4_creation-en-cours.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    ![Référence temporelle et responsable de la ressource](/img/tutoriels/decouverte/4_restrictions.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    ![Service publié](/img/tutoriels/decouverte/4_service-publie.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

3. Visualiser un service WFS : visualiser cartographiquement les données.
   :::info
   Bonne pratique : choisir un niveau de zoom approprié au volume de vos données au risque de voir les performances d'affichage dégradées.
   :::
     <center>

    ![Visualisation d'un service WFS](/img/tutoriels/decouverte/4_visualisation.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

4. Ajouter un style au service WFS : Il n'existe pas d'interface graphique avancée à ce jour. Il faut donc préparer des fichiers QML (QGIS Markup Language) ou SLD (Styled Layer Descriptor), à charger dans l'onglet **Choisir un fichier** de la fenêtre **Gérer les styles**.
   :::callout Ajouter des styles
   S'agissant d'un flux de données vecteur, comme pour le WFS, l'application d'un style est optionnelle car elle se fait côté client. En plus du SLD et du QML, vous pouvez utiliser le format de fichier JSON aux spécifications Mapbox Style, plus adapté à ce format.
   :::
   :::info
   La création d'un fichier SLD fait l'objet d'un autre tutoriel.
   :::
    <center>

    ![Ajouter un style](/img/tutoriels/decouverte/4_ajout-style.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    ![Gérer les styles](/img/tutoriels/decouverte/4_gerer-style.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

## Créer et publier un service WMS

1. Dans la fiche de votre donnée, cliquez sur **_Créer un service_** afin d'ouvrir une fenêtre de choix **Choisir le service à configurer** : sélectionnez **Service d'images (Web Map Service - WMS)**.
    <center>

    ![Sélectionner Service d'images (Web Map Service - WMS)](/img/tutoriels/decouverte/5_service-wms.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

2. **Créer et publier un service WMS**

    **Étape 1/6 :** La première des six étapes pour publier un service WFS s'affiche. Il faut sélectionner la case de votre donnée, en bas à droite, pour sélectionner les tables nécessaires au service. Il n'est pas obligatoire de sélectionner toutes les tables.
     <center>

    ![Sélectionner les tables nécessaires au service](/img/tutoriels/decouverte/5_selection-tables.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

    **Étape 2-3/6 :** Étape obligatoire, il faut déposer un fichier de style SLD (Styled Layer Descriptor). Les messages d'erreur vous guident pour modifier votre SLD (seul format possible pour le WMS). Ce fichier sera déposé comme fichier statique.
     <center>

    ![Choix de fichier de style SLD](/img/tutoriels/decouverte/5_fichier-style.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

    L'erreur ci-dessus est systématique, elle indique que le champ ‘name' du style SLD ne correspond au nom exact de la couche GeoPackage.Un fichier SLD est un document XML qui définit la symbolisation et le style de rendu des couches cartographiques dans les services web géographiques comme WMS.
    :::info
    La création d'un fichier SLD fait l'objet d'un autre tutoriel.
    :::

    **Étape 4/6 :** Description de la ressource : Il faut éditer le **Nom technique du service**. Le reste est déjà rempli automatiquement, suite à la préalable publication du service WFS de ce tutoriel.
     <center>

    ![Description de la ressource](/img/tutoriels/decouverte/5_description.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

    **Étape 5-6/6 :** Informations supplémentaires et restrictions d'accès:
     <center>

    ![Attribution, informations sur les metadonnées et type de représentation spatiale](/img/tutoriels/decouverte/5_info-metadonnees.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    ![Restrictions d'accès](/img/tutoriels/decouverte/5_restrictions.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

    Vous pouvez sélectionner la restriction d'accès souhaitée pour votre fichier de données. Cliquez ensuite sur **_Publier le service maintenant_**. À la suite d'une fenêtre **Création du service WFS en cours**, vous apercevrez votre fiche de données classée en **Publié**. Cliquer sur **_Visualiser_** vous permettra ensuite de la visualiser cartographiquement.
     <center>

    ![Services publiés](/img/tutoriels/decouverte/5_service-publie.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    ![Visualisation d'un service WMS](/img/tutoriels/decouverte/5_visualisation.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
     </center>

    L'affichage est déjà plus rapide que le WFS mais les images demandées sont générées à la volée, il n'y a pas encore de tuiles précalculées. Si vous voulez changer de style, il faut publier un autre service WMS. Les services WMS ne sont pas personnalisables côté client.

## Créer et publier un service TMS

1. Dans la fiche de votre donnée, cliquez sur **_Créer un service_** afin d'ouvrir une fenêtre de choix **Choisir le service à configurer** : sélectionnez **Service de tuiles vectorielles (Tile Map Service - TMS)**.
    <center>

    ![Sélectionner Service de tuiles vectorielles (Tile Map Service - TMS)](/img/tutoriels/decouverte/6_service-tms.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
    </center>

2. **Générer une pyramide de tuiles vectorielles**

    **Étape 1/5 :** Après avoir choisi votre nom, il faut cocher la case de sélection de votre donnée en bas droite avant de cliquer sur **_Continuer_**.
      <center>

    ![Sélectionner les tables nécessaires au service](/img/tutoriels/decouverte/6_selection-tables.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
      </center>

    **Étape 2/5 :** On choisit explicitement les tables à conserver dans la pyramide de tuiles vectorielles. Moins il y a d'attributs, plus la généralisation est efficace.
      <center>

    ![Choisir les attributs des tables sélectionnées](/img/tutoriels/decouverte/6_attributs.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
      </center>

    **Étape 3/5 :** : On choisit les niveaux de la pyramide à générer c'est-à-dire quelles données doivent apparaitre à quels niveaux de la pyramide.
      <center>

    ![Choisir les niveaux de zoom](/img/tutoriels/decouverte/6_zoom.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
      </center>

    Pour se faire une idée de la taille des tuiles à différents niveaux, vous pouvez vous référer à : <a href="https://rok4.github.io/#visualisation-du-quadrillage" target="_blank" rel="noopener noreferrer" title="rok4.github.io/#visualisation-du-quadrillage - ouvre une nouvelle fenêtre">rok4.github.io/#visualisation-du-quadrillage</a>

    **Étape 4/5 :** Des options préconfigurées de généralisation sont proposées. Elles sont plus ou moins adaptées à certains types géométriques et leur efficacité va dépendre également des choix précédents. L'objectif est que les données s'affichent aux petites échelles sans que chaque tuile soit trop lourde à charger.
      <center>

    ![Option de généralisation](/img/tutoriels/decouverte/6_generalisation.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
      </center>

    **Étape 5/5 :** La généralisation de la pyramide peut prendre du temps. Si vos données sont très volumineuses il est possible de créer d'abord un échantillon (étape 5), c'est à dire une pyramide sur une zone limitée, pour valider la pertinence de vos choix. Le calcul de cet échantillon sera plus rapide car moins de tuiles seront générées aux grandes échelles.
      <center>

    ![Définition d'un échantillon](/img/tutoriels/decouverte/6_echantillon.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
      </center>

    Générer un échantillon permet de visualiser rapidement la pyramide de tuiles vectorielles sur une zone limitée pour vérifier ou ajuster les paramètres avant de traiter l'ensemble des données.
      <center>

    ![Définition d'un échantillon, visualisation](/img/tutoriels/decouverte/6_echantillon2.png){.fr-responsive-img .frx-border-img style="width: auto; max-width: 100%"}
      </center>

    :::callout Cas de l'échantillon
    Il faut publier cet échantillon en public pour que l'interface puisse l'afficher. Ensuite vous avez un accès direct à la génération de la pyramide complète sur l'ensemble de l'emprise de vos données avec le même paramétrage (cliquer sur **_Générer la pyramide complète_** dépublie l'échantillon)
    :::
    :::callout Ajouter des styles
    S'agissant d'un flux de données vecteur, comme pour le WFS, l'application d'un style est optionnelle car elle se fait côté client. En plus du SLD et du QML, vous pouvez utiliser le format de fichier JSON aux spécifications Mapbox Style, plus adapté à ce format.
    :::

3. Une fois la pyramide générée, vous aurez un bouton pour **_Publier le service TMS_**. La publication reprend les étapes de remplissage des métadonnées (déjà remplies, il faut juste faire attention au nom technique du service sélectionné) et le choix de publier en public ou en accès restreint.

</div>
</div>
