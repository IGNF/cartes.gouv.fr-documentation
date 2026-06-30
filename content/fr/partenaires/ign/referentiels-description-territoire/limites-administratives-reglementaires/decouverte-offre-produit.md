---
title: Découverte de l’offre produit
description: Comprendre et comparer ce que contient l’offre de données et services Limites administratives et réglementaires de l’Institut national de l’information géographique et forestière
eleventyNavigation:
    key: Découverte de l’offre produit - limites-administratives-reglementaires
    order: 1
    title: Découverte de l’offre produit
---

{% set currentParent = eleventyNavigation.parent %}
{% set dernieres = [] %}
{% set patrimoines = [] %}
{% set autres = [] %}
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
      {% else %}
        {% set _ = autres.push(entry) %}
      {% endif %}
      {% set _ = dejaVus.push(entry.inputPath) %}
    {% endif %}
  {% endif %}
{% endfor %}

{% if dernieres.length %}
  <div data-pagefind-ignore>
    <h4 class="fr-text-action-high--blue-france">Dernières éditions</h4>
    <div class="fr-grid-row fr-grid-row--gutters">
      {% for entry in dernieres | sort(attribute="data.eleventyNavigation.order") %}
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
  </div>
{% endif %}

{% if patrimoines.length %}
  <div data-pagefind-ignore>
    <h4 class="fr-text-action-high--blue-france fr-mt-4v">Éditions historiques</h4>
    <div class="fr-grid-row fr-grid-row--gutters" data-pagefind-ignore>
      {% for entry in patrimoines | sort(attribute="data.eleventyNavigation.order") %}
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
  </div>
{% endif %}

{% if autres.length %}
  <div data-pagefind-ignore>
    <h4 class="fr-text-action-high--blue-france fr-mt-4v">Autres éditions</h4>
    <div class="fr-grid-row fr-grid-row--gutters" data-pagefind-ignore>
      {% for entry in autres | sort(attribute="data.eleventyNavigation.order") %}
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
  </div>
{% endif %}
