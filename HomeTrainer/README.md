# HOME TRAINER

This **React-native** project is my second mobile application project. First time I developed an Android application with Android Studio and programming language **java**.

Here I learnt how to use React Native with an OpenClassroom training.

## Get started

Run the following lines to install the packages and run the application.

```
npm install
npm start
```

## Description

This application allows every athlete, particularly crossfit athletes, a sport that I am fond of, to program and follow his training and monitor his performances.

## Data Storage

Stored data are :

- the user performances
- the training added by player

Different keys are used, reached with Async Storage package, with key "@MySuperStore:key".

### Training storage

The key _*trainings*_ is used to store the new training.

```
"@MySuperStore:trainings"
```

It includes every training, which are separated with the separator : "\*-\*".

For example the workout "CHAD", is stored as follow :

and the informations, separated with the sign "\*;\*", are stored as follow : type, number rounds, time 1, time 2, exercise 1, exercise 2.

### Performances storage

...

## TO-DO

Training Creator
Stylisé la liste des exercises ajoutés

MEILLEUR TEMPS
permettre a l'utilisateur d'avoir un historique de ses performances et d'observer sont évolutions (un graphique par exemple) -> renseigner la date quand il enregistre son temps

AJOUT D'UN NOUVEAU WOD
Styliser l'appli

PRESENTATION DE LA LISTE DES WODS
Styliser l'appli

CLOCK :
styliser l'horloge et la liste des temps enregistrés

AMELIORATIONS :
Mettre un ActivityIndicator pour montrer le chargement lorsqu'il y en a un
Faire fonctionner le son meme en dehors de l'application (la faire tourner en tache de fond)
MEmoriser un ecran quand on reviens en arrière
Mettre des images dans les descriptions des exercices pour les illustrer
