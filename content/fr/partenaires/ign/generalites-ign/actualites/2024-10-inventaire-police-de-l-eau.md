---
title: Les inventaires police de l’eau, un nouvel attribut dans la BD TOPO®
description:
tags:
    - BD TOPO®
    - Inventaire
    - Eau
eleventyNavigation:
    key: Les inventaires police de l’eau, un nouvel attribut enrichit la BD TOPO®
    order: -20241001
date: 2024-10-01
---

Dans la BD TOPO® qui sera publiée <a aria-describedby="tooltip-1" href="#" class="fr-link">mi-octobre</a><span class="fr-tooltip fr-placement" id="tooltip-1" role="tooltip">Pour rappel, troisième édition de l’année, la prochaine sera en Décembre pour une diffusion en Janvier 2025.</span>, au sein du thème hydrographique, vous trouverez sur les tronçons hydrographiques un nouvel attribut « inventaire police de l’eau ». 4 valeurs sont possibles : <a aria-describedby="tooltip-2" href="#" class="fr-link">inscrit, non inscrit, expertise en cours et sans valeur</a><span class="fr-tooltip fr-placement" id="tooltip-2" role="tooltip">Inscrit : Indique que le tronçon hydrographique est inscrit au titre de la police de l’eau. Non inscrit : Indique que le tronçon hydrographique n’est pas inscrit au titre de la police de l’eau. Expertise en cours : Indique que l’écoulement est en attente de qualification définitive par le partenaire habilité (DDT(M)). Sans valeur : l’information d’inscription ou non de l’écoulement au titre de la police de l’eau n’a pas été fournie par la DDT(M) compétente.</span>. D’où proviennent ces informations ?

A la demande du Ministère de la transition écologique, de l’énergie, du climat et de la prévention des risques (MTEECPR), un chantier est en cours, en partenariat avec l’Office français de la biodiversité (OFB), d’intégration de ces inventaires au sein d’une base nationale consolidée qui sera diffusée comme porter à connaissance sur le Géoportail. Ces inventaires sont le fruit de travaux, toujours en cours, des directions départementales des territoires et de la mer (DDT(M)) suite à l’Instruction du Gouvernement du 3 juin 2015 relative à la cartographie et l’identification des cours d’eau ainsi qu’à leur entretien. Les cartographies des cours d’eau police de l’eau établies par les DDT(M) ont une valeur informative et non réglementaire. Il relève de chaque porteur de projet de qualifier, à l’occasion d’un projet, le statut de l’écoulement en vue d’y appliquer, le cas échéant les règles de la nomenclature « loi sur l’eau ».

38 départements sont ainsi déjà diffusés au sein de la BD TOPO®.

