---
title: Mises à jour janvier 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de janvier 2026
tags:
    - Mises à jour
date: 2026-01-05
---

{% from "components/component.njk" import component with context %}

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-01-maj.png){.fr-responsive-img .frx-img-contained}

#### Services web

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ["Bandes tampons des cours d’eau BCAE 4 2026", "HYDROGRAPHY.BCAE.2026", "WMS-Raster et WMTS", "agriculture", "2026"],
        ["Photographies aériennes 2021-2023", "ORTHOIMAGERY.ORTHOPHOTOS2021-2023", "WMS-Raster et WMTS", "orthohisto", "2021-2023"],
        ["Couverture du Sol par IA 2024-2025", "IGNF_COSIA_2024-2026*", "WMS-Raster et WMTS", "sol", "2025 (7 départements)"],
        ["Différentiel BDTOPO®", "BDTOPO-DIFF-XXX (4 flux par service)", "WMS-Raster et WMTS", "topographie", "Entre édition 253 et 254"]
    ]
}) }}

<figcaption class="fr-content-media__caption fr-mb-6v">* Cette couche remplace la couche IGNF_COSIA_2024</figcaption>

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ["ADMIN EXPRESS mises à jour en continu", "ADMIN_EXPRESS", "TMS", "administratif", "FXX + DROM - 2026-01"],
        ["ADMIN EXPRESS mises à jour en continu", "LIMITES_ADMINISTRATIVES_EXPRESS.LATEST", "WFS, WMS-Raster et WMTS", "administratif", "FXX + DROM - 2026-01"],
        ["BAN PLUS", "BAN-PLUS:XXX (5 flux)", "WFS", "adresse", "FXX + DROM - 2025-12"],
        ["Bandes tampons des cours d’eau BCAE 4 2026", "HYDROGRAPHY.BCAE.LATEST", "WFS et WMTS", "agriculture", "2026"],
        ["PLAN IGN", "PLAN.IGN", "TMS (tuiles vectorielles)", "cartes", "FXX + DROM (niveaux de zoom 14-19) - 2026-01"],
        ["PLAN IGN", "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2", "WMS-Raster et WMTS", "cartes", "FXX + DROM (niveaux de zoom 14-19) - 2026-01"],
        ["BD CARTO®", "BDCARTO_V5:XXX - 36 thématiques", "WFS", "cartovecto", "2025-09"],
        ["BD CARTO®", "BDCARTO-XXX - 8 thématiques", "WMS-Vecteur", "cartovecto", "2025-09"],
        ["Mesures compensatoires des atteintes à la biodiversité", "MESURES_COMPENSATOIRES", "WFS et WMS-Vecteur", "environnement", "FXX + DROM - 2026-01"],
        ["Photographies aériennes 1965-1980", "ORTHOIMAGERY.ORTHOPHOTOS.1965-1980", "WMS-Raster et WMTS", "orthohisto", "D015 (1980), D019 (1972), D024 (1974), D042 (1977)"],
        ["BD TOPO®", "BDTOPO_V3:XXX - 54 thématiques", "WFS", "topographie", "2025-12"],
        ["BD TOPO®", "11 thématiques", "WMS-Vecteur", "topographie", "2025-12"],
        ["BD TOPO®", "7 thématiques", "WMTS", "topographie", "2025-12"],
        ["Différentiel BD TOPO®", "BDTOPO_V3_DIFF:XXX (50 flux)", "WFS", "topographie", "Entre édition 253 et 254"],
        ["Différentiel BD TOPO®", "BDTOPO-DIFF-XXX (4 flux)", "WMS-Vecteur", "topographie", "Entre édition 253 et 254"]
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "D003, D005, D009, D010", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', "D003, D005, D009, D010, D063", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN-EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "FXX + DROM", "2026-01"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS" target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre">BAN PLUS</a>', "FXX + DROM", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® GPKG par départements</a>', "FXX + DROM", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BCAE" target="_blank" rel="noopener noreferrer" title="BCAE - ouvre une nouvelle fenêtre">BCAE 4</a>', "FXX", "2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_COSIA" target="_blank" rel="noopener noreferrer" title="CoSIA - ouvre une nouvelle fenêtre">CoSIA</a>', "D032, D042, D044, D046, D049, D059, D082", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre">Fiches géodésiques</a>', "FXX + DROM", "2026-01"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/INRAE_GRAIN-BOCAGER" target="_blank" rel="noopener noreferrer" title="Grain Bocager - ouvre une nouvelle fenêtre">Grain Bocager</a>', "France métropolitaine", "2021-2023"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI" target="_blank" rel="noopener noreferrer" title="Parcellaire Express (PCI) - ouvre une nouvelle fenêtre">Parcellaire Express (PCI)</a>', "FXX + DROM", "2025-12"]
    ]
}) }}