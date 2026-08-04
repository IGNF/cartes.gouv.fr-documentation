---
title: Choisir le flux à publier
description: La nature, les avantages et les inconvénients de chaque type de flux
tags:
    - Flux
    - Service
eleventyNavigation:
    key: Choisir le flux à publier
    order: 2
pictogram: digital/internet.svg
popularTopic: true
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
        ["WFS", "possible d’appliquer des styles à la volée facilement<br>autorise le requêtage et le téléchargement :<br> - describeFeatureType : description du modèle<br> - getFeature : télécharger des objets", "limité à 1000-5000 entités à la fois, peu adapté à de la visualisation à petite échelle<br>ne permet pas d’indiquer une attribution"],
        ["WMS-V / WMS-R", "plus rapide à publier qu’un WMTS<br>autorise le requêtage :<br> - getMap : extraction personnalisée d’une zone<br> - getFeatureInfo : information sur les entités", "lourd à charger à petite échelle"],
        ["TMS", "performant à l’affichage<br>permet de gérer différents styles à la source", "plus lent à publier et nécessite plus d’espace de stockage<br>ce n’est pas un vrai standard OGC (pas de getCapabilities ni getFeatureInfo)"],
        ["WMTS", "performant à l’affichage<br>autorise le requêtage :<br> - getTile : récupération d’une tuile<br> - getFeatureInfo : information sur les entités", "plus lent à publier et nécessite plus d’espace de stockage<br>ne permet pas d’indiquer une attribution"]
    ]
}) }}

---

Vous pouvez à présent choisir en toute connaissance de cause quel type de flux vous souhaitez publier pour vos données en fonction de l’utilisation que vous souhaitez.
