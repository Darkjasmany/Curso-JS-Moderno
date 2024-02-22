function iniciarApp() {
    const selectCategorias = document.querySelector("#categorias");
    selectCategorias.addEventListener("change", seleccionarCategoria);

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
            // console.log(option);
            // console.log(categoria);
            const { strCategory } = categoria; // este destrocturing se hace a la categoria y lo que envia la API
            const option = document.createElement("OPTION");
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategorias.appendChild(option);
        });
    }

    function seleccionarCategoria(e) {
        // console.log(e.target.value);
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        console.log(url);
    }
}

document.addEventListener("DOMContentLoaded", iniciarApp);
