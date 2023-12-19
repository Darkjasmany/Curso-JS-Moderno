// Eliminar un elemento de localStorage, solo hay que pasarle la Clave
localStorage.removeItem("nombre");

// En cuanto a toda la funcionalidad de un CRUD, nos haria falta un update, no hay como tal un Update... lo que podrías hacer es...

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem("meses"));
console.log(mesesArray);
mesesArray.push("nuevo Mes");
console.log(mesesArray);
localStorage.setItem("meses", JSON.stringify(mesesArray));

// Eliminar todo de localStorage
localStorage.clear();
