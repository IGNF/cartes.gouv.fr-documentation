---
title: Gestion de données MNT
description: Téléversement d'images à canal flottant, calcul de pyramides, diffusion en WMS et utilisation dans le service d'altimétrie
mermaid: true
layout: layouts/parent.njk
eleventyNavigation:
    key: Gestion de données MNT
    parent: Gestion des données raster
    order: 3
    nav: guides-developpeur
pictogram: digital/data-visualization.svg
---

{% from "components/component.njk" import component with context %}

Le but de ce tutoriel est de diffuser des données raster (images géoréférencées) de type MNT (canal flottant) en WMTS/TMS, WMS et sur le service d'altimétrie. Les concepts de l'entrepôt manipulés lors de chaque étape sont détaillés dans les notes, avec le terme français et celui technique entre parenthèses.

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
        Données stockées (stored data)
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

    PUB_ALTI: Publication sur le service d'altimétrie
    note right of PUB_ALTI
        Configuration (configuration)
        Point d'accès (endpoint)
        Offre (offering)
    end note

    state fork_state <<fork>>

    [*] --> TEL
    TEL --> PYR
    PYR --> fork_state
    fork_state --> PUB_TILED
    fork_state --> PUB_WMS
    fork_state --> PUB_ALTI

    classDef concepts fill:#eee,stroke:#8d1d75,stroke-width:3px,color:#000;


    class TEL,PYR,PUB_TILED,PUB_WMS,PUB_ALTI concepts
```

```mermaid
---
title: Concepts entrepôt manipulés et leurs liens. En bleu les entités globales à la plateforme, en orange les entités des utilisateurs
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

    dat -- à accès à une partie, avec quota ----> glo

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

    linkStyle 1 color:#000
    linkStyle 2 color:#000
    linkStyle 3 color:#000
    linkStyle 4 color:#000
    linkStyle 5 color:#000
```

## Données du tutoriel

Les données de l'exemple sont constituées d'une dalle kilométrique MNT issue du LidarHD (50 cm de résolution), au format Geotiff :

{{ component("download", {
    title: "[GeoTIFF] LHD_FXX_0932_6453_MNT_0M50_LAMB93_IGN69.tif",
    href: "/data/tutoriels/raster/mnt/LHD_FXX_0932_6453_MNT_0M50_LAMB93_IGN69.tif",
    detail: "TIFF - 15.3 Mo"
}) }}

On pourra traiter de la même manière la dalle kilométrique correspondante :

{{ component("download", {
    title: "[MNS] LHD_FXX_0932_6453_MNS_0M50_LAMB93_IGN69.tif",
    href: "/data/tutoriels/raster/mnt/LHD_FXX_0932_6453_MNS_0M50_LAMB93_IGN69.tif",
    detail: "TIFF - 15.3 Mo"
}) }}
