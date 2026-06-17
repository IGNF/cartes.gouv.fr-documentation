---
title: Mises à jour Mai 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de mai 2026
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour Mai 2026
    order: -20260502
date: 2026-05-02
---

{% from "components/component.njk" import component with context %}

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-01-maj.png){.fr-responsive-img .frx-img-contained}

<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Actualité mise à jour le 29 mai 2026</figcaption>

#### Services web

:::callout
Dans ce **[document](https://data.geopf.fr/annexes/ressources/capabilities/services.csv)** au format CSV mis à jour chaque vendredi, vous retrouvez toutes les ressources mises en avant par l’Institut national de l’information géographique et forestière.
:::

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/explorer-les-cartes?c=2.667047,47.736816&z=7&l=ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;1),POI.SPORT.RIDING$GEOPORTAIL:OGC:WMS(2;1;1;0),POI.SPORT.CENTRE$GEOPORTAIL:OGC:WMS(3;1;1;0),POI.SPORT.GOLF$GEOPORTAIL:OGC:WMS(4;1;1;0),POI.SPORT.ICE_RINK$GEOPORTAIL:OGC:WMS(5;1;1;0),POI.SPORT.WATER$GEOPORTAIL:OGC:WMS(6;1;1;0),POI.SPORT.STADIUM$GEOPORTAIL:OGC:WMS(7;1;1;0),POI.SPORT.VELODROME$GEOPORTAIL:OGC:WMS(8;1;1;0)&w=MousePosition,MeasureLength&permalink=yes" target="_blank" rel="noopener noreferrer" title="POI SPORT - ouvre une nouvelle fenêtre">Équipements sportifs (7 thématiques)</a>', "POI.SPORT.XXX", "WMS-Vecteur", "cartovecto", "FXX + DROM"]
    ]
}) }}

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BCAE" target="_blank" rel="noopener noreferrer" title="BCAE 4 - ouvre une nouvelle fenêtre">Bandes tampons des cours d’eau BCAE 4</a>', "HYDROGRAPHY.BCAE.2026", "WMS-Raster et WMTS", "agriculture", "Correctif D086 - Édition 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BCAE" target="_blank" rel="noopener noreferrer" title="BCAE 4 - ouvre une nouvelle fenêtre">Bandes tampons des cours d’eau BCAE 4</a>', "HYDROGRAPHY.BCAE.LATEST", "WMS-Raster et WMTS", "agriculture", "Correctif D086 - Dernière édition"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2", "TMS, WMS-Raster et WMTS", "cartes", "FXX + DROM - Édition mai 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="Photographies aériennes - ouvre une nouvelle fenêtre">Photographies aériennes RVB</a>', "ORTHOIMAGERY.ORTHOPHOTOS", "WMS-Raster et WMTS", "ortho", "D027, D031, D076, D085 - Édition 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® 20 cm - ouvre une nouvelle fenêtre">BD ORTHO® 20 cm RVB</a>', "HR.ORTHOIMAGERY.ORTHOPHOTOS", "WMS-Raster et WMTS", "ortho", "D027, D031, D076, D085 - Édition 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® 50 cm - ouvre une nouvelle fenêtre">BD ORTHO® 50 cm RVB</a>', "ORTHOIMAGERY.ORTHOPHOTOS.BDORTHO", "WMS-Raster et WMTS", "ortho", "D027, D031, D076, D085 - Édition 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® IRC - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "ORTHOIMAGERY.ORTHOPHOTOS.IRC", "WMS-Raster et WMTS", "ortho", "D027, D031, D076, D085 - Édition 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="Graphe de mosaïquage BD ORTHO® - ouvre une nouvelle fenêtre">Graphe de mosaïquage BD ORTHO®</a>', "ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE-MOSAIQUAGE", "WFS et WMS-Vecteur", "ortho", "D027, D031, D076, D085 - Édition 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO-HISTO" target="_blank" rel="noopener noreferrer" title="Photographies aériennes 1965-1980 - ouvre une nouvelle fenêtre">Photographies aériennes 1965-1980</a>', " ORTHOIMAGERY.ORTHOPHOTOS.1965-1980 ", "WMS-Raster et WMTS", "orthohisto", "D054 - Édition 1967"],        
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-SAT" target="_blank" rel="noopener noreferrer" title="PLEIADES 2026 - ouvre une nouvelle fenêtre">PLEIADES 2026</a>', "ORTHOIMAGERY.ORTHO-SAT.PLEIADES.2026", "WMS-Raster et WMTS", "satellite", "Littoral Atlantique, Littoral Hauts-de-France, Canal Rhin-Rhône, Strasbourg - Édition 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_COSIA" target="_blank" rel="noopener noreferrer" title="CoSIA - ouvre une nouvelle fenêtre">Couverture du Sol par IA 2024-2025</a>', "IGNF_COSIA_2024-2026", "WMS-Raster et WMTS", "sol", "D031, D051, D054, D057, D076, D085, D088 - Édition 2025"]
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS-Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "FXX + DROM", "2026-05"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS COG - ouvre une nouvelle fenêtre">ADMIN EXPRESS COG</a>', "FXX + DROM (formats FlatGeobuf et GeoParquet)", "2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS" target="_blank" rel="noopener noreferrer" title="BAN PLUS® - ouvre une nouvelle fenêtre">BAN PLUS</a>', "FXX + DROM", "2026-03"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® EXPRESS</a>', "FXX + DROM", "hebdomadaire"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO®</a>', "FXX + DROM (formats FlatGeobuf et GeoParquet)", "2026-03"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI) - ouvre une nouvelle fenêtre">Parcellaire Express (PCI)</a>', "FXX + DROM", "2026-03"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">MNS Correl</a>', "D010, D051, D054, D055, D057, D088", "2025"]
    ]
}) }}