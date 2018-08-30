'use strict'

//Switch
var edad = 18;
var imprime = "";

switch(edad) {
	case 18:
		imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25:
		imprime = "Adulto";
	break;
	default:
		imprime = "tu edad es neutra";
	break;
}

console.log(imprime);