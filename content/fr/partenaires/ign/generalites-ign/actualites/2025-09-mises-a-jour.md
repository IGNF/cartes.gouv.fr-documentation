---
title: Mises à jour septembre 2025
description: Toutes les nouvelles données IGN disponibles en services web et en téléchargement au mois de septembre 2025
tags:
    - Mises à jour
eleventyNavigation:
    key: Mises à jour septembre 2025
    order: 18
date: 2025-09-02
---

{% from "components/component.njk" import component with context %}

#### Services web

##### Ajout de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['Forêts anciennes', 'IGNF_FORETS-ANCIENNES', 'WMTS, WMS Raster', 'environnement', ''],
        ['Forêts subnaturelles', 'ZONES-A-PROSPECTER-FORETS-SUBNATURELLES', 'WMTS, WMS Raster', 'environnement', ''],
        ['SCAN Régional®', 'IGNF_CARTES_SCAN-REGIONAL', 'WMTS, WMS Raster', 'cartes', ''],
        ['SCAN 1000®', 'IGNF_CARTES_SCAN-1000', 'WMTS, WMS Raster', 'cartes', ''],
        ['Installations photovoltaïques au sol 2017-2020', 'GNF_PHOTOVOLTAIQUE-SOL_2017-2020', 'WMTS, WMS Raster', 'ocsge', ''],
        ['Installations photovoltaïques au sol 2021-2023', 'IGNF_PHOTOVOLTAIQUE-SOL_2021-2023', 'WMTS, WMS Raster', 'ocsge', ''],
        ['Différentiel BDTOPO®', 'BDTOPO_V3_DIFF', 'WFS, WMS Vecteur', 'topographie', 'Entre édition 252 et 253']
    ]
}) }}

##### Ajout de flux non libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['SCAN 100®', 'IGNF_CARTES_SCAN-100', 'WMTS, WMS Raster', 'cartes', '']
    ]
}) }}

##### Liste des mises à jour de flux en accès libre

