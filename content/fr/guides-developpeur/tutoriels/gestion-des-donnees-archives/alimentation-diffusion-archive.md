---
title: Alimentation et diffusion simple
mermaid: true
layout: layouts/parent.njk
eleventyNavigation:
    key: Alimentation et diffusion simple d'archives
    parent: Gestion des données archives
    order: 1
    nav: guides-developpeur
---

# Alimentation et diffusion simple

Le but de ce tutoriel va être de diffuser des données archive en téléchargement. Le type de données archive est le plus simple gérés par la plateforme : les fichiers de cette donnée sont simplement hébergées pour une diffusion en l'état. Aucun contrainte n'est appliquées aux fichiers d'une telle donnée.

Les concepts de l'entrepôt manipulés lors de chaque étape sont détaillés dans les notes, avec le terme français et celui technique entre parenthèse.

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
        Données stockée (stored data)
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

    classDef concepts fill:#eee,stroke:#8d1d75,stroke-width:3px;

    class TEL,INT,PUB concepts
```

```mermaid
---
title: Concepts entrepôt manipulés et leurs liens. En bleu les entités globales de la plateforme, en orange les entités des utilisateurs
---
flowchart LR

	subgraph glo[Ressources globales de la plateforme]

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

    dat -- à accès à une partie, avec quota ----> glo

    exe -- utilise en entrée --> upl
    exe -- génère en sortie --> sd
    con -- utilise --> sd
    off -- synchronise --> con
    off -- sur --> endp

    classDef group fill:#fff,stroke:#aaa,stroke-width:3px;
    classDef indiv fill:#eee,stroke:#ff8000,stroke-width:3px;
	classDef global fill:#eee,stroke:#3465a4,stroke-width:3px;

    class dat,glo group
    class upl,sd,exe,con,off indiv
    class sto,chec,proc,endp global
```

## Données du tutoriel

Les données de l'exemple sont 10 fichiers, données brutes des limites départementales, en Shapefile :

* [DEPARTEMENT.cpg](../../assets/data/archive/DEPARTEMENT.cpg)
* [DEPARTEMENT.dbf](../../assets/data/archive/DEPARTEMENT.dbf)
* [DEPARTEMENT.prj](../../assets/data/archive/DEPARTEMENT.prj)
* [DEPARTEMENT.shp](../../assets/data/archive/DEPARTEMENT.shp)
* [DEPARTEMENT.shx](../../assets/data/archive/DEPARTEMENT.shx)
* [LIMITE_DEPARTEMENT.cpg](../../assets/data/archive/LIMITE_DEPARTEMENT.cpg)
* [LIMITE_DEPARTEMENT.dbf](../../assets/data/archive/LIMITE_DEPARTEMENT.dbf)
* [LIMITE_DEPARTEMENT.prj](../../assets/data/archive/LIMITE_DEPARTEMENT.prj)
* [LIMITE_DEPARTEMENT.shp](../../assets/data/archive/LIMITE_DEPARTEMENT.shp)
* [LIMITE_DEPARTEMENT.shx](../../assets/data/archive/LIMITE_DEPARTEMENT.shx)

## Outil de requête

Une [collection Bruno](https://github.com/Geoplateforme/clients-configurations/tree/master/bruno/entrepot/archive) est préconfigurée avec les requêtes de ce tutoriel. Vous pouvez lire [cette documentation](https://github.com/Geoplateforme/clients-configurations?tab=readme-ov-file#collections-bruno) pour voir comment l'utiliser.

Il y a également une [collection Bruno](https://github.com/Geoplateforme/clients-configurations/tree/master/bruno/diffusion/telechargement) pour faciliter l'utilisation du service de téléchargement.