---
title: Maputnik
description: Tutoriels pour utiliser les APIs de la Géoplateforme avec Maputnik
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
- Modifier un fichier de styles avec l’éditeur *<span lang="en">Maputnik</span>*
- Afficher un fichier de styles modifié dans la Géoplateforme

La ressource visée dans cet exemple est Plan IGN. *<span lang="en">Maputnik</span>* est un éditeur *<span lang="en">open-source</span>* compatible avec la spécification [_<span lang="en">Mapbox GL style</span>_](https://www.mapbox.com/mapbox-gl-style-spec){target="_blank" rel="noopener noreferrer" title="Mapbox GL style"}. Il nous permet de modifier le style des cartes tuiles vectorielles en temps réel. Une documentation plus complète sur l’utilisation de cet outil se trouve [_<span lang="en">ici</span>_](https://www.mapbox.com/mapbox-gl-style-spec){target="_blank" rel="noopener noreferrer" title="Documentation Mapbox"}.


## Éditer un fichier de styles

### Ouvrir le fichier de style

- 1. Ouvrir l’éditeur dans un navigateur web avec ce [lien](https://maputnik.github.io/editor){target="_blank" rel="noopener noreferrer" title="Éditeur Maputnik"}. Par défaut, Maputnik affichera les données [_<span lang="en">open map tiles (OSM)</span>_](https://openmaptiles.org/schema){target="_blank" rel="noopener noreferrer" title="OpenMapTiles"}.


![Éditeur Maputnik](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/01_editor.png){.fr-responsive-img .frx-border-img .frx-img-contained}


- 2. Ouvrir le fichier de style du plan IGN : cliquer sur le bouton *<span lang="en">Open</span>* (en haut à gauche) cela ouvrira une boite de dialogue. Dans la section Load from URL, coller l’URL du modèle à modifier. Ici nous prendrons [_<span lang="en">Plan IGN option standard</span>_](https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/standard.json){target="_blank" rel="noopener noreferrer" title="Plan IGN"}. Ensuite, cliquer sur *<span lang="en">Open URL</span>*.


![Import du style](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/02_upload-style.png){.fr-responsive-img .frx-border-img .frx-img-contained}

La carte plan IGN s’affiche dans la fenêtre cartographique et la liste des styles est disponible dans le gestionnaire à gauche de l’écran. Dernier point, il faut aller dans *<span lang="en">"Style Settings"</span>* et modifier le paramètre *<span lang="en">Style renderer"</span>* pour le basculer avec *<span lang="en">"Open Layers (Experimental)"</span>* :

![Fond de plan](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/03_layer-background.png){.fr-responsive-img .frx-border-img .frx-img-contained}

###  Modifier le style

Le style chargé peut maintenant être modifié. À titre d’exemple, nous allons modifier la couleur des routes non classées afin de rendre le réseau local plus visibles lors de l’affichage (les routes non classées sont visibles à partir du zoom 14). Le style des routes non classées est déterminé par deux *<span lang="en">layers</span>* dans le fichier de *<span lang="en">styles</span>* : un pour le filet extérieur et l’autre pour le filet intérieur. Nous allons passer le filet extérieur en noir et colorer le filet intérieur.

- 1. Dans la fenêtre cartographique cliquer sur une route non classée. Une info-bulle proposant la liste des styles concernés s’ouvre. 

![Liste des styles](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/04_routier-route.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans cette info-bulle cliquer sur « Routier a niveau - filet extérieur – route non classee » pour le sélectionner. Le style devient actif dans la liste des *<span lang="en">layers</span>* à gauche. 

![Route non classée](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/05_route-non-classee.png){.fr-responsive-img .frx-border-img .frx-img-contained}


:::info
Il est également possible de sélectionner le style dans la liste de *<span lang="en">layers</span>*, qui se trouve à gauche dans l’écran : cliquer sur le groupe « Routier », ensuite chercher le layer avec l’id : « Routier - filet extérieur – route non classee » et cliquer sur le *<span lang="en">layer</span>* pour le sélectionner. 
:::

![Filet extérieur](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/06_filet-exterieur.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Le menu *<span lang="en">Layer</span>* affiche plusieurs options pour modifier le style de ce *<span lang="en">layer</span>*. Tout en bas dans ce menu on peut voir le texte *<span lang="en">JSON</span>* qui correspond au style de ce *<span lang="en">layer</span>* dans le fichier de style. 

![Éditeur JSON](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/07_json-editor.png){.fr-responsive-img .frx-border-img .frx-img-contained}

- 2. Cliquer sur la valeur du champ *<span lang="en">color</span>* dans la section *<span lang="en">Paint properties</span>* pour en modifier la couleur grise par du noir :

![Propriétés de painture](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/08_paint-properties.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Cette valeur peut être modifiée avec le menu colorimétrique comme visualisé ci-dessous ou en saisissant manuellement la valeur. Le texte *<span lang="en">JSON</span>* en bas du menu est modifié en conséquence. 

![Painture JSON](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/09_json-paint.png){.fr-responsive-img .frx-border-img .frx-img-contained}

- 3. Pour modifier le filet extérieur procéder de la même façon avec le *<span lang="en">layer</span>* « Routier a niveau - filet extérieur – route non classee » en remplaçant la couleur dans la section *<span lang="en">Paint properties</span>* par celle de votre choix (dans l’exemple un vert très pâle).

![Vert pâle](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/10_vert-pale.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la fenêtre cartographique les routes locales sont maintenant plus visibles.

![Routes locales](/img/guides-utilisateur/rechercher-une-donnee/utiliser-les-services-de-la-geoplateforme/tutoriels-api/maputnik/11_routes-locales.png){.fr-responsive-img .frx-border-img .frx-img-contained}

- 4. Exporter le nouveau style vers un fichier *<span lang="en">JSON</span>* : cliquer dans le bouton *<span lang="en">Export</span>* (en haut de l’écran). Ne rien renseigner dans la boîte de dialogue qui s’ouvre et cliquer sur *<span lang="en">Download</span>*. Le nouveau fichier de style est enregistré en local.