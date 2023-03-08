/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mrblunderovich/femtoid/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mrblunderovich/femtoid/index.js ***!
  \*******************************************************/
/***/ ((module) => {

//
function femtoid(length = 10) {
  let id = "femtoid_malfunction";
  if (typeof +length === "number") {
    length = +length >= 10 ? +length : 10;
    id = "";
    for (let i = 0; i < length; i++) {
      const digit = Math.floor(Math.random() * 10);
      id += digit;
    }
  }

  return id;
}
module.exports = femtoid;


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/BottomMenu.js":
/*!***************************!*\
  !*** ./src/BottomMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenu": () => (/* binding */ addMenu),
/* harmony export */   "collapseAddMenu": () => (/* binding */ collapseAddMenu),
/* harmony export */   "createMenu": () => (/* binding */ createMenu),
/* harmony export */   "default": () => (/* binding */ BottomMenu),
/* harmony export */   "expandAddMenu": () => (/* binding */ expandAddMenu)
/* harmony export */ });
//
const menuItems3 = ["Lorem", "Ipsum", "Dolor", "Clear screen", "Show QR code"];

function BottomMenu(event) {
  if (event.target.dataset.action === "add") {
    addMenu(event);
  } else if (event.target.classList.contains("add-menu-item")) {
    console.log(event.target.textContent);
    switch (event.target.textContent) {
      case "Clear screen":
        document.querySelector("main").textContent = "";
        break;

      default:
        break;
    }
    collapseAddMenu(event);
  }
}

function addMenu(event) {
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


/***/ }),

/***/ "./src/NavMenu.js":
/*!************************!*\
  !*** ./src/NavMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavMenu)
/* harmony export */ });
/* harmony import */ var _TooLate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TooLate */ "./src/TooLate.js");
//


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

function NavMenu(event) {
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
      //main.textContent = index + 1;
      const indexPlus = index + 1;
      (0,_TooLate__WEBPACK_IMPORTED_MODULE_0__["default"])(main, indexPlus);
    }
  });
  event.target.classList.add("active");
  //main.textContent = event.target.textContent;
}


/***/ }),

/***/ "./src/TooLate.js":
/*!************************!*\
  !*** ./src/TooLate.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TooLate)
/* harmony export */ });
//
function TooLate(target, number) {
  target.textContent = "";
  target.classList.remove("too-late");
  if (!number || typeof number !== "number" || number < 1) {
    target.textContent = "Too late!";
  } else {
    //target.textContent = number;
    countdown(target, number);
  }
}

function countdown(target, number) {
  if (target.matches(".counting")) {
    return;
  }
  const counter = setInterval(count, 500);

  function count() {
    target.classList.remove("animate-flash");
    if (number < 0) {
      target.textContent = "Too late!";
      target.classList.add("too-late");
      target.classList.remove("counting");
      clearInterval(counter);
    } else {
      target.classList.add("counting");
      setTimeout(() => target.classList.add("animate-flash"), 50);
      target.textContent = number;
      number -= 1;
    }
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _BottomMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BottomMenu */ "./src/BottomMenu.js");
/* harmony import */ var _NavMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavMenu */ "./src/NavMenu.js");
/* harmony import */ var _mrblunderovich_femtoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mrblunderovich/femtoid */ "./node_modules/@mrblunderovich/femtoid/index.js");
/* harmony import */ var _mrblunderovich_femtoid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mrblunderovich_femtoid__WEBPACK_IMPORTED_MODULE_3__);
// 'npm run start' in terminal starts webpack dev server
//






console.log(_mrblunderovich_femtoid__WEBPACK_IMPORTED_MODULE_3___default()());
console.log(location);

const menuItems1 = ["Home", "Save", "Turn", "Return", "Extern", "Exit"];

