const menu = document.querySelector(".mostrar");
const navegacion = document.querySelector(".navegacion");

menu.addEventListener("click",() => {
    navegacion.classList.toggle("navegacion_visible");

    if (menu.classList.contains(navegacion_visible)) {
        menu.setAttribute("aria-label", "Cerrar menu");
    } else {
        menu.setAttribute("arial-label", "Abrir menu");
    }
});
