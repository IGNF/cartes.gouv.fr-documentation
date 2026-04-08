---
title: Mises à jour novembre 2025
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de novembre 2025
tags:
    - Mises à jour
date: 2025-11-03
---

{% from "components/component.njk" import component with context %}

![Illustration ortho et estompage](/img/partenaires/ign/generalites/actualites/2025-11-bandeau-maj-donnees.png){fr-responsive-img .frx-border-img .frx-img-contained}

#### Services web

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['RPG 2024 Parcelles agricoles constatées', 'LANDUSE.AGRICULTURE2024', 'WFS, WMS Raster et WMTS', 'agriculture', 'FXX+DROM'],
        ['RPG 2024 Parcelles agricoles catégorisées', 'IGNF_RPG_PARCELLES-AGRICOLES-CATEGORISEES_2024', 'WFS, WMS Raster et WMTS', 'agriculture', 'FXX+DROM'],
        ['RPG 2024 Parcelles éligibles aux IAE', 'IGNF_RPG_PARCELLES-ELIGIBLES-IAE', 'WFS, WMS Raster et WMTS', 'agriculture', 'FXX+DROM'],
        ['RPG 2024 Prairies Permanentes', 'IGNF_RPG_PRAIRIES-PERMANENTES_2024', 'WFS, WMS Raster et WMTS', 'agriculture', 'FXX+DROM'],
        ['RPG 2024 Zones de Densité Homogène (ZDH)', 'IGNF_RPG_ZONES-DENSITE-HOMOGENE_2024', 'WFS, WMS Raster et WMTS', 'agriculture', 'FXX+DROM'],
        ['DGCL Longueur de voirie retenue pour les communes DSR 2025', 'DGCL.2025:voirie_communale', 'WFS', 'topographie', 'FXX+DROM'],
        ['DGCL Longueur de voirie retenue pour les départements DSR 2025', 'DGCL.2025:voirie_departementale', 'WFS', 'topographie', 'FXX+DROM'],
        ['DGCL Longueur de voirie retenue pour les communes DSR 2025', 'DGCL.2025.voirie-communale', 'WMTS', 'topographie', 'FXX+DROM'],
        ['DGCL Longueur de voirie retenue pour les départements DSR 2025', 'DGCL.2025.voirie-departementale', 'WMTS', 'topographie', 'FXX+DROM']
    ]
}) }}

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['ADMIN EXPRESS mises à jour en continu', 'LIMITES_ADMINISTRATIVES_EXPRESS.LATEST', 'WFS, WMS Raster et WMTS', 'administratif', 'FXX+DROM - 2025-11'],
        ['Prairies sensibles BCAE 9', 'PRAIRIES.SENSIBLES.BCAE', 'WFS, WMS Raster et WMTS', 'agriculture', 'France métropolitaine'],
        ['RPG dernière édition', 'LANDUSE.AGRICULTURE.LATEST', 'WFS, WMS Raster et WMTS', 'agriculture', 'FXX+DROM - 2024'],
        ['Tableau d’assemblage des blocs de nuages de points LiDAR HD', 'IGNF_NUAGES-DE-POINTS-LIDAR-HD:bloc', 'WFS', 'altimétrie', 'FE (Vire-Normandie), FQ (Pau), GO (Marmande), KL (Ussel), KM (Salers), MH (Vezelay), ML (Ambert)'],
        ['Tableau d’assemblage des dalles de nuages de points LiDAR HD', 'IGNF_NUAGES-DE-POINTS-LIDAR-HD:dalles', 'WFS', 'altimétrie', ''],
        ['MNH issu de LiDAR HD', 'IGNF_LIDAR-HD_MNH_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW', 'WMS Raster et WMTS', 'altimetrie', 'EN (Arcachon), EO (Mimizan), EQ (Bayonne), HC (Le Havre), NI (Autun), MH (Vezelay)'],
        ['MNS issu de LiDAR HD', 'IGNF_LIDAR-HD_MNS_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW', 'WMS Raster et WMTS', 'altimetrie', ''],
        ['MNT issu de LiDAR HD', 'IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW', 'WMS Raster et WMTS', 'altimetrie', ''],
        ['Tableau d’assemblage des blocs MNH issus du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnh-bloc', 'WFS', 'altimetrie', ''],
        ['Tableau d’assemblage des dalles MNH issues du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnh-dalle', 'WFS', 'altimetrie', ''],
        ['Tableau d’assemblage des blocs MNS issus du LiDAR HD', 'IGNF_LIDAR-HD_TA:mns-bloc', 'WFS', 'altimetrie', ''],
        ['Tableau d’assemblage des dalles MNS issues du LiDAR HD', 'IGNF_LIDAR-HD_TA:mns-dalle', 'WFS', 'altimetrie', ''],
        ['Tableau d’assemblage des blocs MNT issus du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnt-bloc', 'WFS', 'altimetrie', ''],
        ['Tableau d’assemblage des dalles MNT issues du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnt-dalle', 'WFS', 'altimetrie', ''],
        ['Modèles numériques de surfaces correlés', 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS', 'WMS Raster', 'altimetrie', 'Bloc FBGDE01, FBGDE05 (Grand Est), D005, D012, D015, D053, D065, D071, D074, D085 - 2025'],
        ['Estompage MNS correlés', 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS.SHADOW', 'WMS Raster', 'altimetrie', ''],
        ['PLAN IGN', 'PLAN.IGN', 'TMS (tuiles vectorielles)', 'cartes', 'FXX+DROM - Niveaux de zoom 14 à 19 - 2025-11'],
        ['PLAN IGN', 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2', 'WMS Raster et WMTS', 'cartes', 'FXX+DROM - Niveaux de zoom 14 à 19 - 2025-11'],
        ['Mesures compensatoires des atteintes à la biodiversité', 'MESURES_COMPENSATOIRES', 'WFS et WMS Vecteur', 'environnement', '2025-11 - FXX+DROM'],
        ['Parcellaire Express (PCI) L93', 'CADASTRALPARCELS.PARCELLAIRE_EXPRESS.L93', 'WMTS', 'lambert93', 'FXX+DROM - 2025-09'],
        ['PLAN IGN L93', 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2.L93', 'WMTS', 'lambert93', 'FXX+DROM - Niveaux de zoom 14 à 20 -  2025-11'],
        ['OCS GE 2017-2020 - artificialisation', 'OCSGE.ARTIF.2017-2020', 'WMTS, WMS Raster', 'ocsge', 'D973 - 2018'],
        ['OCS GE 2021-2023 - artificialisation', 'OCSGE.ARTIF.2021-2023', 'WMTS, WMS Raster', 'ocsge', 'D973 - 2022'],
        ['OCSGE Constructions 2017-2020', 'OCSGE.CONSTRUCTION.2017-2020', 'WMS Raster et WMTS', 'ocsge', 'D973 - 2018'],
        ['OCSGE Constructions 2021-2023', 'OCSGE.CONSTRUCTION.2021-2023', 'WMS Raster et WMTS', 'ocsge', 'D973 - 2022'],
        ['OCSGE Couverture 2017-2020', 'OCSGE.COUVERTURE.2017-2020', 'WMS Raster et WMTS', 'ocsge', 'D973 - 2018'],
        ['OCSGE Couverture 2021-2023', 'OCSGE.COUVERTURE.2021-2023', 'WMS Raster et WMTS', 'ocsge', 'D973 - 2022'],
        ['OCSGE Usage 2017-2020', 'OCSGE.USAGE.2017-2020', 'WMS Raster et WMTS', 'ocsge', 'D973 - 2018'],
        ['OCSGE Usage 2021-2023', 'OCSGE.USAGE.2021-2023', 'WMS Raster et WMTS', 'ocsge', 'D973 - 2022'],
        ['BD Ortho RVB 20cm', 'HR ORTHOIMAGERY.ORTHOPHOTOS', 'WMS Raster et WMTS', 'ortho', 'D044, D046, D049'],
        ['Photos Aériennes', 'ORTHOIMAGERY.ORTHOPHOTOS', 'WMS Raster et WMTS', 'ortho', ''],
        ['BD Ortho RVB 50cm', 'ORTHOIMAGERY.ORTHOPHOTOS.BDORTHO', 'WMS Raster et WMTS', 'ortho', ''],
        ['BD Ortho IRC', 'ORTHOIMAGERY.ORTHOPHOTOS.IRC', 'WMS Raster et WMTS', 'ortho', ''],
        ['Graphe de mosaïquage BD Ortho', 'ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE', 'WFS et WMS Vecteur', 'ortho', ''],
        ['Ortho Express RVB 2025', 'ORTHOIMAGERY.ORTHOPHOTOS.ORTHO-EXPRESS.2025', 'WMS Raster et WMTS', 'ortho', 'Blocs FBGDE01, FBGDE05 (Grand Est), D012, D015, D074, D081'],
        ['Ortho Express IRC 2025', 'ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2025', 'WMS Raster et WMTS', 'ortho', ''],
        ['Parcellaire Express (PCI)', 'CADASTRALPARCELS.PARCELLAIRE_EXPRESS', 'WMS Raster et WMTS', 'parcellaire', 'FXX+DROM - 2025-09'],
        ['Parcellaire Express (PCI)', 'CADASTRALPARCELS.PCI_VECTEUR', 'WMS Vecteur', 'parcellaire', ''],
        ['Parcellaire Express (PCI) bâtiment noir', 'parcellaire_express_batiment_noir', 'WMS Vecteur', 'parcellaire', ''],
        ['Parcellaire Express (PCI) bâtiment orange', 'parcellaire_express_batiment_orange', 'WMS Vecteur', 'parcellaire', ''],
        ['Parcellaire Express (PCI) numéro', 'parcellaire_express_numero', 'WMS Vecteur', 'parcellaire', ''],
        ['Parcellaire Express (PCI) parcelle noir', 'parcellaire_express_parcelle_noir', 'WMS Vecteur', 'parcellaire', ''],
        ['Parcellaire Express (PCI) parcelle orange', 'parcellaire_express_parcelle_orange', 'WMS Vecteur', 'parcellaire', ''],
        ['Parcellaire Express (PCI) - 9 thématiques', 'CADASTRALPARCELS.PARCELLAIRE_EXPRESS:XXX', 'WFS', 'parcellaire', ''],
        ['Couverture du Sol par IA 2024', 'IGNF_COSIA_2024', 'WMS Raster et WMTS', 'sol', '2024 - D001, D002, D004, D011, D017, D02A, D02B, D023, D024, D029, D030, D033, D034, D038, D040, D047, D056, D060, D062, D064, D066, D067, D068, D073, D080, D084, D087, D971']
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS Raster et WMTS) et BD Géodésie (IGNF_GEODESIE-XXX services WFS et WMS Vecteur) sont mises à jour quotidiennement et la ressource Base Adresse Nationale (BAN.DATA.GOUV services WFS et WMS Vecteur) est actualisée hebdomadairement.

![IGN-F - MNS issu du LiDAR HD, BD Ortho et DGCL Longueur de voirie retenue pour les départements DSR 2025 - Sare (64)](/img/partenaires/ign/generalites/actualites/2025-11-mns-ign-sare.png){fr-responsive-img .frx-border-img .frx-img-contained}

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', 'D042, D046, D082', '2025'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', 'D042, D046, D082', '2025'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', 'FXX+DROM', '2025-11'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® EXPRESS</a>', 'FXX+DROM', 'hebdomadaire'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">Données d’artificialisation issues de l’OCS GE</a>', 'D973', '2022'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">Données d’artificialisation issues de l’OCS GE</a>', 'D973', '2018'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">Données d’artificialisation issues de l’OCS GE</a>', 'D973', 'Différentiel 2018-2022'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title="Géodésie et Nivellement - ouvre une nouvelle fenêtre">Fiches géodésiques</a>', 'FXX + DROM', '2025-11'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a> ', 'D973', '2022'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a> ', 'D973', '2018'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a> ', 'D973', 'Différentiel 2018-2022'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_RPG" target="_blank" rel="noopener noreferrer" title="RPG - ouvre une nouvelle fenêtre">RPG</a>', 'FXX+DOM un territoire et par régions', '2024'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS corrélés - ouvre une nouvelle fenêtre">Modèles numériques de surfaces correlés</a>', 'D008, D012, D015, D052, D065, D074, D081', '2025'],
        ['<a href="https://cartes.gouv.fr/telechargement/IGNF_NUAGES-DE-POINTS-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="Nuages de points LiDAR HD - ouvre une nouvelle fenêtre">Blocs LiDAR HD format COPC</a>', 'FE (Vire-Normandie), FQ (Pau), GO (Marmande), KL (Ussel), KM (Salers), MH (Vezelay), ML (Ambert)', ''],
        ['Produits dérivés (<a href="https://cartes.gouv.fr/telechargement/IGNF_MNH-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNH LiDAR HD - ouvre une nouvelle fenêtre">MNH</a>, <a href="https://cartes.gouv.fr/telechargement/IGNF_MNS-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNS LiDAR HD - ouvre une nouvelle fenêtre">MNS</a>, <a href="https://cartes.gouv.fr/telechargement/IGNF_MNT-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNT LiDAR HD - ouvre une nouvelle fenêtre">MNT</a> issus du LiDAR HD', 'EN (Arcachon), EO (Mimizan), EQ (Bayonne), HC (Le Havre), NI (Autun), MH (Vezelay)', '']
]
}) }}

![GN-F - OCS GE et SCAN 25- Kourou (973)](/img/partenaires/ign/generalites/actualites/2025-11-ign-ocsge-kourou.png){fr-responsive-img .frx-border-img .frx-img-contained}
