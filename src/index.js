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

document.addEventListener("click", handleClick);
function handleClick(event) {
  showSpinnerBackdrop();

  setTimeout(() => {
    removeSpinnerBackdrop();
    expandDropdown(event);
  }, 1000);
}

appendDropdownMenu(menuItems1, document.querySelector(".menu1"));
//appendRingSpinner(document.querySelector("main"));
/* showSpinnerBackdrop();

setTimeout(removeSpinnerBackdrop, 1000); */
//appendDropdownMenu(menuItems2, document.querySelector(".menu2"));

//appendSpinner(document.querySelector("header"));
