---
title: Maputnik
description: Tutoriels pour utiliser les API de la Géoplateforme avec Maputnik
tags:
    - Maputnik
    - API
    - Géoplateforme
eleventyNavigation:
    key: Maputnik
    order: 5
pictogram: digital/coding.svg
---

Dans cet article nous allons apprendre à :
- Modifier un fichier de styles avec l’éditeur <span lang="en">_Maputnik_</span>
- Afficher un fichier de styles modifié dans la Géoplateforme

<br>

La ressource visée dans cet exemple est « Plan IGN ». <span lang="en">_Maputnik_</span> est un éditeur <span lang="en">_open-source_</span> compatible avec la spécification [<span lang="en">_Mapbox GL style_</span>](https://docs.mapbox.com/style-spec/guides){target="_blank" rel="noopener noreferrer" title="Mapbox Style Specification - ouvre une nouvelle fenêtre"}. Il nous permet de modifier le style des cartes tuiles vectorielles en temps réel.

## Éditer un fichier de styles

### Ouvrir le fichier de style

1. Ouvrez l’[éditeur <span lang="en">_Maputnik_</span>](https://maputnik.github.io/editor){target="_blank" rel="noopener noreferrer" title="Éditeur Maputnik - ouvre une nouvelle fenêtre"} dans un navigateur web. Par défaut, <span lang="en">_Maputnik_</span> affichera les données [<span lang="en">_open map tiles (OSM)_</span>](https://openmaptiles.org/schema){target="_blank" rel="noopener noreferrer" title="OpenMapTiles - ouvre une nouvelle fenêtre"}.

    ![Éditeur Maputnik](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/01_editor.png){.fr-responsive-img .frx-border-img .frx-img-contained}

2. Ouvrez le fichier de style du « Plan IGN », cliquez sur le bouton **« Open »** (en haut à gauche) cela ouvrira une boite de dialogue. Dans la section **« Load from URL »**, collez l’<span lang="en">_URL_</span> du modèle à modifier. Ici nous prendrons [PLAN IGN option standard](https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/standard.json){target="_blank" rel="noopener noreferrer" title="Plan IGN - ouvre une nouvelle fenêtre"}. Ensuite, cliquez sur **« Open URL »**.

    ![Import du style](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/02_upload-style.png){.fr-responsive-img .frx-border-img .frx-img-contained}

    La carte « Plan IGN » s’affiche dans la fenêtre cartographique et la liste des styles est disponible dans le gestionnaire à gauche de l’écran. Dernier point, il faut aller dans **« Style Settings »** et modifier le paramètre **« Style renderer »** pour le basculer vers **« Open Layers (Experimental) »** :

    ![Fond de plan](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/03_layer-background.png){.fr-responsive-img .frx-border-img .frx-img-contained}

<br>

###  Modifier le style

Le style chargé peut maintenant être modifié. À titre d’exemple, nous allons modifier la couleur des routes non classées afin de rendre le réseau local plus visible lors de l’affichage (les routes non classées sont visibles à partir du zoom 14). Le style des routes non classées est déterminé par deux <span lang="en">_layers_</span> dans le fichier de styles : un pour le filet extérieur et l’autre pour le filet intérieur. Nous allons passer le filet extérieur en noir et colorer le filet intérieur.
1. Dans la fenêtre cartographique cliquez sur une route non classée. Une info-bulle proposant la liste des styles concernés s’ouvre. 

    ![Liste des styles](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/04_routier-route.png){.fr-responsive-img .frx-border-img .frx-img-contained}

    Dans cette info-bulle, cliquez sur **« Routier a niveau - filet extérieur – route non classee »** pour le sélectionner. Le style devient actif dans la liste des <span lang="en">_layers_</span> à gauche. 

    ![Route non classée](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/05_route-non-classee.png){.fr-responsive-img .frx-border-img .frx-img-contained}

    :::info
    Il est également possible de sélectionner le style dans la liste des <span lang="en">_layers_</span>, qui se trouve à gauche de l’écran : cliquez sur le groupe **« Routier »**, ensuite cherchez le layer avec l’identifiant : **« Routier - filet extérieur – route non classee »** et cliquez sur le <span lang="en">_layer_</span> pour le sélectionner. 
    :::

    ![Filet extérieur](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/06_filet-exterieur.png){.fr-responsive-img .frx-border-img .frx-img-contained}

    Le menu **« Layer »** affiche plusieurs options pour modifier le style de ce <span lang="en">_layer_</span>. Tout en bas dans ce menu on peut voir le texte <span lang="en">_JSON_</span> qui correspond au style de ce <span lang="en">_layer_</span> dans le fichier de style. 

    ![Éditeur JSON](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/07_json-editor.png){.fr-responsive-img .frx-border-img .frx-img-contained}

2. Cliquez sur la valeur du champ **« Color »** dans la section **« Paint properties »** pour en modifier la couleur grise par du noir :

    ![Propriétés de peinture](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/08_paint-properties.png){.fr-responsive-img .frx-border-img .frx-img-contained}

    Cette valeur peut être modifiée avec le menu colorimétrique comme visualisé ci-dessous ou en saisissant manuellement la valeur. Le texte <span lang="en">_JSON_</span> en bas du menu est modifié en conséquence. 

    ![Peinture JSON](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/09_json-paint.png){.fr-responsive-img .frx-border-img .frx-img-contained}

3. Pour modifier le filet intérieur, procédez de la même façon avec le <span lang="en">_layer_</span> **« Routier a niveau - filet interieur – route non classee »** en remplaçant la couleur dans la section **« Paint properties »** par celle de votre choix (dans l’exemple un vert très pâle).

    ![Vert pâle](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/10_vert-pale.png){.fr-responsive-img .frx-border-img .frx-img-contained}

    Dans la fenêtre cartographique les routes locales sont maintenant plus visibles.

    ![Routes locales](/img/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/11_routes-locales.png){.fr-responsive-img .frx-border-img .frx-img-contained}

4. Exportez le nouveau style vers un fichier <span lang="en">_JSON_</span> : cliquez sur le bouton **« Export »** (en haut de l’écran). Ne renseignez rien dans la boîte de dialogue qui s’ouvre et cliquez sur **« Download »**. Le nouveau fichier de style est alors enregistré en local.