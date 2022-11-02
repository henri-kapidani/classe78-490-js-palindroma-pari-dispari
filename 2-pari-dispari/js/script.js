/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let divisibility = prompt('Sara\' pari o dispari?').toLowerCase();

divisibility = divisibility === 'pari' ? 0 : 1;
// if (divisibility === 'pari') {
// 	divisibility = 0;
// } else {
// 	divisibility = 1
// }

const userNumber = parseInt(prompt('Dacci il numero tra 1 e 5 compresi'));

const computerNumber = getRandomInteger(1, 5);

if (isDivisible(userNumber + computerNumber, divisibility)) {
	console.log(userNumber, computerNumber, 'Hai vinto');
} else {
	console.log(userNumber, computerNumber, 'Hai perso');
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isDivisible(number, divisibility) {
	if ((divisibility === 0 && number % 2 === 0) || (divisibility === 1 && number % 2 !== 0)) {
		return true;
	}
	return false;
}