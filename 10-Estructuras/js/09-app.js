// Previamente vimos los operadores ternarios, llegan a ser muy útiles ya que te dan un código más simplificado, veamos como se utilizan...

const autenticado = false;
const puedePagar = false;

// ? if
//: else

console.log(autenticado ? "Si esta autenticado" : "No esta autenticado");
console.log(autenticado ? "Si esta autenticado" : null); // si queremos que en la parte del false no haga nada

// El OR y el && también se pueden utilizar en el ternario

console.log(
    autenticado && puedePagar ? "Si puede pagar" : "No esta autenticado"
);

// Ternario anidado...

console.log(
    autenticado
        ? puedePagar
            ? "Si puede pagar"
            : "esta autenticado pero no puede pgar"
        : "No esta autenticado"
);

// Jugar con los valores...

// En el siguiente capítulo vamos a ver los iteradores, en JavaScript hay varios, así que veamos algunos ejemplos...
