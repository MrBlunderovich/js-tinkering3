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
const menuItems3 = ["Value", "Meaning", "Clarity", "Time", "Hope"];

function BottomMenu(event) {
  if (event.target.dataset.action === "add") {
    addMenu(event);
  } else if (event.target.classList.contains("add-menu-item")) {
    console.log(event.target.textContent);
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
//
const navbar = document.querySelector(".navbar");
const menuItems2 = ["Not", "Aaaaaaaaaaaa", "Lot", "Going", "Ooooon", "Here"];

function NavMenu(event) {
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
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVxQjtBQUNpQjtBQUNOOztBQUVjO0FBQzlDLFlBQVksOERBQU87O0FBRW5COztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVU7QUFDZCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBTztBQUNYO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vbm9kZV9tb2R1bGVzL0BtcmJsdW5kZXJvdmljaC9mZW10b2lkL2luZGV4LmpzIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy8uL3NyYy9Cb3R0b21NZW51LmpzIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9zcmMvTmF2TWVudS5qcyIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vXG5mdW5jdGlvbiBmZW10b2lkKGxlbmd0aCA9IDEwKSB7XG4gIGxldCBpZCA9IFwiZmVtdG9pZF9tYWxmdW5jdGlvblwiO1xuICBpZiAodHlwZW9mICtsZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICBsZW5ndGggPSArbGVuZ3RoID49IDEwID8gK2xlbmd0aCA6IDEwO1xuICAgIGlkID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaWdpdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGlkICs9IGRpZ2l0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZmVtdG9pZDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vXG5jb25zdCBtZW51SXRlbXMzID0gW1wiVmFsdWVcIiwgXCJNZWFuaW5nXCIsIFwiQ2xhcml0eVwiLCBcIlRpbWVcIiwgXCJIb3BlXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3R0b21NZW51KGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuZGF0YXNldC5hY3Rpb24gPT09IFwiYWRkXCIpIHtcbiAgICBhZGRNZW51KGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLW1lbnUtaXRlbVwiKSkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgY29sbGFwc2VBZGRNZW51KGV2ZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVudShldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImV4cGFuZGVkXCIpKSB7XG4gICAgY29sbGFwc2VBZGRNZW51KGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBleHBhbmRBZGRNZW51KGV2ZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kQWRkTWVudShldmVudCkge1xuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBidXR0b24ucGFyZW50RWxlbWVudDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJjbG9zZVwiO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUobWVudUl0ZW1zMykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGFwc2VBZGRNZW51KGV2ZW50KSB7XG4gIGNvbnN0IGZpeGVkQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuZml4ZWRcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGZpeGVkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLW1lbnUtYnRuXCIpO1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gYnV0dG9uLnBhcmVudEVsZW1lbnQ7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiYWRkXCI7XG4gIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kZWRcIik7XG4gIG1lbnVDb250YWluZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3R0b20tbWVudS1leHBhbmRlZFwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51KG1lbnVJdGVtcykge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1lbnVcIik7XG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJhZGQtbWVudS1pdGVtXCIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICB9KTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLW1lbnUtZXhwYW5kZWRcIik7XG4gIHJldHVybiBtZW51O1xufVxuIiwiLy9cbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyXCIpO1xuY29uc3QgbWVudUl0ZW1zMiA9IFtcIk5vdFwiLCBcIkFhYWFhYWFhYWFhYVwiLCBcIkxvdFwiLCBcIkdvaW5nXCIsIFwiT29vb29uXCIsIFwiSGVyZVwiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TWVudShldmVudCkge1xuICBjb25zb2xlLmxvZyhcIm5hdk1lbnVcIik7XG4gIGlmIChuYXZiYXIubWF0Y2hlcyhcIi5leHBhbmRlZFwiKSkge1xuICAgIGNvbnNvbGUubG9nKFwiYWxyZWFkeSBleHBhbmRlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjcmVhdGVOYXYobWVudUl0ZW1zMikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdihtZW51SXRlbXMpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZW51XCIpO1xuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2LW1lbnUtaXRlbVwiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1tZW51LWV4cGFuZGVkXCIpO1xuICByZXR1cm4gbWVudTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyAnbnBtIHJ1biBzdGFydCcgaW4gdGVybWluYWwgc3RhcnRzIHdlYnBhY2sgZGV2IHNlcnZlclxuLy9cblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBCb3R0b21NZW51IGZyb20gXCIuL0JvdHRvbU1lbnVcIjtcbmltcG9ydCBOYXZNZW51IGZyb20gXCIuL05hdk1lbnVcIjtcblxuaW1wb3J0IGZlbXRvaWQgZnJvbSBcIkBtcmJsdW5kZXJvdmljaC9mZW10b2lkXCI7XG5jb25zb2xlLmxvZyhmZW10b2lkKCkpO1xuXG5jb25zdCBtZW51SXRlbXMxID0gW1wiSG9tZVwiLCBcIlNhdmVcIiwgXCJUdXJuXCIsIFwiUmV0dXJuXCIsIFwiRXh0ZXJuXCIsIFwiRXhpdFwiXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xvc2VzdChcIi5maXhlZFwiKSkge1xuICAgIEJvdHRvbU1lbnUoZXZlbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLmhlYWRlci1tZW51LWJ0bi5sZWZ0XCIpIHx8XG4gICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmF2YmFyXCIpXG4gICkge1xuICAgIE5hdk1lbnUoZXZlbnQpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=