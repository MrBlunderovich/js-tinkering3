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

/***/ "./src/ClockSpinner.js":
/*!*****************************!*\
  !*** ./src/ClockSpinner.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendClockSpinner": () => (/* binding */ appendClockSpinner)
/* harmony export */ });
//
function appendClockSpinner(target) {
  const element = document.createElement("div");
  const dynamicStyles = document.createElement("style");

  const rules = `
      .clock-spinner {
          margin-left: auto;
          position: relative;
          height: 3rem;
          width: 3rem;
          border-radius: 50%;
          background-color: #d3faff;
        }
        .clock-spinner::before,
        .clock-spinner::after {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          margin-left: -1px;
          display: block;
          content: "";
          width: 2px;
          height: 2rem;
          background-color: #223a49;
          animation: clockwise 1s linear infinite;
          transform-origin: center bottom;
        }
        .clock-spinner::before {
          height: 1rem;
          background-color: #223a49;
          animation: clockwise 2500ms linear infinite;
          transform-origin: center bottom;
        }
        @keyframes clockwise {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `;

  dynamicStyles.textContent = rules;
  document.head.appendChild(dynamicStyles);
  element.classList.add("clock-spinner");
  target.appendChild(element);
}


/***/ }),

/***/ "./src/MenuModule.js":
/*!***************************!*\
  !*** ./src/MenuModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendDropdownMenu": () => (/* binding */ appendDropdownMenu),
/* harmony export */   "closeDropdowns": () => (/* binding */ closeDropdowns),
/* harmony export */   "expandDropdown": () => (/* binding */ expandDropdown)
/* harmony export */ });
//
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


/***/ }),

/***/ "./src/RingSpinner.js":
/*!****************************!*\
  !*** ./src/RingSpinner.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendRingSpinner": () => (/* binding */ appendRingSpinner),
/* harmony export */   "removeSpinnerBackdrop": () => (/* binding */ removeSpinnerBackdrop),
/* harmony export */   "showSpinnerBackdrop": () => (/* binding */ showSpinnerBackdrop)
/* harmony export */ });
function appendRingSpinner(target) {
  const element = document.createElement("div");

  if (!document.querySelector('style[data-target="ring-spinner"]')) {
    const dynamicStyles = document.createElement("style");
    dynamicStyles.dataset.target = "ring-spinner";

    const rules = `
        .ring-spinner {
            height: 50px;
  width: 50px;
  border: 2px solid #7eceff;
  border-radius: 50%;
  border-top: 2px solid #223a49;
  animation: ring-spinner 1000ms linear infinite;
          }
          @keyframes ring-spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `;

    dynamicStyles.textContent = rules;
    document.head.appendChild(dynamicStyles);
  }
  element.classList.add("ring-spinner");
  target.appendChild(element);
}

function showSpinnerBackdrop() {
  const backdrop = document.createElement("div");
  backdrop.classList.add("spinner-backdrop");

  if (!document.querySelector('style[data-target="spinner-backdrop"]')) {
    const dynamicStyles = document.createElement("style");
    dynamicStyles.dataset.target = "spinner-backdrop";

    const rules = `
    .spinner-backdrop{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100vh;
      background-color: #ffffff77;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    `;

    dynamicStyles.textContent = rules;
    document.head.appendChild(dynamicStyles);
  }

  appendRingSpinner(backdrop);
  document.body.appendChild(backdrop);
}

function removeSpinnerBackdrop() {
  const backdrop = document.querySelector(".spinner-backdrop");
  if (backdrop) {
    backdrop.remove();
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
/* harmony import */ var _ClockSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClockSpinner */ "./src/ClockSpinner.js");
/* harmony import */ var _RingSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RingSpinner */ "./src/RingSpinner.js");
/* harmony import */ var _MenuModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuModule */ "./src/MenuModule.js");
/* harmony import */ var _mrblunderovich_femtoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mrblunderovich/femtoid */ "./node_modules/@mrblunderovich/femtoid/index.js");
/* harmony import */ var _mrblunderovich_femtoid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mrblunderovich_femtoid__WEBPACK_IMPORTED_MODULE_4__);
// 'npm run start' in terminal starts webpack dev server
//







