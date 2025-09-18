---
title: Alimentation par mise à jour
description: "Téléversement de fichiers vecteurs, intégration en base de données déjà existante et diffusée"
mermaid: true
eleventyNavigation:
    key: Alimentation par mise à jour
    parent: Gestion des données vecteurs
    order: 2
    nav: guides-developpeur
pictogram: digital/in-progress.svg
---

Le but de ce tutoriel va être de gérer une donnée vecteur mise à jour par livraisons successives. La diffusion sera configurée au début et le contenu consultable sera mis à jour "à chaud". Nous allons également exploiter une vue pour permettre une diffusion limitée des données.

Les descriptions des étapes se limitent aux nouveautés fonctionnelles du tutoriel. Il est conseillé de commencer par le tutoriel de
<a
id="link-1"
href="../alimentation-diffusion"
target="\_self"
class="fr-link fr-icon-arrow-right-line fr-link--icon-right"> diffusion vecteur</a>

.

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

    INJ1: Injection d'un premier jeu de données
    note left of INJ1
        Livraison des données en GeoPackage
        Intégration des données en mode "mise à jour"
        Contrôle du flux
    end note

    INJ2: Injection d'un deuxième jeu de données
    note left of INJ2
        Livraison des données en CSV
        Intégration des données en mode "mise à jour"
        Contrôle du flux
    end note


    [*] --> INIT
    INIT --> INJ1
    INJ1 --> INJ2

    classDef concepts fill:#eee,stroke:#8d1d75,stroke-width:3px,color:#000;

    class INIT,INJ1,INJ2 concepts
```

## Données du tutoriel

Les données de l'exemple sont les <a title="installations classées pour la protection de l'environnement" id="link-2" href="https://www.georisques.gouv.fr/donnees/bases-de-donnees/installations-industrielles" target="_blank" rel="noopener external" class="fr-link">installations classées pour la protection de l'environnement</a> (source Géorisques) :

- <a id="link-sql" 
     download="installation-init.sql" 
     href="/data/tutoriels/alimentation-maj/installation-init.sql" 
     target="_self" 
     class="fr-link fr-link--download">
  SQL<span class="fr-link__detail">SQL</span>
  </a> définissant une table `installation` et une vue `installation_autorisation` ne montrant que les lignes où l'attribut `lib_regime` est à `Autorisation`. Il n'y a pas de données. La vérification vecteur sur la Géoplateforme n'autorise pas la livraison de contenu en SQL.
- <a id="link-gpkg" 
     download="installation.gpkg" 
     href="/data/tutoriels/alimentation-maj/installation.gpkg" 
     target="_self" 
     class="fr-link fr-link--download">
  Un Geopackage<span class="fr-link__detail">GPKG</span>
  </a> avec un premier lot de données (département des Ardennes). On livre les données à ajouter dans la table, pas le vue.
- <a id="link-csv" 
     download="installation.csv" 
     href="/data/tutoriels/alimentation-maj/installation.csv" 
     target="_self" 
     class="fr-link fr-link--download">
  Un CSV<span class="fr-link__detail">CSV</span>
  </a> (<a id="link-csv" 
     download="installation.csvt" 
     href="/data/tutoriels/alimentation-maj/installation.csvt" 
     target="_self" 
     class="fr-link fr-link--download">
  et le CSVT<span class="fr-link__detail">CSVT</span>
  </a>) avec un deuxième lot de données (département du Doubs).
- </a> <a id="link-delete" 
     download="installation.delete" 
     href="/data/tutoriels/alimentation-maj/installation.delete" 
     target="_self" 
     class="fr-link fr-link--download">
  Un CSV de suppression<span class="fr-link__detail">DELETE</span>
  </a> et un </a> <a id="link-update" 
     download="installation.update" 
     href="/data/tutoriels/alimentation-maj/installation.update" 
     target="_self" 
     class="fr-link fr-link--download">
  CSV de modification<span class="fr-link__detail">UPDATE</span>
  </a>
