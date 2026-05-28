---
title: De nombreuses nouveautés arrivent avec la nouvelle version d’Admin Express (v4)
description:
tags:
    - Admin Express
    - Attributs
eleventyNavigation:
    key: De nombreuses nouveautés arrivent avec la nouvelle version d’Admin Express (v4)
    order: -20250501
date: 2025-05-01
image:
    src: /img/partenaires/ign/representations-cartographiques-souveraines/cartes-historiques.jpg
    alt: Cartes historiques
---


Depuis mi-2024, l’IGN œuvre en interne à une refonte du contenu autour de ses référentiels administratifs en réponse aux demandes d’évolution remontées par nos utilisateurs avertis sur ce thème.

Ce travail de refonte arrive à son terme et se traduira fin avril par une nouvelle version 4 de Admin Express. Cette nouvelle version s’accompagnera d’un grand nombre d’améliorations : un enrichissement important de l’offre existante, une meilleure cohérence entre les référentiels administratifs, et une mise à jour importante sur le littoral.

Pour les utilisateurs qui ne peuvent pas attendre l’arrivée de cette nouvelle version fin avril, l’IGN diffuse depuis quelques jours sur géoservices l’offre Admin Express COG 2025 dans sa version ancienne (v3.2). Cette dernière sera remplacée dès l’arrivée de la nouvelle version v4 mi-mai.

**8 grandes nouveautés sont prévues.**

#### 1. Un référentiel administratif complet et cohérent

Le thème administratif BD TOPO® (et donc naturellement l’offre Admin Express) a été topologiquement reconstruit sur chacune des 3 échelles (grande, moyenne et petite échelles) pour offrir une cohérence parfaite des contours d’IRIS, communes, départements et régions. Concrètement, chaque emprise du niveau administratif supérieur est reconstruite en s’appuyant sur les contours du niveau inférieur. Par exemple : l’objet géométrique « commune » est construit en s’appuyant sur la géométrie des périmètres IRIS la composant.

Cette évolution permettra à l’IGN de vous proposer une seconde version, dite consolidée, du produit millésimé Admin Express COG en offrant une cohérence parfaite avec les emprises IRIS issues des mises à jour effectuées plus tard dans l’année avec l’INSEE. Cette version consolidée sera disponible en même temps que l’offre Limites d’IRIS courant Juin.

#### 2. Ajout de 3 collectivités d’outre-mer dans Admin Express

L’IGN a ajouté les contours administratifs des 3 collectivités d’outre-mer de Saint-Barthélemy (977), Saint-Martin (978) et Saint-Pierre-et-Miquelon (975) dans l’offre Admin Express. Ces collectivités étaient déjà disponibles dans le produit BD TOPO®.

_NB : Quant aux 2 autres collectivités (COM) Polynésie française (987), Wallis et Futuna (986), elles restent hors périmètre des missions IGN._ 

#### 3. Ajout systématique du code SIREN dans toutes les classes

Cet ajout permet conceptuellement de différencier le territoire (COG) de l’organisme (SIREN) qui l’administre. De plus, il facilite la correspondance avec le répertoire Sirene.

Sur la classe commune, en plus du SIREN, un champ (Code_SIREN des EPCI) a été ajouté pour faciliter la correspondance sémantique entre EPCI et commune. Inversement, un EPCI dispose de la liste des code Insee des communes membre dans un champ dédié.

_NB : L’IGN étudie également l’ajout du code SIRET sur les ponctuels de chefs-lieux dans une prochaine version._

#### 4. Le remplacement des géométries des [pseudos-cantons](https://www.insee.fr/fr/metadonnees/definition/c1725) par des [vrais cantons](https://www.insee.fr/fr/metadonnees/definition/c1566) (y compris infra-communaux) 

Dans la nouvelle version, la classe canton est proposée avec son contour réel. C’est-à-dire que la commune multi-cantonale a été scindée en n partie(s) de canton et regroupées avec le complément du canton d’appartenance. Par conséquent, l’IGN a pu associer par ce nouveau découpage les vrais numéros de canton et non plus un numéro par défaut en 80 avec les pseudo-cantons (cf. image 1) Les vrais cantons sont plus adaptés à un usage électoral.

