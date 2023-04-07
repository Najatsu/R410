# M413 - TD2 : Réponses aux Questions

## Exercice 1 :

J'ai ajouté l'écouteur d'évènement sur le body, via le code suivant : **document.body.addEventListener('click',initSelect);**

currentTarget pointe vers **l'élément** sur lequel l'EventListener **a été attaché**, alors que target pointe vers **l'élément** à partir duquel l'évènement **s'est produit**.
Si on l'utilise, tout le body devient rose.

Tout d'abord, je récupère le type de l'élèment à ajouter ainsi que le texte qu'il doit contenir, grâce à **getElementById("ID").value**.
Ensuite, je crée l'élément en question et je lui ajoute le texte avec **newElement.appendChild(textNode);**, puis j'appelle **insertBefore()**.

J'ai vérifié que ni l'élément sélectionné ni son parent ne contenait l'id **insert-div**.

