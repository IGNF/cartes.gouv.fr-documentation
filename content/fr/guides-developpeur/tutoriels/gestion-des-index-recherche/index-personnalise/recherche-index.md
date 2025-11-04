---
title: Recherche dans un index personnalisé
mermaid: true
summary:
    visible: true
    depth: 2
eleventyNavigation:
    key: Recherche dans un index personnalisé
    parent: Mise en place d'un index de recherche personnalisé
    order: 2
    nav: guides-developpeur
---

{% from "components/component.njk" import component with context %}

Pour effectuer une recherche sur un index custom, il faudra se connecter au préalable avec [un compte Géoplateforme ou une clé définie précédemment](/fr/guides-developpeur//tutoriels/controle-des-acces/service-de-diffusion/diffusion).

Il est possible de lister les différents index custom qui nous sont disponibles avec cette route (tous les index custom à *open=true* et les *open=false* où vous avez la permission) :

??? GET "{{ urls.private.search }}/api/indexes"

```title="Contenu"
{{ urls.private.search }}/api/indexes
```

???
<br>

Le champ *index* obtenu pour chaque index est à utiliser par la suite pour rechercher dans celui-ci. Il est défini selon le *layer_name* de la configuration dans l'entrepôt

Ensuite, la recherche dans les index custom fonctionne différemment selon la définition du is_layer_search de l'index custom.

## Index custom Search_Layer (ressemblant à l'index standard)

La recherche fonctionne exactement comme ici : [Recherche dans l'index standard](../../index-standard), la seule différence est l'URL de base qui est différente : *{{ urls.private.search }}/api/indexes/{index}* avec le nom de l'index à la place de {index}.

## Index custom classique

Plusieurs routes ne sont plus accessibles avec ce type d'index custom :

- Suggestion par champ : */api/indexes/{index}/suggest*
- Consultation par l'ID d'un document
- Consultation par offres

Donc les routes possibles sont la recherche POST et l'autocomplétion de titre. Ces deux routes fonctionnent comme pour l'index standard.

Pour la requête POST, les champs recherchables correspondent à ceux définis dans le GetCapabilities de l'index;

Pour l'autocomplétion de titre, les champs recherchables sont seulement ceux de type *string*.

## Utiliser l'autocomplétion dans les index custom

Si vous souhaitez utiliser l'autocomplétion sur vos index custom (*/api/indexes/{index}/suggest*), nous vous conseillons de créer deux index :

- Un index custom classique avec vos informations enregistrées dans le format souhaité.
- Un index custom Search_Layer (ressemblant à l'index standard) pour pouvoir utiliser l'autocomplétion. Il faudra respecter le format de données nécessaire à la création de ce [type d'index](../creation-index), mais les seuls champs qui nous intéressent sont les champs sur lesquels l'autocomplétion est possible : *title*, *description*, *layer_name*, *theme* et *keywords* (les autres champs peuvent être remplis avec des informations génériques). Ce sont dans ces champs que devront se trouver vos champs de l'index custom classique sur lequel vous souhaitez faire l'autocomplétion.

A partir de ces deux index custom vous pourrez utiliser l'index custom Search_Layer pour utiliser la requête */api/indexes/{index}/suggest* et faire de l'autocomplétion et l'index custom classique pour faire la recherche finale (la recherche POST par exemple) et obtenir toutes les informations nécessaires du document ressorti par l'autocomplétion.

#### Exemple
J'ai un index custom sur lequel je veux faire de l'autocomplétion sur un champ *Titre*

Je crée un index custom Search_Layer dans lequel j'intègre le champ *Titre* en le renommant *title* et remplis tous les autres champs par des informations génériques

Je fais les requêtes d'autocomplétion sur l'index custom Search_Layer en filtrant uniquement sur *title* (*/api/indexes/{index}/suggest?fields=title*)

Je fais une requête final POST sur l'index custom classique pour obtenir les informations de toutes les autres champs du document choisi à partir de l'autocomplétion