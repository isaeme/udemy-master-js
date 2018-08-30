'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahí mostrar el resultado.
*/

var suma = 0;
var cont = 0;

do {
	var num = parseInt(prompt("Introduce un número"));
	if (num > 0) {
		suma = suma + num; // suma += num;
		cont++;
	} else {
		alert("Hasta ahora la media es " + suma/cont + " y la suma es " + suma);
	}
} while (num > 0)


