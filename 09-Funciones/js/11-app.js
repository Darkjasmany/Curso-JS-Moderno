// Parametros en un arrow Function...

// Parametros
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo("JavaScript");

const aprendiendo1 = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo("JavaScript1");
// si es un solo parmetro no ocupamos el parentesis
const aprendiendo12 = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo("JavaScript12");

// multiples parametros si requieren parentesis
const aprendiendo2 = (tecn1, tecn2) =>
    console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo("JS", "Node.js");
