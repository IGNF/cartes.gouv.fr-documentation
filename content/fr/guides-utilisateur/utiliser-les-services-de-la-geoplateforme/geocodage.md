---
title: Géocodage
description: Tous les détails sur le service de géocodage de la Géoplateforme
tags:
    - Géocodage
    - API
    - Géoplateforme
    - Adresses
    - Lieu
    - Parcelle
    - Calcul
eleventyNavigation:
    key: Géocodage
    order: 4
pictogram: system/system.svg
summary:
    visible: true
    depth: 1
---

## Présentation

L’API de géocodage de la Géoplateforme a pour but de fournir des coordonnées à partir d’une adresse ou d’une parcelle cadastrale (ou à l’inverse de fournir le localisant le plus proche à partir de coordonnées).

Son usage est limité à 50 requêtes par seconde depuis une même adresse IP.

Elle s’appuie sur des données BAN, BD TOPO® et Parcellaire Express (PCI).

Son swagger est accessible ici : [swagger du géocodage](https://data.geopf.fr/geocodage/openapi).

---

## Capacités de l’API (GetCapabilities)

La requête **GetCapabilities** permet de découvrir les capacités de l’API : les opérations possibles, les ressources disponibles et les options proposées.

Elle est accessible via l’URL suivante : 

```plain
https://data.geopf.fr/geocodage/getcapabilities
```

Cette requête ne requiert aucun paramètre.

---

## Géocodage direct (search) et inverse (reverse)

Le géocodage **direct** permet de récupérer les coordonnées géographiques d’une adresse, d’un lieu ou d’une parcelle cadastrale.

Pour faciliter la saisie, un service d’autocomplétion est intégré par défaut dans le service de géocodage. Ce service d’autocomplétion est également proposé en utilisation distincte et directe, pour le cas d’usage de remplissage de formulaires par exemple.

Le géocodage **inverse** a pour but de retourner, à partir d’un ou plusieurs points géographiques indiqués en latitude/longitude, la ou les entités géolocalisées les plus proches correspondantes, parmi les adresses, toponymes, parcelles cadastrales, et/ou unités administratives.

Le géocodage s’appuie sur plusieurs sources de données :
- L’index des adresses est actualisé chaque semaine à partir des adresses de la [Base Adresse Nationale (BAN)](https://adresse.data.gouv.fr/decouvrir-la-BAN).
- Les lieux nommés proviennent de la couche des « points d’intérêt » (POI) de la [BD TOPO®]({{ urls.rechercher_une_donnee }}/dataset/IGNF_BD-TOPO), qui est actualisée tous les trimestres.
- Les parcelles cadastrales proviennent du [Parcellaire Express (PCI)]({{ urls.rechercher_une_donnee }}/dataset/IGNF_PARCELLAIRE-EXPRESS-PCI), actualisé tous les trimestres.

<br>

Le service de géocodage est disponible au travers des URLs suivantes :

Le géocodage direct est accessible via l’URL suivante : (les paramètres sont précisés dans le [swagger du géocodage](https://data.geopf.fr/geocodage/openapi))

```plain
https://data.geopf.fr/geocodage/search
```

Le géocodage inverse est accessible via l’URL suivante : (les paramètres sont précisés dans le [swagger du géocodage](https://data.geopf.fr/geocodage/openapi))

```plain
https://data.geopf.fr/geocodage/reverse
```

Ces deux types de géocodage se déclinent sous la forme d’appels unitaires en méthode GET ou regroupés par fichiers (géocodage en masse de fichiers CSV) en méthode POST.

---

## Géocodage par lot synchrone (batch) et asynchrone (batch-async)

Pour géocoder un grand nombre d’adresses, la possibilité est offerte de passer par un traitement par lot, dit « batch », pour la recherche directe ou inverse.

Les fichiers doivent être encodés en UTF-8 et faire moins de 50 Mo ou 200000 lignes.

Le site national de l’adresse propose une [interface intuitive](https://adresse.data.gouv.fr/outils/csv) pour la gestion des opérations de géocodage **direct** par fichiers.

Enfin, pour un usage expert récurrent et notamment le besoin de gérer des fichiers volumineux (jusqu’à 1 Go), il est possible de configurer des **projets de géocodage** qui seront traités de façon asynchrone (Cf. section « Géocodage par lot asynchrone » dans le [swagger du géocodage](https://data.geopf.fr/geocodage/openapi)).

???? Informations complémentaires à l'usage du Géocodage de masse asynchrone

??? Organisation générale du workflow type

Afin de mener à bien un traitement de géocodage de masse, l'ordonnancement des routes d'API présentées dans le swagger doit être envisagé comme suit :

1. Exécution de la route de création d'un projet (POST /async/projects )

2. En sortie récupération de l'identifiant (élément json "id" dans la réponse) et du jeton (élément json "token" dans la réponse) associé au projet.

3. ou 4. Cette étape peut être permutée avec la suivante. Dépôt du fichier (PUT
/async/projects/{projectId}/input-file).
    - Bien spécifier sur cet appel un header "Authorization Token mon_token_projet" où mon_token_projet correspond à la valeur récupérée en étape 2
    - récupération en sortie du token associé au fichier déposé pour téléchargement ultérieur de ce dernier.

4. ou 3. Définition des paramètres du traitement. 
    - Bien spécifier sur cet appel un header "Authorization Token mon_token_projet" où mon_token_projet correspond à la valeur récupérée en étape 2
    - La rubrique "indexes" définit le type de géocodage : address pour un géocodage d'adresse postales, poi pour un géocodage sur les points  d’intérêt et parcel pour un géocodage de codes parcellaires.
    - "columns" définit les colonnes du fichier livré qui vont être concaténées pour produire l'adresse complète à géocodée. les champs doivent être fournis dans l'ordre pour produire en sortie une adresse du type "24 rue de la Libération 96260 Trifouilly les Oies"
    - les paramètres "type" à "number" présentés ensuite dans le swagger correspondent à des critères de filtrage possible pour le géocodage. Par exemple, si le fichier livré contient un champ "code_insee" il est possible de filtrer les résultats du géocodage en fonction de ce champ en indiquant dans le pipeline : "citycode" : "code_insee".

5. Lancer le Géocodage (POST /async/projects/{projectId}/start)
    - Bien spécifier sur cet appel un header "Authorization Token mon_token_projet" où mon_token_projet correspond à la valeur récupérée en étape 2

6. Exécuter de manière cyclique l'état du traitement (GET /async/projects/{projectId})
    - Bien spécifier sur cet appel un header "Authorization Token mon_token_projet" où mon_token_projet correspond à la valeur récupérée en étape 2
    - Le traitement sera terminé lorsque le paramètre json de la réponse "status" vaudra "completed".
    - Dès lors récupérer en sortie le token du fichier de sortie contenu dans le paramètre json "token" inclus dans l'objet "outputFile".

7. Récupérer le fichier géocodé (GET /async/projects/{projectId}/output-file/{token})
???
??? Le mode authentifié

Pour bénéficier des atouts du mode authentifié du Géocodage de masse, vous devez disposer d'un espace de travail Géoplateforme.

:::info
- Pour en savoir plus sur les conditions d'accès : [CGU Cartes.gouv.fr](https://cartes.gouv.fr/cgu/#annexe-2-offre-geoplateforme)


- Pour demander la création de votre espace, rendez vous sur votre [tableau de bord](https://cartes.gouv.fr/tableau-de-bord/entrepots/demande-de-creation) depuis votre espace connecté cartes.gouv.fr.


- La connexion à la Géoplateforme s'effectue au moyen d'un protocole OAuth2. Nous vous invitons à contacter le support <geoplateforme@ign.fr> qui vous fournira les éléments nécessaires : url d'obtention de token, client id et client secret.
:::
<br>
Une fois authentifié, le token Géoplateforme doit être fourni **uniquement en Header de l'étape 1 du workflow type** décrit plus haut. Cela au moyen d'un Header Authorization Bearer {mon_token}.
<br>

**Le reste du workflow s'effectue avec les token internes au processus de géocodage de masse asynchrone (voir workflow type ci-dessus).**
<br>
<br>
Pour bénéficier de quotas d'upload augmentés par rapport au mode non authentifié ou de davantage de processus de calcul vous devez :

- Lancer un géocodage de masse asynchrone une première fois en mentionnant le Header X-Community associé à l'identifiant Géoplateforme de votre communauté - **communauté, pas datastore** - au moment de la création du projet de Géocodage asynchrone (étape 1 du workflow type). Cela permettra de référencer votre communauté dans le mécanisme de supervision du géocodage asynchrone.

- Contacter le support <geoplateforme@ign.fr> en décrivant votre projet (volume d'adresse, fréquence du géocodage), type de structure pour laquelle vous opérez afin que nous puissions dimensionner correctement les augmentations de quotas associés à votre espace.

???
????
<br>