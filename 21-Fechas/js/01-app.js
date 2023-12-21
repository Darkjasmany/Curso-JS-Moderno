// En javascript hay un objeto llamado Date
const diaHoy = new Date();
const diaHoy12 = new Date("10-3-2020");
console.log(diaHoy12);

let valor;

// En este momento
Date.now();

// Date es Mes, dia y año
let cumple = new Date("8-3-1991");
cumple = new Date("January 5 1987");

// .toString lo cambiaria de object a string

console.log(typeof valor);

// Convertir fecha a string

// cumple.toString();
valor = cumple;

valor = diaHoy.getMonth(); //mes actual pero inicia en 0 Enero, 1 Febrero
valor = diaHoy.getDate();
valor = diaHoy.getDay();
valor = diaHoy.getFullYear(); //año actual
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2018);

console.log(valor);
