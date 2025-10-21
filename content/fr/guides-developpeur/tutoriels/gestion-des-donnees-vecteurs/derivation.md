---
title: Dérivation d'une donnée vecteur en base
description: Téléversement de fichier statique, modification ou création d'une donnée stockée vecteur à partir d'une autre
layout: layouts/parent.njk
eleventyNavigation:
    key: Dérivation d'une donnée vecteur en base
    parent: Gestion des données vecteurs
    order: 3
    nav: guides-developpeur
pictogram: leisure/digital-art.svg
---

Il est possible de modifier une donnée vecteur en lui ajoutant des index, des champs ou en recalculant des champs. Toutes ces actions peuvent donner une nouvelle donnée ou être jouée sur une donnée existante.

:::warning Impacts sur la diffusion
Lors de la modification d'une donnée stockée existante et diffusée, pour que ce soit pris en compte, il peut être nécessaire de mettre à jour les offres de diffusion.

Dans certains cas, la modification peut aller jusqu'à « casser » la diffusion, comme la suppression de colonne ou le changement de type. En effet, les services de diffusion ont en mémoire une structure qui n'est plus valide et la lecture des données ne sera plus fonctionnelle tant que la synchronisation de l'offre n'est pas faite.
:::

Les instructions SQL suivantes sont autorisées :

- CREATE TABLE
- INSERT
- UPDATE
- SELECT
- CREATE INDEX
- ALTER TABLE
- CREATE FUNCTION
- DROP TABLE
- DELETE
- CREATE SEQUENCE
- CREATE VIEW
- ALTER SEQUENCE
- CREATE TRIGGER

Pour que le SQL de dérivation soit paramétrable via les paramètres de l'exécution de traitement, il faut utiliser la syntaxe {% raw %}`{{ params.<x> }}`{% endraw %} et passer comme valeur du paramètre `params` de l'exécution un objet avec l'attribut `<x>`. La valeur sera injectée dans le SQL lors de l'exécution.

Les entités (tables, vues, fonctions...) écrites le sont dans la donnée de sortie. Il est possible d'avoir une ou plusieurs données stockées de type VECTOR-DB en entrée de l'exécution. Elles seront uniquement lisibles et leur désignation dans le SQL de dérivation se fait avec la syntaxe {% raw %}`{{ inputs.<n> }}`{% endraw %} : {% raw %}`{{ inputs.1 }}`{% endraw %} pour la première donnée stockée en entrée, {% raw %}`{{ inputs.2 }}`{% endraw %} pour la deuxième...

Un exemple d'utilisation est disponible
<a title="ici" 
   id="link-10" 
   href="../derivation/exemple" 
   target="\_self"
   rel="noopener external" 
   class="fr-link fr-icon-arrow-right-line fr-link--icon-right">
ici
</a>.
