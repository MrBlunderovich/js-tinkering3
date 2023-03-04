//
export function appendDropdownMenu(items, target) {
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

export function closeDropdowns() {
  document.querySelectorAll(".dropdown").forEach((item) => {
    item.classList.remove("visible");
  });
}

export function expandDropdown(event) {
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
