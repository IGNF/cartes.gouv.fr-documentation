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

Vous trouverez ci-dessous deux tableaux récapitulatifs des flux disponibles sur cartes.gouv.fr, avec une description, les avantages et les inconvénients de chacun.

{{ component("table", {
    headers: ["Type de flux", "Signification", "Source", "Résultat", "Détail"],
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
        [
            "WFS",
            "
                <ul>
                    <li>
                        possible d’appliquer des styles à la volée facilement
                    </li>
                    <li>
                        autorise le requêtage et le téléchargement :
                        <ul>
                            <li>
                                describeFeatureType : description du modèle
                            </li>
                            <li>
                                getFeature : télécharger des objets
                            </li>
                        </ul>
                    </li>
                </ul>
            ",
            "
                <ul>
                    <li>
                        limité à 1 000-5 000 entités à la fois, peu adapté à de la visualisation à petite échelle
                    </li>
                    <li>
                        ne permet pas d’indiquer une attribution
                    </li>
                </ul>
            "
        ],
        [
            "WMS-V/WMS-R",
            "
                <ul>
                    <li>
                        plus rapide à publier qu’un WMTS
                    </li>
                    <li>
                        autorise le requêtage :
                        <ul>
                            <li>
                                getMap : extraction personnalisée d’une zone
                            </li>
                            <li>
                                getFeatureInfo : information sur les entités
                            </li>
                        </ul>
                    </li>
                </ul>
            ",
            "
                <ul>
                    <li>
                        lourd à charger à petite échelle
                    </li>
                </ul>
            "
        ],
        [
            "TMS",
            "
                <ul>
                    <li>
                        performant à l’affichage
                    </li>
                    <li>
                        permet de gérer différents styles à la source
                    </li>
                </ul>
            ",
            "
                <ul>
                    <li>
                        plus lent à publier et nécessite plus d’espace de stockage
                    </li>
                    <li>
                        ce n’est pas un vrai standard OGC (pas de getCapabilities ni getFeatureInfo)
                    </li>
                </ul>
            "
        ],
        [
            "WMTS",
            "
                <ul>
                    <li>
                        performant à l’affichage
                    </li>
                    <li>
                        autorise le requêtage :
                        <ul>
                            <li>
                                getTile : récupération d’une tuile
                            </li>
                            <li>
                                getFeatureInfo : information sur les entités
                            </li>
                        </ul>
                    </li>
                </ul>
            ",
            "
                <ul>
                    <li>
                        plus lent à publier et nécessite plus d’espace de stockage
                    </li>
                    <li>
                        ne permet pas d’indiquer une attribution
                    </li>
                </ul>
            "
        ]
    ]
}) }}

---

Vous pouvez à présent choisir en toute connaissance de cause quel type de flux vous souhaitez publier pour vos données en fonction de l’utilisation que vous souhaitez.