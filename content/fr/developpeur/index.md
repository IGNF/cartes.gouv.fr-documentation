---
title: Toutes les ressources pour utiliser cartes.gouv.fr
layout: layouts/profil.njk
---

# Documentation développeur

Consultez nos guides, FAQ, tutoriels et documentations techniques pour vous accompagner dans la prise en main des outils de cartes.gouv.fr.

## Entrepôt Géoplateforme

{% from "components/component.njk" import component with context %}

<div>

{{ component("card", {
    url: "/entrepot/openapi/",
    title: "Spécifications OpenAPI de l'API Entrepôt",
    description: "Détails de toutes les routes assurées par l'API Entrepôt",
    image: {
        src: "/img/developpeur/openapi.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

{{ component("card", {
    url: "/entrepot/concepts/",
    title: "Concepts de l'Entrepôt",
    description: "Présentation des concepts manipulés dans l'Entrepôt et workflow général d'alimentation",
    image: {
        src: "/img/developpeur/concepts.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

{{ component("card", {
    url: "/tutoriels/",
    title: "Tutoriels d'utilisation de l'Entrepôt",
    description: "Accès au différents tutoriels, par type de données et d'usage",
    image: {
        src: "/img/developpeur/tutoriels.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/sdk-entrepot/",
    title: "Documentation du SDK python",
    description: "Pour consommer l'API Entrepôt plus facilement avec des scripts développés en python",
    image: {
        src: "/img/developpeur/sdk_python.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>
