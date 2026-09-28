---
title: Mises à jour Août 2026
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois d’août 2026.
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour Août 2026
    order: -20260801
date: 2026-08-03
---

{% from "components/component.njk" import component with context %}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-08-mises-a-jour/00-2026-08-mises-a-jour.png", "Actualité Mise à jour le 6 août 2026" %}

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
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "ADMIN_EXPRESS", "TMS", "administratif", "FXX + DROM - 2026-07"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "LIMITES_ADMINISTRATIVES_EXPRESS.LATEST", "WFS, WMS-Raster et WMTS", "administratif", "FXX + DROM - 2026-07"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "PLAN.IGN", "TMS", "cartes", "FXX + DROM - Édition juillet 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PLAN-IGN" target="_blank" rel="noopener noreferrer" title="PLAN IGN - ouvre une nouvelle fenêtre">PLAN IGN</a>', "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2", "WMS-Raster et WMTS", "cartes", "FXX + DROM - Édition juillet 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE ARTIFICIALISATION - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "OCSGE.ARTIF.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D02A, D02B, D022, D024, D029, D091, D971"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Construction</a>', "OCSGE.CONSTRUCTION.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D02A, D02B, D022, D024, D029, D091, D971"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Couverture</a>', "OCSGE.COUVERTURE.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D02A, D02B, D022, D024, D029, D091, D971"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE Usage</a>', "OCSGE.USAGE.2024-2026", "WMS-Raster et WMTS", "ocsge-ng", "D02A, D02B, D022, D024, D029, D091, D971"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_COSIA" target="_blank" rel="noopener noreferrer" title="CoSIA - ouvre une nouvelle fenêtre">CoSIA</a>', "IGNF_COSIA_2024-2026", "WMS-Raster et WMTS", "sol", "D008, D012, D015, D052, D055, D074 - 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express IRC 2025</a>', "ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2025", "WMS-Raster et WMTS", "ortho", "zone sur le Centre-Val de Loire - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express RVB 2025</a>', "ORTHOIMAGERY.ORTHOPHOTOS.ORTHO-EXPRESS.2025", "WMS-Raster et WMTS", "ortho", "zone sur le Centre-Val de Loire - 2026"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express IRC 2025</a>', "ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2025", "WMS-Raster et WMTS", "ortho", "D063 - 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ORTHO-EXPRESS" target="_blank" rel="noopener noreferrer" title="ORTHO Express - ouvre une nouvelle fenêtre">ORTHO Express RVB 2025</a>', "ORTHOIMAGERY.ORTHOPHOTOS.ORTHO-EXPRESS.2025", "WMS-Raster et WMTS", "ortho", "D063 - 2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO-HISTO" target="_blank" rel="noopener noreferrer" title="BD-ORTHO-HISTO - ouvre une nouvelle fenêtre">Photographies aériennes 1965-1980</a>', "ORTHOIMAGERY.ORTHOPHOTOS.1965-1980", "WMS-Raster et WMTS", "orthohisto", "D059 (1975), D062 (1974), D068 (1973), D090 (1973)"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO-HISTO" target="_blank" rel="noopener noreferrer" title="BD-ORTHO-HISTO - ouvre une nouvelle fenêtre">Photographies aériennes 1965-1980</a>', "ORTHOIMAGERY.ORTHOPHOTOS.GRAPHE.1965-1980", "WFS et WMS-Vecteur", "orthohisto", "D059 (1975), D062 (1974), D068 (1973), D090 (1973)"]
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS-Raster et WMTS) et BD Géodésie ([IGNF_GEODESIE-XXX services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT){target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre"}) sont mises à jour quotidiennement et la ressource Base Adresse Nationale ([BAN.DATA.GOUV services WFS et WMS-Vecteur](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS){target="_blank" rel="noopener noreferrer" title="BAN PLUS - ouvre une nouvelle fenêtre"}) est actualisée hebdomadairement.

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-08-mises-a-jour/01-2026-08-mises-a-jour.png", "CoSIA et MNS issu du LiDAR HD - Les Contamines-Montjoie (74)" %}

---

#### Téléchargement

##### Liste des mises à jour de données en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® IRC - ouvre une nouvelle fenêtre">BD ORTHO® IRC</a>', "D012, D015, D074, D974", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="BD ORTHO® RVB - ouvre une nouvelle fenêtre">BD ORTHO® RVB</a>', "D012, D074, D974", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', "FXX + DROM", "2026-07"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BAN-PLUS" target="_blank" rel="noopener noreferrer" title="BAN-PLUS - ouvre une nouvelle fenêtre">BAN-PLUS</a>', "FXX + DROM", "2026-06"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_COSIA" target="_blank" rel="noopener noreferrer" title="CoSIA - ouvre une nouvelle fenêtre">CoSIA</a>', "D008, D012, D015, D052, D055, D074", "2025"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_GEODESIE-ET-NIVELLEMENT" target="_blank" rel="noopener noreferrer" title="GEODESIE ET NIVELLEMENT - ouvre une nouvelle fenêtre">Fiches Géodésiques</a>', "FXX + DROM", "2026-08"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D02B, D024, D971", "2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D971", "Correctif 2022"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D02B, D024", "Correctif 2021"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D971", "Différentiel entre 2022 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', "D02B, D024", "Différentiel entre 2021 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D02B, D024, D971", "2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D02B, D024", "Différentiel entre 2021 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation - ouvre une nouvelle fenêtre">OCS GE Artificialisation</a>', "D971", "Différentiel entre 2022 et 2024"],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="OCS GE Artificialisation avec exemptions - ouvre une nouvelle fenêtre">OCS GE Artificialisation avec exemptions</a>', "301 jeux de données", "Entre 2016 et 2023"]
    ]
}) }}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-08-mises-a-jour/02-2026-08-mises-a-jour.png", "Ortho Express et MNS issu du LiDAR HD - Puy de Pariou (63)" %}