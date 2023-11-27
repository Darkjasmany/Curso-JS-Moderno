// Veamos como acceder a los elementos de un arreglo...

const numeros = [10, 20, 30, 40, 50, [5, 2, 3]];

// esta vez estare utilizando, indicaran en forma de tabla indicando el indice y el valor
console.table(numeros);

// Acceder al arreglo
// La forma en la que accedes a un arreglo es por lo que se econoce como el indice en el arreglo, los arreglos inician en 0 usualmente aunque hay lenguajes donde inician en 1

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[20]); // estas consultando un indice del arreglo que no esta definido con valor
// Para acceder al indice 5 y obtener el valor 2 del arreglo dento del arreglo
console.log(numeros[5][1]);
