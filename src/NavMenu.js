//
const navbar = document.querySelector(".navbar");
const menuItems2 = ["Not", "Aaaaaaaaaaaa", "Lot", "Going", "Ooooon", "Here"];

export default function NavMenu(event) {
  console.log("navMenu");
  if (navbar.matches(".expanded")) {
    console.log("already expanded");
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
