/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function initSelect(event){
	let selectedElement = event.target;
  	selectedElement.style.backgroundColor = "pink";
}

function Select(event) {
	let selectedElement = event.target; 

	if (selectedElement.classList.contains("selected")) {
	  selectedElement.classList.remove("selected"); 
	} else {
	  selectedElement.classList.add("selected"); 
	}
  }

  function Select2(event) {
	let selectedElement = event.target; 

	if (
	  !selectedElement.classList.contains("insert-div") &&
	  !selectedElement.parentNode.classList.contains("insert-div")
	) {
	  
	  let previouslySelectedElement = document.querySelector(".selected2");
	  if (previouslySelectedElement) {
		previouslySelectedElement.classList.remove("selected2");
	  }
  
	  selectedElement.classList.add("selected2");
	}
  }

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	document.body.addEventListener('click',Select);
	document.body.addEventListener('click',Select2);

}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
