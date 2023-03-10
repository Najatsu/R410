'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function defineHeading1() {
	document.title = document.getElementById("title").innerText;

}

function defineHeading2() {

	document.title = document.querySelector('h2').innerText;
}

function defineHeading3() {

	document.title = document.querySelectorAll('h2')[document.querySelectorAll('h2').length - 1].innerText;
}

function defineHeading4() {
	let parité = document.getElementsByClassName("firstOrlast").length;

	document.title = (parité == 0) ? "Foulcher Benjamin" : (parité % 2 == 0) ? document.getElementsByClassName("firstOrlast")[0].innerText : document.getElementsByClassName("firstOrlast")[parité - 1].innerText;

}

function swapInnerHTML() {
	let tabP = document.querySelectorAll('p');
	let aux = tabP[0].innerHTML;
	tabP[0].innerHTML = tabP[1].innerHTML;
	tabP[1].innerHTML = aux;
}

function dateAlter() {
	let auj = new Date;
	let txt = "Dernière modification : le " + auj.toDateString() + " par " + document.querySelector('meta[name="author"]').content + ".";
	let div = document.querySelectorAll('div')[document.querySelectorAll('div').length - 1];
	div.querySelector('p').textContent = txt;
}

function getNbDays() {
	let auj = new Date();
	let annee = auj.getFullYear()+1;
	let finannee = new Date(annee.textContent, 0, 1);
	let days = Math.ceil((finannee - auj) / (1000 * 60 * 60 * 24))
	document.getElementById("nbjours").textContent = days;
	document.getElementById("annee").textContent = finannee.getFullYear();
}

function updateClock1() {
	const h = document.getElementById("clock").content;
	let auj = new Date();
	h.textContent = auj.getHours() + ":" + auj.getMinutes() + ":" + auj.getSeconds();
}


function updateClock2() {
	let h = document.getElementById("clock").content;
	let auj = new Date();
	h = auj.getHours() + ":" + auj.getMinutes() + ":" + auj.getSeconds();
	setTimeout(updateClock2(), 1000);
}

function onLoad() {
	console.log('In onLoad() function…');
	defineHeading4();
	swapInnerHTML();
	dateAlter();
	//document.querySelector('p').addEventListener("onclick",getNbDays());
	setInterval(updateClock1(), 1000);

}


