---
title: Cas d'utilisation divers
description: Mise en place de capacités de service personnalisées
date: git Last Modified
tags:
    - Divers
    - Index des tutoriels
---

{% from "components/component.njk" import component with context %}

{{ component("breadcrumb", {
    segments: [{
        url: "/developpeur/",
        title: "Documentation développeur"
    },{
        url: "/tutoriels/",
        title: "Tutoriels"
    }]
}) }}

<div>

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/divers/thematique/",
    title: "Mise en place d'un groupe thématique de couches",
    description: "Sélection d'une sous-partie des capacités d'un service et mise à disposition pour une utilisation dans un logiciel SIG",
    image: {
        src: "/img/tutoriels/divers/thematique.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>
