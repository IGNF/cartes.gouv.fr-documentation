---
title: Investigation produit autour de la détection de changement
description: L’IGN produit des jeux de données pour mieux identifier et comprendre les évolutions du territoire
tags:
    - Détection de changement
eleventyNavigation:
    key: Investigation produit autour de la détection de changement
    order: -20260126
date: 2026-01-26
---

L’IGN, dans le cadre de ses missions d’observateur du territoire en continu, produit et met à jour de nombreux jeux de données (images, données 3D, et bases de données) au bénéfice des politiques publiques nationales et de partenaires locaux et nationaux.

L’essor des sources de données disponibles (lidar, images aériennes, satellites), associé à l’amélioration des techniques de traitement automatique des données (appuyé par l’intelligence artificielle) font émerger de nouvelles opportunités autour de la Détection du Changement (DCHAN).

L’enjeu est de **mieux identifier et cartographier les changements sur le terrain entre deux dates et ainsi mettre en lumière les phénomènes naturels et anthropiques à l’origine de ces évolutions**.

En découle une feuille de route technologique ambitieuse pour les prochaines années : [Détection de changements : défis et objectifs pour 2025-2035 - Institut - IGN](https://www.ign.fr/institut/feuille-de-route-detection-de-changements-2025-2035){target="_blank" rel="noopener noreferrer" title="Détection de changements : défis et objectifs pour 2025-2035 - ouvre une nouvelle fenêtre"}

Dans ce contexte l’IGN lance une [investigation](https://analytics-eu.clickdimensions.com/ignfr-agj1s/pages/gq0lzefcebganotfjq.html?PageId=d3d0ff83f%E2%80%A6){target="_blank" rel="noopener noreferrer" title="Investigation autour de la détection du changement - ouvre une nouvelle fenêtre"} pour faire le point autour des besoins et attentes des acteurs publics et privés sur le territoire national en termes de jeux de données géographiques utiles autour de la détection de changement et ainsi apporter des éléments de compréhension et de décision aux politiques publiques.

Deux expérimentations sont en cours de prototypage pour appuyer l’investigation :
- Le calcul d’un différentiel de hauteur de MNS (Modèle Numérique de Surface) entre deux acquisitions aériennes pour mettre en lumière l’apparition/suppression de bâtiment, de zone de végétation…
- Le calcul d’un score d’évolutivité 2D du territoire, combinant plusieurs sources de données (images aériennes, COSIA, MNS…) pour identifier les zones qui évoluent le plus sur le territoire.

<br>

Exemple ci-dessous à Périgueux (Dordogne) avec le différentiel de MNS, sur une zone acquise en 2021 et 2024, où un bâtiment a été détruit :

<div class="fr-grid-row fr-grid-row--gutters">
<div class="fr-col-12 fr-col-md-6">

![Périgueux en 2021](/img/partenaires/ign/generalites/actualites/2026-01-perigueux.png){.fr-responsive-img .frx-img-contained}

</div>
<div class="fr-col-12 fr-col-md-6">

![Périgueux en 2024](/img/partenaires/ign/generalites/actualites/2026-01-perigueux2.png){.fr-responsive-img .frx-img-contained}

</div>
</div>

![Différence du MNS à Périgueux entre 2021 et 2024](/img/partenaires/ign/generalites/actualites/2026-01-perigueux3.png){.fr-responsive-img .frx-img-contained}

Avec chaque image aérienne on calcule un MNS (Modèle Numérique de Surface). Les deux MNS calculés sont alors superposés l’un à l’autre pour calculer la différence de hauteur entre les 2 acquisitions. En rouge les éléments de sursol « détruits » ou réduits (différence négative), en bleu, les éléments de sursol qui apparaissent (différence positive).

Autre exemple toujours en Dordogne entre 2021 et 2024 où une forêt a été partiellement rasée :

<div class="fr-grid-row fr-grid-row--gutters">
<div class="fr-col-12 fr-col-md-6">

![Forêt de Dordogne en 2021](/img/partenaires/ign/generalites/actualites/2026-01-foret-dordogne.png){.fr-responsive-img .frx-img-contained}

</div>
<div class="fr-col-12 fr-col-md-6">

![Forêt de Dordogne en 2024](/img/partenaires/ign/generalites/actualites/2026-01-foret-dordogne2.png){.fr-responsive-img .frx-img-contained}

</div>
</div>

![Différence du MNS sur une forêt de Dordogne entre 2021 et 2024](/img/partenaires/ign/generalites/actualites/2026-01-foret-dordogne3.png){.fr-responsive-img .frx-img-contained}