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

À venir

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">Estompage MNS Correl</a>', "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS.SHADOW", "WMS-Raster et WMTS", "altimétrie", "D977 - 2024 et D013, D070 et zone sur le Centre-Val de Loire - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="MNS Correl - ouvre une nouvelle fenêtre">MNS Correl</a>', "ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS", "WMTS", "altimétrie", "D977 - 2024 et D013, D070 et zone sur le Centre-Val de Loire - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "PLAN.IGN", "TMS", "cartes", "FXX + DROM - Édition juin 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2", "WMS-Raster et WMTS", "cartes", "FXX + DROM - Édition juin 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO Différentiel - ouvre une nouvelle fenêtre">BD TOPO® Différentiel</a>', "BDTOPO_V3_DIFF:XXX", "WFS", "topographie", "FXX + DROM - Édition mars et juin 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO Différentiel - ouvre une nouvelle fenêtre">BD TOPO® Différentiel</a>', "BDTOPO-DIFF-XXX", "WMS-Raster et WMTS", "topographie", "FXX + DROM - Édition mars et juin 2026"]
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS-Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-07-mises-a-jour/01-2026-07-mises-a-jour.png", "PLAN IGN - Langres (52)" %}

---

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® IRC- ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "D008, D052, D054, D055, D057, D088", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "FXX + DROM", "2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® EXPRESS</a>', "FXX + DROM", "hebdomadaire"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® </a>', "France entière (FlatGeobuf, GeoParquet, GPKG + SQL), par territoires (GPKG + SQL), par régions (GPKG + SHP), par départements (SHP) + thème transport", "2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® Différentiel- ouvre une nouvelle fenêtre">BD TOPO® Différentiel</a>', "France entière (GPKG + SQL), par territoires (GPKG + SQL), par régions (GPKG + SHP)", "2026-03 et 2026-06"]
    ]
}) }}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-07-mises-a-jour/02-2026-07-mises-a-jour.png", "BD ORTHO® IRC - Nancy (54)" %}