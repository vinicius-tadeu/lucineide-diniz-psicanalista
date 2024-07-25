var menu = document.getElementById("menu-hamburguer");
var aberto = false;
console.log(menu);

function abrir() {
  if (!aberto) {
    menu.style.height = "300px";
    menu.style.width = "300px";
    menu.style.padding = "20px";
    aberto = true;
  } else {
    menu.style.height = "20px";
    menu.style.width = "20px";
    menu.style.padding = "0px";
    aberto = false;
  }
}
