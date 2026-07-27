---
title: La Géoplateforme en bref
description: Nouvel espace public de l’information géographique, la Géoplateforme a pour objectif d’optimiser la production et la diffusion des géodatas au service de la décision publique
eleventyNavigation:
    key: La Géoplateforme en bref
    order: 1
summary:
    visible: true
    depth: 2
pictogram: map/airport.svg
---

{% from "components/component.njk" import component with context %}

## La Géoplateforme en bref

La société connaît une révolution de la donnée géographique qui impose à l’État de se transformer. Le développement des usages numériques dans lesquels l’information géolocalisée est omniprésente se traduit par une mutation des pratiques des professionnels et des citoyens ainsi que par un accroissement des besoins en données. La large mise à disposition des données géographiques offre de nouvelles façons de penser les cartes et doit encourager de nouveaux usages répondant à des besoins publics.

Dans ce contexte, le programme Géoplateforme vise à doter la puissance publique d’une **infrastructure collaborative et mutualisée pour la production et la diffusion des géodonnées**. Son ambition est de permettre aux porteurs de politiques publiques et aux collectivités locales qui le souhaitent de bénéficier très simplement de fonctionnalités avancées pour diffuser leurs propres données et s’ouvrir à des communautés contributives. Cet espace, **composante géographique de l’État-plateforme** reconnue [grand projet numérique de l’État](https://www.numerique.gouv.fr/offre-accompagnement/pilotage-panorama-avis-conformes/){target="_blank" rel="noopener noreferrer" title="Panorama et avis conformes des grands projets numériques de l’État - ouvre une nouvelle fenêtre"}, répond notamment aux enjeux de souveraineté des données de l’État face aux géants de l’Internet.

La Géoplateforme s’inscrit pleinement dans la **dynamique des géo-communs** soutenue par l’IGN. En effet, si l’institut a bien vocation à porter ses propres services sur la Géoplateforme, celle-ci se veut en premier lieu un outil commun au monde public. C’est la mobilisation progressive de partenaires, producteurs et usagers de données géographiques qui doit permettre d’atteindre cet objectif.

## Enjeux

- **Bâtir une plateforme ouverte et mutualisée** dédiée à l’information géographique et contribuant au déploiement de l’État-plateforme,
- **Organiser le dispositif collaboratif** pour l’entretien et l’enrichissement de la donnée géographique au sein de la sphère publique,
- **Constituer un écosystème d’usagers** ; outiller, soutenir et connecter les communautés existantes,
- **Proposer une nouvelle infrastructure robuste** assurant la reprise des services existants de l’IGN et de ses partenaires ; optimiser le parcours d’accès à ces ressources et offrir des fonctionnalités complémentaires.

<br>

## Objectifs

{% set tabnavLinks = [
    {
        title: "Accessibilité aux données",
        content: "
            <p>
                La Géoplateforme mettra à disposition un panel très large de jeux de données géographiques et de services accessibles à tous. Les données de cette plateforme seront ouvertes et la plus grande interopérabilité possible sera recherchée avec les systèmes existants (référencés sur le portail de diffusion de la Géoplateforme).
            </p>
            <p>
                Les utilisateurs pourront facilement mettre à jour des données, rechercher des services et des jeux de données grâce à des critères simples et les utiliser pour leurs propres besoins de diffusion.
            </p>
        "
    },
    {
        title: "Mutualisation des infrastructures",
        content: "
            La Géoplateforme pourra héberger les données géographiques produites et co-produites par l’ensemble des partenaires. Cette infrastructure sécurisée et évolutive permettra aux parties prenantes de partager et de déployer des solutions à grande échelle en répondant à leurs exigences de capacité, de fiabilité ou de performance.
        "
    },
    {
        title: "Développement de nouveaux services",
        content: "
            La Géoplateforme offrira des moyens de développer de nouveaux services au travers d’interfaces simplifiées selon les besoins des utilisateurs. Les partenaires auront la possibilité de pleinement tirer profit de l’infrastructure de la Géoplateforme, notamment de ses capacités à produire des traitements complexes et des services à haute valeur ajoutée.
        "
    }
] %}
{{ component("accordionsgroup", { items: tabnavLinks }) }}

<br>

## Briques fonctionnelles

Pour atteindre ses ambitions, la Géoplateforme s’articule autour de cinq principales briques fonctionnelles :

**Des services**

Pouvoir rechercher, charger, valider, traiter et diffuser ses données en autonomie

**Des fonctions collaboratives**

Coproduire et modifier des jeux de données en autonomie tout en améliorant collectivement la qualité de l’ensemble des données

**La gestion de communautés**

Fédérer des communautés d’utilisateurs et favoriser la création de nouveaux portails thématiques

**La gestion des accès et habilitations**

Attribuer les droits d’accès et d’habilitations sur la Géoplateforme et ses ressources (jeux de données…)

**Le support**

Bénéficier d’un appui sur l’utilisation de la Géoplateforme

## Exemples de cas d’usages collaboratifs

??? Surveillance des équipements publics dans les Alpes-Maritimes
Illustration d’un cas d’usage collaboratif avec mise à jour en temps réel des informations géographiques

**Objectifs**

Permettre aux agents de terrain de la Direction départementale des territoires de collaborer autour d’informations détaillées relatives à l’état d’équipements publics à la suite d’intempéries.

**Données Géoplateforme**

Données PCRS (Plan de Corps de Rue Simplifié) fournies par l’IGN\
Données des équipements publics de la DDT des Alpes-Maritimes

**Parcours utilisateur**
1. **Consultation**\
    Je consulte les données et services disponibles au catalogue de la Géoplateforme.
2. **Connexion**\
    Je me connecte à la Géoplateforme grâce à France Connect ou via mes identifiants.
3. **Alimentation**\
    Je charge simplement mes données d’équipements publics du département Alpes-Maritimes et je définis mes groupes de collaborateurs pouvant accéder à mes données.
4. **Validation des données**\
    Mes données intégrées sont validées techniquement et fonctionnellement avec un premier niveau d’indice de confiance calculé automatiquement.
5. **Traitement**\
    Via l’outil de traitement, je sélectionne mes données d’équipements que je croise avec les données PCRS et je pré-visualise le résultat.
6. **Définition jeu de données**\
    À validation des traitements, je définis les caractéristiques de mon nouveau jeu de données (nom, objectifs, format, accessibilité, rafraîchissement…).
7. **Diffusion**\
    Une fois mon jeu de données défini, il est automatiquement diffusé sur le portail au travers du catalogue de données.
8. **Intégration**\
    Je fixe les règles de mise à disposition des données à la plateforme DDT et aux terminaux des opérateurs sur le terrain. 
9. **Modifications**\
    Depuis leurs terminaux, mes opérateurs modifient les informations à la suite des intempéries. Les informations sont rafraîchies automatiquement.
???

??? Maintenance de sentiers de randonnée
Illustration d’un cas d’usage de coproduction de données avec collecte de données d’appareils connectés

**Objectifs**

Diffuser des données précises sur les sentiers de randonnée\
Identifier les sentiers les plus fréquentés et par conséquent ceux à entretenir

**Données Géoplateforme**

Données IGN\
Données des sentiers de randonnées des collectivités locales\
Données des équipements des randonneurs

**Parcours utilisateur**
1. **Connexion**\
    En tant que collectivité locale, je me connecte à la Géoplateforme grâce à France Connect ou via mes identifiants.
2. **Alimentation**\
    Je charge mes premières données de randonnées (sentiers, balises, données de fréquentation…) et je définis les droits d’accès à ces données (étape automatique pour le chargement de mises à jour).
3. **Validation des données**\
    Mes données intégrées sont validées techniquement et fonctionnellement avec un premier niveau d’indice de confiance calculé automatiquement.
4. **Traitement**\
    Via l’outil de traitement, je choisis les données de randonnées que je croise avec les plans IGN, et je pré-visualise le résultat. Je peux ainsi identifier les sentiers les plus fréquentés.
5. **Définition jeu de données**\
    À validation des traitements, je définis les caractéristiques de mon nouveau jeu de données (nom, objectifs, format, accessibilité…).
6. **Diffusion**\
    Une fois mon jeu de données défini, il est automatiquement diffusé sur le portail.
7. **Collecte/signalement**\
    Les données des objets connectés des randonneurs peuvent être chargées sur la Géoplateforme. On obtient ainsi des données sur la fréquentation des sentiers.
8. **Intégration**\
    Via la Géoplateforme, j’intègre les données sur les sites d’office de tourisme. Je peux utiliser les widgets mis à disposition pour les intégrer à mon site d’association de randonneurs.
???

<br>

## Calendrier

La Géoplateforme se construit de manière progressive et incrémentale de 2021 à 2024.

### Les chantiers et temps forts 2023

- Construction du site [cartes.gouv.fr](https://cartes.gouv.fr/explorer-les-cartes/), le futur service public des cartes et données du territoire
- Ouverture des [premiers services de la Géoplateforme](https://www.ign.fr/geoplateforme/fonctionnalites-de-la-geoplateforme-premieres-briques-et-prochaines-mises-en-service){target="_blank" rel="noopener noreferrer" title="Fonctionnalités de la Géoplateforme - ouvre une nouvelle fenêtre"} (version bêta) : services de diffusion et de téléchargement, service de catalogage, chargement/traitement/diffusion vecteur

<br>

### Les chantiers 2022

- [Construction d’un socle technique](https://www.ign.fr/geoplateforme/construire-le-socle-de-la-geoplateforme){target="_blank" rel="noopener noreferrer" title="Construire le socle de la Géoplateforme - ouvre une nouvelle fenêtre"} robuste, performant et pérenne pour la reprise des services [Géoportail](https://www.geoportail.gouv.fr/){target="_blank" rel="noopener noreferrer" title="Géoportail - ouvre une nouvelle fenêtre"}, [Géoservices](https://cartes.gouv.fr/decouvrir/rechercher-une-donnee/){target="_blank" rel="noopener noreferrer" title="Rechercher une donnée - ouvre une nouvelle fenêtre"} et [Géoportail de l’urbanisme](https://www.geoportail-urbanisme.gouv.fr/){target="_blank" rel="noopener noreferrer" title="Géoportail de l’urbanisme - ouvre une nouvelle fenêtre"}, et les projets stratégiques de l’IGN, en particulier la diffusion des données [Lidar HD](https://www.ign.fr/institut/programme-lidar-hd-vers-une-nouvelle-cartographie-3d-du-territoire){target="_blank" rel="noopener noreferrer" title="Programme LiDAR HD - ouvre une nouvelle fenêtre"} et [OCS GE](https://www.ign.fr/institut/nos-domaines-dintervention/biodiversite){target="_blank" rel="noopener noreferrer" title="Biodiversité - ouvre une nouvelle fenêtre"}.
- [Expérimentations de nouvelles fonctionnalités](https://www.ign.fr/geoplateforme/experimente){target="_blank" rel="noopener noreferrer" title="On expérimente - ouvre une nouvelle fenêtre"}
- Test et mise en service de premières fonctionnalités expérimentales en version bêta : [Géotuileur, Plugin QGIS API entrepôt](https://cartes.gouv.fr/rechercher-une-donnee/search), [Géocodage](https://cartes.gouv.fr/rechercher-une-donnee/search), [démonstrateur LiDAR HD](https://www.ign.fr/geoplateforme/decouvrez-le-potentiel-des-donnees-lidar-hd){target="_blank" rel="noopener noreferrer" title="Découvrez le potentiel des données LiDAR HD - ouvre une nouvelle fenêtre"}…

<br>

### Les chantiers 2021

- Ateliers de co-construction multi-partenariaux
- [Expérimentations de premières fonctionnalités](https://www.ign.fr/geoplateforme/experimente){target="_blank" rel="noopener noreferrer" title="On expérimente - ouvre une nouvelle fenêtre"}
- Choix de la société OVHCloud pour l’hébergement du socle technique de la Géoplateforme
- Annonce de l’avis conforme de la [Dinum](https://www.numerique.gouv.fr/){target="_blank" rel="noopener noreferrer" title="numerique.gouv.fr - ouvre une nouvelle fenêtre"}
- [Mise à disposition du module API Carto Nature](https://www.ign.fr/geoplateforme/module-api-carto-nature){target="_blank" rel="noopener noreferrer" title="Module API Carto « Nature » - ouvre une nouvelle fenêtre"}
- Atelier collaboratif sur le module géotuileur
- [Choix de Worldline pour la construction, l’infogérance et la maintenance de la Géoplateforme](https://www.ign.fr/espace-presse/lign-finalise-son-choix-de-partenaires-techniques-pour-la-geoplateforme){target="_blank" rel="noopener noreferrer" title="L’IGN finalise son choix de partenaires techniques pour le développement et l’exploitation de la Géoplateforme - ouvre une nouvelle fenêtre"}

<br>

## Financement

Le coût total du projet est estimé à 21,5 M€ (coûts totaux d’investissement + deux ans de run). La Géoplateforme, lauréate du 2e appel à projet du Fonds pour la transformation de l’action publique (FTAP), a reçu dans ce cadre un financement à hauteur de 3,6 M€. Le reste du financement est supporté par l’IGN.

<div class="fr-grid-row fr-grid-row--gutters fr-my-6w">
  <div class="fr-col-6 fr-text--center">
    <p class="fr-h2 fr-text-title--blue-france fr-mb-1w">21,5 M€</p>
    <p>de coût total estimé</p>
  </div>
  <div class="fr-col-6 fr-text--center">
    <p class="fr-h2 fr-text-title--blue-france fr-mb-1w">3,6 M€</p>
    <p>financés par le FTAP</p>
  </div>
</div>

<a href="https://www.ign.fr/geoplateforme/rejoindre-la-communaute" target="_blank" rel="noreferrer" title="Rejoindre la communauté Géoplateforme - ouvre une nouvelle fenêtre" class="fr-btn">Rejoindre la communauté d’utilisateurs de la Géoplateforme</a>