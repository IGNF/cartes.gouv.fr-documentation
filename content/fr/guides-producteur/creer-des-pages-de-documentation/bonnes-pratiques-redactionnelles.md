---
title: Bonnes pratiques rédactionnelles
tags:
    - Rédaction
    - Modification
eleventyNavigation:
    key: Bonnes pratiques rédactionnelles
    parent: Créer des pages de documentation
    order: 4
    nav: guides-producteur
pictogram: document/contract.svg
description: Petit guide pour des pages bien écrites
summary:
    visible: true
    depth: 2
---

{% from "components/component.njk" import component with context %}

Cette page répertorie les bonnes pratiques d’écriture à appliquer à votre documentation, pour son accessibilité et la cohérence d’ensemble du site.

:::info
Avant de commencer vos modifications, pensez à effectuer les étapes préalables indiquées précédemment. Vous éviterez ainsi d’éventuels conflits.
:::

## Bonnes pratiques rédactionnelles générales

### Abréviations

Sauf exception, les abréviations sont interdites. Écrivez en toutes lettres :

_article, avenue, baccalauréat, boulevard, exemple, Journal Officiel, Madame, Maître, Monsieur, premier, procès-verbal, rendez-vous, sans domicile fixe, Saint/Sainte, s’il vous plaît_

Exceptions répertoriées :

_cf., etc., HT, NB, n°,_ les unités de mesure, de longueur et de temps (_20 kg, 200 km, 20h_).

En cas de doute, préférez toujours la version non-abrégée.

### Emojis

N’utilisez pas d’emojis.

### Anglicisme

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

### Conjonction de coordination

_Mais, ou, et, donc, or, ni, car_

Limitez autant que possible leur utilisation à une seule conjonction de coordination par phrase.

### Dates et horaires

Pour les dates : utilisez les chiffres, à part pour les mois qu’il faut écrire en toutes lettres et sans majuscule (_28 novembre 2019_).

Pour les horaires : utilisez seulement les chiffres et abrégez « heures » en « h » (_20h00_).

### Figures de styles

Évitez le recours abusif aux figures de style (en particulier les métaphores) qui nuisent à la fluidité et la lisibilité de l’information

### « Français » ou « français »

En général, les noms de peuples ou d’habitants prennent toujours une majuscule : les Français, les Parisiens, les Bretons.

Dans tous les autres cas, on écrit « français » sans majuscule (_Les Français parlent le français._).

### Majuscules, fonctions et Ministères

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

### Négations

En français, les négations se construisent avec l’adverbe « ne pas ». N’utilisez pas de demi-négation (_Le salarié ne peut refuser sa formation._) et ne multipliez pas les négations (_L’adoption n’est pas possible pour les couples non mariés_).

Par ailleurs, quand c’est possible, exprimez les négations par la forme affirmative : préférez « Il est encore temps pour... » à « Il n’est pas trop tard pour... ».

### Nombres

En communication écrite, écrivez les chiffres (de un à neuf) en toutes lettres et les nombres avec des chiffres (_18 ans, 20 000 participants_).

Toutefois, « millions » et « milliards » s’écrivent en toutes lettres (_66,9 millions de Français, 70 milliards d’euros_).

### Ponctuation

- À utiliser sans réserve : le point. Plus vous l’utilisez, plus vos phrases sont courtes.
- À utiliser raisonnablement : la virgule. Évitez les phrases trop longues, en apposition, ou les constructions complexes.
- À utiliser rarement : les points de suspension et le point d’exclamation. Ces signes apportent une emphase ou un suspense qui sont rarement utiles ou souhaitables.
- À ne pas utiliser : le point-virgule. Son usage est de moins en moins courant et peut avoir une connotation pompeuse.

### Sigles et acronymes

Les sigles sont des ensembles de lettres initiales prononcées une à une pour former un mot (_FMI, LGBT, TGV, TVA_). Les acronymes sont des sigles particuliers qui se prononcent comme des mots (_ASSEDIC, DOM-TOM, HADOPI, MEDEF, INSEE, URSSAF, ZEP_).

Quand le sigle est évidemment connu du citoyen (_TGV, TF1, TVA, URSSAF_), il n’est pas nécessaire d’énoncer les mots qui se cachent derrière chaque initiale.

Dans le cas contraire, précisez les mots qui composent le sigle ou l’acronyme entre parenthèses lors de sa première apparition sur la page : « Le FMI (Fonds monétaire international) ». Dans la suite du texte, contentez-vous du sigle ou de l’acronyme.

