'use strict'

/*
Programa que pida 2 numeros
nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos vuelva a pedir que introduzcamos los datos.
*/

var num1 = parseInt(prompt("Inserte el numero 1",0));
var num2 = parseInt(prompt("Inserte el numero 2",0));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
	alert("vuelve a introducir el numero");
	num1 = parseInt(prompt("Inserte el numero 1",0));
	num2 = parseInt(prompt("Inserte el numero 2",0));
}


if(num1 == num2){
	alert("Los numeros son iguales");
} else if(num1 > num2) {
	alert(num1+" es mayor 1")
} else {
	alert(num2+" es mayor 2 ");
}

