// En este video veremos como unir 2 arreglos, para ello existe un arreay method llamado .concat
// El orden que le pasas los parametros es importante

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
const meses2 = ["Julio", "Agosto", "Septiembre"];

const meses3 = ["Octubre", "Noviembre", "Diciembre"];

// Unir 2 arreglos con concat...
const meses4 = meses.concat(meses2);
console.log(meses4);

// Unir 3 arreglos con concat...
const meses5 = meses.concat(meses2, meses3);
console.log(meses5);

// Unir 3 arreglos con concat y un Strin...
const meses7 = meses.concat(meses2, meses3, "Otro Mes");
console.log(meses7);

// Existe otra forma... que es con rest operator o spread operator..
const meses6 = [...meses, ...meses2]; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
console.log(meses6);

// Existe otra forma... que es con rest operator o spread operator..
const meses8 = [...meses, ...meses2, "Otro Mes"]; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
console.log(meses8);

// pero si se lo pasa como spread operator ..."Otro Mes" crea un elemento por cada letra que tenga mi string
