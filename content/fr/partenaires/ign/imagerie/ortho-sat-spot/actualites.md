{% from "components/component.njk" import component with context %}

{% set tabnavLinks = [
  { title: "Description du produit", url: "../" },
  { title: "Disponibilités / Prévisions", url: "../disponibilites-previsions" },
  { title: "Actualités", active: true }
] %}

{{ component("tabnav", { items: tabnavLinks }) }}

:::info Page en cours de rédaction
Cette page sera complétée prochainement.
:::
