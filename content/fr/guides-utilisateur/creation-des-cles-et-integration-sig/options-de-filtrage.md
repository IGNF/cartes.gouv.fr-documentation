---
title: Options de filtrage supplémentaires
description: Configurez des options de filtrage supplémentaires pour votre clé
tags:
    - User-Agent
    - Referer
    - Liste blanche
    - Liste noire
    - IP
    - Clé
eleventyNavigation:
    key: Options de filtrage supplémentaires
    parent: Création et intégration des clés cartes.gouv.fr dans un SIG
    order: 3
    nav: guides-utilisateur
summary:
    visible: true
    depth: 1
pictogram: "digital/in-progress.svg"
---

## Types de filtrages

Vous pouvez restreindre l’utilisation de vos clés d’accès de trois façons différentes :

- par **adresse IP**
- par **_<span lang="en">User-Agent</span>_**
- par **_<span lang="en">Referer</span>_**

Ces filtres fonctionnent **de manière cumulative** : chaque critère ajouté restreint davantage l’accès à votre clé.

:::info
Dans la plupart des cas il est conseillé de n’utiliser qu’un seul type de filtrage. Multiplier les critères peut rendre la configuration trop restrictive et bloquer des requêtes légitimes.
:::

---

## Filtrer par adresse IP

La **« liste blanche »** permet d’autoriser uniquement certaines adresses ou plages d’adresses sources (notation <a href="https://fr.wikipedia.org/wiki/Adresse_IP#Agr%C3%A9gation_des_adresses" target="_blank" rel="noopener noreferrer" title="Wikipédia, notation CDIR - ouvre une nouvelle fenêtre">CDIR</a>, exemple : `192.168.0.1/24`). Elle est adaptée aux applications de bureau ou serveurs disposant d’adresses IP fixes et connues. C’est généralement le cas si vous comptez utiliser votre clé derrière un proxy d’entreprise.

![Option de filtrage par liste blanche avec une plage d’IP dans un champ teste et un bouton Ajouter](/img/guides-utilisateur/creation-des-cles-et-integration-sig/filtrage-par-ip/01_filtrage-liste-blanche.png){.fr-responsive-img .frx-img-contained}

La **« liste noire »** permet de bloquer des adresses spécifiques, mais son usage est rarement recommandé car elle exige de connaître à l’avance les adresses à bloquer.

---

## Filtrer par _<span lang="en">Referer</span>_

Le **« _<span lang="en">Referer</span>_ »** permet d’identifier la page ou le site web à l’origine de la requête. Elle est adaptée aux intégrations web, afin de limiter l’usage de la clé aux dommaines que vous gérez.

![Exemple de filtrage par Referer avec une domaine fictif](/img/guides-utilisateur/creation-des-cles-et-integration-sig/filtrage-par-ip/02_filtrage-referer.png){.fr-responsive-img .frx-img-contained}

---

## Filtrer par _<span lang="en">User-Agent</span>_

Un **« _<span lang="en">User-Agent</span>_ »** permet d’indiquer le navigateur ou le logiciel client utilisé. Ce type de filtrage est recommandé pour les applications mobiles, où vous maîtrisez la signature du client et pouvez contrôler l’en-tête HTTP envoyé.

![Exemple de filtrage par User-agent avec un nom d’application fictif](/img/guides-utilisateur/creation-des-cles-et-integration-sig/filtrage-par-ip/03_filtrage-user-agent.png){.fr-responsive-img .frx-img-contained}

Pour configurer le **_<span lang="en">User-Agent</span>_** dans **QGIS** :  

1. Ouvrez le menu **« Options »**, puis l’onglet **« Réseau »**.  
2. Renseignez votre **_<span lang="en">User-Agent</span>_** dans le champ **« _<span lang="en">User-Agent prefix</span>_ »**.
![Localisation du champ User-Agent prefix dans les options réseau de QGIS](/img/guides-utilisateur/creation-des-cles-et-integration-sig/filtrage-par-ip/04_qgis-user-agent-prefix.png){.fr-responsive-img .frx-img-contained}

---

## Finalisation

Pour terminer la création de votre clé, cliquez sur le bouton **« Ajouter »** en bas du formulaire :

![Bouton ajouter pour finaliser la création de la clé](/img/guides-utilisateur/creation-des-cles-et-integration-sig/filtrage-par-ip/05_finaliser-la-creation.png){.fr-responsive-img .frx-img-contained}

:::callout
Votre clé est maintenant créée ! Utilisez-la dans votre SIG en suivant le tutoriel page suivante.
:::
