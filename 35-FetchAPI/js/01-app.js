const cargarTxtBtn = document.querySelector("#cargarTxt");
cargarTxtBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
    const url = "data/datos.txt";
    fetch(url) // lee y envia datos, fetch usa promise aqui consulta el url .then si se ejecuta la primera parte obtenemos la respuesta, en el segundo then es donde ya tenemos los datos, estos then son el resolve pero el reject es el catch en caso que se prsente un error
        .then((respuesta) => {
            console.log(respuesta);
            console.log(respuesta.status); // la respuesta que obtenemos 200 encontro 404 no encontro
            console.log(respuesta.statusText); // la respuesta de forma mas legible
            console.log(respuesta.url); // la url
            console.log(respuesta.type); // tipo de consulta

            return respuesta.text(); // json y text son el proto del objeto obtenido con fetch
        })
        .then((datos) => {
            console.log(datos);
        })
        .catch((error) => {
            console.log(error);
        });
}
