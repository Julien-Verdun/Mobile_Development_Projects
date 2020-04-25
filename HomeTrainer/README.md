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

FOR TIME WOD
Best Time -> stocker le temps pour chaque WOD
Donner un identifiant unique à chaque wod et l'utiliser pour stocker le meilleur temps et le charger au demarage

Training
Completer les descriptions des exos manquants et ajouter les images

MEILLEUR TEMPS
permettre a l'utilisateur d'avoir un historique de ses performances et d'observer sont évolutions (un graphique par exemple) -> renseigner la date quand il enregistre son temps

HISTORIQUE UTILISATEUR
Faire une page de statistique pour l'utilisateur, pour qu'il puisse suivre ses temps et son évolution -> mettre des graphiques par exemple
Mettre un contribution graph (heatmap) en premire vue pour montrer l'activité globale du joueur (a chaque fois qu'il a fais une activité)
Mettre ensuite par exercise un graphique par entrainement qui indique l'evolution des temps du joueur (temps necessaire en fonction de la date par exemple Bezier Line Chart)

CLOCK :
styliser l'horloge et la liste des temps enregistrés
Faire une clock par type de WOD, qui permet de paramtrer, par exemple TABATA -> 20sec 10sec, AMRAP -> sonnerie a la fin, classique -> définition de sonnerie à intervalle régulier avec temps de récup

SETTINGS
Mettre un menu "paramètres" pour pouvoir choisir la langue de l'application (stocker chaque text de l'appli dans un dossier text au niveau de style et view avec la meme arborescence, et y stocker la version francaise et anglaise)

AMELIORATIONS :
Mettre un ActivityIndicator pour montrer le chargement lorsqu'il y en a un
Faire fonctionner le son meme en dehors de l'application (la faire tourner en tache de fond)
Memoriser un ecran quand on reviens en arrière

Mettre un système de notation des wod (utiliser pour cela Rating de react-native-elements)

Utiliser react-native-elements pour styliser l'appli
Utiliser react-native-chart-kit pour les graphiques

Supprimer SideBarMenu et style ?

AUTHENTIFICATION:
https://reactnavigation.org/docs/auth-flow/
utiliser redux pour l'implémenter
