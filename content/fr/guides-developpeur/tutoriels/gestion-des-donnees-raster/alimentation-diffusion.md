---
title: Alimentation et diffusion simple
mermaid: true
layout: layouts/parent.njk
eleventyNavigation:
    key: Alimentation et diffusion simple
    parent: Gestion des données raster
    order: 1
    nav: guides-developpeur
pictogram: digital/data-visualization.svg
---

# Alimentation et diffusion simple

Le but de ce tutoriel va être de diffuser des données raster (images géoréférencées) en WMTS/TMS et WMS. Les concepts de l'entrepôt manipulés lors de chaque étape sont détaillés dans les notes, avec le terme français et celui technique entre parenthèse.

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

    PYR: Calcul de la pyramide d'image
    note left of PYR
        Traitement (processing)
        Exécution de traitement (processing execution)
        Données stockée (stored data)
    end note

    PUB_TILED: Publication en WMTS/TMS
    note right of PUB_TILED
        Configuration (configuration)
        Point d'accès (endpoint)
        Offre (offering)
    end note

    PUB_WMS: Publication en WMS
    note right of PUB_WMS
        Configuration (configuration)
        Point d'accès (endpoint)
        Offre (offering)
        Fichier statique (static)
    end note

    state fork_state <<fork>>

    [*] --> TEL
    TEL --> PYR
    PYR --> fork_state
    fork_state --> PUB_TILED
    fork_state --> PUB_WMS

    classDef concepts fill:#eee,stroke:#8d1d75,stroke-width:3px;

    class TEL,PYR,PUB_TILED,PUB_WMS concepts
```

```mermaid
---
title: Concepts entrepôt manipulés et leurs liens. En bleu les entités globale à la plateforme, en orange les entités des utilisateurs
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

Les données de l'exemple sont une image SCAN 1000 sur la Corse, au format [TIFF](public/data/tutoriels/raster/alimentation-diffusion-simple/scan1000_corse.tif) avec un [TFW](public/data/tutoriels/raster/alimentation-diffusion-simple/scan1000_corse.tfw) pour le géo-référencement.

![Visualisation des données du tutoriel](/img/guides-developpeur/raster/donnees_presentation_raster.png){.fr-responsive-img .frx-border-img .frx-img-contained}

