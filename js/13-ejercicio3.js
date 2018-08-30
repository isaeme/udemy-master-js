'use strict'

/* Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario*/

var num1 = parseInt(prompt("Introduce num1",0));
var num2 = parseInt(prompt("Introduce num2",0));
//Si pongo 2  y 10 muestra el 3,4,5,6,7,8,9

document.write("<h1>De " +num1+ " a " +num2+" están estos numeros:</h1>")
for (var i=num1; i<=num2; i++) {
	document.write(i);
}