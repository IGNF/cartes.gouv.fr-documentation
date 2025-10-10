---
title: Choisir le flux à publier
tags:
    - Flux
    - Service
eleventyNavigation:
    key: Choisir le flux à publier
    parent: Publier des données via Cartes.gouv.fr
    order: 2
    nav: guides-producteur
pictogram: digital/internet.svg
description: La nature, les avantages et les inconvénients de chaque type de flux
---

{% from "components/component.njk" import component with context %}

Vous trouverez ci-dessous deux tableaux récapitulatifs des flux disponibles sur Cartes.gouv, avec une description, les avantages et les inconvénients de chacun.

{{ component("table", {
    headers: ["Type de flux", "Source ", "Résultat ", "Détail"],
    data: [
        ["WFS", "vecteur", "vecteur", "calculé à la volée"],
        ["WMS-V", "vecteur", "raster", "calculé à la volée"],
        ["TMS", "vecteur", "vecteur", "pyramide pré-calculée"],
        ["WMS-R", "raster", "raster", "* calculé à la volée \n * nécessite d’avoir créé un WMS-V au préalable"],
        ["WMTS", "raster", "raster", "* pyramide pré-calculée \n * nécessite d’avoir créé un WMS-V au préalable"]
    ]
}) }}

{{ component("table", {
    headers: ["Type de flux", "Avantages", "Inconvénients"],
    data: [
        ["WFS", "permet d’interroger précisémment la donnée et rapide à publier", "lourd à charger à petite échelle"],
        ["WMS-V", "rapide à publier", "lourd à charger à petite échelle"],
        ["TMS", "performant à l’affichage", "plus lent à publier et nécessite plus d’espace de stockage"],
        ["WMS-R", "rapide à publier", "lourd à charger à petite échelle"],
        ["WMTS", "performant à l’affichage", "plus lent à publier et nécessite plus d’espace de stockage"]
    ]
}) }}

---

Vous pouvez à présent choisir en toute connaissance de cause quel type de flux vous souhaitez publier pour vos données en fonction de l’utilisation que vous souhaitez.
