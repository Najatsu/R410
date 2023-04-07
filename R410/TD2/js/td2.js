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
	  selectedElement.id != "insert-div" &&
	  selectedElement.parentNode.id != "insert-div"
	) {
	  
	  let previouslySelectedElement = document.querySelector(".selected2");
	  if (previouslySelectedElement) {
		previouslySelectedElement.classList.remove("selected2");
	  }
  
	  selectedElement.classList.add("selected2");
	  insertElement(selectedElement);
	}
  }

function insertElement(target) {
	
	let elementType = document.getElementById("insert-type").value;
	let elementText = document.getElementById("insert-text").value;
  
	let newElement = document.createElement(elementType);
	let textNode = document.createTextNode(elementText);
	newElement.appendChild(textNode);
  
	target.parentNode.insertBefore(newElement, target);
}

function search() {
	const selectElements = document.querySelectorAll('.select');
	
	selectElements.forEach(element => {
  	element.classList.remove('select');
	});

	const searchTerm = document.getElementById('searchTerm').value;
	const regex = new RegExp(searchTerm, 'gi');
	// J'utilise un node iterator pour parcourir les noeuds et non les balises elles mêmes.
	const iterator = document.createNodeIterator(
	  document.body,
	  NodeFilter.SHOW_TEXT,
	  { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } }
	);
  
	let node;
	while (node = iterator.nextNode()) {
	  if (regex.test(node.nodeValue)) {
		const matches = node.nodeValue.match(regex);
		matches.forEach(match => {
		  const span = document.createElement('span');
		  span.className = 'select';
		  const startIndex = node.nodeValue.indexOf(match);
		  const endIndex = startIndex + match.length;
		  const prefix = node.nodeValue.substring(0, startIndex);
		  const suffix = node.nodeValue.substring(endIndex);
		  const highlighted = document.createTextNode(match);
		  node.parentNode.insertBefore(document.createTextNode(prefix), node);
		  node.parentNode.insertBefore(span, node);
		  span.appendChild(highlighted);
		  node.parentNode.insertBefore(document.createTextNode(suffix), node);
		  node.parentNode.removeChild(node);
		});
	  }
	}
  }

function interactiveSearch() {
	const selectElements = document.querySelectorAll('.select');
	
	selectElements.forEach(element => {
  	element.classList.remove('select');
	});

	const searchTerm = document.getElementById('InteractsearchTerm').value; 
	const regex = new RegExp(searchTerm, 'gi');
	// J'utilise un node iterator pour parcourir les noeuds et non les balises elles mêmes.
	const iterator = document.createNodeIterator(
	  document.body,
	  NodeFilter.SHOW_TEXT,
	  { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } }
	);
  
	let node;
	while (node = iterator.nextNode()) {
	  if (regex.test(node.nodeValue)) {
		const matches = node.nodeValue.match(regex);
		matches.forEach(match => {
		  const span = document.createElement('span');
		  span.className = 'select';
		  const startIndex = node.nodeValue.indexOf(match);
		  const endIndex = startIndex + match.length;
		  const prefix = node.nodeValue.substring(0, startIndex);
		  const suffix = node.nodeValue.substring(endIndex);
		  const highlighted = document.createTextNode(match);
		  node.parentNode.insertBefore(document.createTextNode(prefix), node);
		  node.parentNode.insertBefore(span, node);
		  span.appendChild(highlighted);
		  node.parentNode.insertBefore(document.createTextNode(suffix), node);
		  node.parentNode.removeChild(node);
		});
	  }
	}
  }

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	//document.body.addEventListener('click',Select);
	//document.body.addEventListener('click',Select2);
	document.getElementById('InteractsearchTerm').addEventListener('input',interactiveSearch);

}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
