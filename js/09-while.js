'use strict'

//Bucle indefinido While

var year = 2018;

while(year != 1991) {
	console.log(year)
	if (year == 2000) {
		break;
	}
	year --;
}

// Do while
var years = 30;

do {
	alert("solo cuando sea diferente a 20");
	years--;
} while (years > 25)