var menu = document.getElementById("menu-hamburguer");
var menuAberto = false;

function abrirMenu() {
  if (!menuAberto) {
    menu.style.height = "300px";
    menu.style.width = "300px";
    menu.style.padding = "20px";
    menuAberto = true;
  } else {
    menu.style.height = "20px";
    menu.style.width = "20px";
    menu.style.padding = "0px";
    menuAberto = false;
  }
}