console.log(_mrblunderovich_femtoid__WEBPACK_IMPORTED_MODULE_4___default()());

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVxQjtBQUMrQjtBQUs3QjtBQUMyQzs7QUFFcEI7QUFDOUMsWUFBWSw4REFBTzs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy8uL25vZGVfbW9kdWxlcy9AbXJibHVuZGVyb3ZpY2gvZmVtdG9pZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9zcmMvQ2xvY2tTcGlubmVyLmpzIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9zcmMvTWVudU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL1JpbmdTcGlubmVyLmpzIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9cbmZ1bmN0aW9uIGZlbXRvaWQobGVuZ3RoID0gMTApIHtcbiAgbGV0IGlkID0gXCJmZW10b2lkX21hbGZ1bmN0aW9uXCI7XG4gIGlmICh0eXBlb2YgK2xlbmd0aCA9PT0gXCJudW1iZXJcIikge1xuICAgIGxlbmd0aCA9ICtsZW5ndGggPj0gMTAgPyArbGVuZ3RoIDogMTA7XG4gICAgaWQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpZ2l0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgaWQgKz0gZGlnaXQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlkO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmZW10b2lkO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDbG9ja1NwaW5uZXIodGFyZ2V0KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkeW5hbWljU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG4gIGNvbnN0IHJ1bGVzID0gYFxuICAgICAgLmNsb2NrLXNwaW5uZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2ZhZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmNsb2NrLXNwaW5uZXI6OmJlZm9yZSxcbiAgICAgICAgLmNsb2NrLXNwaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgbGVmdDogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2E0OTtcbiAgICAgICAgICBhbmltYXRpb246IGNsb2Nrd2lzZSAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICAuY2xvY2stc3Bpbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2E0OTtcbiAgICAgICAgICBhbmltYXRpb246IGNsb2Nrd2lzZSAyNTAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBjbG9ja3dpc2Uge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuXG4gIGR5bmFtaWNTdHlsZXMudGV4dENvbnRlbnQgPSBydWxlcztcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkeW5hbWljU3R5bGVzKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2xvY2stc3Bpbm5lclwiKTtcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuIiwiLy9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmREcm9wZG93bk1lbnUoaXRlbXMsIHRhcmdldCkge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWVudUl0ZW0uZGF0YXNldC5jdXN0b21BdHRyaWJ1dGUgPSBcImRhdGEtZHJvcGRvd24taXRlbVwiO1xuICAgIG1lbnVJdGVtLmRhdGFzZXQudHlwZSA9IGl0ZW07XG4gICAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG4gIHRhcmdldC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURyb3Bkb3ducygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93blwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmREcm9wZG93bihldmVudCkge1xuICBjb25zdCB0YXJnZXREcm9wZG93biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmRyb3Bkb3duXCIpO1xuICBpZiAodGFyZ2V0RHJvcGRvd24pIHtcbiAgICBjb25zdCBpc1Zpc2libGUgPSB0YXJnZXREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmxlXCIpO1xuICAgIGNsb3NlRHJvcGRvd25zKCk7XG4gICAgaWYgKCFpc1Zpc2libGUpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmRyb3Bkb3duXCIpLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjbG9zZURyb3Bkb3ducygpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwZW5kUmluZ1NwaW5uZXIodGFyZ2V0KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS10YXJnZXQ9XCJyaW5nLXNwaW5uZXJcIl0nKSkge1xuICAgIGNvbnN0IGR5bmFtaWNTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgZHluYW1pY1N0eWxlcy5kYXRhc2V0LnRhcmdldCA9IFwicmluZy1zcGlubmVyXCI7XG5cbiAgICBjb25zdCBydWxlcyA9IGBcbiAgICAgICAgLnJpbmctc3Bpbm5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjN2VjZWZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjIzYTQ5O1xuICBhbmltYXRpb246IHJpbmctc3Bpbm5lciAxMDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHJpbmctc3Bpbm5lciB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgO1xuXG4gICAgZHluYW1pY1N0eWxlcy50ZXh0Q29udGVudCA9IHJ1bGVzO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZHluYW1pY1N0eWxlcyk7XG4gIH1cbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmluZy1zcGlubmVyXCIpO1xuICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93U3Bpbm5lckJhY2tkcm9wKCkge1xuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJzcGlubmVyLWJhY2tkcm9wXCIpO1xuXG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS10YXJnZXQ9XCJzcGlubmVyLWJhY2tkcm9wXCJdJykpIHtcbiAgICBjb25zdCBkeW5hbWljU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGR5bmFtaWNTdHlsZXMuZGF0YXNldC50YXJnZXQgPSBcInNwaW5uZXItYmFja2Ryb3BcIjtcblxuICAgIGNvbnN0IHJ1bGVzID0gYFxuICAgIC5zcGlubmVyLWJhY2tkcm9we1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjc3O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgYDtcblxuICAgIGR5bmFtaWNTdHlsZXMudGV4dENvbnRlbnQgPSBydWxlcztcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGR5bmFtaWNTdHlsZXMpO1xuICB9XG5cbiAgYXBwZW5kUmluZ1NwaW5uZXIoYmFja2Ryb3ApO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tkcm9wKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNwaW5uZXJCYWNrZHJvcCgpIHtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItYmFja2Ryb3BcIik7XG4gIGlmIChiYWNrZHJvcCkge1xuICAgIGJhY2tkcm9wLnJlbW92ZSgpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gJ25wbSBydW4gc3RhcnQnIGluIHRlcm1pbmFsIHN0YXJ0cyB3ZWJwYWNrIGRldiBzZXJ2ZXJcbi8vXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBhcHBlbmRDbG9ja1NwaW5uZXIgfSBmcm9tIFwiLi9DbG9ja1NwaW5uZXJcIjtcbmltcG9ydCB7XG4gIGFwcGVuZFJpbmdTcGlubmVyLFxuICBzaG93U3Bpbm5lckJhY2tkcm9wLFxuICByZW1vdmVTcGlubmVyQmFja2Ryb3AsXG59IGZyb20gXCIuL1JpbmdTcGlubmVyXCI7XG5pbXBvcnQgeyBhcHBlbmREcm9wZG93bk1lbnUsIGV4cGFuZERyb3Bkb3duIH0gZnJvbSBcIi4vTWVudU1vZHVsZVwiO1xuXG5pbXBvcnQgZmVtdG9pZCBmcm9tIFwiQG1yYmx1bmRlcm92aWNoL2ZlbXRvaWRcIjtcbmNvbnNvbGUubG9nKGZlbXRvaWQoKSk7XG5cbmNvbnN0IG1lbnVJdGVtczEgPSBbXCJIb21lXCIsIFwiU2F2ZVwiLCBcIlR1cm5cIiwgXCJSZXR1cm5cIiwgXCJFeHRlcm5cIiwgXCJFeGl0XCJdO1xuY29uc3QgbWVudUl0ZW1zMiA9IFtcIk5vdFwiLCBcIkFcIiwgXCJMb3RcIiwgXCJHb2luZ1wiLCBcIk9uXCIsIFwiSGVyZVwiXTtcbmNvbnN0IG1lbnVJdGVtczMgPSBbXCJWYWx1ZVwiLCBcIk1lYW5pbmdcIiwgXCJDbGFyaXR5XCIsIFwiVGltZVwiLCBcIkhvcGVcIl07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYWN0aW9uID09PSBcImFkZFwiKSB7XG4gICAgYWRkTWVudShldmVudCk7XG4gICAgY29uc29sZS5sb2coXCJhZGRcIik7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1tZW51LWl0ZW1cIikpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIGNvbGxhcHNlQWRkTWVudShldmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTWVudShldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBhbmRlZFwiKSkge1xuICAgIGNvbGxhcHNlQWRkTWVudShldmVudCk7XG4gIH0gZWxzZSB7XG4gICAgZXhwYW5kQWRkTWVudShldmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhwYW5kQWRkTWVudShldmVudCkge1xuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBidXR0b24ucGFyZW50RWxlbWVudDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJjbG9zZVwiO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUobWVudUl0ZW1zMykpO1xufVxuXG5mdW5jdGlvbiBjb2xsYXBzZUFkZE1lbnUoZXZlbnQpIHtcbiAgY29uc3QgZml4ZWRDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5maXhlZFwiKTtcbiAgY29uc3QgYnV0dG9uID0gZml4ZWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ib3R0b20tbWVudS1idG5cIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBidXR0b24ucGFyZW50RWxlbWVudDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJhZGRcIjtcbiAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcbiAgbWVudUNvbnRhaW5lci5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1tZW51LWV4cGFuZGVkXCIpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudShtZW51SXRlbXMpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZW51XCIpO1xuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWRkLW1lbnUtaXRlbVwiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1tZW51LWV4cGFuZGVkXCIpO1xuICByZXR1cm4gbWVudTtcbn1cbi8qIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gIHNob3dTcGlubmVyQmFja2Ryb3AoKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZW1vdmVTcGlubmVyQmFja2Ryb3AoKTtcbiAgICBleHBhbmREcm9wZG93bihldmVudCk7XG4gIH0sIDEwMDApO1xufSAqL1xuXG4vL2FwcGVuZERyb3Bkb3duTWVudShtZW51SXRlbXMxLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUxXCIpKTtcbi8vYXBwZW5kUmluZ1NwaW5uZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikpO1xuLyogc2hvd1NwaW5uZXJCYWNrZHJvcCgpO1xuXG5zZXRUaW1lb3V0KHJlbW92ZVNwaW5uZXJCYWNrZHJvcCwgMTAwMCk7ICovXG4vL2FwcGVuZERyb3Bkb3duTWVudShtZW51SXRlbXMyLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUyXCIpKTtcblxuLy9hcHBlbmRTcGlubmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9