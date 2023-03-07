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
const main = document.querySelector("main");
const menuItems2 = [
  "Not",
  "Aaaaaaaaaaaa",
  "Lot",
  "Going",
  "Ooooon",
  "Here",
  "Yet",
];

function NavMenu(event) {
  console.log("navMenu");
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
      main.textContent = index + 1;
    }
  });
  event.target.classList.add("active");
  //main.textContent = event.target.textContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRXFCO0FBQ2lCO0FBQ047O0FBRWM7QUFDOUMsWUFBWSw4REFBTzs7QUFFbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBVTtBQUNkLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFPO0FBQ1g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9ub2RlX21vZHVsZXMvQG1yYmx1bmRlcm92aWNoL2ZlbXRvaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL0JvdHRvbU1lbnUuanMiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy8uL3NyYy9OYXZNZW51LmpzIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9cbmZ1bmN0aW9uIGZlbXRvaWQobGVuZ3RoID0gMTApIHtcbiAgbGV0IGlkID0gXCJmZW10b2lkX21hbGZ1bmN0aW9uXCI7XG4gIGlmICh0eXBlb2YgK2xlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgIGxlbmd0aCA9ICtsZW5ndGggPj0gMTAgPyArbGVuZ3RoIDogMTA7XG4gICAgaWQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpZ2l0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgaWQgKz0gZGlnaXQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmZW10b2lkO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy9cbmNvbnN0IG1lbnVJdGVtczMgPSBbXCJWYWx1ZVwiLCBcIk1lYW5pbmdcIiwgXCJDbGFyaXR5XCIsIFwiVGltZVwiLCBcIkhvcGVcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdHRvbU1lbnUoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LmFjdGlvbiA9PT0gXCJhZGRcIikge1xuICAgIGFkZE1lbnUoZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtbWVudS1pdGVtXCIpKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICBjb2xsYXBzZUFkZE1lbnUoZXZlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZW51KGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwYW5kZWRcIikpIHtcbiAgICBjb2xsYXBzZUFkZE1lbnUoZXZlbnQpO1xuICB9IGVsc2Uge1xuICAgIGV4cGFuZEFkZE1lbnUoZXZlbnQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRBZGRNZW51KGV2ZW50KSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcImNsb3NlXCI7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudShtZW51SXRlbXMzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZUFkZE1lbnUoZXZlbnQpIHtcbiAgY29uc3QgZml4ZWRDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5maXhlZFwiKTtcbiAgY29uc3QgYnV0dG9uID0gZml4ZWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ib3R0b20tbWVudS1idG5cIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBidXR0b24ucGFyZW50RWxlbWVudDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJhZGRcIjtcbiAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcbiAgbWVudUNvbnRhaW5lci5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1tZW51LWV4cGFuZGVkXCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUobWVudUl0ZW1zKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWVudVwiKTtcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcImFkZC1tZW51LWl0ZW1cIik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH0pO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJib3R0b20tbWVudS1leHBhbmRlZFwiKTtcbiAgcmV0dXJuIG1lbnU7XG59XG4iLCIvL1xuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIik7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5jb25zdCBtZW51SXRlbXMyID0gW1xuICBcIk5vdFwiLFxuICBcIkFhYWFhYWFhYWFhYVwiLFxuICBcIkxvdFwiLFxuICBcIkdvaW5nXCIsXG4gIFwiT29vb29uXCIsXG4gIFwiSGVyZVwiLFxuICBcIllldFwiLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TWVudShldmVudCkge1xuICBjb25zb2xlLmxvZyhcIm5hdk1lbnVcIik7XG4gIGlmIChuYXZiYXIubWF0Y2hlcyhcIi5leHBhbmRlZFwiKSkge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhcIi5uYXYtbWVudS1pdGVtXCIpKSB7XG4gICAgICBzZWxlY3RNZW51SXRlbShldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kZWRcIik7XG4gICAgICBuYXZiYXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRlZFwiKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KG1lbnVJdGVtczIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYobWVudUl0ZW1zKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWVudVwiKTtcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtZW51SXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1tZW51LWl0ZW1cIik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH0pO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXYtbWVudS1leHBhbmRlZFwiKTtcbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdE1lbnVJdGVtKGV2ZW50KSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LW1lbnUtaXRlbVwiKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBpZiAoaXRlbSA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICBtYWluLnRleHRDb250ZW50ID0gaW5kZXggKyAxO1xuICAgIH1cbiAgfSk7XG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAvL21haW4udGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gJ25wbSBydW4gc3RhcnQnIGluIHRlcm1pbmFsIHN0YXJ0cyB3ZWJwYWNrIGRldiBzZXJ2ZXJcbi8vXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgQm90dG9tTWVudSBmcm9tIFwiLi9Cb3R0b21NZW51XCI7XG5pbXBvcnQgTmF2TWVudSBmcm9tIFwiLi9OYXZNZW51XCI7XG5cbmltcG9ydCBmZW10b2lkIGZyb20gXCJAbXJibHVuZGVyb3ZpY2gvZmVtdG9pZFwiO1xuY29uc29sZS5sb2coZmVtdG9pZCgpKTtcblxuY29uc3QgbWVudUl0ZW1zMSA9IFtcIkhvbWVcIiwgXCJTYXZlXCIsIFwiVHVyblwiLCBcIlJldHVyblwiLCBcIkV4dGVyblwiLCBcIkV4aXRcIl07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuZml4ZWRcIikpIHtcbiAgICBCb3R0b21NZW51KGV2ZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICBldmVudC50YXJnZXQubWF0Y2hlcyhcIi5oZWFkZXItbWVudS1idG4ubGVmdFwiKSB8fFxuICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5hdmJhclwiKVxuICApIHtcbiAgICBOYXZNZW51KGV2ZW50KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9