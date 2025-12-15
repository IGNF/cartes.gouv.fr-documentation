---
title: Découverte de l’offre produit
description: Comprendre et comparer ce que contient Services d’appui à la décision de l’Institut national de l’information géographique et forestière
eleventyNavigation:
    key: Découverte de l’offre produit
    order: 1
---

{% set currentParent = eleventyNavigation.parent %}
{% set onglets = [] %}
{% set patrimoines = [] %}
{% set dejaVus = [] %}

{% for entry in collections.all %}
  {% if entry.data.eleventyNavigation
    and entry.data.eleventyNavigation.parent == currentParent
    and entry.inputPath != page.inputPath %}
    {% if dejaVus.indexOf(entry.inputPath) == -1 %}
      {% set _ = onglets.push(entry) %}
      {% set _ = dejaVus.push(entry.inputPath) %}
    {% endif %}
    {% set siblingDir = entry.inputPath.slice(0, entry.inputPath.lastIndexOf('/') + 1) %}
    {% for child in collections.all %}
      {% if child.inputPath.startsWith(siblingDir)
        and child.inputPath != entry.inputPath
        and child.inputPath != page.inputPath
        and child.inputPath != page.inputPath
        and dejaVus.indexOf(child.inputPath) == -1 %}
        {% set _ = onglets.push(child) %}
        {% set _ = dejaVus.push(child.inputPath) %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

<div data-pagefind-ignore>
  <h3>Services disponibles</h3>
  {% for entry in onglets | sort(attribute="data.title") %}
    <div class="fr-mb-10v" data-pagefind-ignore>
      <h4 class="fr-mb-4v"><a href="{{ entry.url }}" class="fr-text-action-high--blue-france no-underline">{{ entry.data.title }}</a></h4>
      {% if entry.data.tags %}
        {% set small_tags = true %}
        {% set tags = entry.data.tags %}
        {% include "components/taggroup-disabled.njk" %}
      {% endif %}
      {% if entry.data.description %}
        <p class="fr-mb-4v">{{ entry.data.description }}</p>
      {% endif %}
      {% if entry.data.lienCatalogue %}
        Disponible en flux et en téléchargement <a href={{ urls.rechercher_une_donnee }}{{ entry.data.lienCatalogue.url }} class="fr-link fr-ml-6v" target="_blank" rel="noopener noreferrer" title="{{ urls.rechercher_une_donnee }}{{ entry.data.lienCatalogue.url }} - ouvre une nouvelle fenêtre">{{ entry.data.lienCatalogue.text }}</a>
      {% endif %}
    </div>
  {% endfor %}
</div>
