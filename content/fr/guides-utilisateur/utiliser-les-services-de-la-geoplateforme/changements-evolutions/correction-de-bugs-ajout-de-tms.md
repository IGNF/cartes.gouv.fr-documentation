---
title: Correction de bugs + ajout de TMS
description: Des corrections de bugs sont aussi prévues
tags:
    - Entrepôt
    - Correction de bugs
    - WFS
    - Authentification
    - Lidar
eleventyNavigation:
    key: Correction de bugs + ajout de TMS
    order: -20250812
date: 2025-08-12
---

## Changements

Ajout du TMS `2154_50cm_MNT` et modification du TMS `2154_1M_MNT`.

Ajout du TMS `2154_50cm_MNT` : l’origine est décalée pour que les valeurs des données LiDAR HD, valeurs sur le maillage, soit bien la valeur au centre du pixel dans les données de la pyramide (au niveau du bas).

Changement du TMS `2154_1M_MNT` : l’origine est décalée pour que les valeurs des données RGE ALTI, valeurs sur le maillage, soit bien la valeur au centre du pixel dans les données de la pyramide (au niveau du bas).

## Correction de bugs

- [Orchestrateur] [Lidar] Correction d’un bug lors de la génération de pyramide COPC via <span lang="en">_copyingg_</span> en cas de grand nombre de fichiers
- [Vérification] [Lidar] Lors de la vérification de la livraison d’une pyramide EPT, ne considère plus le <span lang="en">_warning_</span> « download too many points » comme une erreur
- [Scripts] [Archive] Correction d’un bug lors de l’ajout de nouveaux fichiers dans une donnée stockée `ARCHIVE` où les fichiers d’origine étaient supprimés et seuls les nouveaux fichiers étaient présents
- [WFS] Suppression du format de sortie « application/geo+json » dans le `GetCapabilities` du WFS (format ne fonctionnant pas)
- [WFS] Les valeurs du paramètre `OUTPUTFORMAT` deviennent sensibles à la casse
- [Authentification] Retour des logos en pied de page de la page d’authentification sur la GPF