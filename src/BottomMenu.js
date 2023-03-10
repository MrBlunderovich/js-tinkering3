//

import { collapseCarousel } from "./Carousel";

const menuItems3 = ["Lorem", "Ipsum", "Clear screen", "Show QR code"];

export default function BottomMenu(event) {
  if (event.target.dataset.action === "add") {
    addMenu(event);
  } else if (event.target.classList.contains("add-menu-item")) {
    console.log(event.target.textContent);
    switch (event.target.textContent) {
      case "Clear screen":
        collapseCarousel();
        document.querySelector("main").innerHTML = "";
        break;

      case "Show QR code":
        collapseCarousel();
        showQRCode();
        break;

      default:
        break;
    }
    collapseAddMenu(event);
  }
}

function showQRCode() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  const canvas = document.createElement("canvas");

  const QRCode = require("qrcode");

  QRCode.toCanvas(
    canvas,
    location.href,
    {
      scale: 8,
      margin: 0,
      color: { dark: "#223a49ff", light: "#ffffff00" },
    },
    function (error) {
      if (error) console.error(error);
      console.log("QR success!");
    }
  );

  main.appendChild(canvas);
}

export function addMenu(event) {
  if (event.target.classList.contains("expanded")) {
    collapseAddMenu(event);
  } else {
    expandAddMenu(event);
  }
}

export function expandAddMenu(event) {
  const button = event.target;
  const menuContainer = button.parentElement;
  button.textContent = "close";
  button.classList.add("expanded");
  menuContainer.appendChild(createMenu(menuItems3));
}

export function collapseAddMenu(event) {
  const fixedContainer = event.target.closest(".fixed");
  const button = fixedContainer.querySelector(".bottom-menu-btn");
  const menuContainer = button.parentElement;
  button.textContent = "add";
  button.classList.remove("expanded");
  menuContainer.removeChild(document.querySelector(".bottom-menu-expanded"));
}

export function createMenu(menuItems) {
  const menu = document.createElement("menu");
  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.textContent = item;
    menuItem.classList.add("add-menu-item");
    menu.appendChild(menuItem);
  });
  menu.classList.add("bottom-menu-expanded");
  return menu;
}
