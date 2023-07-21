# O'theme

On a vu comment faire des composants afin de découper notre UI ! 💪

On va pouvoir aller plus loin maintenant en venant introduire le concept de programmation déclarative grâce à la mise en place d'une source de vérité : **le state**

Pour ça, on va se faire une petite application avec une seule feature : **le dark mode** 🤩

## Initialisation du projet

- Pour commencer on va cloner ce repo sur notre machine, puis se rendre dedans via le terminal
- Ensuite, pour initialiser projet React rapidement on a vu un outils : **Create React App** !

```sh
# Pour init un projet React dans le dossier courant
npx create-react-app .
```

:warning: Une fois la commande lancée, un nouveau fichier `README.md` sera crée. Celui ci sera renommé en `README.old.md`

## Intégration basique

Dans son état initial, l'application doit ressembler à quelque chose comme ça :

!["Résultat light mode"](./docs/resultat1.png)

Le logo est fournit dans le dossier `docs`

## Dark mode

Pour la feature il va falloir apprendre de nouvelles choses ! 😍

- On va devoir apprendre à gérer les events dans une application React
- Respecter le paradigme de la **programmation déclarative** avec la mise en place d'une sourcé de vérité ✨
- Sa baser sur cette source de vérité afin d'afficher ce qu'il faut à l'utilisateur

!["Résultat light mode"](./docs/resultat2.png)

### LET'S GO ! :rocket: