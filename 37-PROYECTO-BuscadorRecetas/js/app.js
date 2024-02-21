function iniciarApp() {
    const selectCategorias = document.querySelector("#categorias");

    obtnerCategorias();

    function obtnerCategorias() {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((resultado) => mostrarCategorias(resultado.categories));
    }

    function mostrarCategorias(categorias = []) {
        // console.log(categorias);
        categorias.forEach((categoria) => {
            // console.log(categoria);
            const option = document.createElement("OPTION");
            option.value = categoria.strCategory;
            option.textContent;

            console.log(option);
            // console.log(categoria);
        });
    }
}

document.addEventListener("DOMContentLoaded", iniciarApp);
