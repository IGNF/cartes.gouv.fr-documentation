{% from "components/component.njk" import component with context %}

{% set tabnavLinks = [
  { title: "Description du produit", url: "../" },
  { title: "Disponibilités / Prévisions", active: true },
  { title: "Actualités", url: "../actualites" }
] %}

{{ component("tabnav", { items: tabnavLinks }) }}

:::info Page en cours de rédaction
Cette page sera complétée prochainement.
:::
