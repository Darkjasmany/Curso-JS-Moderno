// Otro iterador muy común es el while loop, este se ejecuta mientras una condición sea verdadera..

let i = 0; // Inicialización de while

// condicion
while (i < 10) {
    // Bloque de código...
    console.log(`Numero: ${i}`);

    i++; // incremento
}

// El while se ejecuta mientras una condición sea verdadera, por lo tanto si inicicializamos en 20, no hará nada..

/* Intenta realizar los mismos ejemplos  Detectar pares y nones y el fizz buzz con el while, seguramente va a quedar mucho mas claro... */

while (i < 30) {
    if (i % 15 === 0) {
        console.log(`${i} ... FIZZ ... BUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i} ... FIZZ`);
    } else if (i % 5 === 0) {
        console.log(`${i} ... BUZZ`);
    }

    i++;
}
//console.log(i); hasta aqui i vale 30
// stop();
// Ejercicio de Pares y Nones
while (i <= 30) {
    if (i % 2 == 0) {
        console.log(`Numero ${i} ES PAR `);
    } else {
        console.log(`Numero ${i} ES IMPAR `);
    }
    //console.log(`Numero ${i} `);
    i++;
}
