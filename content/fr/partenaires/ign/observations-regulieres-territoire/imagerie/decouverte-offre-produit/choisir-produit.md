{% from "components/component.njk" import component with context %}

{% set tabnavLinks = [
  { title: "Présentation", url: "../" },
  { title: "Choisir mon produit", active: true },
  { title: "Services web thématique", url: "../service-web-thematique" }
] %}

{{ component("tabnav", { items: tabnavLinks }) }}

:::info Page en cours de rédaction
Cette page sera complétée prochainement.
:::
