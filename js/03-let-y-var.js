//20. Let y Var
'use strict'
// LET Y VAR
// let es muy típica de TypeScript pero ya se puede usar en JS

//VAR
var numero = 40;
console.log(numero); // vale 40
if(true) {
	var numero = 50;
	console.log(numero); // vale 50
}
console.log(numero); // vale 50
 
//LET > Actúa a nivel de bloque. valor de texto es = al inicial.
var texto = "Curso JS";
console.log(texto); // vale Curso Js
if(true) {
	let texto = "Curso de pacotilla";
	console.log(texto); // vale Curso de pacotilla
}
console.log(texto); // vale Curso Js