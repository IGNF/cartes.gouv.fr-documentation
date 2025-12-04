{% from "components/component.njk" import component with context %}

{% set tabnavLinks = [
  { title: "WMS/WMTS", url: "../" },
  { title: "TMS", url: "../tms" },
  { title: "Tutoriels", url: "../tutoriels" },
  { title: "Schéma technique de Plan IGN", active: true }
] %}

{{ component("tabnav", { items: tabnavLinks }) }}

:::info Page en cours de rédaction
Cette page sera complétée prochainement.
:::
