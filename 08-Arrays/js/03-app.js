// Veamos algunas operaciones útiles en los arreglos,
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

// Cuanto mide un arreglo
// cuenta los elementos inicia en 1,2 ..
console.log(meses.length);

// Iterador
// Se pone menor porque los arreglos inician en 0
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}
