---
title: Correction de bugs + ajout de TMS
description: Des corrections de bugs sont aussi prévues. Ces changements auront lieu le 12 août 2025. 
tags:
    - Changement
    - Entrepot
    - Correction bugs
    - WFS
    - Authentification
    - LIDAR
eleventyNavigation:
    key: Correction de bugs + ajout de TMS
    order: 13
---

# Changements

Ajout du TMS 2154_50cm_MNT et modification du TMS 2154_1M_MNT

Ajout du TMS 2154_50cm_MNT : l'origine est décalée pour que les valeurs des données LidarHD, valeurs sur le maillage, soit bien la valeur au centre du pixel dans les données de la pyramide (au niveau du bas).

Changement du TMS 2154_1M_MNT : l'origine est décalée pour que les valeurs des données RGEAlti, valeurs sur le maillage, soit bien la valeur au centre du pixel dans les données de la pyramide (au niveau du bas).

# Correction de bugs

- [ORCHESTRATEUR] [LIDAR] Corection d'un bug lors le génération de pyramide COPC via copiying en cas de grand nombre de fichiers.
- [VERIFICATION] [LIDAR] Lors de la vérification de la livraison d'une pyramide EPT, ne considère plus le warning "download too many points" comme une erreur.
- [SCRIPTS] [ARCHIVE] Correction d'un bug lors de l'ajout de nouveaux fichiers dans une donnée stockée ARCHIVE où les fichiers d'origine étaient supprimés et seuls les nouveaux fichiers étaient présents.
- [WFS] Suppression du format de sortie application/geo+json dans le GetCapabilities du WFS (format ne fonctionnant pas).
- [WFS] Les valeurs du paramètre OUTPUTFORMAT deviennent sensible à la casse.
- [AUTHENTIFICATION] Retour des logos en pied de page de la page d'authentification sur la GPF.