En cas de doute, partez du principe que le citoyen ne connaît pas la signification du sigle.

### Sources

Pour garantir une information fiable et objective aux citoyens, il est indispensable de toujours citer la source d’une information. Celle-ci sera indiquée entre parenthèses : « (Source : XX) ».

### Extraits en langue étrangère

Lorsqu’on cite un texte en langue étrangère dans une page dont la langue principale renseignée est le français, il faut indiquer le changement de langue sur chaque élément de la page concerné via l’attribut html lang. Afin de mettre le mot en exergue, ajoutez également des _<span lang="en">underscores</span>_ pour mettre le mot en italique.

```html
Exemple d’une phrase contenant _
<span lang="en"> an english portion of text </span>
_.
```

### Liens url

Rendez les liens url explicites à la lecture. Ci-dessous plusieurs exemples :

{{ component("table", {
    headers: ["N’écrivez pas", "Privilégiez"],
    data: [
        ["« Cliquez ici »", "« En savoir plus sur la géodésie »"],
        ["« https://www.creativehandicap.org/_files/ugd/cb5a6b_64adda829e8f448b88528683a0fe00d4.pdf »", "« Rapport d’activités 2022 »"],
        ["« https://www.automobile.ceremh.org/index.php?espace=1 »", "« www.automobile.ceremh.org »"]
    ]
}) }}

---

## Recommandations pour cohérence d’ensemble du site cartes.gouv.fr

### Apostrophes spéciaux

Utilisez les apostrophes spéciaux : « ’ ». Raccourci clavier : <kbd>alt+0146</kbd>

### Espaces insécables

Utilisez des espaces insécables aux endroits où vous ne souhaitez pas de passage à la ligne intempestifs sur certaines largeurs d’écran.

Placez-en notamment avant les signes de ponctuation nécéssitant un espace (_« » : ! ; ?_)

Raccourci clavier : <kbd>alt+0160</kbd>

### Guillemets

Utilisez les guillemets français : « ». Raccourcis clavier : <kbd>alt+174</kbd> et <kbd>alt+175</kbd>

Attention : le guillemet ouvrant doit être suivi d’un espace insécable et le guillemet fermant précédé d’un espace insécable.

### Titres

Précédez vos titres de 2 ou plusieurs « # ».

Commencez par « ## » pour les titres de premier niveau car le # seul est réservé au titre de la page elle-même.

Ne sautez pas de niveau hiérarchique.

```markdown
## Mon titre de niveau 1

### Mon titre de niveau 2
```

### Extraits de texte

Indiquez les citations/extraits de site en **gras** et **entre guillemets français**. Exemple :

```markdown
Cliquez sur **« Pyramides de tuiles raster »**
```

### Infinitif et impératif

Privilégiez de conjuguer les verbes à la deuxième personne du pluriel plutôt que d’utiliser l’infinitif : « Pensez à bien séparer […] ».

### Aération des pages

Ajoutez de l’aération à vos pages à l’aide de lignes séparatrices :

```markdown
[…] et c’est ainsi que se termine le dernier paragraphe de la partie 2 de cette page.

---

## Titre de la partie 2
```

### _Tags_

Dans l’espace documentaire, écrivez les _tags_ en français, avec la première lettre en majuscule. Mettez les accents, les espaces et les apostrophes. Écrivez les _tags_ au singulier si possible. Exemple :

« Partenaire », « Guyane », « WFS », « Modèle numérique de terrain », « RGE ALTI »

Les _tags_ apparaissent dans les résultats de recherche et permettent de les filtrer. Vérifiez qu’il n’existe pas de variantes orthographiques d’un même tag

---

Vous savez maintenant tout ce qu’il faut savoir pour modifier votre documentation ! Rendez-vous page suivante pour connaitre la procédure pour faire valider ces modifications.

:::callout Pour aller plus loin
Si vous souhaitez avoir plus de détails sur les bonnes pratiques rédactionnelles :
<a href="https://www.info.gouv.fr/marque-de-letat/quelques-bonnes-pratiques-redactionnelles" target="_blank" rel="noopener noreferrer" title="Bonnes pratiques rédactionnelles info.gouv.fr - ouvre une nouvelle fenêtre">Bonnes pratiques rédactionnelles info.gouv.fr</a>
Si vous souhaitez avoir plus de détail sur la gestion des langues sur les pages internet :
<a href="https://accessibilite.numerique.gouv.fr/methode/glossaire/#langue-par-defaut" target="_blank" rel="noopener noreferrer" title="Gestion des langues - ouvre une nouvelle fenêtre">Gestion des langues</a>
:::
