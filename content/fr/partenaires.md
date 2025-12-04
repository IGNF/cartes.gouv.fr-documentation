---
title: Documentations partenaires
description: Consultez la documentation de nos partenaires pour vous accompagner dans la prise en main de l’offre produit de cartes.gouv.fr
layout: layouts/partenaire.njk
tags:
    - Documentations partenaires
eleventyNavigation:
    key: Documentations partenaires
    order: 4
    nav: main
---

{% from "components/component.njk" import component with context %}

<div class="background-blanc-beige">
    <div class="fr-container fr-col-12 fr-py-10v">
        <h2>Liste des partenaires</h2>
        {{- component("tile_list", {
            items: collections.all 
                | filterRoot("./content/fr/partenaires/")
                | filterCollectionLang 
                | sort(attribute="data.title"),
            black_tiles: true
        }) -}}
    </div>
</div>