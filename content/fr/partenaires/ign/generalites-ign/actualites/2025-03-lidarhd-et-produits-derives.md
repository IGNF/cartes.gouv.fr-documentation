---
title: Les premiers modèles numériques issus du programme LiDAR HD sont disponibles
description: Les données issues du programme LiDAR HD révolutionnent l’offre produit altimétrique de l’IGN
tags:
    - LiDAR
eleventyNavigation:
    key: Les premiers modèles numériques issus du programme LiDAR HD sont disponibles
date: 2025-03-27
---

Issues d’acquisitions aériennes LiDAR d’une densité d’au moins 10 points en moyenne au mètre carré, elles offrent une description 3D fine et homogène du sol topographique, du sur-sol artificiel (bâtiments, ponts) et de la végétation.

Pour en savoir plus sur le programme : [Programme LiDAR HD : vers une nouvelle cartographie 3D du territoire - Institut - IGN](https://www.ign.fr/institut/programme-lidar-hd-vers-une-nouvelle-cartographie-3d-du-territoire).

![Rendus des quatre types de produits LiDAR HD](/img/partenaires/ign/generalites/actualites/2025-03-lidar.png){.fr-responsive-img .frx-border-img .frx-img-contained}

L’offre se compose de quatre types de produits :

* nuage de points classés
* modèle numérique de terrain (MNT)
* modèle numérique de surface (MNS)
* modèle numérique de hauteur (MNH)

---

Ces modèles offrent une description altimétrique fine qui répond à de nombreux besoins dans différents domaines :

* Connaissance et gestion de la ressource forestière (localisation des dessertes forestières, suivi de la santé des forêts, estimation du puits de carbone forestier)
* Prévention du risque inondation (visualisation précise de la topographie des zones inondables)
* Transition énergétique (estimation du potentiel solaire, étude de site pour l’implantation d’infrastructures…)
* Gestion du risque incendie (mesure de la hauteur et de la densité de la végétation et ses différentes strates pour évaluer le risque de propagation du feu)
* Réseaux (identification des meilleurs sites de déploiement et des éventuels obstacles à l’installation)
* Architecture (analyse des caractéristiques des bâtiments comme leur dimension, leur hauteur et leur exposition)
* Archéologie (détection de vestiges sous couvert forestier).

<br>

L’IGN a repéré pour vous quelques exemples d’utilisation des données réalisés par la communauté, ils sont détaillés ici : [Quels usages des données 3D issues du programme LiDAR HD ? - Portail IGN - IGN](https://www.ign.fr/usages-des-donnees-lidar-hd).

---

Les 55 premiers blocs de MNT, MNS et MNH sont d’ores et déjà disponibles.

Ces données sont **téléchargeables** en licence ouverte aux adresses suivantes :

* [https://cartes.gouv.fr/telechargement/IGNF_MNH-LIDAR-HD](https://cartes.gouv.fr/telechargement/IGNF_MNH-LIDAR-HD)
* [https://cartes.gouv.fr/telechargement/IGNF_MNS-LIDAR-HD](https://cartes.gouv.fr/telechargement/IGNF_MNS-LIDAR-HD)
* [https://cartes.gouv.fr/telechargement/IGNF_MNT-LIDAR-HD](https://cartes.gouv.fr/telechargement/IGNF_MNT-LIDAR-HD)

<br>

Vous pouvez aussi **visualiser** en 2D ces modèles 3D comme par exemple ici le [MNT LiDAR HD](https://cartes.gouv.fr/explorer-les-cartes?c=2.491060,44.794888&z=9&l=IGNF_LIDAR-HD_MNH_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(1;1;0;0),IGNF_LIDAR-HD_MNS_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(2;1;0;0),IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=&permalink=yes), le [MNS LiDAR HD](https://cartes.gouv.fr/explorer-les-cartes?c=2.491060,44.794888&z=9&l=IGNF_LIDAR-HD_MNH_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(1;1;0;0),IGNF_LIDAR-HD_MNS_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(2;1;1;0),IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(3;1;0;0)&w=&permalink=yes), ou encore le [MNH LiDAR HD](https://cartes.gouv.fr/explorer-les-cartes?c=2.491060,44.794888&z=9&l=IGNF_LIDAR-HD_MNH_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(1;1;1;0),IGNF_LIDAR-HD_MNS_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(2;1;0;0),IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW$GEOPORTAIL:OGC:WMTS(3;1;0;0)&w=&permalink=yes).

Pour accéder aux flux ombragés en streaming dans votre SIG préféré, voici l’URL à utiliser : [https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities](https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities).

Vous trouverez ces ressources sous les noms suivants :

* MNT issu de LiDAR HD : IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW
* MNS issu de LiDAR HD : IGNF_LIDAR-HD_MNS_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW
* MNH issu de LiDAR HD : IGNF_LIDAR-HD_MNH_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW

<br>

### Un peu de technique…

Quelques modèles numériques (sur la Charente-Maritime et le Pas-de-Calais) avaient déjà fait l’objet d’une diffusion en mode « bêta ». Depuis, la dérivation de ces modèles a évolué et ces modèles numériques nouvellement diffusés sont les **produits cible**s attendus dans le cadre du programme LiDAR HD.

Cette version cible des modèles se base sur la nouvelle version de classification des nuages de points (dite Version 5). Pour les générer, des points utiles ont été choisis dans les nuages de points lors de la classification permettant de mieux gérer différentes situations de recouvrements et ainsi obtenir une meilleure modélisation du sol et du sursol dans les zones à fort dévers (notamment les canopées ou les bords de ponts).

![Zone de végétation mal décrite en MNS v1](/img/partenaires/ign/generalites/actualites/2025-03-lidar2.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Ces points choisis pour le calcul du MNS LiDAR HD et MNT LiDAR HD **ont été identifiés dans les nuages de points**. Deux attributs supplémentaires servant à indiquer si un point est utilisé pour le calcul du MNT ou du MNS ont été ajoutés au Nuage de points LiDAR HD pour vous permettre à vous aussi de les identifier. Les nouveaux attributs seront : DTM_MAKER (pour le MNT) et DSM_MAKER (pour le MNS).

**Ces nuages de points LiDAR HD enrichis de ces attributs feront l’objet d’une diffusion en remplacement des versions actuellement diffusées dans le courant du second trimestre.**

![Bâtiments en MNS Bêta - Bâtiments en MNS HD Cible](/img/partenaires/ign/generalites/actualites/2025-03-lidar3.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Nous vous laissons prendre en main ces produits tant attendus. Pensez à nous partager vos utilisations via [la communauté](https://www.ign.fr/professionnels/rejoignez-la-communaute-lidar-hd) ou sur les réseaux avec le hashtag #IGNDATA. Si vous avez des commentaires, des remarques, des remerciements, vous pouvez aussi nous écrire à l’adresse : [contact.geoservices@ign.fr](mailto:contact.geoservices@ign.fr).

---

Le programme LiDAR HD lancé en 2021 est produit par l’IGN grâce au soutien de ses partenaires et notamment :

Le ministère de l’environnement, de l’agriculture, les régions Occitanie, Région Sud - Provence-Alpes-Côte-d’Azur, Grand Est, Pays de la Loire, Guadeloupe, la collectivité de Corse, les départements des Alpes-Maritimes, de la Côte-d’Or, de la Charente-Maritime, la métropole du Grand Paris, le syndicat départemental énergie et Déchets de la Haute-Marne, Géo Vendée et l’observatoire de la côte de Nouvelle-Aquitaine.

Rejoignez la communauté qui œuvre à la réalisation et à l’entretien de la cartographie 3D du territoire, contactez-nous à l’adresse : [contact.geoservices@ign.fr](mailto:contact.geoservices@ign.fr).
