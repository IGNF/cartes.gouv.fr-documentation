---
title: Bonnes pratiques rédactionnelles
tags:
    - Rédaction
    - Documentation
    - Modification
eleventyNavigation:
    key: Bonnes pratiques rédactionnelles
    parent: Créer des pages de documentation
    order: 4
    nav: guides-producteur
pictogram: document/contract.svg
---

{% from "components/component.njk" import component with context %}

Cette page répertorie les bonnes pratiques d’écriture à appliquer à votre documentation, pour son accessibilité et la cohérence d’ensemble du site.

:::info
Avant de commencer vos modifications, pensez à effectuer les étapes préalables indiquées précédemment. Vous éviterez ainsi d’éventuels conflits.
:::

## 1 - Bonnes pratiques rédactionnelles générales

### 1.1 - Abréviations

Sauf exception, les abréviations sont interdites. Écrivez en toutes lettres :

_article, avenue, baccalauréat, boulevard, exemple, Journal Officiel, Madame, Maître, Monsieur, premier, procès-verbal, rendez-vous, sans domicile fixe, Saint/Sainte, s’il vous plaît_

Exceptions répertoriées :

_cf., etc., HT, NB, n°,_ les unités de mesure, de longueur et de temps (_20 kg, 200 km, 20h_).

En cas de doute, préférez toujours la version non-abrégée.

### 1.2 - Emojis

N’utilisez pas d’emojis.

### 1.3 - Anglicisme

Les anglicismes sont interdits quand un équivalent existe en français courant.

{{ component("table", {
    headers: ["Anglicisme à éviter", "Équivalent en français courant à privilégier"],
    data: [
        ["e-mail", "courriel"],
        ["challenger", "mettre au défi"],
        ["data", "données"],
        ["feedback", "commentaires"],
        ["forwarder", "transférer"],
        ["implémenter", "mettre en place"],
        ["manager", "responsable"],
        ["meeting", "réunion"],
        ["process", "procédure ou processus"]
    ]
}) }}

### 1.4 - Conjonction de coordination

_Mais, ou, et, donc, or, ni, car_

Limitez autant que possible leur utilisation à une seule conjonction de coordination par phrase.

### 1.5 - Dates et horaires

Pour les dates : utilisez les chiffres, à part pour les mois qu’il faut écrire en toutes lettres et sans majuscule (_28 novembre 2019_).

Pour les horaires : utilisez seulement les chiffres et abrégez « heures » en « h » (_20h00_).

### 1.6 - Figures de styles

Évitez le recours abusif aux figures de style (en particulier les métaphores) qui nuisent à la fluidité et la lisibilité de l’information

### 1.7 - « Français » ou « français »

En général, les noms de peuples ou d’habitants prennent toujours une majuscule : les Français, les Parisiens, les Bretons.

Dans tous les autres cas, on écrit « français » sans majuscule (_Les Français parlent le français._).

### 1.8 - Majuscules, fonctions et Ministères

- Les institutions prennent une majuscule (_le Gouvernement, le ministère des Armées, le Sénat, l’Assemblée nationale_).
- Les fonctions et titres sont toujours en minuscules (_Le préfet de Police de Paris a fait une déclaration à la presse_).

Exception : on écrit « le Préfet » avec une majuscule quand on ne mentionne pas « de Police de Paris », notamment dans le cas d’un texte où il est cité plusieurs fois, pour éviter de trop lourdes répétitions (_Le Préfet est venu hier à la réunion des partenaires._).

Le terme caractérisant la fonction ou le titre prend toujours une majuscule et son terme épithète éventuel est en minuscule (_Le président de la République a reçu le Premier ministre et le ministre de l’Éducation nationale._).

Pour le reste, les règles grammaticales usuelles s’appliquent, les majuscules n’apparaissent que dans trois cas :

- pour les débuts de phrase,
- pour les noms propres,
- pour les sigles.

Les majuscules portent accent et cédilles comme les minuscules : écrivez « l’État Français » et non pas « l’Etat Français ».

Les raccourcis clavier pour les majuscules avec accent et le Ç majuscule sont les suivants :

- À (alt+183),
- É (alt+144),
- Ç (alt+128).

Sauf exception, n’écrivez jamais un texte tout en majuscules. Pour mettre en valeur un titre ou un paragraphe par rapport au reste d’un texte, augmentez la taille de la police et/ou graissez la typographie. Dans certains cas seulement, vous pouvez souligner.

### 1.9 - Négations

En français, les négations se construisent avec l’adverbe « ne pas ». N’utilisez pas de demi-négation (_Le salarié ne peut refuser sa formation._) et ne multipliez pas les négations (_L’adoption n’est pas possible pour les couples non mariés_).

Par ailleurs, quand c’est possible, exprimez les négations par la forme affirmative : préférez « Il est encore temps pour... » à « Il n’est pas trop tard pour... ».

### 1.10 - Nombres

En communication écrite, écrivez les chiffres (de un à neuf) en toutes lettres et les nombres avec des chiffres (_18 ans, 20 000 participants_).

Toutefois, « millions » et « milliards » s’écrivent en toutes lettres (_66,9 millions de Français, 70 milliards d’euros_).

### 1.11 - Ponctuation

