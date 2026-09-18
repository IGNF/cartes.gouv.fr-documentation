---
title: Mises à jour Septembre 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de septembre 2026
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour Septembre 2026
    order: -20260901
date: 2026-09-01
---

{% from "components/component.njk" import component with context %}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-mises-a-jour/00-2026-09-mises-a-jour.png", "Actualité Mise à jour le 18 septembre 2026" %}

#### Services web

:::callout
Dans ce **[document](https://data.geopf.fr/annexes/ressources/capabilities/services.csv)** au format CSV mis à jour chaque vendredi, vous retrouvez toutes les ressources mises en avant par l’Institut national de l’information géographique et forestière.
:::

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
         ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MASQUE-FORET-DROM" target="_blank" rel="noopener noreferrer" title="Masques Forêt DROM - ouvre une nouvelle fenêtre">Masque cartographies des formations végétales 2010</a>', "IGNF_MASQUE-CARTO-FORMATIONS-VEGETALES_2010", "WMS-Raster et WMTS", "environnement", "D971"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MASQUE-FORET-DROM" target="_blank" rel="noopener noreferrer" title="Masques Forêt DROM - ouvre une nouvelle fenêtre">Masque cartographies des formations végétales 2024</a>', "IGNF_MASQUE-CARTO-FORMATIONS-VEGETALES_2024", "WMS-Raster et WMTS", "environnement", "D971"],         
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_NATURE-EN-VILLE" target="_blank" rel="noopener noreferrer" title="NATURE EN VILLE - ouvre une nouvelle fenêtre">Nature en Ville 2021-2023</a>', "IGNF_NATURE-EN-VILLE_2021-2023", "WMS-Raster et WMTS", "environnement", "France métropolitaine"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_NATURE-EN-VILLE" target="_blank" rel="noopener noreferrer" title="NATURE EN VILLE - ouvre une nouvelle fenêtre">Nature en Ville 2021-2023</a>', "IGNF_NATURE-EN-VILLE_2021-2023", "WMS-Raster et WMTS", "environnement", "France métropolitaine"]
    ]
}) }}
<br/>

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">Estompage MNS Correl</a>', "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS.SHADOW", "WMS-Raster et WMTS", "altimétrie", "D016, D083, zones sur le Centre Val-de-Loire, zone sur la Haute-Vienne et la Creuse - 2026"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">Estompage MNS Correl</a>', "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS.SHADOW", "WMS-Raster et WMTS", "altimétrie", "D973 - 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">MNS Correl</a>', "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS", "WMTS", "altimétrie", "D016, D083, zones sur le Centre Val-de-Loire, zone sur la Haute-Vienne et la Creuse - 2026"],         
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">MNS Correl</a>', "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS", "WMTS", "altimétrie", "D973 - 2025"],  
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/ANETT_COMMUNE-TOURISTIQUE-ET-STATION-CLASSEE" target="_blank" rel="noopener noreferrer" title="Communes Touristiques - ouvre une nouvelle fenêtre">Communes Touristiques</a>', "LABELS.TOURISTIQUES:communes_touristiques", "WFS", "cartovecto", "FXX - 2026-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/ANETT_COMMUNE-TOURISTIQUE-ET-STATION-CLASSEE" target="_blank" rel="noopener noreferrer" title="Communes Touristiques - ouvre une nouvelle fenêtre">Communes Touristiques</a>', "COMMUNESTOURISTIQUES", "WMS-Vecteur", "cartovecto", "FXX - 2026-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/ANETT_COMMUNE-TOURISTIQUE-ET-STATION-CLASSEE" target="_blank" rel="noopener noreferrer" title="Stations Classées - ouvre une nouvelle fenêtre">Stations Classées</a>', "LABELS.TOURISTIQUES:stations_classees", "WFS", "cartovecto", "FXX - 2026-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/ANETT_COMMUNE-TOURISTIQUE-ET-STATION-CLASSEE" target="_blank" rel="noopener noreferrer" title="Stations Classées - ouvre une nouvelle fenêtre">Stations Classées</a>', "STATIONSCLASSEES", "WMS-Vecteur", "cartovecto", "FXX - 2026-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/FSV_STATIONS-VERTES" target="_blank" rel="noopener noreferrer" title="Stations Vertes - ouvre une nouvelle fenêtre">Stations Vertes</a>', "LABELS.TOURISTIQUES:stations_vertes", "WFS", "cartovecto", "FXX - 2026-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/FSV_STATIONS-VERTES" target="_blank" rel="noopener noreferrer" title="Stations Vertes - ouvre une nouvelle fenêtre">Stations Vertes</a>', "STATIONSVERTES", "WMS-Vecteur", "cartovecto", "FXX - 2026-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/FFVE_VILLAGES-ETAPES" target="_blank" rel="noopener noreferrer" title="Villages Etapes - ouvre une nouvelle fenêtre">Villages Etapes</a>', "LABELS.TOURISTIQUES:villages_etape", "WFS", "cartovecto", "FXX - 2026-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/FFVE_VILLAGES-ETAPES" target="_blank" rel="noopener noreferrer" title="Villages Etapes - ouvre une nouvelle fenêtre">Villages Etapes</a>', "VILLAGESETAPE", "WMS-Vecteur", "cartovecto", "FXX - 2026-09"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/CEREMA_MESURES-COMPENSATOIRES" target="_blank" rel="noopener noreferrer" title="Mesures compensatoires des atteintes à la biodiversité - ouvre une nouvelle fenêtre">Mesures compensatoires des atteintes à la biodiversité</a>', "MESURES_COMPENSATOIRES", "WFS et WMS-Vecteur", "environnement", "FXX + DROM - 2026-07"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE ARTIFICIALISATION - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "OCSGE.ARTIF.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D040, D048, D088"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Construction</a>', "OCSGE.CONSTRUCTION.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D040, D048, D088"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Couverture</a>', "OCSGE.COUVERTURE.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D040, D048, D088"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Usage</a>', "OCSGE.USAGE.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D040, D048, D088"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO - ouvre une nouvelle fenêtre">Photographies aériennes</a>', "ORTHOIMAGERY.ORTHOPHOTOS", "WMS-Raster et WMTS", "ortho", "D008, D012, D015, D051, D054, D057, D074, D974 - Édition 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO - ouvre une nouvelle fenêtre">BD ORTHO® 20 cm</a>', "HR.ORTHOIMAGERY.ORTHOPHOTOS", "WMS-Raster et WMTS", "ortho", "D008, D012, D015, D051, D054, D057, D074, D974 - Édition 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO - ouvre une nouvelle fenêtre">BD ORTHO® 50 cm</a>', "ORTHOIMAGERY.ORTHOPHOTOS.BDORTHO", "WMS-Raster et WMTS", "ortho", "D008, D012, D015, D051, D054, D057, D074, D974 - Édition 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO - ouvre une nouvelle fenêtre">Graphe de mosaïquage BD ORTHO®</a>', "ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE", "WFS et WMS-Vecteur", "ortho", "D008, D012, D015, D051, D054, D057, D074, D974 - Édition 2025"],                              
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express IRC 2026</a>', "ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2026", "WMS-Raster et WMTS", "ortho", "D016, D083, zone sur le Centre-Val de Loire et la Nouvelle-Aquitaine - 2026"],                        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express RVB 2026</a>', "ORTHOIMAGERY.ORTHOPHOTOS.RVB-EXPRESS.2026", "WMS-Raster et WMTS", "ortho", "D016, D083, zone sur le Centre-Val de Loire et la Nouvelle-Aquitaine - 2026"],               
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-SAT" target="_blank" rel="noopener noreferrer" title="PLEIADES 2026 - ouvre une nouvelle fenêtre">Pléiades 2026</a>', "ORTHOIMAGERY.ORTHO-SAT.PLEIADES.2026", "WMS-Raster et WMTS", "satellite", "Zones sur Annemasse, Bassin Arcachon, Canal Seine Nord Europe, Cluses, Dammartin-Villeparisis, La Réunion, La Roche-sur-Yon, Littoral Bretagne Nord, Mayotte, Pays Basque, Pays de Brest, PNR Brière, PO-Forêt de Trévillac, Pointe Trévignon-Doléan, TAAF-Kerguelen-Port-aux-Français, Thonon, Toulouse, Var-Montfort-sur-Argens"]             
    ]
}) }}
<br/>

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS-Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-mises-a-jour/01-2026-09-mises-a-jour.png", "Ortho Express RVB 2026 - Jarnac (16)" %}

