// 'npm run start' in terminal starts webpack dev server
//

import "./style.css";
import BottomMenu from "./BottomMenu";
import NavMenu from "./NavMenu";

import femtoid from "@mrblunderovich/femtoid";
console.log(femtoid());
console.log(location);

const menuItems1 = ["Home", "Save", "Turn", "Return", "Extern", "Exit"];

document.addEventListener("click", handleClick);
function handleClick(event) {
  if (event.target.closest(".fixed")) {
    BottomMenu(event);
  } else if (
    event.target.matches(".header-menu-btn.right") ||
    event.target.closest(".navbar")
  ) {
    NavMenu(event);
  } else if (event.target.matches(".logo")) {
    location.reload();
  }
}
