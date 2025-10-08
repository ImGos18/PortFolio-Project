const cerrarNav = function () {
  const menu = document.getElementById("offcanvasDarkNavbar");
  const menuInstancia = bootstrap.Offcanvas.getOrCreateInstance(menu);

  menuInstancia.hide();
};

document.querySelectorAll(".offcanvas-end li").forEach((link) => {
  link.addEventListener("click", function () {
    cerrarNav();
  });
});
document
  .getElementById("offcanvasDarkNavbarLabel")
  .addEventListener("click", cerrarNav);

const listaLinks = document.querySelector("#linksNav");
const listaItem = listaLinks.querySelectorAll("li");

listaItem.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const enlaceSeccion = link.querySelector("a");
    const referencia = enlaceSeccion.getAttribute("href");
    const seccion = document.querySelector(referencia);
    const posicion = seccion.getBoundingClientRect();
    const PrincipioSeccion = window.scrollY + posicion.top;
    const scrollOffset = function (offset) {
      window.scrollTo({
        top: PrincipioSeccion - offset,
        behavior: "smooth",
      });
    };
    console.log(PrincipioSeccion);
    if (window.innerWidth <= 990) {
      scrollOffset(170);
    } else {
      scrollOffset(200);
    }
    console.log(window.innerWidth);
  });
});
