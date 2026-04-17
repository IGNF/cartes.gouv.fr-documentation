---
title: Ajout de filtrages sur les champs de certaines entités
description: Il est possible de filtrer certaines entités sur leur nom, leur nom de couche ou encore leur type mime selon les disponibilités des attributs, avec des caractères joker.
tags:
    - Géoplateforme
    - Actualités
    - Évolution
eleventyNavigation:
    key: Ajout de filtrages sur les champs de certaines entités
    order: 16
---

{% from "components/component.njk" import component with context %}

## Changements

Le joker est le caractère %. Attention de bien mettre %25 pour qu’il soit correctement encodé dans les requêtes. Il remplace 0 à plusieurs caractères. Le filtre est insensible à la casse.

### Routes d'entrepôt

??? GET "/datastores/{datastore}/checks"

``` title="Contenu" 
/datastores/{datastore}/checks
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["name = `%25string%25`"]
    ]
}) }}

???

??? GET "/datastores/{datastore}/configurations"

``` title="Contenu" 
/datastores/{datastore}/configurations
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["name = `%25string%25`"],
        ["layer_name = `%25string%25`"]
    ]
}) }}

???

??? GET "/datastores/{datastore}/offerings"

``` title="Contenu" 
/datastores/{datastore}/offerings
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["layer_name = `%25string%25`"]
    ]
}) }}

???

??? GET "/datastores/{datastore}/annexes"

``` title="Contenu" 
/datastores/{datastore}/annexes
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["mime_type = `%25string%25`"]
    ]
}) }}

???


### Routes personnelles

??? GET "/users/me/documents"

``` title="Contenu" 
/users/me/documents
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["mime_type = `%25string%25`"]
    ]
}) }}

???


??? GET "/users/me/permissions"

``` title="Contenu" 
/users/me/permissions
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["license = `%25string%25`"],
        ["only_oauth  = `true`"],
        ["layer_name = `%25string%25 : ne retourne que les permissions qui contiennent au moins une couche correspondant à cette chaîne`"]
    ]
}) }}

???

??? GET "/users/me/keys"

``` title="Contenu" 
/users/me/keys
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["type = `BASIC`"],
        ["user_agent  = `%25string%25`"],
        ["referer = `%25string%25`"],
        ["whitelist = `%25string%25`"],
        ["blacklist  = `%25string%25`"],
        ["name = `%25string%25`"]
    ]
}) }}

???

### Routes globales

??? GET "/statics/tms"

``` title="Contenu" 
/statics/tms
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["type = `%25string%25 : filtre sur l'identifiant du TMS`"],
        ["srs  = `%25string%25`"],
        ["resolution = `0.1 : ne retourne que les TMS incluant la résolution donnée entre le plus haut niveau et le plus bas`"]
    ]
}) }}

???