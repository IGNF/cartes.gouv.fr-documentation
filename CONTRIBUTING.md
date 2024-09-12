# Contribuer

Merci de nous aider sur ce projet ou d'envisager de le faire. Tout type de contribution est bienvenue.

## Contributions autres que du code

N'hésitez pas à formuler toute proposition de nouvelle documentation, question, signalement d'anomalie ou demande d'évolution fonctionnelle dans une [nouvelle issue](https://github.com/IGNF/cartes.gouv.fr-documentation/issues/new/choose).

Vous pouvez également parcourir les [issues existantes](https://github.com/IGNF/cartes.gouv.fr-documentation/issues) pour voir si le sujet n'a pas déjà été abordé et apporter des informations complémentaires ou proposer des pistes de solutions.

## Modifier le code ou la documentation

Si vous voulez corriger une anomalie ou apporter une nouvelle fonctionnalité vous-même, faites ces modifications dans un fork du dépôt et soumettez-nous une [pull request](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

N'hésitez pas à consulter la documentation [rédacteur](docs/redacteur.md) si vous voulez modifier le contenu du site ou [développeur](docs/developpeur.md) si vous voulez modifier ses fonctionnalités.

Ci-dessous, un guide pas à pas décrit le processus de contribution via un fork et une pull request. Si vous êtes déjà familier de Git et Github, il ne vous sera pas nécessaire mais peut constitue néanmoins un document auquel vous pouvez vous référer en cas de doute. Il répète quelques éléments présents dans la documentation d'installation.

### Première installation

-   Créez un compte Github
-   Installez Git sur votre poste de travail
-   Configurez Git avec votre nom et votre email
-   Forkez le dépôt
-   Clonez votre fork (en utilisant SSH ou l'url HTTPS) :

```bash
git clone git@github.com:your_GH_account/cartes.gouv.fr-documentation.git
```

(en cas de problème, vérifiez votre configuration réseau. Si vous travaillez derrière un proxy, vérifiez par exemple vos variables d'environnement HTTP_PROXY et HTTPS_PROXY)

-   Placez vous dans le nouveau dossier créé :

```bash
cd cartes.gouv.fr-documentation
```

-   Ajoutez le dépôt principal comme source "upstream" (en utilisant l'url HTTPS) :

```bash
git remote add upstream https://github.com/IGNF/cartes.gouv.fr-documentation
```

-   Votre remote devrait maintenant être "origin", votre fork, et "upstream" devrait correspondre au dépôt principal sur IGNF. Vous pouvez le vérifier en utilisant la commande :

```bash
git remote -v
```

-   Vous devriez voir quelque-chose comme ça :

```
origin	git@github.com:your_GH_account/cartes.gouv.fr-documentation.git (fetch)
origin	git@github.com:your_GH_account/cartes.gouv.fr-documentation.git (push)
upstream	https://github.com/IGNF/cartes.gouv.fr-documentation.git (fetch)
upstream	https://github.com/IGNF/cartes.gouv.fr-documentation.git (push)
```

Il est important qu'"origin" pointe bien vers votre fork.

### Maintenir votre dépôt à jour

-   Assurez vous d'être sur la branche main :

```bash
git checkout main
```

-   Téléchargez les mises à jour de toutes les branches de upstream :

```bash
git fetch upstream
```

-   Mettez à jour votre branche main locale au même niveau que la branche main du dépôt principal :

```bash
git rebase upstream/main
```

### Mettre à jour si vous avez des changements locaux

Si la commande précédente `rebase` échoue avec le message "error: cannot rebase: You have unstaged changes...",
mettez vos modifications locales de côté dans le "stash" en utilisant la commande :

```bash
git stash
```

-   Maintenant vous pouvez "rebaser" :

```bash
git rebase upstream/main
```

-   Puis réappliquez vos changements mis de côté :

```bash
git stash apply
```

-   Supprimez les changements que vous aviez mis dans le "stash" (optionnel):

```bash
git stash pop
```

### Créer une branche

Maintenant que vous avez mis à jour votre branche main locale, vous pouvez créer une nouvelle branche à partir d'elle :

-   Créez une branche (ici appelée "nouvelle-doc") et placez vous dessus :

```bash
git checkout -b nouvelle-doc
```

### Apporter des changements

Vous pouvez utiliser l'éditeur de votre choix pour apporter des changements. Nous recommandons [Visual Studio Code](https://code.visualstudio.com/download).

### Commiter les changements

-   Ajoutez les fichiers au commit (fichiers modifiés ou ajoutés) :

```bash
git add file1
git add file2
```

-   Commitez le changement :

```
git commit -m "ajout nouvelle doc"
```

NB : dans l'exemple, le commit porte le message "ajout nouvelle doc". Utilisez un message court mais explicite pour décrire vos changements. Ne décrivez pas tous vos commits de la même façon.

### Pousser les changements sur GitHub

-   Poussez les changements de votre nouvelle branche sur votre fork sur github :

```bash
git push origin nouvelle-doc
```

### Créer une pull-request

Au moment de votre push, GitHub va vous répondre directement en vous donnant l'URL à laquelle vous pouvez créer votre pull request. Vous pouvez suivre cette URL ou vous rendre à tout moment sur votre fork sur Github, afficher la branche "nouvelle-doc" et Github vous montrera un bandeau avec un bouton pour créer une nouvelle pull request.

### Après avoir créé une pull request

Les mainteneurs du dépôt vont maintenant examiner votre pull request.
Si besoin, ils travailleront avec vous pour améliorer vos changements.

Une fois que les changements dans votre pull request seront prêts à être intégrés, les mainteneurs décideront de la façon la plus appropriée de les intégrer dans la branche main du dépôt principal :

-   en mergeant la branche avec tous ces commits + un merge commit,
-   en combinant tous les commits en un seul (squash)
-   ou en rebasant tous vos commits sur la branche main, à la suite des commits déjà présents.
