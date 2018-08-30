'use strict'
// Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1+numero2;


//Tipos de datos
var numero_entero = 44;
var cadena_texto = "Hola que tal";
var booleano = true;

var numero_falso = "33";
Number(numero_falso);

console.log(numero_falso+7); // concatena el string
console.log(Number(numero_falso)+7); // resultado suma de string
console.log(parseInt(numero_falso)+7); // Convierte a numero ENTERO
console.log(parseFloat(numero_falso)+7.4); // // Convierte a numero DECIMAL
console.log(String(numero_falso)+7.4); // convierte a Texto

//Type Of
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof booleano);
console.log(typeof numero_falso);
