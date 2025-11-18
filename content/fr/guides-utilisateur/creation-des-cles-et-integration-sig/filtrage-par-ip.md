---
title: Filtrage par IP
nav: guides-utilisateur
tags:
    - User-agent
    - Referer
    - Liste blanche
    - Liste noire
    - IP
eleventyNavigation:
    key: Filtrage par IP
    parent: Création et intégration des clés Cartes.gouv.fr dans un SIG
    order: 3
description: Configurer le filtrage par IP, User-Agent ou Referer lors de l’usage d’une clé d’accès.
summary:
    visible: true
    depth: 2
---

## Filtrage par IP (optionnel)

Vous pouvez restreindre les adresses IP autorisées à utiliser la clé. Trois types de filtres sont disponibles :  

- **Adresses IP** (liste blanche ou liste noire)  
- **_<span lang="en">User-Agent</span>_**
- **_<span lang="en">Referer</span>_**  

Ces filtres fonctionnent **de manière cumulative** : chaque critère ajouté restreint davantage l’accès à votre clé.  
Dans la plupart des cas, **utilisez un seul type de filtrage** selon votre besoin.  

Multiplier les critères peut rendre la configuration trop restrictive et bloquer des requêtes légitimes.  

### Définitions utiles

- **_<span lang="en">Referer</span>_ :** identifie le navigateur ou le client utilisé.  
- **Liste blanche :** autorise uniquement certaines adresses ou sources (notation CIDR, ex. `192.168.0.1/24`).  
- **Liste noire :** bloque des adresses spécifiques, mais son usage est rarement recommandé.  
- **_<span lang="en">User-Agent</span>_ :** indique la page à l’origine de la requête.  


### Bonnes pratiques selon le type d’application


- **_<span lang="en">Referer</span>_ :** utile pour les intégrations web, afin de limiter l’usage de la clé aux domaines que vous gérez.  

![Filtrage Referer](/img/guides-utilisateur/creation-des-cles-et-integration-sig/7.filtrage-referer.png){.fr-responsive-img .frx-border-img .frx-img-contained}

- **Liste blanche d’IP :** adaptée aux applications de bureau ou serveurs disposant d’adresses IP fixes et connues.  

![Filtrage Liste blanche](/img/guides-utilisateur/creation-des-cles-et-integration-sig/8.filtrage-liste-blanche.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Les listes noires d’IP sont rarement utilisées pour sécuriser une clé API. Elles exigent de connaître à l’avance les adresses à bloquer, tandis qu’une **liste blanche** n’autorise que les sources explicitement validées, garantissant une meilleure sécurité.  
:::

- **User-Agent :** recommandé pour les applications mobiles, où vous maîtrisez la signature du client et pouvez contrôler l’en-tête HTTP envoyé.  

![Filtrage User-Agent](/img/guides-utilisateur/creation-des-cles-et-integration-sig/9.filtrage-user-agent.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::warning
Pour configurer le **_<span lang="en">User-Agent</span>_ :** dans **QGIS** :  
:::

1. Ouvrez le menu **« Options »**, puis l’onglet **« Réseau »**.  
2. Renseignez votre **_<span lang="en">User-Agent</span>_ :** dans le champ **_<span lang="en">User-Agent prefix</span>_ :**.  

![QGIS User-Agent Prefix](/img/guides-utilisateur/creation-des-cles-et-integration-sig/10.qgis-user-agent-prefix.png){.fr-responsive-img .frx-border-img .frx-img-contained}


Cette étape est utile si vous avez choisi un filtrage par **_<span lang="en">User-Agent</span>_ :** lors de la création de votre clé.  

:::callout
Pour continuer le turoriel, consultez la page sur l’intégration d’une clé d’accès dans un SIG avec QGIS et FME.
:::

---