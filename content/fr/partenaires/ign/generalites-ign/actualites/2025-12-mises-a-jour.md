---
title: Mises à jour décembre 2025
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de décembre 2025
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour décembre 2025
date: 2025-12-01
---

{% from "components/component.njk" import component with context %}

![Image illustrative](/img/partenaires/ign/generalites/actualites/2025-12-maj.png){.fr-responsive-img .frx-img-contained}

#### Services web

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ["Tableau d’assemblage des blocs de nuages de points LiDAR HD", "IGNF_NUAGES-DE-POINTS-LIDAR-HD:bloc", "WFS", "altimétrie", "Blocs BE (Morlaix), EN (Arcachon), EO (Mimizan), EQ (Bayonne), FD (Saint-Lô)"],
        ["Tableau d’assemblage des dalles de nuages de points LiDAR HD", "IGNF_NUAGES-DE-POINTS-LIDAR-HD:dalles", "WFS", "altimétrie", "N/A"],
        ["PLAN IGN", "PLAN.IGN", "TMS (tuiles vectorielles)", "cartes", "FXX + DROM (niveaux de zoom 14 à 19) - 2025-12"],
        ["PLAN IGN", "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2", "WMS-Raster et WMTS", "cartes", "FXX + DROM (niveaux de zoom 14 à 19) - 2025-12"],
        ["Labels touristiques (communes touristiques, stations classées, stations vertes et villages étapes)", "LABELS.TOURISTIQUES", "WFS et WMS-Vecteur", "cartovecto", "FXX + DROM - 2025-12"],
        ["Trace randonnée hivernale", "TRACES.RANDO.HIVERNALE", "WFS, WMS-Vecteur et WMTS", "cartovecto", "Massif Alpin - 2025-12"],
        ["Mesures compensatoires des atteintes à la biodiversité", "MESURES_COMPENSATOIRES", "WFS et WMS-Vecteur", "environnement", "FXX + DROM - 2025-12"],
        ["BD Ortho 20cm L93", "HR.ORTHOIMAGERY.ORTHOPHOTOS.L93", "WMTS", "lambert93", "FXX + DROM"],
        ["BD Ortho RVB 20cm", "HR.ORTHOIMAGERY.ORTHOPHOTOS", "WMS-Raster et WMTS", "ortho", "D042, D050, D082 - 2025"],
        ["Photos Aériennes", "ORTHOIMAGERY.ORTHOPHOTOS", "WMS-Raster et WMTS", "ortho", "N/A"],
        ["BD Ortho RVB 50cm", "ORTHOIMAGERY.ORTHOPHOTOS.BDORTHO", "WMS-Raster et WMTS", "ortho", "N/A"],
        ["BD Ortho IRC", "ORTHOIMAGERY.ORTHOPHOTOS.IRC", "WMS-Raster et WMTS", "ortho", "N/A"],
        ["Graphe de mosaïquage BD Ortho", "ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE", "WFS et WMS-Vecteur", "ortho", "N/A"],
        ["Ortho Express 2025 RVB", "ORTHOIMAGERY.ORTHOPHOTOS.ORTHO-EXPRESS.2025", "WMS-Raster et WMTS", "ortho", "D974"],
        ["Zones interdites à la captation aérienne des données (ZICAD)", "ORTHOIMAGERY.ORTHOPHOS.RESTRICTEDAREAS", "WFS, WMS-Raster et WMTS", "ortho", "FXX + DROM - 2025-11"],
        ["Photographies aériennes 1965-1980", "ORTHOIMAGERY.ORTHOPHOTOS.1965-1980", "WMS-Raster et WMTS", "orthohisto", "D046 (1970)"],
        ["Parcellaire Express (PCI)", "PCI", "TMS", "parcellaire", "FXX + DROM - 2025-09"]
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

Les flux WFS « IGNF_LIDAR-HD_TA:mnh-XXX », « IGNF_LIDAR-HD_TA:mns-XXX » et « IGNF_LIDAR-HD_TA:mnt-XXX » sont remplacés par les flux « IGNF_MNH_LIDAR-HD:XXX », « IGNF_MNS_LIDAR-HD:XXX » et « IGNF_MNT_LIDAR-HD:XXX » et seront dépubliés le 10 Janvier 2026.

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "D022, D037, D050", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', "D022, D037, D050", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "FXX + DROM", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-CARTO" target="_blank" rel="noopener noreferrer" title="BD CARTO® - ouvre une nouvelle fenêtre">BD CARTO® GPKG France entière, par territoire et par région et par département</a>', "FXX + DROM", "2025-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-CARTO" target="_blank" rel="noopener noreferrer" title="BD CARTO® - ouvre une nouvelle fenêtre">BD CARTO® SHP par région et par département</a>', "N/A", "2025-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-CARTO" target="_blank" rel="noopener noreferrer" title="BD CARTO® - ouvre une nouvelle fenêtre">BD CARTO® SQL France entière et par territoire</a>', "N/A", "2025-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® GPKG France entière, par territoire et par région</a>', "FXX + DROM", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® SHP par région et par département</a>', "N/A", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® SQL France entière et par territoire</a>', "N/A", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® thème transport par territoire</a>', "N/A", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® Différentiel éditions 253-254</a>', "FXX + DROM", "2025-09 et 2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® EXPRESS</a>', "FXX + DROM", "hebdomadaire"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre">Fiches géodésiques</a>', "FXX + DROM", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_VOIRIE-DGF" target="_blank" rel="noopener noreferrer" title="VOIRIE DGF - ouvre une nouvelle fenêtre">VOIRIE DGF communale et départementale</a>', "FRA", "2025"],
        ['<a href="https://cartes.gouv.fr/telechargement/IGNF_NUAGES-DE-POINTS-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="https://cartes.gouv.fr/telechargement/IGNF_NUAGES-DE-POINTS-LIDAR-HD - ouvre une nouvelle fenêtre">Blocs LiDAR HD format COPC</a>', "Blocs BE (Morlaix), EN (Arcachon), EP (Dax), EO (Mimizan), EQ (Bayonne), FD (Saint-Lô), HC (Le Havre), NI (Autun)", "N/A"]
    ]
}) }}

