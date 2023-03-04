// 'npm run start' in terminal starts webpack dev server

import "./style.css";
import { appendSpinner } from "./SpinnerModule";
import { appendDropdownMenu, expandDropdown } from "./MenuModule";

const menuItems1 = ["Home", "Save", "Turn", "Return", "Extern", "Exit"];
const menuItems2 = ["Not", "A", "Lot", "Going", "On", "Here"];

document.addEventListener("click", handleClick);
function handleClick(event) {
  expandDropdown(event);
}

appendDropdownMenu(menuItems1, document.querySelector(".menu1"));
appendDropdownMenu(menuItems2, document.querySelector(".menu2"));

appendSpinner(document.querySelector("header"));
