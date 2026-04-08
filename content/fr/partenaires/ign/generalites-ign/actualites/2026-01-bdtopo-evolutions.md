---
title: Les évolutions de la BD TOPO® de l’édition de décembre 2025
description: Quoi de neuf dans cette nouvelle version ?
tags:
    - BD TOPO®
date: 2026-01-22
---

La BD TOPO® du mois de décembre 2025 est disponible en téléchargement sous différents formats ainsi qu’en web services (TMS, WFS, WMS et WMTS).

Vous trouverez tous les liens de téléchargement de la BD TOPO® ici : [Catalogue | cartes.gouv.fr](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO){target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre"}

Les URL d’accès à l’API de diffusion Géoplateforme sont décrites ici : [Documentation | cartes.gouv.fr](https://cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/diffusion/){target="_blank" rel="noopener noreferrer" title="API de diffusion - ouvre une nouvelle fenêtre"}

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-01-bdtopo-evolutions.png){.fr-responsive-img .frx-img-contained}

#### Quoi de neuf dans cette nouvelle version ?

**Parmi les évolutions de modèle :**
- **Visible dans la BD TOPO® pour l’édition de décembre**

<br>

Le modèle de données concernant la classe « Itinéraire autre » a été revu pour centraliser et rendre plus lisible les différentes natures d’itinéraires : pédestre, équestre, cyclable. Par conséquent, un transfert d’une partie du contenu de la classe « route numérotée et nommée » vers « itinéraire autre » a été effectué.

Dans la classe « itinéraire autre » :
- Suppression des valeurs de l’attribut « nature » : Autre, Sentier de découverte, Parcours sportif
- Ajout des valeurs de l’attribut « nature » : Itinéraire de randonnée pédestre, Itinéraire cyclable
- Ajout des valeurs de l’attribut « nature détaillée » pour Nature = « itinéraire cyclable » : sans valeur (null), Itinéraire VTT, Voie verte
- Ajout des valeurs de l’attribut « nature détaillée » pour Nature = « itinéraire pédestre » : sans valeur (null), Sentier de découverte, Sentier botanique, Parcours sportif, Sentier entomologique, Sentier écologique
- Ajout d’attributs : Numéro, Statut du toponyme

<br>

Dans la classe « Route numérotée ou nommée » (transfert vers la classe « itinéraire autre ») :
- Suppression des valeurs : Itinéraire cyclable, voie verte

<br>

Synthèse des changements (avant/après) :

![Synthèse des changements](/img/partenaires/ign/generalites/actualites/2026-01-tableau-avant-apres.jpg){.fr-responsive-img .frx-img-contained}

Sur la classe « Tronçon hydrographique » : 
- Renommage de l’attribut « Délimitation » en « Tracé connu » afin que cet attribut soit mieux compris par les utilisateurs.
- Diffusion des attributs : Lien vers nœud hydrographique ini et lien_vers_noeud_hydrographique_fin pour des besoins exprimés autour du produit BDTOPAGE.

<br>

Sur la classe « Détail hydrographique » :
- Ajout d’une nature « Prise d’eau »

<br>

Sur les classes « Tronçon hydrographique », « Surface hydrographique », « Plan d’eau » :
- Ajout de la nature « Lagon » à la demande de l’administration des TAAF en lien avec le chantier en cours de produire une BD TOPO® sur ces territoires. Ça arrive prochainement.

<br>

Sur les classes « Bâtiment » et « Réservoir » :
- Ajout de la valeur « Lidar HD » pour l’attribut « Origine du bâtiment » à la suite d’intégrations de bâtiments issues du Lidar HD récemment.

<br>

Sur la classe « Détail orographique » :
- Ajout de la nature détaillée « Atoll » pour la nature « Ile » à la demande de l’administration des TAAF.

<br>

#### Changements importants dans les données impactant la BD TOPO®

- Enrichissement des toponymes de la BAN vers les attributs Toponymie, Statut du toponyme et source du toponyme pour les 7 classes suivantes : Lieu-dit non habité, Zone d’habitation, Zone d’activité ou d’intérêt, Equipement de transport, Détail hydrographique, Détail orographique, Point du réseau, et Toponymie (qui contient le champ “source de toponymie”).
- Dans la classe Zone d’activité et d’intérêt, l’IGN a réalisé un enrichissement des natures détaillées : centrale photovoltaïque, jardin public, parc et square grâce à des projets nationaux.
- Intégration importante de données, à la suite de la restitution de nouvelles prises de vue aériennes, effectuées depuis l’édition de septembre BD TOPO® (253).
    - Département réintégré en octobre : 24 (PVA 05/2024)
    - Départements réintégrés en novembre : 67 (PVA 08/2024), 91 (PVA 08/2024), 60 (PVA 06/2024), 73 (PVA 09/2024), 68 (PVA 08/2024), 02 (PVA 07/2024), 75 (PVA 08/2024)
    - Département réintégré en décembre : 78 (PVA 08/2024)

#### Les prochaines évolutions programmées dans la BD TOPO®

Pour mémoire, les prochaines diffusions de la BD TOPO® en 2026 auront lieu au mois d’avril (261), de juillet (262), d’octobre (263) et de janvier (264).

##### Évolutions de modèle

Habituellement sur la première édition de l’année, aucune modification n’est prévue pour l’édition BD TOPO® du mois de mars (261).

**Changements importants dans les données impactant la BD TOPO® de mars (261) :**
- Lancement d’un calcul et remplissage automatique des bornes postales (BP) qui ne sont plus mises à jour depuis quelques années. Une actualité spécifique sera rédigée dans la lettre géoservices de février 2026 pour vous apporter des explications sur le nouveau calcul des BP. Mise à jour des attributs de la classe tronçon de route : Borne début droite, Borne début gauche, Borne fin droite, Borne fin gauche.
- Diffusion d’une BD TOPO® sur les territoires des îles Eparses, Saint-Paul, îlots des Apôtres et île des Cochons (2026).

<br>

Les différentes évolutions sont documentées dans le [suivi des évolutions](https://data.geopf.fr/annexes/ressources/documentation/SE_BDTOPO_depuis_v3-0.pdf){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/annexes/ressources/documentation/SE_BDTOPO_depuis_v3-0.pdf - ouvre une nouvelle fenêtre"} disponibles sur cartes.gouv.fr dans la métadonnée catalogue mentionnée précédemment, au fur et à mesure de leur mise en place.