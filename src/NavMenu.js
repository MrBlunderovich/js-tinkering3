//
const navbar = document.querySelector(".navbar");
const main = document.querySelector("main");
const menuItems2 = [
  "Not",
  "Aaaaaaaaaaaa",
  "Lot",
  "Going",
  "Ooooon",
  "Here",
  "Yet",
];

export default function NavMenu(event) {
  console.log("navMenu");
  if (navbar.matches(".expanded")) {
    if (event.target.matches(".nav-menu-item")) {
      selectMenuItem(event);
    } else {
      navbar.classList.remove("expanded");
      navbar.innerHTML = "";
    }
  } else {
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
      main.textContent = index + 1;
    }
  });
  event.target.classList.add("active");
  //main.textContent = event.target.textContent;
}
