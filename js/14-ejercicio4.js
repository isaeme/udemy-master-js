'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/


var num1 = parseInt(prompt("Introduce num1",0));
var num2 = parseInt(prompt("Introduce num2",0));

for (var i = num1; i <= num2; i++) {
	if (i%2) {
		document.write(i+" <br>");
	}
}