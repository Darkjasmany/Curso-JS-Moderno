// Veamos lo que es break y continue, break cortará la ejecución del for loop, mientras que continue nos permitirá interceptar digamos un elemento y continuar su ejecucicón...

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log(`Numero es:  ${i}, se detiene CINCO`);
        break; //detener la ejecucion del forloop
        // continue; //Llega hasta aca pero no lo vuelve a lista ( repetir) y el resultado es 0,1,2,3,4,5 CINCO,6,7,8,9,10
    } else {
        console.log(`Numero es:  ${i}`);
    }
}

// Los for son útiles cuando tienes un arreglo, digamos un carrito de compras...

const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Televisión 50 Pulgadas", precio: 700, descuento: true },
    { nombre: "Tablet ", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
];

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue; // para que no lo liste dos veces y solo muestre el detalle que tiene descuento y pase a la tablet
    }
    console.log(carrito[i].nombre);
}

// en este caso nuestro for loop corre hasta que una condición se cumple, ahora como este arreglo el usuario se va a encargar de llenarlo, que el carrito tenga elementos, un for loop ejecutará el código hasta que lleguemos al final del carrito...
