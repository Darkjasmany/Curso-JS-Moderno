// En este video estaremos viendo lo que son los arrow Functions!!

// Los arrow functions son otra forma de declarar funciones y fueron agregadas en las últimas versiones, la sintaxis es más corta y cuando comencé a utilizarlas me parecian algo complejas, en este video y los siguientes te mostraré todo lo que tienes que saber de arrow functions

const aprendiendo = function () {
    console.log("Aprendiendo JavaScript");
};

const aprendiendo1 = () => {
    console.log("Aprendiendo JavaScript");
};

// una linea no requiere llaves
const aprendiendo2 = () => console.log("Aprendiendo JavaScript");

// retornar un valor, cuando hay una sola linea da por implisito el return
const aprendiendo3 = () => "Aprendiendo JavaScript";

console.log(aprendiendo());
