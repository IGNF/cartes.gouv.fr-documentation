---
title: Mises à jour octobre 2025
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois d’octobre 2025
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour octobre 2025
    order: 15
date: 2025-09-01
---

{% from "components/component.njk" import component with context %}

![Îlots IRIS petite échelle](/img/partenaires/ign/generalites/actualites/2025-10-bandeau-iris-pe.png){fr-responsive-img .frx-border-img .frx-img-contained}

#### Services web

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['Tableau d’assemblage des blocs de nuages de points LiDAR HD', 'IGNF_NUAGES-DE-POINTS-LIDAR-HD:bloc', 'WFS', 'altimétrie', 'AF (Quimper), DF (Dinan), DH (Saint-Nazaire), DI (Pornic), EF (Rennes), EG (Châteaubriant), FG (Laval), FI (Cholet), FJ (Niort), FN (Bordeaux), FO (Sabres), FP (Mont-de-Marsan), HF (Mamers), GI (Thouars), GJ (Parthenay), HD (Lisieux), HI (Chatellerault), HJ (Poitiers), HK (Confolens), IE (Evreux), IF (Nogent-le-Rotrou), IG (Vendôme), IH (Blois), II (Loches), IJ (Le Blanc), JA (Calais), JC (Poix-de-Picardie), JH (Romorantin-Lanthenay), KB (Arras), KG (Montargis), LH (Cosne-Cours-sur-Loire), LK (Vichy), MD (Reims), MJ (Difoin), MK (Roanne), NF (Bar-sur-Aube), OG (Chaumont), ON (Valence), PD (Metz), PE (Nancy), PF (Neufchateau), PG (Port-sur-Saône), PO (Sisteron), PP (Manosque), QE (Lunéville), QO (Digne-les-Bains), US (Calvi), UT (Ajaccio), VS (Bastia)'],
        ['Tableau d’assemblage des dalles de nuages de points LiDAR HD', 'IGNF_NUAGES-DE-POINTS-LIDAR-HD:dalles', 'WFS', 'altimétrie', ''],
        ['Contour ...IRIS Petite Echelle', 'STATISTICALUNITS.IRIS.PE', 'WFS, WMS Vecteur', 'cartovecto', 'FXX+DOM - 2025']
    ]
}) }}

