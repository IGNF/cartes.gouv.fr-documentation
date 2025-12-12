---
title: Choisir le flux à publier
tags:
    - Flux
    - Service
eleventyNavigation:
    key: Choisir le flux à publier
    parent: Publier des données via cartes.gouv.fr
    order: 2
    nav: guides-producteur
pictogram: digital/internet.svg
description: La nature, les avantages et les inconvénients de chaque type de flux
---

{% from "components/component.njk" import component with context %}

Vous trouverez ci-dessous deux tableaux récapitulatifs des flux disponibles sur cartes.gouv, avec une description, les avantages et les inconvénients de chacun.

{{ component("table", {
    headers: ["Type de flux", "Signification", "Source ", "Résultat ", "Détail"],
    data: [
        ["WFS", "Web Feature Service", "vecteur", "vecteur", "calculé à la volée à partir d’une donnée vecteur"],
        ["WMS-V", "Web Map Service Vecteur", "vecteur", "raster", "calculé à la volée à partir d’une donnée vecteur"],
        ["TMS", "Tile Map Service", "vecteur", "vecteur", "pyramide vectorielle pré-calculée"],
        ["WMS-R", "Web Map Service Raster", "raster", "raster", "calculé à la volée à partir d’une donnée raster"],
        ["WMTS", "Web Map Tile Service", "raster", "raster", "pyramide raster pré-calculée"]
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
