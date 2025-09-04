const cerrarNav = function () {
  const menu = document.getElementById("offcanvasDarkNavbar");
  const menuInstancia = bootstrap.Offcanvas.getOrCreateInstance(menu);

  menuInstancia.hide();
};

document.querySelectorAll(".offcanvas-end li").forEach((link) => {
  link.addEventListener("click", cerrarNav);
});
document
  .getElementById("offcanvasDarkNavbarLabel")
  .addEventListener("click", cerrarNav);
