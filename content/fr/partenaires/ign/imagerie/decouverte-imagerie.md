---
title: Découverte de l’offre produit
description: Comprendre et comparer ce que contient l’offre de données et services Imagerie de l’Institut National de l’Information Géographique et Forestière
eleventyNavigation:
    key: Découverte de l’offre produit
    order: 1
---

{% from "components/component.njk" import component with context %}

{% set tabnavLinks = [
  { title: "Présentation", active: true },
  { title: "Choisir mon produit", url: "./produit-imagerie" },
  { title: "Services web thématique", url: "./service-web-thematique" }
] %}

{{ component("tabnav", { items: tabnavLinks }) }}

{% set currentParent = eleventyNavigation.parent %}

### Dernières éditions

{% for entry in collections.all %}
  {% if entry.data.eleventyNavigation
    and entry.data.eleventyNavigation.parent == eleventyNavigation.parent
    and entry.inputPath != page.inputPath
    and entry.data.edition == "dernière" %}
    <div class="fr-mb-10v">
      <h4 class="fr-mb-4v"><a href="{{ entry.url }}" class="fr-text-action-high--blue-france no-underline">{{ entry.data.title }}</a></h4>
      {% if entry.data.tags %}
        {% set small_tags = true %}
        {% set tags = entry.data.tags %}
        {% include "components/taggroup-disabled.njk" %}
      {% endif %}
      {% if entry.data.description %}
        <p class="fr-mb-4v">{{ entry.data.description }}</p>
      {% endif %}
      Disponible en flux et en téléchargement <a href="https://cartes.gouv.fr/catalogue/search" class="fr-link fr-ml-6v" target="_blank" rel="noopener noreferrer" title="cartes.gouv.fr/catalogue/search - ouvre une nouvelle fenêtre">Catalogue cartes.gouv.fr</a>
    </div>
  {% endif %}
{% endfor %}

### Patrimoine

{% for entry in collections.all %}
  {% if entry.data.eleventyNavigation
    and entry.data.eleventyNavigation.parent == eleventyNavigation.parent
    and entry.inputPath != page.inputPath
    and entry.data.edition == "historique" %}
    <div class="fr-mb-10v">
      <h4 class="fr-mb-4v"><a href="{{ entry.url }}" class="fr-text-action-high--blue-france no-underline">{{ entry.data.title }}</a></h4>
      {% if entry.data.tags %}
        {% set small_tags = true %}
        {% set tags = entry.data.tags %}
        {% include "components/taggroup-disabled.njk" %}
      {% endif %}
      {% if entry.data.description %}
        <p class="fr-mb-4v">{{ entry.data.description }}</p>
      {% endif %}
      Disponible en flux et en téléchargement <a href="https://cartes.gouv.fr/catalogue/search" class="fr-link fr-ml-6v" target="_blank" rel="noopener noreferrer" title="cartes.gouv.fr/catalogue/search - ouvre une nouvelle fenêtre">Catalogue cartes.gouv.fr</a>
    </div>
  {% endif %}
{% endfor %}