Les flux IGNF_LIDAR-HD_TA:nuage-bloc et IGNF_LIDAR-HD_TA:nuage-dalle sont remplacés par les flux IGNF_NUAGES-DE-POINTS-LIDAR-HD:bloc et IGNF_NUAGES-DE-POINTS-LIDAR-HD:dalle et seront dépubliés le 22 Novembre 2025.

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['ADMIN EXPRESS mises à jour en continu', 'LIMITES_ADMINISTRATIVES_EXPRESS.LATEST', 'WFS, WMS Raster et WMTS', 'administratif', 'FXX+DOM - 2025-10'],
        ['MNH issu de LiDAR HD', 'IGNF_LIDAR-HD_MNH_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW', 'WMS Raster et WMTS', 'altimetrie', 'FO (Sabres), FQ (Pau), GF (Alençon), HE (l’Aigle), KB (Arras), LC (Saint-Quentin), LK (Vichy), MD (Reims), ME (Epernay), ML (Ambert), PF (Neufchâteau)'],
        ['MNS issu de LiDAR HD', 'IGNF_LIDAR-HD_MNS_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW', 'WMS Raster et WMTS', 'altimetrie', ''],
        ['MNT issu de LiDAR HD', 'IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW', 'WMS Raster et WMTS', 'altimetrie', ''],
        ['Tableau d’assemblage des blocs MNH issus du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnh-bloc', 'WFS', 'altimetrie', ''],
        ['Tableau d’assemblage des dalles MNH issues du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnh-dalle', 'WFS', 'altimetrie', ''],
        ['Tableau d’assemblage des blocs MNS issus du LiDAR HD', 'IGNF_LIDAR-HD_TA:mns-bloc', 'WFS', 'altimetrie', ''],
        ['Tableau d’assemblage des dalles MNS issues du LiDAR HD', 'IGNF_LIDAR-HD_TA:mns-dalle', 'WFS', 'altimetrie', ''],
        ['Tableau d’assemblage des blocs MNT issus du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnt-bloc', 'WFS', 'altimetrie', ''],
        ['Tableau d’assemblage des dalles MNT issues du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnt-dalle', 'WFS', 'altimetrie', ''],
        ['Modèles numériques de surfaces correlés', 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS', 'WMS Raster', 'altimetrie', 'D022, D027, D048, D076, FBGDE02, FBGDE03, FBGDE04, FBGDE06 et FBGDE07 (couverture sur les départements D008, D010, D051, D052, D054, D055, D057, D088) - 2025'],
        ['Estompage MNS correlés', 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS.SHADOW', 'WMS Raster', 'altimetrie', ''],
        ['PLAN IGN', 'PLAN.IGN', 'TMS (tuiles vectorielles)', 'cartes', 'FXX+DOM - Niveaux de zoom 14 à 19 - 2025-10'],
        ['PLAN IGN', 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2', 'WMS Raster et WMTS', 'cartes', 'FXX+DOM - Niveaux de zoom 14 à 19 - 2025-10'],
        ['Mesures compensatoires des atteintes à la biodiversité', 'MESURES_COMPENSATOIRES', 'WFS et WMS Vecteur', 'environnement', '2025-10 - FXX+DOM'],
        ['BD Ortho RVB 20cm', 'HR ORTHOIMAGERY.ORTHOPHOTOS', 'WMS Raster et WMTS', 'ortho', '2025 - D032, D059'],
        ['Photos Aériennes', 'ORTHOIMAGERY.ORTHOPHOTOS', 'WMS Raster et WMTS', 'ortho', '2025 - D032, D059'],
        ['BD Ortho RVB 50cm', 'ORTHOIMAGERY.ORTHOPHOTOS.BDORTHO', 'WMS Raster et WMTS', 'ortho', '2025 - D032, D059'],
        ['BD Ortho IRC', 'ORTHOIMAGERY.ORTHOPHOTOS.IRC', 'WMS Raster et WMTS', 'ortho', '2025 - D032, D059'],
        ['Graphe de mosaïquage BD Ortho', 'ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE', 'WFS et WMS Vecteur', 'ortho', '2025 - D032, D059'],
        ['Ortho Express RVB 2025', 'ORTHOIMAGERY.ORTHOPHOTOS.ORTHO-EXPRESS.2025', 'WMS Raster et WMTS', 'ortho', 'Bloc FBGDE02 ( Verdun, Metz, Longwy), FBGDE04 (D010, D051), D005, D022, D027, D048, D053, D063, D065, D072, D076'],
        ['Ortho Express IRC 2025', 'ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2025', 'WMS Raster et WMTS', 'ortho', ''],
        ['Photographies aeriennes 1965-1980', 'ORTHOIMAGERY.ORTHOPHOTOS.1965-1980', 'WMS Raster et WMTS', 'orthohisto', 'D007 (1976), D012 (1970), D043 (1976)']
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS Raster et WMTS) et BD Géodésie (IGNF_GEODESIE-XXX services WFS et WMS Vecteur) sont mises à jour quotidiennement et la ressource Base Adresse Nationale (BAN.DATA.GOUV services WFS et WMS Vecteur) est actualisée hebdomadairement.

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', 'D032, D044, D049, D059', '2025'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', 'D032, D044, D049, D059', '2025'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', 'FXX+DOM', '2025-10'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BCAE" target="_blank" rel="noopener noreferrer" title="BCAE - ouvre une nouvelle fenêtre">BCAE9</a>', 'Métropole', '2024'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® EXPRESS</a>', 'FXX + DOM', 'hebdomadaire'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® GPKG France entière, par territoire et par région et par département</a>', 'FXX + DOM', '2025-09'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® thème transport par territoire</a>', 'FXX + DOM', '2025-09'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® SQL France entière et par territoire</a>', 'FXX + DOM', '2025-09'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® SHP par région et par département</a>', 'FXX + DOM', '2025-09'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_CONTOURS-IRIS" target="_blank" rel="noopener noreferrer" title="Contours IRIS® - ouvre une nouvelle fenêtre">Contours… IRIS® Petite Échelle</a>', 'FXX + DOM + FRA', '2025-09'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_COSIA" target="_blank" rel="noopener noreferrer" title="CoSIA - ouvre une nouvelle fenêtre">CoSIA</a>', 'D001, D002, D02A, D02B, D004, D011, D017, D023, D024, D029, D030, D033, D034, D038, D040, D047, D056, D060, D062, D064, D066, D067, D068, D073, D075, D077, D078, D080, D084, D087, D091, D092, D093, D094, D095, D971', '2024'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title="Géodésie et Nivellement - ouvre une nouvelle fenêtre">Fiches géodésiques</a>', 'FXX + DOM', '2025-10'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">Données d’artificialisation issues de l’OCS GE</a>', 'D973', '2018'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCS-JARDINS-PUBLICS-OUVERTS-PUBLIC" target="_blank" rel="noopener noreferrer" title="Parcs et Jardins - ouvre une nouvelle fenêtre">PARCS et JARDINS</a>', 'D058, D061, D070, D071, D079, D086, D087, D089, D090', '2023'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCS-JARDINS-PUBLICS-OUVERTS-PUBLIC" target="_blank" rel="noopener noreferrer" title="Parcs et Jardins - ouvre une nouvelle fenêtre">PARCS et JARDINS</a>', 'D046, D050, D056, D065, D076, D081, D082, D972, D974', '2022'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCS-JARDINS-PUBLICS-OUVERTS-PUBLIC" target="_blank" rel="noopener noreferrer" title="Parcs et Jardins - ouvre une nouvelle fenêtre">PARCS et JARDINS</a>', 'D040, D047, D048, D064, D066, D075, D077, D078, D084, D091, D092, D093, D094, D095', '2021'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCS-JARDINS-PUBLICS-OUVERTS-PUBLIC" target="_blank" rel="noopener noreferrer" title="Parcs et Jardins - ouvre une nouvelle fenêtre">PARCS et JARDINS</a>', 'D058, D061, D070, D071, D079, D081, D083, D086, D087, D089, D090', '2020'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCS-JARDINS-PUBLICS-OUVERTS-PUBLIC" target="_blank" rel="noopener noreferrer" title="Parcs et Jardins - ouvre une nouvelle fenêtre">PARCS et JARDINS</a>', 'D046, D050, D056, D065, D076, D082', '2019'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCS-JARDINS-PUBLICS-OUVERTS-PUBLIC" target="_blank" rel="noopener noreferrer" title="Parcs et Jardins - ouvre une nouvelle fenêtre">PARCS et JARDINS</a>', 'D040, D048, D064, D066, D075, D078, D084, D091, D092, D093, D094, D095', '2018'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCS-JARDINS-PUBLICS-OUVERTS-PUBLIC" target="_blank" rel="noopener noreferrer" title="Parcs et Jardins - ouvre une nouvelle fenêtre">PARCS et JARDINS</a>', 'D006, D024, D035, D047, D077, D083, D972, D974', '2017'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI) - ouvre une nouvelle fenêtre">Parcellaire Express (PCI)</a>', 'FXX + DOM', '2025-09'],
        ['<a href="https://cartes.gouv.fr/telechargement/IGNF_NUAGES-DE-POINTS-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="Nuages de points LiDAR HD - ouvre une nouvelle fenêtre">Blocs LiDAR HD format COPC</a>', 'AF (Quimper), DF (Dinan), DH (Saint-Nazaire), DI (Pornic), EF (Rennes), EG (Châteaubriant), FG (Laval), FI (Cholet), FJ (Niort), FN (Bordeaux), FO (Sabres), FP (Mont-de-Marsan), HF (Mamers), GI (Thouars), GJ (Parthenay), HD (Lisieux), HI (Chatellerault), HJ (Poitiers), HK (Confolens), IE (Evreux), IF (Nogent-le-Rotrou), IG (Vendôme), IH (Blois), II (Loches), IJ (Le Blanc), JA (Calais), JC (Poix-de-Picardie), JH (Romorantin-Lanthenay), KB (Arras), KG (Montargis), LH (Cosne-Cours-sur-Loire), LK (Vichy), MD (Reims), MJ (Difoin), MK (Roanne), NF (Bar-sur-Aube), OG (Chaumont), ON (Valence), PD (Metz), PE (Nancy), PF (Neufchateau), PG (Port-sur-Saône), PO (Sisteron), PP (Manosque), QE (Lunéville), QO (Digne-les-Bains), US (Calvi), UT (Ajaccio), VS (Bastia)'],	 
        ['Produits dérivés (<a href="https://cartes.gouv.fr/telechargement/IGNF_MNH-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNH LiDAR HD - ouvre une nouvelle fenêtre">MNH</a>, <a href="https://cartes.gouv.fr/telechargement/IGNF_MNS-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNS LiDAR HD - ouvre une nouvelle fenêtre">MNS</a>, <a href="https://cartes.gouv.fr/telechargement/IGNF_MNT-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNT LiDAR HD - ouvre une nouvelle fenêtre">MNT</a> issus du LiDAR HD', 'FO (Sabres), FQ (Pau), GF (Alençon), HE (l’Aigle), KB (Arras), LC (Saint-Quentin), LK (Vichy), MD (Reims), ME (Epernay), ML (Ambert), PF (Neufchâteau)'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS correlés - ouvre une nouvelle fenêtre">MNS correlés</a>', 'D005, D010, D022, D027, D048, D051, D053, D054, D055, D057, D072, D076, D088', '2025']
]
}) }}
 