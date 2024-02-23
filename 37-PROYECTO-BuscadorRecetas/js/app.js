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

        // console.log(url);
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((resultado) => mostrarRecetas(resultado.meals));
    }

    function mostrarRecetas(recetas = []) {
        // console.log(recetas);

        // Iterar en los resultados
        recetas.forEach((receta) => {
            // console.log(receta);
            const { idMeal, strMeal, strMealThumb } = receta;

            const recetaContenedor = document.createElement("DIV");
            recetaContenedor.classList.add("col-md-4"); // Esta clase creara 4 columnas

            const recetaCard = document.createElement("DIV");
            recetaCard.classList.add("card", "mb-4");

            const recetaImagen = document.createElement("IMG");
            recetaImagen.classList.add("card-img-top");
            recetaImagen.alt = `Imagen de la receta ${strMeal}`;
            recetaImagen.src = strMealThumb;

            const recetaCardBody = document.createElement("DIV");
            recetaCardBody.classList.add("card-body");

            console.log(recetaImagen);
        });
    }
}

document.addEventListener("DOMContentLoaded", iniciarApp);