- À utiliser sans réserve : le point. Plus vous l’utilisez, plus vos phrases sont courtes.
- À utiliser raisonnablement : la virgule. Évitez les phrases trop longues, en apposition, ou les constructions complexes.
- À utiliser rarement : les points de suspension et le point d’exclamation. Ces signes apportent une emphase ou un suspense qui sont rarement utiles ou souhaitables.
- À ne pas utiliser : le point-virgule. Son usage est de moins en moins courant et peut avoir une connotation pompeuse.

### 1.12 - Sigles et acronymes

Les sigles sont des ensembles de lettres initiales prononcées une à une pour former un mot (_FMI, LGBT, TGV, TVA_). Les acronymes sont des sigles particuliers qui se prononcent comme des mots (_ASSEDIC, DOM-TOM, HADOPI, MEDEF, INSEE, URSSAF, ZEP_).

Quand le sigle est évidemment connu du citoyen (_TGV, TF1, TVA, URSSAF_), il n’est pas nécessaire d’énoncer les mots qui se cachent derrière chaque initiale.

Dans le cas contraire, précisez les mots qui composent le sigle ou l’acronyme entre parenthèses lors de sa première apparition sur la page : « Le FMI (Fonds monétaire international) ». Dans la suite du texte, contentez-vous du sigle ou de l’acronyme.

En cas de doute, partez du principe que le citoyen ne connaît pas la signification du sigle.

### 1.13 - Sources

Pour garantir une information fiable et objective aux citoyens, il est indispensable de toujours citer la source d’une information. Celle-ci sera indiquée entre parenthèses : « (Source : XX) ».

### 1.14 - Langues

Lorsqu’on cite un texte en langue étrangère dans une page dont la langue principale renseignée est le français, il faut indiquer le changement de langue sur chaque élément de la page concerné via l’attribut html lang. Afin de mettre le mot en exergue, ajoutez également des _<html lang="en">underscores</html>_ pour mettre le mot en italique.

```html
{% raw %} Exemple d’une phrase contenant _
<html lang="en">
    an english portion of text
</html>
_. {% endraw %}
```

### 1.15 - Liens url

Rendez les liens url explicites à la lecture. Ci-dessous plusieurs exemples :

{{ component("table", {
    headers: ["N’écrivez pas", "Privilégiez"],
    data: [
        ["« Cliquez ici »", "« En savoir plus sur la géodésie »"],
        ["« https://www.creativehandicap.org/_files/ugd/cb5a6b_64adda829e8f448b88528683a0fe00d4.pdf »", "« Rapport d’activités 2022 »"],
        ["« https://www.automobile.ceremh.org/index.php?espace=1 »", "« www.automobile.ceremh.org »"]
    ]
}) }}

## 2 - Recommandations pour cohérence d’ensemble du site Cartes.gouv.fr

### 2.1 - Apostrophes spéciaux

Utilisez les apostrophes spéciaux : « ’ ». Raccourci clavier : _alt+0146_

### 2.2 - Espaces insécables

Utilisez des espaces insécables aux endroits clefs (avant les : ! > « etc.). Raccourci clavier : _alt+0160_

### 2.3 - Guillemets

Utilisez les guillemets français : « ». Raccourcis clavier : _alt+174_ et _alt+175_

### 2.4 - Titres

Numérotez les titres et ajoutez des « : » à la fin du titre :

```markdown
{% raw %}

## 1 - Mon titre de niveau 1

### 1.1 - Mon titre de niveau 2

{% endraw %}
```

### 2.5 - Extraits de texte

Indiquez les citations/extraits de site en **gras** et **entre guillemets français**. Exemple :

```markdown
{% raw %}
Cliquez sur **« Pyramides de tuiles raster »**
{% endraw %}
```

### 2.6 - Infinitif et impératif

Privilégiez de conjuguer les verbes à la deuxième personne du pluriel plutôt que d’utiliser l’infinitif : « Pensez à bien séparer […] ».

### 2.7 - Aération des pages

Ajoutez de l’aération à vos pages à l’aide de lignes séparatrices :

```markdown
{% raw %}
[...] et c’est ainsi que se termine le dernier paragraphe de la partie 1.1 de cette page.

### 1.2 - Titre de la partie 1.2

{% endraw %}
```

### 2.8 - _Tags_

Dans l’espace documentaire, écrivez les _tags_ en français, avec la première lettre en majuscule. Mettez les accents, les espaces et les apostrophes. Écrivez les _tags_ au singulier si possible. Exemple :

« Partenaire », « Guyane », « WFS », « Modèle numérique de terrain », « RGE ALTI »

Vous savez maintenant tout ce qu’il faut savoir pour modifier votre documentation ! Rendez-vous page suivante pour connaitre la procédure pour faire valider ces modifications.

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur les bonnes pratiques rédactionnelles :
<a href="https://www.info.gouv.fr/marque-de-letat/quelques-bonnes-pratiques-redactionnelles" target="_blank" rel="noopener noreferrer" title="Bonnes pratiques rédactionnelles info.gouv.fr - ouvre une nouvelle fenêtre">Bonnes pratiques rédactionnelles info.gouv.fr</a>
Si vous souhaitez avoir plus de détail sur la gestion des langues sur les pages internet :
<a href="https://accessibilite.numerique.gouv.fr/methode/glossaire/#langue-par-defaut" target="_blank" rel="noopener noreferrer" title="Gestion des langues - ouvre une nouvelle fenêtre">Gestion des langues</a>
:::
