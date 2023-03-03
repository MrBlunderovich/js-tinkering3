// 'npm run start' in terminal starts webpack dev server

import "./style.css";

const menuItems1 = ["Home", "Save", "Turn", "Return", "Extern", "Exit"];
const menuItems2 = ["Not", "A", "Lot", "Going", "On", "Here"];

document.addEventListener("click", handleClick);
function handleClick(event) {
  menuModule.expandDropdown(event);
}

const menuModule = (function () {
  function appendDropdownMenu(items, target) {
    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const menuItem = document.createElement("li");
      menuItem.classList.add("menu-item");
      menuItem.dataset.customAttribute = "data-dropdown-item";
      menuItem.dataset.type = item;
      menuItem.textContent = item;
      fragment.appendChild(menuItem);
    });
    target.appendChild(fragment);
  }

  function closeDropdowns() {
    document.querySelectorAll(".dropdown").forEach((item) => {
      item.classList.remove("visible");
    });
  }

  function expandDropdown(event) {
    const targetDropdown = event.target.closest(".dropdown");
    if (targetDropdown) {
      const isVisible = targetDropdown.classList.contains("visible");
      closeDropdowns();
      if (!isVisible) {
        event.target.closest(".dropdown").classList.add("visible");
      }
    } else {
      closeDropdowns();
    }
  }

  return { appendDropdownMenu, closeDropdowns, expandDropdown };
})();

menuModule.appendDropdownMenu(menuItems1, document.querySelector(".menu1"));
menuModule.appendDropdownMenu(menuItems2, document.querySelector(".menu2"));