{{ component("table", {
    headers: ["Donnée", "Nom technique", "Service", "Thématique", "Édition ou emprise"],
    data: [
        ['Ortho Express RVB 2025', 'ORTHOIMAGERY.ORTHOPHOTOS.ORTHO-EXPRESS.2025', 'WMS Raster et WMTS', 'ortho', 'D031, D043, D054, D057, D085, D88'],
        ['Ortho Express IRC 2025', 'ORTHOIMAGERY.ORTHOPHOTOS.IRC-EXPRESS.2025', 'WMS Raster et WMTS', 'ortho', 'D031, D043, D054, D057, D085, D88'],
        ['MNH issu de LiDAR HD', 'IGNF_LIDAR-HD_MNH_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW', 'WMS Raster et WMTS', 'altimetrie', 'FF(Ernée), FN(Bordeaux), FP(Mont-de-Marsan), IF(Chartres), JA(Bouloge-sur-Mer),KB (Arras), LL(Clermont-Ferrand), ON(Valence/Montélimar)'],
        ['MNS issu de LiDAR HD', 'IGNF_LIDAR-HD_MNS_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW', 'WMS Raster et WMTS', 'altimetrie', 'FF(Ernée), FN(Bordeaux), FP(Mont-de-Marsan), IF(Chartres), JA(Bouloge-sur-Mer),KB (Arras), LL(Clermont-Ferrand), ON(Valence/Montélimar)'],
        ['MNT issu de LiDAR HD', 'IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW', 'WMS Raster et WMTS', 'altimetrie', 'FF(Ernée), FN(Bordeaux), FP(Mont-de-Marsan), IF(Chartres), JA(Bouloge-sur-Mer),KB (Arras), LL(Clermont-Ferrand), ON(Valence/Montélimar)'],
        ['Blocs MNH issus du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnh-bloc', 'WFS', 'altimetrie', 'FF(Ernée), FN(Bordeaux), FP(Mont-de-Marsan), IF(Chartres), JA(Bouloge-sur-Mer),KB (Arras), LL(Clermont-Ferrand), ON(Valence/Montélimar)'],
        ['Dalles MNH issues du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnh-dalle', 'WFS', 'altimetrie', 'FF(Ernée), FN(Bordeaux), FP(Mont-de-Marsan), IF(Chartres), JA(Bouloge-sur-Mer),KB (Arras), LL(Clermont-Ferrand), ON(Valence/Montélimar)'],
        ['Blocs MNS issus du LiDAR HD', 'IGNF_LIDAR-HD_TA:mns-bloc', 'WFS', 'altimetrie', 'FF(Ernée), FN(Bordeaux), FP(Mont-de-Marsan), IF(Chartres), JA(Bouloge-sur-Mer),KB (Arras), LL(Clermont-Ferrand), ON(Valence/Montélimar)'],
        ['Dalles MNS issues du LiDAR HD', 'IGNF_LIDAR-HD_TA:mns-bloc', 'WFS', 'altimetrie', 'FF(Ernée), FN(Bordeaux), FP(Mont-de-Marsan), IF(Chartres), JA(Bouloge-sur-Mer),KB (Arras), LL(Clermont-Ferrand), ON(Valence/Montélimar)'],
        ['Blocs MNT issus du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnt-bloc', 'WFS', 'altimetrie', 'FF(Ernée), FN(Bordeaux), FP(Mont-de-Marsan), IF(Chartres), JA(Bouloge-sur-Mer),KB (Arras), LL(Clermont-Ferrand), ON(Valence/Montélimar)'],
        ['Dalles MNT issues du LiDAR HD', 'IGNF_LIDAR-HD_TA:mnt-bloc', 'WFS', 'altimetrie', 'FF(Ernée), FN(Bordeaux), FP(Mont-de-Marsan), IF(Chartres), JA(Bouloge-sur-Mer),KB (Arras), LL(Clermont-Ferrand), ON(Valence/Montélimar)'],
        ['Pleiades 2023', 'ORTHOIMAGERY.ORTHO-SAT.PLEIADES.2023', 'WMS Raster et WMTS', 'satellite', 'D971, D972, D977, D978 et D973'],
        ['Modèles numériques de surfaces correlés', 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS', 'WMS Raster', 'altimetrie', 'D009, D031, D043, D063, D085 - 2025'],
        ['Estompage MNS correlés', 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES.MNS.SHADOW', 'WMS Raster', 'altimetrie', 'D009, D031, D043, D063, D085 - 2025'],
        ['OCS GE 2017-2020 - artificialisation', 'OCSGE.ARTIF.2017-2020', 'WMTS, WMS Raster', 'ocsge', 'Correctif D022,Correctif D033, D074'],
        ['OCS GE 2021-2023 - artificialisation', 'OCSGE.ARTIF.2021-2023', 'WMTS, WMS Raster', 'ocsge', 'Correctif D022,Correctif D033, D074'],
        ['OCSGE Constructions 2017-2020', 'OCSGE.CONSTRUCTION.2017-2020', 'WMS Raster et WMTS', 'ocsge', 'Correctif D022,Correctif D033, D074'],
        ['OCSGE Constructions 2021-2023', 'OCSGE.CONSTRUCTION.2021-2023', 'WMS Raster et WMTS', 'ocsge', 'Correctif D022,Correctif D033, D074'],
        ['OCSGE Couverture 2017-2020', 'OCSGE.COUVERTURE.2017-2020', 'WMS Raster et WMTS', 'ocsge', 'Correctif D022,Correctif D033, D074'],
        ['OCSGE Couverture 2021-2023', 'OCSGE.COUVERTURE.2021-2023', 'WMS Raster et WMTS', 'ocsge', 'Correctif D022,Correctif D033, D074'],
        ['OCSGE Usage 2017-2020', 'OCSGE.USAGE.2017-2020', 'WMS Raster et WMTS', 'ocsge', 'Correctif D022,Correctif D033, D074'],
        ['OCSGE Usage 2021-2023', 'OCSGE.USAGE.2021-2023', 'WMS Raster et WMTS', 'ocsge', 'Correctif D022,Correctif D033, D074'],
        ['SCAN Regional®', 'SCANREG_PYR-JPEG_WLD_WM', 'WMS Raster', 'cartes', 'France entière'],
        ['ADMIN EXPRESS mises a jour en continu', 'LIMITES_ADMINISTRATIVES_EXPRESS.LATEST', 'WFS, WMS Raster et WMTS', 'administratif', 'FXX+DOM'],
        ['Réseau de transports exceptionnels', 'SECUROUTE.TE', 'WFS, WMTS', 'transports', 'FXX']
    ]
}) }}

Les ressources PLAN IGN J+1 (GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1 services WMS Raster et WMTS) et BD Géodésie (IGNF_GEODESIE-XXX services WFS et WMS Vecteur) sont mises à jour quotidiennement et la ressource Base Adresse Nationale (BAN.DATA.GOUV services WFS et WMS Vecteur) est actualisée hebdomadairement.

**Le 15 septembre 2025, les données d'ORTHO Express et ORTHO Express IRC antérieur à 2024 seront dépubliées. Vous pouvez dès à présent accéder aux photographies aériennes millésimées depuis les Services web experts - Orthohisto**

![IGN-F - BD Uni J+1 et MNS issu du LiDAR HD - Gap (05)](/img/partenaires/ign/generalites/actualites/2025-09-bdunij1-gap.png){fr-responsive-img .frx-border-img .frx-img-contained}

#### Téléchargement

##### Liste des mises à jour de donnée en téléchargement

{{ component("table", {
    headers: ["Donnée", "Zone", "Édition"],
    data: [
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_ADMIN-EXPRESS" target="_blank" rel="noopener noreferrer" title="ADMIN EXPRESS - ouvre une nouvelle fenêtre">ADMIN EXPRESS</a>', 'FXX+DOM', '2025-09'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO EXPRESS®</a>', 'France métropolitaine et DOM', 'Mise à jour hebdomadaire'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TOPO" target="_blank" rel="noopener noreferrer" title="BD TOPO® - ouvre une nouvelle fenêtre">BD TOPO® Différentiel éditions 251-252</a>', 'FXX + DOM', '2025-03 et 2025-06'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_COSIA" target="_blank" rel="noopener noreferrer" title="CoSIA - ouvre une nouvelle fenêtre">CoSIA</a>', 'D075, D077, D078, D091, D092, D093, D094', '2024'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', 'D074', '2023'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', 'D074', '2020'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a>', 'D074', 'Différentiel 2020-2023'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="Artificialisation OCS GE - ouvre une nouvelle fenêtre">Artificialisation OCS GE</a>', 'D074', '2023'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="Artificialisation OCS GE - ouvre une nouvelle fenêtre">Artificialisation OCS GE</a>', 'D074', '2020'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a> format GPKG', 'D011, D022, D029, D033, D037, D038, D047, D048, D068, D084', '2021'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a> format GPKG', 'D011, D022, D029, D033, D037, D038, D048, D068, D084', '2018'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a> format GPKG', 'D011, D022, D029, D033, D037, D038, D048, D068, D084', 'Différentiel 2018-2021'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a> format GPKG', 'D083', '2020'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a> format GPKG', 'D047, D083', '2017'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a> format GPKG', 'D083', 'Différentiel 2017-2020'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE" target="_blank" rel="noopener noreferrer" title="OCS GE - ouvre une nouvelle fenêtre">OCS GE</a> format GPKG', 'D047', 'Différentiel 2017-2021'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="Artificialisation OCS GE - ouvre une nouvelle fenêtre">Artificialisation OCS GE</a>', 'D022, D033, D068', '2021'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_OCS-GE-ARTIFICIALISATION" target="_blank" rel="noopener noreferrer" title="Artificialisation OCS GE - ouvre une nouvelle fenêtre">Artificialisation OCS GE</a>', 'D022, D033, D068', '2018'],
        ['Produits dérivés issus du LiDAR HD', 'LL(Clermont-Ferrand), IF(Chartres), ON(Valence/Montélimar), FN(Bordeaux), JA(Bouloge-sur-Mer), FF(Ernée), FP(Mont-de-Marsan)', ' '],
        ['<a href="https://cartes.gouv.fr/telechargement/IGNF_NUAGES-DE-POINTS-LIDAR-HD" target="_blank" rel="noopener noreferrer" title="Nuages de points LiDAR HD - ouvre une nouvelle fenêtre">Blocs LiDAR HD format COPC</a>', 'EM(Blaye),ER(Pic d’Orhy), FF(Fougères), GF(Sillé-le-Guillaume), QH (Baumes-les-Dames), QN (Gap), GM(La Roche-Chalais), HE(l’Aigle), HL(Nontron), HN(Bergerac), JB(Abbeville), JE(Versailles), KC(Amiens), KE(Paris), KI(Bourges), LC(Saint-Quentin), LJ(Moulins), ME(Sézanne), NN(PRIVAS), OK (Bourg-en-Bresse), PI(Arc-et-Senans), QK(Cluses), QQ(Brignoles), QP(Moustiers-Sainte-Marie), RH(Sochaux), RL(Tignes), RN (Guillestre), RM(Modane), RO(Barcelonnette), SE(Strasbourg), VT (Solenzara), VU (Bonifacio), GUA(Guadeloupe)'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-TRANSPORTS-EXCEPTIONNELS" target="_blank" rel="noopener noreferrer" title="Transports exceptionnels - ouvre une nouvelle fenêtre">Transports exceptionnels</a> format GPKG', 'FXX', '19-09-2025'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_BD-FORET" target="_blank" rel="noopener noreferrer" title="Masque Forêt - ouvre une nouvelle fenêtre">Masque Forêt</a> format GPKG', 'FXX + départements', '2021-2023'],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_PNA-ZONES-A-PROSPECTER" target="_blank" rel="noopener noreferrer" title="Zones à prospecter pour les forêts subnaturelles - ouvre une nouvelle fenêtre">Zones à prospecter pour les forêts subnaturelles</a> format GPKG', 'FXX', ' '],
        ['<a href="https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-CORREL" target="_blank" rel="noopener noreferrer" title="Modèles numériques de surfaces correlés - ouvre une nouvelle fenêtre">Modèles numériques de surfaces correlés</a>', 'D009, D031, D043', '2025]']
    ]
}) }}

![IGN-F - Admin Express et BD Ortho - Crocq (23)](/img/partenaires/ign/generalites/actualites/2025-09-admin-express-crocq.png){fr-responsive-img .frx-border-img .frx-img-contained}
