'use strict'
//CONSTANTES
// Como una variable, pero su valor no puede cambiar.

var web = "https://veromoreno.com";
const ip = "192.88.0.12";

web = "http://veromoreno.com";
ip = "555"; // Esto da error, porque no puedes cambiar una constante.
console.log(web, ip);