![Echantillon police de l’eau](/img/partenaires/ign/generalites/actualites/2024-10-inventaire-police-de-l-eau/00-echantillon-police-de-l-eau.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Echantillon d’inventaire police de l’eau - département du Cher (données DDT)</figcaption>

![Echantillon police de l’eau](/img/partenaires/ign/generalites/actualites/2024-10-inventaire-police-de-l-eau/01-echantillon-police-de-l-eau.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Echantillon de BD TOPO® - département du Cher</figcaption>

![Echantillon police de l’eau](/img/partenaires/ign/generalites/actualites/2024-10-inventaire-police-de-l-eau/02-echantillon-police-de-l-eau.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Echantillon de BD TOPO® après appariement de l’inventaire police de l’eau - département du Cher</figcaption>

![Appariement police de l’eau et BD TOPO®](/img/partenaires/ign/generalites/actualites/2024-10-inventaire-police-de-l-eau/03-appariement-police-de-l-eau-et-bdtopo.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Superposition de l’inventaire police de l’eau d’origine et de la BD TOPO® après appariement</figcaption>

---

## Quels produits représentent l’hydrographie à l’IGN ?

Différents produits co-réalisés et/ou diffusés par l’IGN représentent le réseau hydrographique :
- La [BD TOPO®](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO)
- Les cours d’eau [BCAE](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BCAE)
- La [BD TOPAGE®](https://www.data.gouv.fr/fr/datasets/bd-topage-r/)
- Le [SCAN 25®](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-25)
- [PLAN IGN](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN)

<br>

Tous ces produits, qui répondent parfois aux besoins de différentes politiques publiques portées par plusieurs ministères (agriculture, biodiversité…), n’exposent pas le même type d’information ni parfois la même géométrie.

### BD TOPO®

La BD TOPO® est la description vectorielle 3D (structurée en objets) des éléments du territoire et de ses infrastructures, de précision métrique, exploitable à des échelles allant du 1 : 2 000 au 1 : 50 000. Elle permet la visualisation, le positionnement, la simulation au service de l’analyse et de la gestion opérationnelle du territoire.

Les objets de la BD TOPO® sont regroupés par thèmes dont un thème hydrographique. Ce thème décrit les éléments hydrographiques de surface dont des tronçons hydrographiques. C’est notamment la source qui permet de représenter le bleu sur la base de données [PLAN IGN](https://www.geoportail.gouv.fr/carte?c=-0.5607376529448428,44.96329217811967&z=13&l0=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2::GEOPORTAIL:OGC:WMTS(1)&permalink=yes). Une classe cours d’eau est constituée à partir de l’agrégation de différents tronçons hydrographiques portant le même toponyme. Elle est réalisée à vocation principalement cartographique, afin de représenter des cours d’eau nommés sur une carte.

![PLAN IGN](/img/partenaires/ign/generalites/actualites/2024-10-inventaire-police-de-l-eau/04-planign.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Extrait de PLAN IGN sur le Géoportail</figcaption>

### BCAE (Bonnes conditions agricoles et environnementales)

Les cartographies BCAE permettent le porter à connaissance des cours d’eau concernés par les règles de bonnes conditions agricoles et environnementales (BCAE) définies pour la PAC (Politique Agricole Commune) ; et le contrôle par l’ASP (Agence de Services et de Paiement). Elles identifient les cours d’eau pour lesquels les exploitants agricoles doivent implanter des bandes tampons végétalisées entre la partie cultivée des terres agricoles et les cours d’eau BCAE 4.

La référence réglementaire est la [carte millésimée des cours d’eau BCAE](https://cartes.gouv.fr/explorer-les-cartes?c=5.420076,46.674765&z=6&l=PLAN.IGN$GEOPORTAIL:GPP:TMS(1;1;1;1;standard),HYDROGRAPHY.BCAE.LATEST$GEOPORTAIL:OGC:WMTS(2;1;1;0)&w=MousePosition,MeasureLength&permalink=yes) publiée sur cartes.gouv.fr.

L’IGN agrège et diffuse annuellement une couche de données élaborées et mises à jour par les DDT(M) avec la coordination de la direction générale de la performance économique et environnementale des entreprises (DGPE) du ministère de l’Agriculture, de la souveraineté alimentaire et de la forêt, puis transmises à l’IGN. La couche BCAE diffusée sur cartes.gouv n’est pas une dérivation depuis la BD TOPO® mais d’un référentiel dédié. Les tracés des cours d’eau des cartographies BCAE ont une origine géométrique variable selon l’option prise par la DDTM dans chaque département et ne sont pas tous superposables à la BD TOPO®.

![Différences entre BCAE et BD TOPO®](/img/partenaires/ign/generalites/actualites/2024-10-inventaire-police-de-l-eau/05-difference-bcae-bdtopo.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Illustration des différences géométriques entre les inventaires locaux BCAE et les tronçons hydrographiques BD TOPO® - département du Cher</figcaption>

### BD TOPAGE®

La [BD TOPAGE®](https://www.sandre.eaufrance.fr/ftp/documents/fr/pre/eth/1/sandre_pres_eth_1.pdf) est le référentiel hydrographique des acteurs de l’eau et des milieux aquatiques, coproduit par l’OFB et l’IGN. C’est un référentiel à grande échelle qui vise à décrire les entités hydrographiques présentes sur le territoire français afin de constituer le référentiel national permettant de localiser les données publiques relatives à l’eau et ainsi appuyer les missions de connaissance environnementale, de gestion et de protection des milieux.

La BD TOPAGE® regroupe les jeux de données : 
- des cours d’eau
- des plans d’eau
- des surfaces élémentaires
- des tronçons hydrographiques
- des bassins hydrographiques
- des bassins versant topographiques
- des noeuds hydrographiques
- des limites terre-mer

<br>

Elle est issue de l’appariement de la BD TOPO® avec la BD CARTHAGE® et enrichie d’attributs métiers par les acteurs de l’eau. La constitution initiale du référentiel sur l’Hexagone a été réalisée de 2017 à 2019. Elle est en cours de réalisation sur les territoires ultra marins.

Elle est mise à jour tous les ans à partir de l’archive de décembre de la BD TOPO®, ce qui confère aux deux bases de données une cohérence géométrique parfaite.

La BD TOPAGE® est diffusée via le SANDRE (Service d’administration nationale des référentiels de l’eau) de façon millésimée.

![Superposition de la BD TOPAGE® et de la BD TOPO®](/img/partenaires/ign/generalites/actualites/2024-10-inventaire-police-de-l-eau/06-superposition-bdtopage-bdtopo.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Superposition de la BD TOPAGE® et de la BD TOPO® - département du Pas-de-Calais</figcaption>

### Les cartes

Plusieurs produits cartographiques intègrent l’hydrographie à l’IGN : 
- Plan IGN 
- Fonds cartographiques au 1 : 100 000
- Fonds cartographiques au 1 : 25 000

<br>

La cartographie, par essence, fait des choix de représentation, notamment la carte au 1 : 25 000.

La carte au 25 000e représente des écoulements qu’elle décrit comme permanents (traits pleins) ou intermittents (traits pointillés) ainsi que des surfaces hydrographiques. Sur cette carte, le caractère permanent (traits pleins) ou intermittent (traits pointillés) des cours d’eau et des fossés est un choix de représentation cartographique effectué par le cartographe de l’IGN, selon le caractère structurant de cet écoulement dans le paysage. Sur la carte, à cette échelle, l’objectif est de permettre au lecteur de se repérer, et non de représenter de façon exhaustive les éléments hydrographiques du territoire.

Il est important de noter que l’information représentée sur la carte au 1 : 25 000 :
- Est indépendante de toute réglementation existante
- Dispose actuellement d’une ancienneté moyenne de 6 années

<br>

Depuis 2020, certains thèmes du SCAN25® ont été mis à jour indépendamment de la carte papier mais pas l’hydrographie. Un changement des méthodes et logiciels de production est actuellement en cours de mise en œuvre permettant des mises à jour plus fréquentes du SCAN25® et ayant comme référence la BD TOPO®. Le thème hydrographique en bénéficiera.

![SCAN25®](/img/partenaires/ign/generalites/actualites/2024-10-inventaire-police-de-l-eau/07-scan25.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">SCAN25® - secteur de St-Même-le-Tenu</figcaption>

![Superposition du SCAN25® et de la BD TOPO®](/img/partenaires/ign/generalites/actualites/2024-10-inventaire-police-de-l-eau/08-superpostion-scan25-bdtopo.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Superposition du SCAN25® et du réseau hydrographique de la BD TOPO® - même secteur</figcaption>

:::info Zoom sur les ZNT (Zone de non traitement) point d’eau
Une zone non traitée (ZNT) doit être mise en place à proximité des points d’eau, en application de l’arrêté interministériel du 4 mai 2017. Elle correspond aux distances minimales sans application de produits phytopharmaceutiques (PPP) que les agriculteurs doivent respecter, en fonction des règles fixées par l’autorisation de mise sur le marché (AMM) du PPP et du matériel utilisé pour leur pulvérisation. Cette ZNT a pour objectif de limiter la pollution de l’eau due au transfert de produits par dérive de pulvérisation. Les points d’eau, incluant les cours d’eau définis à l’article L. 215-7-1 du Code de l’environnement ainsi que les éléments du réseau hydrographique figurant sur les cartes au 1 : 25 000 de l’IGN, à considérer pour l’application de la ZNT, sont définis par arrêté préfectoral.
:::

---

### Ce qu’il faut retenir 

Différents inventaires et cartes départementales représentant différents types d’écoulements ont été élaborés au fil du temps, à partir de différents référentiels géométriques locaux ou nationaux. Constat est fait qu’un même écoulement physique peut apparaître avec un tracé différent selon le référentiel ou la carte considéré, ce qui peut impliquer des erreurs potentielles d’interprétation lors de l’application des différentes réglementations.

Dans ce contexte, l’objectif, afin de clarifier l’information donnée au public, aux associations et aux professionnels du secteur agricole, est d’harmoniser ces différentes cartographies en s’appuyant sur un référentiel géométrique commun. L’IGN contribue à cette ambition, à la fois sur plan institutionnel en poursuivant ses échanges avec les différentes administrations centrales concernées, mais aussi au plan opérationnel via la BD TOPO®, avec la réalisation de la BD TOPAGE®, à travers l’intégration des inventaires police de l’eau (à valeur informative) ainsi qu’en accompagnant localement les services de l’Etat dans leurs travaux d’harmonisation des géométries des inventaires police de l’eau et des bonnes conditions agricoles et environnementales.