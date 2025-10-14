---
title: Alimentation et diffusion simple d'archives
mermaid: true
layout: layouts/parent.njk
eleventyNavigation:
    key: Alimentation et diffusion simple d'archives
    parent: Gestion des données archives
    order: 1
    nav: guides-developpeur
---

{% from "components/component.njk" import component with context %}

Le but de ce tutoriel est de diffuser des données archive en téléchargement. Le type de données archive est le plus simple géré par la plateforme : les fichiers de cette donnée sont simplement hébergés pour une diffusion en l'état. Aucune contrainte n'est appliquée aux fichiers d'une telle donnée.

Les concepts de l'entrepôt manipulés lors de chaque étape sont détaillés dans les notes, avec le terme français et celui technique entre parenthèses.

```mermaid
---
title: Étapes du tutoriel
---
stateDiagram


    TEL: Téléversement de données
    note left of TEL
        Livraison (upload)
        Vérification (check)
    end note

    INT: Intégration des données
    note left of INT
        Traitement (processing)
        Exécution de traitement (processing execution)
        Donnée stockée (stored data)
    end note

    PUB: Publication en téléchargement
    note right of PUB
        Configuration (configuration)
        Point d'accès (endpoint)
        Offre (offering)
    end note

    [*] --> TEL
    TEL --> INT
    INT --> PUB

    classDef concepts fill:#eee,stroke:#8d1d75,stroke-width:3px,color:#000;

    class TEL,INT,PUB concepts
```

```mermaid
---
title: Concepts entrepôt manipulés et leurs liens. En bleu les entités globales de la plateforme, en orange les entités des utilisateurs
---
flowchart LR

	subgraph glo[Ressources globales]

    direction TB

        sto["Stockage (storage)"]
        chec["Vérification (check)"]
        proc["Traitement (processing)"]
        endp["Point d'accès (endpoint)"]
    end
    
	subgraph dat[Entrepôt]
        upl["Livraison (upload)"]
        exe["Exécution de traitement (processing execution)"]
        sd["Donnée stockée (stored data)"]
        con["Configuration (configuration)"]
        off["Offre (offering)"]
	end

    dat -- a accès à une partie, avec quota ----> glo

    exe -- utilise en entrée --> upl
    exe -- génère en sortie --> sd
    con -- utilise --> sd
    off -- synchronise --> con
    off -- sur --> endp

    classDef group fill:#fff,stroke:#aaa,stroke-width:3px,color:#000;
    classDef indiv fill:#eee,stroke:#ff8000,stroke-width:3px,color:#000;
	classDef global fill:#eee,stroke:#3465a4,stroke-width:3px,color:#000;

    class dat,glo group
    class upl,sd,exe,con,off indiv
    class sto,chec,proc,endp global

    linkStyle 0 color:#000
    linkStyle 1 color:#000
    linkStyle 2 color:#000
    linkStyle 3 color:#000
    linkStyle 4 color:#000
    linkStyle 5 color:#000
```

## Données du tutoriel

Les données de l'exemple sont 10 fichiers, données brutes des limites départementales, en Shapefile :

{{ component("download", {
    title: "DEPARTEMENT.cpg",
    href: "/data/tutoriels/archives/DEPARTEMENT.cpg",
    detail: "cpg - 6 octets"
}) }}
{{ component("download", {
    title: "DEPARTEMENT.dbf",
    href: "/data/tutoriels/archives/DEPARTEMENT.dbf",
    detail: "dbf - 16.8 Ko"
}) }}
{{ component("download", {
    title: "DEPARTEMENT.prj",
    href: "/data/tutoriels/archives/DEPARTEMENT.prj",
    detail: "prj - 449 octets"
}) }}
{{ component("download", {
    title: "DEPARTEMENT.shp",
    href: "/data/tutoriels/archives/DEPARTEMENT.shp",
    detail: "shp - 3 Mo"
}) }}
{{ component("download", {
    title: "DEPARTEMENT.shx",
    href: "/data/tutoriels/archives/DEPARTEMENT.shx",
    detail: "shx - 868 octets"
}) }}

{{ component("download", {
    title: "LIMITE_DEPARTEMENT.cpg",
    href: "/data/tutoriels/archives/LIMITE_DEPARTEMENT.cpg",
    detail: "cpg - 6 octets"
}) }}
{{ component("download", {
    title: "LIMITE_DEPARTEMENT.dbf",
    href: "/data/tutoriels/archives/LIMITE_DEPARTEMENT.dbf",
    detail: "dbf - 1.9 Mo"
}) }}
{{ component("download", {
    title: "LIMITE_DEPARTEMENT.prj",
    href: "/data/tutoriels/archives/LIMITE_DEPARTEMENT.prj",
    detail: "prj - 449 octets"
}) }}
{{ component("download", {
    title: "LIMITE_DEPARTEMENT.shp",
    href: "/data/tutoriels/archives/LIMITE_DEPARTEMENT.shp",
    detail: "shp - 2.4 Mo"
}) }}
{{ component("download", {
    title: "LIMITE_DEPARTEMENT.shx",
    href: "/data/tutoriels/archives/LIMITE_DEPARTEMENT.shx",
    detail: "shx - 70.9 Ko"
}) }}

## Outil de requête

Une [collection Bruno](https://github.com/Geoplateforme/clients-configurations/tree/master/bruno/entrepot/archive) est préconfigurée avec les requêtes de ce tutoriel. Vous pouvez lire [cette documentation](https://github.com/Geoplateforme/clients-configurations?tab=readme-ov-file#collections-bruno) pour voir comment l'utiliser.

Il y a également une [collection Bruno](https://github.com/Geoplateforme/clients-configurations/tree/master/bruno/diffusion/telechargement) pour faciliter l'utilisation du service de téléchargement.