// Buenas practicas con ifs...

// Veamos algunas buenas practicas, sencillas para escribirs ifs

// una muy común es que muchas personas hacen lo siguiente...

const autenticado = true;

if (autenticado === true) {
    console.log("El Usuario esta autenticado");
}

// Se puede borrar el tru porque se da por explicito
// Debido a que el IF ya retorna true, puedes eliminarlo y tu código será mejor..

if (autenticado) {
    console.log("El Usuario esta autenticado");
}

// También muchas personas escriben ifs pensando que se podrán ejecutar 2 condiciones al mismo tiempo, el if solo va aejecutar la primera que se cumpla...

const puntaje = 500;

if (puntaje > 300) {
    console.log("Buen puntaje... felicidades");
} else if (puntaje > 400) {
    console.log("Excelente esfuerzo");
} else {
    console.log("No sabria decirte, pero buen esfuerzo...");
}

// puedes ver que ambas condiciones se cumplen, la de 300 y 400, muchas personas creen que se van a ejecutar ambas porque ambas se cumplen pero el if va a ejecutar la que más pronto cumpla su condición, también recuerda que el orden puede ser importante, lo más seguro es que quieras cambiar el orden del 300 y 400
function revisarPuntaje() {
    if (puntaje > 400) {
        console.log("Excelente esfuerzo");
        return; // esto solo se pone en una funcion ahi funciona, el return hace que ya no se ejecuten las siguientes lineas de esta funcion
    }
    if (puntaje > 300) {
        console.log("Buen puntaje... felicidades");
        return; // esto solo se pone en una funcion ahi funciona, el return hace que ya no se ejecuten las siguientes lineas de esta funcion
    }
}
