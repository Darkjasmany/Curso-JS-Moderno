// Otra opción que a mi me gusta mucho es aplicar algo llamado delegation..
// Tenemos 1 selector principal, donde validamos a que le damos click

const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", (e) => {
    // console.log(e.target); // Indica a que le damos click
    if (e.target.classList.contains("titulo")) {
        console.log("click titulo");
    }
    if (e.target.classList.contains("precio")) {
        console.log("click precio");
    }
    if (e.target.classList.contains("card")) {
        console.log("click card");
    }
    if (e.target.classList.contains("info")) {
        console.log("click info");
    }
});
