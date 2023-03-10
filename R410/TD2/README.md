# M413 - TD2 : Réponses aux Questions

## Exercice 1 :

J'ai ajouté l'écouteur d'évènement sur le body, via le code suivant : **document.body.addEventListener('click',initSelect);**

currentTarget pointe vers **l'élément** sur lequel l'EventListener **a été attaché**, alors que target pointe vers **l'élément** à partir duquel l'évènement **s'est produit**.
Si on l'utilise, tout le body devient rose.