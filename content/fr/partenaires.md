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

<div class="fr-background-alt--beige-gris-galet">
    <div class="fr-container fr-col-12 fr-py-15v">
        <h2>Liste des partenaires</h2>
        {% set items = collections.all 
        | filterRoot("./content/fr/partenaires/")
        | filterCollectionLang 
        | sort(attribute="data.title") %}
        {% set columns = 4 %}
        {% include "components/tile_list.njk" %}
    </div>
</div>