---
title: Téléchargements et flux
description: Le détail des liens de téléchargement et de flux dans le catalogue de cartes.gouv.fr
tags:
    - Flux
    - Téléchargement
eleventyNavigation:
    key: Téléchargements et flux
    order: 4
pictogram: document/document-download.svg
summary:
    visible: true
    depth: 2
showDescription: false
---

<figure role="group" class="fr-content-media">
    <video src="https://data.geopf.fr/annexes/ressources/aide/02_demo3_bdtopo-telechargement.mp4" class="fr-responsive-vid" controls>
        <p>Voir la transcription ci-dessous</p>
    </video>
    <figcaption class="fr-content-media__caption">
        Panneau de personnalisation : activez le son pour suivre ce tutoriel.
    </figcaption>
</figure>

La partie **« Téléchargements et flux »** comprend deux catégories de **liens** :
- Les liens de téléchargement qui sont décrits ci-dessous.
- Les liens de flux contenant :
    - Des services WMTS, WMS (en raster ou vecteur), WFS et TMS (tuiles vectorielles).
    - Des styles **_<span lang="en">MAPLIBRE-STYLE</span>_**, dont l’_<span lang="en">URL</span>_ d’accès peut être copiée.

![Partie téléchargements et flux](/img/guides-utilisateur/rechercher-une-donnee/telechargement-et-flux/01_telechargements-flux-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Accès aux données en téléchargement
Dans les liens de **téléchargement**, un bouton **« Ouvrir le panneau de personnalisation »** vous permet d’accéder au téléchargement.

![Détail de la carte d’un téléchargement montrant les boutons pour aller plus loin](/img/guides-utilisateur/rechercher-une-donnee/telechargement-et-flux/02_lien-telechargement-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Une fois le panneau ouvert, vous pouvez télécharger votre donnée. L’outil présente 10 résultats par page et vous pouvez filtrer selon plusieurs critères :
- La zone
- Le format
- La projection (<span lang="en">[_CRS_](https://geodesie.ign.fr/les-systemes-geodesiques#anchor_2:~:text=Code%20EPSG,Registre%20IGN%2DF){target="_blank" rel="noopener noreferrer" title="Système de référence verticale et altitude - ouvre une nouvelle fenêtre"}</span>) : Métadonnées permettant de préciser, pour un Système de Référence de Coordonnées, selon le type de coordonnées 1D, 2D ou 3D, les éléments de définition associés au jeu de coordonnées
- La temporalité (dates d’édition)

![Partie téléchargement dépliée](/img/guides-utilisateur/rechercher-une-donnee/telechargement-et-flux/03_telechargement-avance-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Après avoir sélectionné le jeu de données de téléchargement, vous pouvez télécharger une donnée spécifique en cliquant sur son lien ou utiliser l’option « Télécharger tout » si plusieurs fichiers sont disponibles.

![Finalisation du téléchargement](/img/guides-utilisateur/rechercher-une-donnee/telechargement-et-flux/04_finalisation-telechargement-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Accès aux données en flux
Les liens de flux comprennent les éléments suivants :
- Le nom de la donnée.
- Le nom technique de la donnée (**_<span lang="en">LAYER</span>_**).
- Le protocole standard OGC utilisé pour le service.
- Un bouton permettant de copier l’_<span lang="en">URL</span>_.

![GetCapabilities - TMS - BD TOPO®](/img/guides-utilisateur/rechercher-une-donnee/telechargement-et-flux/05_getcapabilities-tms.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Les liens de **flux** permettent aussi d’accéder à l’_<span lang="en">URL</span>_ fournie qui correspond à un **_<span lang="en">GetCapabilities</span>_**, qui sert uniquement à lister les ressources disponibles. Elle ne permet pas de télécharger des données. Pour en savoir plus sur les méthodes de l’API de diffusion, [consultez la documentation dédiée](https://cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/diffusion){target="_blank" rel="noopener noreferrer" title="API de diffusion - ouvre une nouvelle fenêtre"}.