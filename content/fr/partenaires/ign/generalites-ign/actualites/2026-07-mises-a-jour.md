---
title: Mises à jour Juillet 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de juillet 2026
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour Juillet 2026
    order: -20260701
date: 2026-07-01
---

{% from "components/component.njk" import component with context %}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-07-mises-a-jour/00-2026-07-mises-a-jour.png", "Actualité Mise à jour le 1 juillet 2026" %}

#### Services web

:::callout
Dans ce **[document](https://data.geopf.fr/annexes/ressources/capabilities/services.csv)** au format CSV mis à jour chaque vendredi, vous retrouvez toutes les ressources mises en avant par l’Institut national de l’information géographique et forestière.
:::

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_CARTO-VEGETATION" target="_blank" rel="noopener noreferrer" title="Carto Végétation - ouvre une nouvelle fenêtre">CARTOGRAPHIE FORMATIONS VEGETALES Guadeloupe 2024</a>', "IGNF_CARTO-FORMATIONS-VEGETALES_2024", "WFS et WMS-Vecteur", "environnement", "D971 - 2024"]
    ]
}) }}

<br/>

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">Estompage MNS Correl</a>', "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS.SHADOW", "WMS-Raster et WMTS", "altimétrie", "D977 - 2024, D974 - 2025 et D013, D014, D035, D070 et zone sur le Centre-Val de Loire - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">MNS Correl</a>', "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS", "WMTS", "altimétrie", "D977 - 2024, D974 - 2025 et D013, D014, D035, D070 et zone sur le Centre-Val de Loire - 2026"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "PLAN.IGN", "TMS", "cartes", "FXX + DROM - Édition juin 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2", "WMS-Raster et WMTS", "cartes", "FXX + DROM - Édition juin 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO®</a>', "BDTOPO", "TMS", "topographie", "FXX + DROM - Édition juin 2026"], 
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO®</a>', "54 thématiques", "WFS", "topographie", "FXX + DROM - Édition juin 2026"], 
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO®</a>', "11 thématiques", "WMS-Vecteur", "topographie", "FXX + DROM - Édition juin 2026"],                 
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO®</a>', "3 thématiques", "WMS-RASTER", "topographie", "FXX + DROM - Édition juin 2026"],   
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO®</a>', "7 thématiques", "WMTS", "topographie", "FXX + DROM - Édition juin 2026"],               
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® Différentiel - ouvre une nouvelle fenêtre">BD TOPO® Différentiel</a>', "BDTOPO_V3_DIFF:XXX", "WFS", "topographie", "FXX + DROM - Édition mars et juin 2026"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® Différentiel - ouvre une nouvelle fenêtre">BD TOPO® Différentiel</a>', "BDTOPO-DIFF-XXX", "WMS-Raster et WMTS", "topographie", "FXX + DROM - Édition mars et juin 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO - ouvre une nouvelle fenêtre">Photographies aériennes</a>', "ORTHOIMAGERY.ORTHOPHOTOS", "WMS-Raster et WMTS", "ortho", "D053, D072, D081, D974 - Édition 2025"],     
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO - ouvre une nouvelle fenêtre">BD ORTHO® 20 cm</a>', "HR.ORTHOIMAGERY.ORTHOPHOTOS", "WMS-Raster et WMTS", "ortho", "D053, D072, D081, D974 - Édition 2025"],  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO - ouvre une nouvelle fenêtre">BD ORTHO® 50 cm</a>', "ORTHOIMAGERY.ORTHOPHOTOS.BDORTHO", "WMS-Raster et WMTS", "ortho", "D053, D072, D081, D974 - Édition 2025"],  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "ORTHOIMAGERY.ORTHOPHOTOS.IRC", "ortho", "D053, D072, D081, D974 - Édition 2025"],  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO - ouvre une nouvelle fenêtre">Graphe de mosaïquage BD ORTHO®
</a>', "ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE", "WFS et WMS-Vecteur", "ortho", "D053, D072, D081, D974 - Édition 2025"],                                            
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO EXPRESS - ouvre une nouvelle fenêtre">Ortho-Express IRC</a>', "ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2026", "WMS-Raster et WMTS", "ortho", "D010, D014 - Édition 2026"],            
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO EXPRESS - ouvre une nouvelle fenêtre">Ortho-Express RVB</a>', "ORTHOIMAGERY.ORTHOPHOTOS.RVB-EXPRESS.2026", "WMS-Raster et WMTS", "ortho", "D010, D014 - Édition 2026"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/DGAC_RESTRICTIONS-UAS" target="_blank" rel="noopener noreferrer" title="Restrictions UAS categorie Ouverte et aeromodelisme - ouvre une nouvelle fenêtre">Restrictions UAS categorie Ouverte et aeromodelisme</a>', "TRANSPORTS.DRONES.RESTRICTIONS", "WFS, WMS-Raster et WMTS", "satellite", "FXX+DROM - Édition 2026-06"]    
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS-Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-07-mises-a-jour/01-2026-07-mises-a-jour.png", "PLAN IGN - Langres (52)" %}

