---
title: Mises à jour Août 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de août 2026
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour Août 2026
    order: -20260801
date: 2026-08-01
---

{% from "components/component.njk" import component with context %}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-08-mises-a-jour/00-2026-08-mises-a-jour.png", "Actualité Mise à jour le 31 août 2026" %}

#### Services web

:::callout
Dans ce **[document](https://data.geopf.fr/annexes/ressources/capabilities/services.csv)** au format CSV mis à jour chaque vendredi, vous retrouvez toutes les ressources mises en avant par l’Institut national de l’information géographique et forestière.
:::

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE ARTIFICIALISATION - ouvre une nouvelle fenêtre">OCS GE 2021-2023 - artificialisation avec exemptions</a>', "OCSGE-ARTIFICIALISATION-EXEMPTIONS_2021-2023", "WMS-Raster et WMTS", "ocsge-ng", "FXX + DROM"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE ARTIFICIALISATION - ouvre une nouvelle fenêtre">OCS GE 2017-2020 - artificialisation avec exemptions</a>', "OCSGE-ARTIFICIALISATION-EXEMPTIONS_2017-2020", "WMS-Raster et WMTS", "ocsge-ng", "FXX + DROM"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE ARTIFICIALISATION - ouvre une nouvelle fenêtre">OCS GE 2016-2017 - artificialisation avec exemptions</a>', "OCSGE-ARTIFICIALISATION-EXEMPTIONS_2016-2017", "WMS-Raster et WMTS", "ocsge-ng", "5 départements"]
    ]
}) }}
<br/>

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "ADMIN_EXPRESS", "TMS", "administratif", "FXX + DROM - 2026-08"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "LIMITES_ADMINISTRATIVES_EXPRESS.LATEST", "WFS, WMS-Raster et WMTS", "administratif", "FXX + DROM - 2026-08"],    
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS" target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre">BAN PLUS</a>', "BAN-PLUS:XXX", "WFS", "adresse", "FXX + DROM - 2026-06"],             
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNH-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNH LIDAR HD - ouvre une nouvelle fenêtre">MNH issu de LiDAR HD - TA Dalles</a>', "IGNF_MNH-LIDAR-HD:dalle", "WFS", "altimetrie", "Blocs CBL (Comminges, Bigorre Lomagne), NJ (Cluny), SAS (Saintonge Aunis Sèvres)"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNH-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNH LIDAR HD - ouvre une nouvelle fenêtre">MNH issu de LiDAR HD</a>', "IGNF_LIDAR-HD_MNH_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW", "WMS-Raster et WMTS", "altimetrie", "Blocs CBL (Comminges, Bigorre Lomagne), NJ (Cluny), SAS (Saintonge Aunis Sèvres)"],    
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNS LIDAR HD - ouvre une nouvelle fenêtre">MNS issu de LiDAR HD - TA Dalles</a>', "IGNF_MNS-LIDAR-HD:dalle", "WFS", "altimetrie", "Blocs CBL (Comminges, Bigorre Lomagne), NJ (Cluny), SAS (Saintonge Aunis Sèvres)"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNS LIDAR HD - ouvre une nouvelle fenêtre">MNS issu de LiDAR HD</a>', "IGNF_LIDAR-HD_MNS_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW", "WMS-Raster et WMTS", "altimetrie", "Blocs CBL (Comminges, Bigorre Lomagne), NJ (Cluny), SAS (Saintonge Aunis Sèvres)"], 
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNT-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNT LIDAR HD - ouvre une nouvelle fenêtre">MNT issu de LiDAR HD - TA Dalles</a>', "IGNF_MNT-LIDAR-HD:dalle", "WFS", "altimetrie", "Blocs CBL (Comminges, Bigorre Lomagne), NJ (Cluny), SAS (Saintonge Aunis Sèvres)"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNT-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNT LIDAR HD - ouvre une nouvelle fenêtre">MNT issu de LiDAR HD</a>', "IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW", "WMS-Raster et WMTS", "altimetrie", "Blocs CBL (Comminges, Bigorre Lomagne), NJ (Cluny), SAS (Saintonge Aunis Sèvres)"],                                  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "PLAN.IGN", "TMS", "cartes", "FXX + DROM - Édition juillet 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2", "WMS-Raster et WMTS", "cartes", "FXX + DROM - Édition juillet 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE ARTIFICIALISATION - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "OCSGE.ARTIF.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D02A, D02B, D022, D024, D029, D091, D971"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Construction</a>', "OCSGE.CONSTRUCTION.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D02A, D02B, D022, D024, D029, D091, D971"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Couverture</a>', "OCSGE.COUVERTURE.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D02A, D02B, D022, D024, D029, D091, D971"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Usage</a>', "OCSGE.USAGE.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D02A, D02B, D022, D024, D029, D091, D971"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_COSIA" target="_blank" rel="noopener noreferrer" title="CoSIA - ouvre une nouvelle fenêtre">CoSIA</a>', "IGNF_COSIA_2024-2026", "WMS-Raster et WMTS", "sol", "D008, D012, D015, D052, D055, D074 - 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express IRC 2026</a>', "ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2026", "WMS-Raster et WMTS", "ortho", "D007, D026, zone sur le Centre-Val de Loire - 2026"],                        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express RVB 2026</a>', "ORTHOIMAGERY.ORTHOPHOTOS.RVB-EXPRESS.2026", "WMS-Raster et WMTS", "ortho", "D007, D026, zone sur le Centre-Val de Loire - 2026"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express IRC 2025</a>', "ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2025", "WMS-Raster et WMTS", "ortho", "D063 - 2025"],                        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express RVB 2025</a>', "ORTHOIMAGERY.ORTHOPHOTOS.ORTHO-EXPRESS.2025", "WMS-Raster et WMTS", "ortho", "D063 - 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO-HISTO" target="_blank" rel="noopener noreferrer" title="BD-ORTHO-HISTO - ouvre une nouvelle fenêtre">Photographies aeriennes 1965-1980</a>', "ORTHOIMAGERY.ORTHOPHOTOS.1965-1980", "WMS-Raster et WMTS", "orthohisto", "D059 (1975), D062 (1974), D068 (1973), D090 (1973)"],  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO-HISTO" target="_blank" rel="noopener noreferrer" title="BD-ORTHO-HISTO - ouvre une nouvelle fenêtre">Graphe de mosaïquage des photographies aeriennes 1965-1980</a>', "ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE.1965-1980", "WFS et WMS Vecteur", "orthohisto", "D059 (1975), D062 (1974), D068 (1973), D090 (1973)"],   
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI)  - ouvre une nouvelle fenêtre">Parcellaire Express (PCI)</a>', "PCI", "Tuiles vectorielles", "parcellaire", "FXX + DROM - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI)  - ouvre une nouvelle fenêtre">Parcellaire Express (PCI)</a>', "CADASTRALPARCELS.PARCELLAIRE_EXPRESS", "WFS, WMS-Raster et WMTS", "parcellaire", "FXX + DROM - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI)  - ouvre une nouvelle fenêtre">Parcellaire Express (PCI)</a>', "CADASTRALPARCELS.PCI_VECTEUR", "WMS-Vecteur", "parcellaire", "FXX + DROM - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI)  - ouvre une nouvelle fenêtre">Parcellaire Express (PCI) bâtiment noir</a>', "parcellaire_express_batiment_noir", "WMS-Vecteur", "parcellaire", "FXX + DROM - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI)  - ouvre une nouvelle fenêtre">Parcellaire Express (PCI) bâtiment orange</a>', "parcellaire_express_batiment_orange", "WMS-Vecteur", "parcellaire", "FXX + DROM - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI)  - ouvre une nouvelle fenêtre">Parcellaire Express (PCI) numéro</a>', "parcellaire_express_numero", "WMS-Vecteur", "parcellaire", "FXX + DROM - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI)  - ouvre une nouvelle fenêtre">Parcellaire Express (PCI) parcelle noir</a>', "parcellaire_express_parcelle_noir", "WMS-Vecteur", "parcellaire", "FXX + DROM - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI)  - ouvre une nouvelle fenêtre">Parcellaire Express (PCI) parcelle orange</a>', "parcellaire_express_parcelle_orange", "WMS-Vecteur", "parcellaire", "FXX + DROM - 2026-06"],          
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-SAT" target="_blank" rel="noopener noreferrer" title="PLEIADES 2026 - ouvre une nouvelle fenêtre">Pléiades 2026</a>', "ORTHOIMAGERY.ORTHO-SAT.PLEIADES.2026", "WMS-Raster et WMTS", "satellite", "Zones sur les pays de Landerneau, la pointe de Penmarc'h-Loctudy, la réserve des Sept-Iles et l'agglomération de Perpignan"]                 
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS-Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-08-mises-a-jour/02-2026-08-mises-a-jour.png", "Ortho Express et MNS issu du LiDAR HD - Puy de Pariou (63)" %}

