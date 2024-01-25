---
title: Alert
description: Comment intégrer une alerte
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Exemple d'utilisation

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "info", {# info (par défaut), warning, error, success #}
    title: "Test d'alerte",
    description: "<p>Le contenu de l'alerte</p>"
}) }}
{% endraw %}
```

Référence : https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/alerte

## Rendu

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "info",
    title: "Titre de l'info",
    description: "<p>Le contenu de l'alerte</p>"
}) }}

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "warning",
    title: "Titre de l'avertissement",
    description: "<p>Le contenu de l'alerte</p>"
}) }}

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "success",
    description: "<p>Contenu de l'alerte seul</p>"
}) }}

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "error",
    title: "Titre de l'erreur seul"
}) }}

Alerte sans type précisé (défaut info) :

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    title: "Titre de l'info",
    description: "<p>Le contenu de l'alerte</p>"
}) }}