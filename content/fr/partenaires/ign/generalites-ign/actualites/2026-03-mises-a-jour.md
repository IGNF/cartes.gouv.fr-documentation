---
title: Mises à jour mars 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de mars 2026
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour mars 2026
    order: 1
date: 2026-03-02
---

{% from "components/component.njk" import component with context %}

#### Services web

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">ORTHO-ASP_PAC2026</a>', "ORTHOIMAGERY.ORTHOPHOTOS.ORTHO-ASP_PAC2026", "WMS-Raster et WMTS", "ortho", "34 départements"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-SAT" target="_blank" rel="noopener noreferrer" title="ORTHO SAT - ouvre une nouvelle fenêtre">SPOT 2025</a>', "ORTHOIMAGERY.ORTHO-SAT.SPOT.2025", "WMS-Raster et WMTS", "satellite", "FXX"]
    ]
}) }}

L’édition 2025 de la couche ortho pour la déclaration de la PAC 2025 bascule sur la thématique « orthohisto ».

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO-HISTO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® Historique - ouvre une nouvelle fenêtre">Photographies aériennes 1965-1980</a>', "ORTHOIMAGERY.ORTHOPHOTOS.1965-1980", "WMS-Raster et WMTS", "orthohisto", "D001 (1968), D023 (1971), D039 (1975), D087 (1969)"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-SAT" target="_blank" rel="noopener noreferrer" title="ORTHO SAT - ouvre une nouvelle fenêtre">Pléiades 2025</a>', "ORTHOIMAGERY.ORTHO-SAT.PLEIADES.2025", "WMS-Raster et WMTS", "satellite", "Zones sur Annecy, Clermont-Ferrand, Lyon, Grenoble, St-Étienne, Montpellier, Pays basque et Strasbourg"]
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS-Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="Plan IGN - ouvre une nouvelle fenêtre">Plan IGN</a>', "FXX (niveaux de zoom 8-19)", "2025-12"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "D972", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', "D972", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® EXPRESS</a>', "FXX + DROM", "hebdomadaire"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre">Fiches géodésiques</a>', "FXX + DROM", "2026-03"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D032", "2022"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D006, D035, D069, D083", "2023"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D032", "différentiel 2019-2022"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D006, D035, D069, D083", "différentiel 2020-2023"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">Données d’artificialisation issues de l’OCS GE</a>', "D032", "2022"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">Données d’artificialisation issues de l’OCS GE</a>', "D006, D035, D069, D083", "2023"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">Données d’artificialisation issues de l’OCS GE</a>', "D032", "différentiel 2019-2022"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">Données d’artificialisation issues de l’OCS GE</a>', "D006, D035, D069, D083", "différentiel 2020-2023"]
    ]
}) }}