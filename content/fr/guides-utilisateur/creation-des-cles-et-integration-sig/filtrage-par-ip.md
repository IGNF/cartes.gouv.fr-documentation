---
title: Filtrage par IP
description: Configurez des options supplémentaires pour votre clé
tags:
    - User-Agent
    - Referer
    - Liste blanche
    - Liste noire
    - IP
    - Clé
eleventyNavigation:
    key: Filtrage par IP
    parent: Création et intégration des clés cartes.gouv.fr dans un SIG
    order: 3
    nav: guides-utilisateur
summary:
    visible: true
    depth: 1
pictogram: "digital/in-progress.svg"
---

## Les types de filtres

Vous pouvez restreindre les adresses IP autorisées à utiliser la clé. Trois types de filtres sont disponibles :

- **Adresses IP** (liste blanche ou liste noire)
- **_<span lang="en">User-Agent</span>_**
- **_<span lang="en">Referer</span>_**

Ces filtres fonctionnent **de manière cumulative** : chaque critère ajouté restreint davantage l’accès à votre clé.

:::info
Dans la plupart des cas il est conseillé de n’utiliser qu’un seul type de filtrage. Multiplier les critères peut rendre la configuration trop restrictive et bloquer des requêtes légitimes.
:::

---

## Filtrer par adresses IP

La **« liste blanche »** permet d’autoriser uniquement certaines adresses ou sources (notation <a href="https://fr.wikipedia.org/wiki/Adresse_IP#Agr%C3%A9gation_des_adresses" target="_blank" rel="noopener noreferrer" title="Wikipédia, notation CDIR - ouvre une nouvelle fenêtre">CDIR</a>, exemple : `192.168.0.1/24`). Elle est adaptée aux applications de bureau ou serveurs disposant d’adresses IP fixes et connues.

![Image décrivant le filtrage par liste blanche](/img/guides-utilisateur/creation-des-cles-et-integration-sig/filtrage-par-ip/01_filtrage-liste-blanche.png){.fr-responsive-img .frx-img-contained}

La **« liste noire »** permet de bloquer des adresses spécifiques, mais son usage est rarement recommandé car elle exige de connaître à l’avance les adresses à bloquer.

---

## Filtrer par _<span lang="en">Referer</span>_

Le **« _<span lang="en">Referer</span>_ »** permet d’identifier la page à l’origine de la requête. Elle est adaptée aux intégrations web, afin de limiter l’usage de la clé aux dommaines que vous gérez.

![Image décrivant le filtrage par Referer](/img/guides-utilisateur/creation-des-cles-et-integration-sig/filtrage-par-ip/02_filtrage-referer.png){.fr-responsive-img .frx-img-contained}

---

## Filtrer par _<span lang="en">User-Agent</span>_

Un **« _<span lang="en">User-Agent</span>_ »** permet d’indiquer le navigateur ou le client utilisé. Ce type de filtrage est recommandé pour les applications mobiles, où vous maîtrisez la signature du client et pouvez contrôler l’en-tête HTTP envoyé.

![Image décrivant le filtrage User-Agent](/img/guides-utilisateur/creation-des-cles-et-integration-sig/filtrage-par-ip/03_filtrage-user-agent.png){.fr-responsive-img .frx-img-contained}

Pour configurer le **_<span lang="en">User-Agent</span>_** dans **QGIS** :  

1. Ouvrez le menu **« Options »**, puis l’onglet **« Réseau »**.  
2. Renseignez votre **_<span lang="en">User-Agent</span>_** dans le champ **« _<span lang="en">User-Agent prefix</span>_ »**.
![Image décrivant l’utilisation du User-Agent dans QGIS](/img/guides-utilisateur/creation-des-cles-et-integration-sig/filtrage-par-ip/04_qgis-user-agent-prefix.png){.fr-responsive-img .frx-img-contained}

---

## Finalisation

Pour terminer la création de votre clé, cliquez sur le bouton **« Ajouter »** en bas de la page :

![Image décrivant le bouton ajouter pour finaliser la création de la clé](/img/guides-utilisateur/creation-des-cles-et-integration-sig/filtrage-par-ip/05_finaliser-la-creation.png){.fr-responsive-img .frx-img-contained}

:::callout
Votre clé est maintenant créée ! Utilisez-la dans votre SIG en suivant le tutoriel page suivante.
:::
