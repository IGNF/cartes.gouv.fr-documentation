{% from "components/component.njk" import component with context %}

{% set tabnavLinks = [
  { title: "WMS/WMTS", url: "../" },
  { title: "TMS", active: true }
] %}

{{ component("tabnav", { items: tabnavLinks }) }}

:::info Page en cours de rédaction
Cette page sera complétée prochainement.
:::