![Admin Express 1](/img/partenaires/ign/generalites/actualites/2025-05-admin-express-v4/00_admin-express.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Image 1 : les 3 cas illustrent théoriquement la différence de découpage entre les géométries des pseudo-cantons (dispo dans les produits Admin Express v3 et BD TOPO® jusqu’en mars 2025) et les nouvelles géométries de cantons (dispo à partir de la v4 et BD TOPO® de juin 2025).</figcaption>

![Admin Express 2](/img/partenaires/ign/generalites/actualites/2025-05-admin-express-v4/01_admin-express.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Image 2 :  exemple concret illustrant ce changement => La commune de Caen est une commune multi cantonale, cette dernière est composée de 5 cantons. Étant composé de N canton son numéro de canton en référence du COG de l’INSEE est 1499. Actuellement sur le Géoportail, nous voyons Caen sous cette forme de pseudo canton (limite des cantons en rose saumon)</figcaption>

![Admin Express 3](/img/partenaires/ign/generalites/actualites/2025-05-admin-express-v4/02_admin-express.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Image 3 :  Dans le prochain produit Admin Express v4 et dans la BD TOPO®, les contours officiels des cantons électoraux seront matérialisés. La commune de Caen (emprise hachurée magenta) est recouverte par les 5 cantons (05,06,07,08,09) en aplats de couleur.</figcaption>

#### 5. Des classes de chef-lieu (ponctuel) sur l’ensemble des niveaux administratifs

Le point, dans la quasi-totalité des choix, est placé à l’endroit de la mairie de la commune associée ou déléguée. Très souvent en cartographie, le chef-lieu est utile comme centre « porteur » de l’information, qu’il s’agisse de points proportionnels (information quantitative brute) ou d’étiquettes (labels de toponymie). L’isobarycentre (centre géométrique) peut s’avérer moins pertinent car il peut se trouver décalé par rapport à l’emplacement du centre réel. Pour établir ce centre réel, le chef-lieu est une solution.

Vous retrouvez les chefs-lieux dans les 9 classes suivantes : chef-lieu d’arrondissement, chef-lieu d’arrondissement municipal, chef-lieu de canton, chef-lieu de collectivité territoriale, chef-lieu de commune, chef-lieu de commune associée ou déléguée, chef-lieu de département, chef-lieu d’EPCI, chef-lieu de région.

_NB :_
- _6 communes n’ont pas de ponctuel (les communes mortes pour la France aux environs de Verdun, 55) et une quinzaine de ponctuels ne sont pas à l’intérieur de la commune (mairies situées dans une commune voisine)._
- _Sur la table chef-lieu d’EPCI, la notion de « siège » a été ajoutée, et de « bureau centralisateur » en ce qui concerne la table chef-lieu de canton._

<br>

#### 6. L’ajout de la superficie cadastrale de l’INSEE sur la classe commune

Différente de la surface géométrique brute, l’IGN intègre dans son produit la superficie cadastrale publiée par l’INSEE qui a vocation à être la surface territoriale de référence pour le calcul par exemple des densités de population communale. Cette superficie exprimée en km² comprend, selon l’[observatoire des territoires de l’ANCT](https://www.observatoire-des-territoires.gouv.fr/), « toutes les surfaces du domaine public et privé, cadastrées ou non cadastrées, à l’exception des lacs, étangs et glaciers de plus d’un kilomètre carré ainsi que des estuaires ». Cette superficie date de 2021. 

#### 7. Mise à jour de la limite littorale suite à l’intégration de la limite terre-mer

La nouvelle limite terre-mer, co-produite par le SHOM et l’IGN, a intégré la BD TOPO® en septembre 2024. A ce titre, l’IGN a procédé à une mise à jour de ces limites administratives sur le littoral. Cette mise à jour prend en compte les nouveaux tracés de limites transversale de la mer (LTM) au niveau des estuaires. 

_NB : Certaines LTM ont été ignorées, notamment celles qui sont très en amont de la limite administrative précédente, afin d’éviter un changement trop important de l’emprise de la commune._

#### 8. Deux nouveaux produits « petite échelle »

La petite échelle, c’est l’échelle idéale pour un fond « clé en main » répondant à de la cartographie nationale et à des besoins autour du web et de datavisualisation. Pour y répondre, l’IGN enrichit son offre millésimée en vous proposant 2 nouveaux référentiels petite échelle. 

##### Admin Express COG CARTO_PLUS PE

C’est la déclinaison CARTO_PLUS de sa grande sœur Admin Express COG CARTO PE arrivée en 2024. CARTO_PLUS est la version petite échelle millésimée COG offrant un rapprochement fictif des DROM autour de la métropole, plus adaptée à des besoins de datavisualisation. Elle s’inspire du travail réalisé par l’ICEM7 avec un [dernier millésime publié en 2022](https://www.icem7.fr/cartographie/un-fond-de-carte-france-par-commune-optimise-pour-le-web-et-lanalyse-statistique/#comments). La géométrie « Carto Plus » ne possèdera pas de géoréférencement légal et sera proposée sur l’ensemble des couches administratives (commune, département, etc…).

##### Contour IRIS PE

Ce nouveau produit est la déclinaison petite échelle de IRIS GE (Contour IRIS étant la version moyenne échelle). Ce produit sortira courant juin en même temps que l’offre limites d’IRIS. L’objectif, c’est de vous offrir sur la thématique IRIS, les 3 niveaux d’échelle (grande, moyenne et petite échelles).

![Admin Express 4](/img/partenaires/ign/generalites/actualites/2025-05-admin-express-v4/03_admin-express.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Image 4 :  Aperçu de la couche département du nouveau produit Admin Express COG CARTO_PLUS PE </figcaption>

![Admin Express 5](/img/partenaires/ign/generalites/actualites/2025-05-admin-express-v4/04_admin-express.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v">Image 5 :  Aperçu de la couche région du nouveau produit Admin Express COG CARTO_PLUS PE illustrant le cas où les collectivités d’outre-mer SPM, SB et SM ne possèdent pas légalement d’emprise régionale. Dans ce cas, pour offrir une cartographie complète sur chaque niveau, des géométries fictives ont été conservées et renseignées avec un code insee = NR </figcaption>

---

##### Panorama de l’intégralité de l’offre de données autour du thème administratif après le passage à la nouvelle version 4 :

![Admin Express 6](/img/partenaires/ign/generalites/actualites/2025-05-admin-express-v4/05_admin-express.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v"></figcaption>

##### Comparatif des échelles et format de diffusion proposées entre l’offre avant et après la version 4 :

L’IGN ne proposera plus en diffusion le format shapefile (SHP) autour de son offre Admin Express et Limites d’IRIS en lien avec l’évolution de la stratégie en matière de diffusion.

![Admin Express 7](/img/partenaires/ign/generalites/actualites/2025-05-admin-express-v4/06_admin-express.png){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v"></figcaption>

Si vous avez des idées d’améliorations ou des usages à partager sur cette offre Admin Express, n’hésitez pas à [nous contacter](mailto:contact.geoservices@ign.fr). 

##### Quelle est la différence de modèle de données entre Admin Express v3 et v4 ?

Cette refonte s’accompagne d’un changement de modèle important dans les données. Voici 2 tableaux qui détaillent les évolutions de modèle : le premier sur les classes, et le deuxième sur les attributs de chaque classe.

**Classes d’objets :** 

Certaines classes d’objets sont ajoutées, les autres sont renommées.

**Attributs :**

Certains attributs sont renommés, d’autres sont ajoutés ou supprimés.

Sachant que le format shapefile (SHP) n’est plus proposé sur la version 4, les noms des attributs ne sont plus proposés en majuscule et dans leur format tronqué. Les noms apparaissent dans leur version complète comme initialement présent sur la BD TOPO®. 

La V4 s’accompagnera d’une refonte des identifiants pour une meilleure gestion. Il a été décidé de passer d’un identifiant incrémental (proposé anciennement par ID) à une clé signifiante (cleabs) où la fin de la clé représente le numéro du code INSEE et son début la reprise du nom de la classe. Un champ [fid] a été ajouté automatiquement lors de la création du fichier GPKG (elle fait office d’une seconde clé primaire).