document.addEventListener("click", handleClick);
function handleClick(event) {
  if (event.target.closest(".fixed")) {
    (0,_BottomMenu__WEBPACK_IMPORTED_MODULE_1__["default"])(event);
  } else if (
    event.target.matches(".header-menu-btn.left") ||
    event.target.closest(".navbar")
  ) {
    (0,_NavMenu__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
  } else if (event.target.matches(".logo")) {
    location.reload();
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ2dDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBTztBQUNiO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVxQjtBQUNpQjtBQUNOOztBQUVjO0FBQzlDLFlBQVksOERBQU87QUFDbkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBVTtBQUNkLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFPO0FBQ1gsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9ub2RlX21vZHVsZXMvQG1yYmx1bmRlcm92aWNoL2ZlbXRvaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL0JvdHRvbU1lbnUuanMiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy8uL3NyYy9OYXZNZW51LmpzIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9zcmMvVG9vTGF0ZS5qcyIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vXG5mdW5jdGlvbiBmZW10b2lkKGxlbmd0aCA9IDEwKSB7XG4gIGxldCBpZCA9IFwiZmVtdG9pZF9tYWxmdW5jdGlvblwiO1xuICBpZiAodHlwZW9mICtsZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICBsZW5ndGggPSArbGVuZ3RoID49IDEwID8gK2xlbmd0aCA6IDEwO1xuICAgIGlkID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaWdpdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGlkICs9IGRpZ2l0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZmVtdG9pZDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vXG5jb25zdCBtZW51SXRlbXMzID0gW1wiTG9yZW1cIiwgXCJJcHN1bVwiLCBcIkRvbG9yXCIsIFwiQ2xlYXIgc2NyZWVuXCIsIFwiU2hvdyBRUiBjb2RlXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3R0b21NZW51KGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuZGF0YXNldC5hY3Rpb24gPT09IFwiYWRkXCIpIHtcbiAgICBhZGRNZW51KGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLW1lbnUtaXRlbVwiKSkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgc3dpdGNoIChldmVudC50YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgIGNhc2UgXCJDbGVhciBzY3JlZW5cIjpcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbGxhcHNlQWRkTWVudShldmVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1lbnUoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBhbmRlZFwiKSkge1xuICAgIGNvbGxhcHNlQWRkTWVudShldmVudCk7XG4gIH0gZWxzZSB7XG4gICAgZXhwYW5kQWRkTWVudShldmVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEFkZE1lbnUoZXZlbnQpIHtcbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gYnV0dG9uLnBhcmVudEVsZW1lbnQ7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiY2xvc2VcIjtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRlZFwiKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51KG1lbnVJdGVtczMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbGxhcHNlQWRkTWVudShldmVudCkge1xuICBjb25zdCBmaXhlZENvbnRhaW5lciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmZpeGVkXCIpO1xuICBjb25zdCBidXR0b24gPSBmaXhlZENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1tZW51LWJ0blwiKTtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcImFkZFwiO1xuICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZGVkXCIpO1xuICBtZW51Q29udGFpbmVyLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLW1lbnUtZXhwYW5kZWRcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudShtZW51SXRlbXMpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZW51XCIpO1xuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWRkLW1lbnUtaXRlbVwiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1tZW51LWV4cGFuZGVkXCIpO1xuICByZXR1cm4gbWVudTtcbn1cbiIsIi8vXG5pbXBvcnQgVG9vTGF0ZSBmcm9tIFwiLi9Ub29MYXRlXCI7XG5cbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuY29uc3QgbWVudUl0ZW1zMiA9IFtcbiAgXCJVbm9cIixcbiAgXCJEb3NcIixcbiAgXCJUcmVzXCIsXG4gIFwiQ3VhdHJvXCIsXG4gIFwiQ2luY29cIixcbiAgXCJTZWlzXCIsXG4gIFwiU2lldGVcIixcbiAgXCJPY2hvXCIsXG4gIFwiTnVldmVcIixcbiAgXCJEaWV6XCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZNZW51KGV2ZW50KSB7XG4gIGlmIChuYXZiYXIubWF0Y2hlcyhcIi5leHBhbmRlZFwiKSkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIi5uYXYtbWVudS1pdGVtXCIpKSB7XG4gICAgICBzZWxlY3RNZW51SXRlbShldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kZWRcIik7XG4gICAgICBuYXZiYXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRlZFwiKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KG1lbnVJdGVtczIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYobWVudUl0ZW1zKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWVudVwiKTtcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1tZW51LWl0ZW1cIik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH0pO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXYtbWVudS1leHBhbmRlZFwiKTtcbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE1lbnVJdGVtKGV2ZW50KSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LW1lbnUtaXRlbVwiKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBpZiAoaXRlbSA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAvL21haW4udGV4dENvbnRlbnQgPSBpbmRleCArIDE7XG4gICAgICBjb25zdCBpbmRleFBsdXMgPSBpbmRleCArIDE7XG4gICAgICBUb29MYXRlKG1haW4sIGluZGV4UGx1cyk7XG4gICAgfVxuICB9KTtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIC8vbWFpbi50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbn1cbiIsIi8vXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29MYXRlKHRhcmdldCwgbnVtYmVyKSB7XG4gIHRhcmdldC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwidG9vLWxhdGVcIik7XG4gIGlmICghbnVtYmVyIHx8IHR5cGVvZiBudW1iZXIgIT09IFwibnVtYmVyXCIgfHwgbnVtYmVyIDwgMSkge1xuICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwiVG9vIGxhdGUhXCI7XG4gIH0gZWxzZSB7XG4gICAgLy90YXJnZXQudGV4dENvbnRlbnQgPSBudW1iZXI7XG4gICAgY291bnRkb3duKHRhcmdldCwgbnVtYmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb3VudGRvd24odGFyZ2V0LCBudW1iZXIpIHtcbiAgaWYgKHRhcmdldC5tYXRjaGVzKFwiLmNvdW50aW5nXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvdW50ZXIgPSBzZXRJbnRlcnZhbChjb3VudCwgNTAwKTtcblxuICBmdW5jdGlvbiBjb3VudCgpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGUtZmxhc2hcIik7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHRhcmdldC50ZXh0Q29udGVudCA9IFwiVG9vIGxhdGUhXCI7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcInRvby1sYXRlXCIpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJjb3VudGluZ1wiKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiY291bnRpbmdcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZS1mbGFzaFwiKSwgNTApO1xuICAgICAgdGFyZ2V0LnRleHRDb250ZW50ID0gbnVtYmVyO1xuICAgICAgbnVtYmVyIC09IDE7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gJ25wbSBydW4gc3RhcnQnIGluIHRlcm1pbmFsIHN0YXJ0cyB3ZWJwYWNrIGRldiBzZXJ2ZXJcbi8vXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgQm90dG9tTWVudSBmcm9tIFwiLi9Cb3R0b21NZW51XCI7XG5pbXBvcnQgTmF2TWVudSBmcm9tIFwiLi9OYXZNZW51XCI7XG5cbmltcG9ydCBmZW10b2lkIGZyb20gXCJAbXJibHVuZGVyb3ZpY2gvZmVtdG9pZFwiO1xuY29uc29sZS5sb2coZmVtdG9pZCgpKTtcbmNvbnNvbGUubG9nKGxvY2F0aW9uKTtcblxuY29uc3QgbWVudUl0ZW1zMSA9IFtcIkhvbWVcIiwgXCJTYXZlXCIsIFwiVHVyblwiLCBcIlJldHVyblwiLCBcIkV4dGVyblwiLCBcIkV4aXRcIl07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuZml4ZWRcIikpIHtcbiAgICBCb3R0b21NZW51KGV2ZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICBldmVudC50YXJnZXQubWF0Y2hlcyhcIi5oZWFkZXItbWVudS1idG4ubGVmdFwiKSB8fFxuICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5hdmJhclwiKVxuICApIHtcbiAgICBOYXZNZW51KGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIi5sb2dvXCIpKSB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==