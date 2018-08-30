'use strict'

/*Numero de divisores de un numero introducidos en un prompt*/

var num1 = parseInt(prompt("Introduce num",1));

for (var i=1; i<=num1 ; i++) {
	if(num1%i == 0) {
		console.log(i);
	}
}