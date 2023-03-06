// 'npm run start' in terminal starts webpack dev server

import "./style.css";
import { appendClockSpinner } from "./ClockSpinner";
import {
  appendRingSpinner,
  showSpinnerBackdrop,
  removeSpinnerBackdrop,
} from "./RingSpinner";
import { appendDropdownMenu, expandDropdown } from "./MenuModule";

import femtoid from "@mrblunderovich/femtoid";
console.log(femtoid());

const menuItems1 = ["Home", "Save", "Turn", "Return", "Extern", "Exit"];
const menuItems2 = ["Not", "A", "Lot", "Going", "On", "Here"];
const menuItems3 = ["Value", "Meaning", "Clarity", "Time", "Hope"];

document.addEventListener("click", handleClick);
function handleClick(event) {
  if (event.target.dataset.action === "add") {
    addMenu(event);
    console.log("add");
  } else if (event.target.classList.contains("add-menu-item")) {
    console.log(event.target.textContent);
    collapseAddMenu(event);
  }
}

function addMenu(event) {
  event.stopPropagation();
  if (event.target.classList.contains("expanded")) {
    collapseAddMenu(event);
  } else {
    expandAddMenu(event);
  }
}

function expandAddMenu(event) {
  const button = event.target;
  const menuContainer = button.parentElement;
  button.textContent = "close";
  button.classList.add("expanded");
  menuContainer.appendChild(createMenu(menuItems3));
}

function collapseAddMenu(event) {
  const fixedContainer = event.target.closest(".fixed");
  const button = fixedContainer.querySelector(".bottom-menu-btn");
  const menuContainer = button.parentElement;
  button.textContent = "add";
  button.classList.remove("expanded");
  menuContainer.removeChild(document.querySelector(".bottom-menu-expanded"));
}

function createMenu(menuItems) {
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
/* function handleClick(event) {
  showSpinnerBackdrop();

  setTimeout(() => {
    removeSpinnerBackdrop();
    expandDropdown(event);
  }, 1000);
} */

//appendDropdownMenu(menuItems1, document.querySelector(".menu1"));
//appendRingSpinner(document.querySelector("main"));
/* showSpinnerBackdrop();

setTimeout(removeSpinnerBackdrop, 1000); */
//appendDropdownMenu(menuItems2, document.querySelector(".menu2"));

//appendSpinner(document.querySelector("header"));
