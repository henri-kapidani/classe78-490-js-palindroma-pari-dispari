/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
Chiedere all’utente di inserire una parola

se isPalindrom(parola)
	stampa 'parola palindroma'
altrimenti
	stampa 'parola NON palidroma'
fine se

funzione isPalindrom(parola) {
	invertire la parola
	confrontarla con la parola originale
	se uguali
		return true
	altrimenti
		return false
	fine se
}
*/

const word = prompt('Dammi la parola da testare'); // ciao

if (isPalidnrom(word)) {
	console.log('palindroma');
} else {
	console.log('NON palindroma');
}

function isPalidnrom(testWord) {
	// let testWord = ... quello che viene passato come argomento ...

	// metodo 1
	// const invertedWord = testWord.split('').reverse().join('');
	// if (testWord === invertedWord) {
	// 	return true;
	// }
	// return false;

	// metodo 2
	// let invertedWord = '';
	// for (let i = testWord.length - 1; i >= 0; i--) {
	// 	invertedWord += testWord[i];
	// }
	// if (testWord === invertedWord) {
	// 	return true;
	// }
	// return false;

	// metodo 3
	const indexHalf = parseInt(testWord.length / 2);
	for (let i = 0; i < indexHalf; i++) {
		console.log(testWord[i], testWord[testWord.length - 1 - i]);
		if (testWord[i] !== testWord[testWord.length - 1 - i]) {
			return false;
		}
	}
	return true;
}