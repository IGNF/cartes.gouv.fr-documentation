---
title: Alimentation par mise à jour vecteur
description: Téléversement de fichiers vecteur, intégration en base de données déjà existante et diffusée
layout: layouts/parent_nav_tertiaire.njk
mermaid: true
eleventyNavigation:
    key: Alimentation par mise à jour vecteur
    order: 2
pictogram: digital/in-progress.svg
tertiaryTitle: Présentation
---

Le but de ce tutoriel va être de gérer une donnée vecteur mise à jour par livraisons successives. La diffusion sera configurée au début et le contenu consultable sera mis à jour « à chaud ». Nous allons également exploiter une vue pour permettre une diffusion limitée des données.

Les descriptions des étapes se limitent aux nouveautés fonctionnelles du tutoriel. Il est conseillé de commencer par le [tutoriel de diffusion vecteur](../alimentation-diffusion-vecteur/).

```mermaid
---
title: Étapes du tutoriel
---
stateDiagram

    INIT: Initialisation de données
    note left of INIT
        Livraison de la structure au format SQL
        Création de la donnée stockée (vide)
        Publication du flux WMS
    end note

    INJ1: Injection d’un premier jeu de données
    note left of INJ1
        Livraison des données en GeoPackage
        Intégration des données en mode « mise à jour »
        Contrôle du flux
    end note

    INJ2: Injection d’un deuxième jeu de données
    note left of INJ2
        Livraison des données en CSV
        Intégration des données en mode « mise à jour »
        Contrôle du flux
    end note


    [*] --> INIT
    INIT --> INJ1
    INJ1 --> INJ2

    classDef concepts fill:#eee,stroke:#8d1d75,stroke-width:3px,color:#000;

    class INIT,INJ1,INJ2 concepts
```

## Données du tutoriel

Les données de l’exemple sont les [installations classées pour la protection de l’environnement](https://www.georisques.gouv.fr/donnees/bases-de-donnees/installations-industrielles){target="_blank" rel="noopener noreferrer" title="Installations classées pour la protection de l’environnement - ouvre une nouvelle fenêtre"} (source Géorisques) :

- Le SQL définissant une table `installation` et une vue `installation_autorisation` ne montrant que les lignes où l’attribut `lib_regime` est à `Autorisation`. Il n’y a pas de données. La vérification vecteur sur la Géoplateforme n’autorise pas la livraison de contenu en SQL.
    {% from "components/component.njk" import component with context %}
    {{ component("download", {
        title: "installation-init.sql",
        href: "/data/tutoriels/alimentation-maj/installation-init.sql",
        detail: "SQL - 455o"
    }) }}

- Un premier lot de données (département des Ardennes). On livre les données à ajouter dans la table, pas la vue.
    {{ component("download", {
        title: "installation.gpkg",
        href: "/data/tutoriels/alimentation-maj/installation.gpkg",
        detail: "GPKG - 360Ko"
    }) }}
    {{ component("download", {
        title: "installation.csv",
        href: "/data/tutoriels/alimentation-maj/installation.csv",
        detail: "CSV - 661Ko"
    }) }}
    {{ component("download", {
        title: "installation.csvt",
        href: "/data/tutoriels/alimentation-maj/installation.csvt",
        detail: "CSVT - 84o"
    }) }}

- Un deuxième lot de données (département du Doubs).
    {{ component("download", {
        title: "installation.delete (CSV de suppression)",
        href: "/data/tutoriels/alimentation-maj/installation.delete",
        detail: "CSV - 45o"
    }) }}
    {{ component("download", {
        title: "installation.update (CSV de modification)",
        href: "/data/tutoriels/alimentation-maj/installation.update",
        detail: "CSV - 187o"
    }) }}