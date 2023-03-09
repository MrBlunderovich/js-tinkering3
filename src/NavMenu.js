//
import TooLate from "./TooLate";

const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");
const menuItems2 = [
  "Uno",
  "Dos",
  "Tres",
  "Cuatro",
  "Cinco",
  "Seis",
  "Siete",
  "Ocho",
  "Nueve",
  "Diez",
];

export default function NavMenu(event) {
  if (navbar.matches(".expanded")) {
    if (event.target.matches(".nav-menu-item")) {
      selectMenuItem(event);
    } else {
      event.target.classList.remove("expanded");
      navbar.classList.remove("expanded");
      navbar.innerHTML = "";
    }
  } else {
    event.target.classList.add("expanded");
    navbar.classList.add("expanded");
    navbar.appendChild(createNav(menuItems2));
  }
}

function createNav(menuItems) {
  const menu = document.createElement("menu");
  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.textContent = item;
    menuItem.classList.add("nav-menu-item");
    menu.appendChild(menuItem);
  });
  menu.classList.add("nav-menu-expanded");
  return menu;
}

function selectMenuItem(event) {
  document.querySelectorAll(".nav-menu-item").forEach((item, index) => {
    item.classList.remove("active");
    if (item === event.target) {
      //main.textContent = index + 1;
      const indexPlus = index + 1;
      TooLate(main, indexPlus);
    }
  });
  event.target.classList.add("active");
  //main.textContent = event.target.textContent;
}
