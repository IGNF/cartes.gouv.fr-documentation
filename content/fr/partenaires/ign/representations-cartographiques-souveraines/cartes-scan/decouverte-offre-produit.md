---
title: Découverte de l’offre produit
description: Comprendre et comparer ce que contient l’offre de données et services Cartes SCAN de l’Institut national de l’information géographique et forestière
eleventyNavigation:
    key: Découverte de l’offre produit
    order: 1
---

{% set currentParent = eleventyNavigation.parent %}
{% set dernieres = [] %}
{% set patrimoines = [] %}
{% set dejaVus = [] %}

{% for entry in collections.all %}
  {% if entry.data.eleventyNavigation
    and entry.data.eleventyNavigation.parent == currentParent
    and entry.inputPath != page.inputPath %}
    {% if dejaVus.indexOf(entry.inputPath) == -1 %}
      {% if entry.data.edition == "dernière" %}
        {% set _ = dernieres.push(entry) %}
      {% elseif entry.data.edition == "historique" %}
        {% set _ = patrimoines.push(entry) %}
      {% endif %}
      {% set _ = dejaVus.push(entry.inputPath) %}
    {% endif %}
    {% set siblingDir = entry.inputPath.slice(0, entry.inputPath.lastIndexOf('/') + 1) %}
    {% for child in collections.all %}
      {% if child.inputPath.startsWith(siblingDir)
        and child.inputPath != entry.inputPath
        and child.inputPath != page.inputPath
        and dejaVus.indexOf(child.inputPath) == -1 %}
        {% if child.data.edition == "dernière" %}
          {% set _ = dernieres.push(child) %}
        {% elseif child.data.edition == "historique" %}
          {% set _ = patrimoines.push(child) %}
        {% endif %}
        {% set _ = dejaVus.push(child.inputPath) %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% if dernieres.length %}
  <h4 class="fr-text-action-high--blue-france">Dernières éditions</h4>
  <div class="fr-grid-row fr-grid-row--gutters">
    {% for entry in dernieres | sort(attribute="data.title") %}
      <div class="fr-col-12 fr-col-md-6 fr-mb-8v">
        <a href="{{ entry.url }}" class="fr-text--lg">{{ entry.data.title }}</a>
        {% if entry.data.tags %}
          {% set small_tags = true %}
          {% set tags = entry.data.tags %}
          <div class="fr-mt-4v">
            {% include "components/taggroup-disabled.njk" %}
          </div>
        {% endif %}
        {% if entry.data.description %}
          {{ entry.data.description }}
        {% endif %}
      </div>
    {% endfor %}
  </div>
{% endif %}

{% if patrimoines.length %}
  <h4 class="fr-text-action-high--blue-france fr-mt-4v">Patrimoines</h4>
  <div class="fr-grid-row fr-grid-row--gutters">
    {% for entry in patrimoines | sort(attribute="data.title") %}
      <div class="fr-col-12 fr-col-md-6 fr-mb-8v">
        <a href="{{ entry.url }}" class="fr-text--lg">{{ entry.data.title }}</a>
        {% if entry.data.tags %}
          {% set small_tags = true %}
          {% set tags = entry.data.tags %}
          <div class="fr-mt-4v">
            {% include "components/taggroup-disabled.njk" %}
          </div>
        {% endif %}
        {% if entry.data.description %}
          {{ entry.data.description }}
        {% endif %}
      </div>
    {% endfor %}
  </div>
{% endif %}