---

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® RVB - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', "D013, D014", "2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title=" GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre">Fiches Géodésiques</a>', "FXX + DROM", "2026-08-24"],         
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MASQUE-FORET-DROM" target="_blank" rel="noopener noreferrer" title="Masques Forêt DROM - ouvre une nouvelle fenêtre">Masque cartographies des formations végétales</a>', "D971", "2010 et 2024"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_NATURE-EN-VILLE" target="_blank" rel="noopener noreferrer" title="NATURE EN VILLE - ouvre une nouvelle fenêtre">NATURE EN VILLE</a>', "France  Métropolitaine", "2017 à 2023"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D010, D037, D048, D054, D088", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D011, D040", "2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D088", "Correctif 2023"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D010, D054", "Correctif 2022"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D011, D037, D040, D048", "Correctif 2021"],               
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D088", "Différentiel entre 2023 et 2025"], 
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D010, D054", "Différentiel entre 2022 et 2025"],                
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D037, D048", "Différentiel entre 2021 et 2025"],             
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D011, D040", "Différentiel entre 2021 et 2024"],    
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D010, D037, D048, D054, D088", "2025"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D011, D040", "2024"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D088", "Différentiel entre 2023 et 2025"],         
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D010, D054", "Différentiel entre 2022 et 2025"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D037, D048", "Différentiel entre 2021 et 2025"],     
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D011, D040", "Différentiel entre 2021 et 2024"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS CORREL - ouvre une nouvelle fenêtre">Modèles Numériques de Surfaces correlés</a>', "D016, D018, D028, D036, D037, D045, D083", "2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS CORREL - ouvre une nouvelle fenêtre">Modèles Numériques de Surfaces correlés</a>', "D976", "2023"]    
        ]
}) }}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-mises-a-jour/02-2026-09-mises-a-jour.png", "BD ORTHO® RVB et ADMIN EXPRESS - Cassis (13)" %}6