---
title: Mises à jour Octobre 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de octobre 2026
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour Octobre 2026
    order: -20261001
date: 2026-10-01
---

{% from "components/component.njk" import component with context %}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-10-mises-a-jour/00-2026-10-mises-a-jour.jpg", "Actualité mise à jour le 8 octobre 2026" %}

#### Services web

:::callout
Dans ce **[document](https://data.geopf.fr/annexes/ressources/capabilities/services.csv)** au format CSV mis à jour chaque vendredi, vous retrouvez toutes les ressources mises en avant par l’Institut national de l’information géographique et forestière.
:::

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
    ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN-HD" target="_blank" rel="noopener noreferrer" title="Plan IGN HD - ouvre une nouvelle fenêtre">Plan IGN HD</a>', "IGNF_PLAN-IGN-HD
    ", "WMS-Raster et WMTS", "cartes", ""]
    ]
}) }}
<br/>

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">Estompage MNS Correl</a>', "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS.SHADOW", "WMS-Raster et WMTS", "altimétrie", "D022 - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">MNS Correl</a>', "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS", "WMTS", "altimétrie", "D022 - 2026"],     
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">Plan IGN</a>', "PLAN.IGN", "TMS", "cartes", "FXX + DROM - Édition septembre 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">Plan IGN</a>', "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2", "WMS-Raster et WMTS", "cartes", "FXX + DROM - Édition septembre 2026"],           
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE ARTIFICIALISATION - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "OCSGE.ARTIF.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D064, D082"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE ARTIFICIALISATION - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "OCSGE.ARTIF.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D064, D082"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Construction</a>', "OCSGE.CONSTRUCTION.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D064, D082"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Couverture</a>', "OCSGE.COUVERTURE.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D064, D082"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Usage</a>', "OCSGE.USAGE.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D064, D082"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express IRC 2026</a>', "ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2026", "WMS-Raster et WMTS", "ortho", "D022, D025, D039 - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express RVB 2026</a>', "ORTHOIMAGERY.ORTHOPHOTOS.RVB-EXPRESS.2026", "WMS-Raster et WMTS", "ortho", "D022, D025, D039, D061 - 2026"]  
    ]
}) }}
<br/>

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS-Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-10-mises-a-jour/01-2026-10-mises-a-jour.jpg", "PLAN IGN HD et PLAN IGN (TMS) - Valjouffrey (38) " %}

---

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® IRC - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "D035", "2026"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® RVB - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', "D035", "2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® EXPRESS</a>', "FXX + DROM", "hebdomadaire"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO®</a>', "FXX + DROM France entière (FlatGeoBuf, GeoParquet), par territoires (GPKG), par départements (GPKG et Shapefile)", "Édition 2026-09"],             
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® Différentiel - ouvre une nouvelle fenêtre">BD TOPO® Différentiel</a>', "France entière (GPKG + SQL), par territoires (GPKG + SQL), par régions (GPKG + SHP)", "Éditions 2026-06 et 2026-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre">Fiches Géodésiques</a>', "FXX + DROM", "2026-10"],     
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D057, D081", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D064", "2024"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D057, D081", "Correctif 2022"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D064", "Correctif 2021"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D057, D081", "Différentiel entre 2022 et 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D064", "Différentiel entre 2021 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D057, D081", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D064", "2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D057, D081", "Différentiel entre 2022 et 2025"],      
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D064", "Différentiel entre 2021 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS CORREL - ouvre une nouvelle fenêtre">Modèles Numériques de Surfaces correlés</a>', "D061", "2026"],                
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_RGE-ALTI" target="_blank" rel="noopener noreferrer" title="RGE ALTI 1M - ouvre une nouvelle fenêtre">RGE ALTI® 1M</a>', "FXX + DROM", "Format TIFF"]
        ]
}) }}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-10-mises-a-jour/02-2026-10-mises-a-jour.jpg", "OCS GE et MNT issu du LiDAR HD - Lac Bersau (64)" %}