---

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® IRC - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "D013, D014", "2026"],  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® IRC - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "D012, D015, D074, D974", "2025"],  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® RVB - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', "D012, D074, D974", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "FXX + DROM", "2026-07 et 2026-08"],   
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS" target="_blank" rel="noopener noreferrer" title="BAN-PLUS - ouvre une nouvelle fenêtre">BAN-PLUS</a>', "FXX + DROM", "2026-06"],           
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_COSIA" target="_blank" rel="noopener noreferrer" title="CoSIA - ouvre une nouvelle fenêtre">CoSIA</a>', "D008, D012, D015, D052, D055, D074", "2025"],         
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title=" GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre">Fiches Géodésiques</a>', "FXX + DROM", "2026-08"],                       
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D02B, D024, D971", "2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D971", "Correctif 2022"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D02B, D024", "Correctif 2021"],                
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D971", "Différentiel entre 2022 et 2024"],         
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D02B, D024", "Différentiel entre 2021 et 2024"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D02B, D024, D971", "2024"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D02B, D024", "Différentiel entre 2021 et 2024"],         
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D971", "Différentiel entre 2022 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation avec exemptions - ouvre une nouvelle fenêtre">OCS GE Artificialisation avec exemptions</a>', "301 jeux de données", "Entre 2016 et 2023"],     
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express - ouvre une nouvelle fenêtre">Parcellaire Express PCI</a>', "FXX+DROM", "2026-06"],     
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNH-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNH LiDAR HD - ouvre une nouvelle fenêtre">MNH issu de LiDAR HD</a>', "Blocs CBL (Comminges, Bigorre Lomagne), NJ (Cluny), SAS (Saintonge Aunis Sèvres)", ""],    
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNS LiDAR HD - ouvre une nouvelle fenêtre">MNS issu de LiDAR HD</a>', "Blocs CBL (Comminges, Bigorre Lomagne), NJ (Cluny), SAS (Saintonge Aunis Sèvres)", ""],                      
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNT-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="MNT LiDAR HD - ouvre une nouvelle fenêtre">MNT issu de LiDAR HD</a>', "Blocs CBL (Comminges, Bigorre Lomagne), NJ (Cluny), SAS (Saintonge Aunis Sèvres)", ""],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS CORREL - ouvre une nouvelle fenêtre">Modèles Numériques de Surfaces correlés</a>', "D973", "2025"],              
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS CORREL - ouvre une nouvelle fenêtre">Modèles Numériques de Surfaces correlés</a>', "D975", "2022"]                                
    ]
}) }}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-08-mises-a-jour/01-2026-08-mises-a-jour.png", "CoSIA et MNS issu du LiDAR HD - Les Contamines-Montjoie (74)" %}