##### Liste des mises à jour de flux à accès restreint

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-100" target="_blank" rel="noopener noreferrer" title="SCAN 100 - ouvre une nouvelle fenêtre">Cartes IGN</a>', "GEOGRAPHICALGRIDSYSTEMS.MAPS", "WMS-Raster et WMTS", "clé spécifique", "D974 - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-100" target="_blank" rel="noopener noreferrer" title="SCAN 100 - ouvre une nouvelle fenêtre">SCAN 100®</a>', "SCAN100_PYR-JPEG_WLD_WM", "WMS-Raster", "clé spécifique", "D974 - 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-100" target="_blank" rel="noopener noreferrer" title="SCAN 100 - ouvre une nouvelle fenêtre">SCAN 100®</a>', "SCAN100_PYR-JPEG_WLD_WM_WMTS_3D", "WMTS", "clé spécifique", "D974 - 2026-06"]        
    ]
}) }}

---

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® IRC - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "D008, D015, D051, D052, D054, D055, D057, D088", "2025"],  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® RVB - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', "D008, D015, D051, D052, D054, D055, D057, D088", "2025"],           
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "FXX + DROM", "2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS COG - ouvre une nouvelle fenêtre">ADMIN EXPRESS COG</a>', "FXX + DROM - formats FlatGeobuf et GeoParquet", "2026-06"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS COG CARTO - ouvre une nouvelle fenêtre">ADMIN EXPRESS COG CARTO</a>', "FXX + DROM - formats FlatGeobuf et GeoParquet", "2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS COG CARTO PE - ouvre une nouvelle fenêtre">ADMIN EXPRESS COG CARTO PE</a>', "FXX + DROM - formats FlatGeobuf et GeoParquet", "2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® EXPRESS</a>', "FXX + DROM", "hebdomadaire"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® </a>', "France entière (FlatGeobuf, GeoParquet, GPKG + SQL), par territoires (GPJKG + SQL), par régions (GPKG + SHP), par départements (GPKG + SHP) + thème transport", "Edition 2026-06"],   
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® Différentiel- ouvre une nouvelle fenêtre">BD TOPO® Différentiel</a>', "France entière (GPKG + SQL), par territoires (GPKG + SQL), par régions (GPKG + SHP)", "Editions 2026-03 et 2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_CARTO-VEGETATION" target="_blank" rel="noopener noreferrer" title="Carto Végétation- ouvre une nouvelle fenêtre">CARTOGRAPHIE FORMATIONS VEGETALES</a>', "D971", "2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_CONTOURS-IRIS" target="_blank" rel="noopener noreferrer" title="Contours... IRIS® - ouvre une nouvelle fenêtre">Contours... IRIS®</a>', "FXX + DROM - formats FlatGeobuf et GeoParquet", "2026"],    
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_CONTOURS-IRIS-PE" target="_blank" rel="noopener noreferrer" title="Contours... IRIS® petite échelle - ouvre une nouvelle fenêtre">Contours... IRIS® petite échelle</a>', "FXX + DROM - formats FlatGeobuf et GeoParquet", "2026"],  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title=" GEODESIE ET NIVELLEMENT  - ouvre une nouvelle fenêtre">Fiches Géodésiques </a>', "FXX + DROM", "2026-07"],                  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_IRIS-GE" target="_blank" rel="noopener noreferrer" title="IRIS GE - ouvre une nouvelle fenêtre">Iris ...GE</a>', "FXX + DROM - formats FlatGeobuf et GeoParquet", "2026"],
         ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D022", "2025 et Correctif 2021"],
         ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D02A et D091", "2024 et Correctif 2021"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D022", "Différentiel entre 2021 et 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D02A et D091", "Différentiel entre 2021 et 2024"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D022", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D02A et D091", "2024"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D022", "Différentiel entre 2021 et 2025"], 
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D02A et D091", "Différentiel entre 2021 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">Modèles Numériques de Surfaces correlés </a>', "D014", "2026"],         
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">Modèles Numériques de Surfaces correlés </a>', "D063", "2025"]                      
    ]
}) }}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-07-mises-a-jour/02-2026-07-mises-a-jour.png", "BD ORTHO® IRC - Nancy (54)" %}