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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbkVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFcUI7QUFDK0I7QUFLN0I7QUFDMkM7O0FBRXBCO0FBQzlDLFlBQVksOERBQU87O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6Qzs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9ub2RlX21vZHVsZXMvQG1yYmx1bmRlcm92aWNoL2ZlbXRvaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL0Nsb2NrU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL01lbnVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy8uL3NyYy9SaW5nU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vXG5mdW5jdGlvbiBmZW10b2lkKGxlbmd0aCA9IDEwKSB7XG4gIGxldCBpZCA9IFwiZmVtdG9pZF9tYWxmdW5jdGlvblwiO1xuICBpZiAodHlwZW9mICtsZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICBsZW5ndGggPSArbGVuZ3RoID49IDEwID8gK2xlbmd0aCA6IDEwO1xuICAgIGlkID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaWdpdCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGlkICs9IGRpZ2l0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gZmVtdG9pZDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2xvY2tTcGlubmVyKHRhcmdldCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHluYW1pY1N0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuICBjb25zdCBydWxlcyA9IGBcbiAgICAgIC5jbG9jay1zcGlubmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgIHdpZHRoOiAzcmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNmYWZmO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9jay1zcGlubmVyOjpiZWZvcmUsXG4gICAgICAgIC5jbG9jay1zcGlubmVyOjphZnRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMS41cmVtO1xuICAgICAgICAgIGxlZnQ6IDEuNXJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjNhNDk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBjbG9ja3dpc2UgMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIH1cbiAgICAgICAgLmNsb2NrLXNwaW5uZXI6OmJlZm9yZSB7XG4gICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjNhNDk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBjbG9ja3dpc2UgMjUwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgY2xvY2t3aXNlIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYDtcblxuICBkeW5hbWljU3R5bGVzLnRleHRDb250ZW50ID0gcnVsZXM7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZHluYW1pY1N0eWxlcyk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNsb2NrLXNwaW5uZXJcIik7XG4gIHRhcmdldC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cbiIsIi8vXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kRHJvcGRvd25NZW51KGl0ZW1zLCB0YXJnZXQpIHtcbiAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuICAgIG1lbnVJdGVtLmRhdGFzZXQuY3VzdG9tQXR0cmlidXRlID0gXCJkYXRhLWRyb3Bkb3duLWl0ZW1cIjtcbiAgICBtZW51SXRlbS5kYXRhc2V0LnR5cGUgPSBpdGVtO1xuICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH0pO1xuICB0YXJnZXQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VEcm9wZG93bnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd25cIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRHJvcGRvd24oZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0RHJvcGRvd24gPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5kcm9wZG93blwiKTtcbiAgaWYgKHRhcmdldERyb3Bkb3duKSB7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gdGFyZ2V0RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlzaWJsZVwiKTtcbiAgICBjbG9zZURyb3Bkb3ducygpO1xuICAgIGlmICghaXNWaXNpYmxlKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xvc2VzdChcIi5kcm9wZG93blwiKS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2xvc2VEcm9wZG93bnMoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFJpbmdTcGlubmVyKHRhcmdldCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdGFyZ2V0PVwicmluZy1zcGlubmVyXCJdJykpIHtcbiAgICBjb25zdCBkeW5hbWljU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGR5bmFtaWNTdHlsZXMuZGF0YXNldC50YXJnZXQgPSBcInJpbmctc3Bpbm5lclwiO1xuXG4gICAgY29uc3QgcnVsZXMgPSBgXG4gICAgICAgIC5yaW5nLXNwaW5uZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzdlY2VmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzIyM2E0OTtcbiAgYW5pbWF0aW9uOiByaW5nLXNwaW5uZXIgMTAwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyByaW5nLXNwaW5uZXIge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYDtcblxuICAgIGR5bmFtaWNTdHlsZXMudGV4dENvbnRlbnQgPSBydWxlcztcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGR5bmFtaWNTdHlsZXMpO1xuICB9XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJpbmctc3Bpbm5lclwiKTtcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NwaW5uZXJCYWNrZHJvcCgpIHtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKFwic3Bpbm5lci1iYWNrZHJvcFwiKTtcblxuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdGFyZ2V0PVwic3Bpbm5lci1iYWNrZHJvcFwiXScpKSB7XG4gICAgY29uc3QgZHluYW1pY1N0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBkeW5hbWljU3R5bGVzLmRhdGFzZXQudGFyZ2V0ID0gXCJzcGlubmVyLWJhY2tkcm9wXCI7XG5cbiAgICBjb25zdCBydWxlcyA9IGBcbiAgICAuc3Bpbm5lci1iYWNrZHJvcHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY3NztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIGA7XG5cbiAgICBkeW5hbWljU3R5bGVzLnRleHRDb250ZW50ID0gcnVsZXM7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkeW5hbWljU3R5bGVzKTtcbiAgfVxuXG4gIGFwcGVuZFJpbmdTcGlubmVyKGJhY2tkcm9wKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZHJvcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVTcGlubmVyQmFja2Ryb3AoKSB7XG4gIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLWJhY2tkcm9wXCIpO1xuICBpZiAoYmFja2Ryb3ApIHtcbiAgICBiYWNrZHJvcC5yZW1vdmUoKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vICducG0gcnVuIHN0YXJ0JyBpbiB0ZXJtaW5hbCBzdGFydHMgd2VicGFjayBkZXYgc2VydmVyXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBhcHBlbmRDbG9ja1NwaW5uZXIgfSBmcm9tIFwiLi9DbG9ja1NwaW5uZXJcIjtcbmltcG9ydCB7XG4gIGFwcGVuZFJpbmdTcGlubmVyLFxuICBzaG93U3Bpbm5lckJhY2tkcm9wLFxuICByZW1vdmVTcGlubmVyQmFja2Ryb3AsXG59IGZyb20gXCIuL1JpbmdTcGlubmVyXCI7XG5pbXBvcnQgeyBhcHBlbmREcm9wZG93bk1lbnUsIGV4cGFuZERyb3Bkb3duIH0gZnJvbSBcIi4vTWVudU1vZHVsZVwiO1xuXG5pbXBvcnQgZmVtdG9pZCBmcm9tIFwiQG1yYmx1bmRlcm92aWNoL2ZlbXRvaWRcIjtcbmNvbnNvbGUubG9nKGZlbXRvaWQoKSk7XG5cbmNvbnN0IG1lbnVJdGVtczEgPSBbXCJIb21lXCIsIFwiU2F2ZVwiLCBcIlR1cm5cIiwgXCJSZXR1cm5cIiwgXCJFeHRlcm5cIiwgXCJFeGl0XCJdO1xuY29uc3QgbWVudUl0ZW1zMiA9IFtcIk5vdFwiLCBcIkFcIiwgXCJMb3RcIiwgXCJHb2luZ1wiLCBcIk9uXCIsIFwiSGVyZVwiXTtcbmNvbnN0IG1lbnVJdGVtczMgPSBbXCJWYWx1ZVwiLCBcIk1lYW5pbmdcIiwgXCJDbGFyaXR5XCIsIFwiVGltZVwiLCBcIkhvcGVcIl07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuYWN0aW9uID09PSBcImFkZFwiKSB7XG4gICAgYWRkTWVudShldmVudCk7XG4gICAgY29uc29sZS5sb2coXCJhZGRcIik7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1tZW51LWl0ZW1cIikpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIGNvbGxhcHNlQWRkTWVudShldmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTWVudShldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBhbmRlZFwiKSkge1xuICAgIGNvbGxhcHNlQWRkTWVudShldmVudCk7XG4gIH0gZWxzZSB7XG4gICAgZXhwYW5kQWRkTWVudShldmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhwYW5kQWRkTWVudShldmVudCkge1xuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBidXR0b24ucGFyZW50RWxlbWVudDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJjbG9zZVwiO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUobWVudUl0ZW1zMykpO1xufVxuXG5mdW5jdGlvbiBjb2xsYXBzZUFkZE1lbnUoZXZlbnQpIHtcbiAgY29uc3QgZml4ZWRDb250YWluZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5maXhlZFwiKTtcbiAgY29uc3QgYnV0dG9uID0gZml4ZWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ib3R0b20tbWVudS1idG5cIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBidXR0b24ucGFyZW50RWxlbWVudDtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJhZGRcIjtcbiAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcbiAgbWVudUNvbnRhaW5lci5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1tZW51LWV4cGFuZGVkXCIpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudShtZW51SXRlbXMpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZW51XCIpO1xuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWRkLW1lbnUtaXRlbVwiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcImJvdHRvbS1tZW51LWV4cGFuZGVkXCIpO1xuICByZXR1cm4gbWVudTtcbn1cbi8qIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gIHNob3dTcGlubmVyQmFja2Ryb3AoKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICByZW1vdmVTcGlubmVyQmFja2Ryb3AoKTtcbiAgICBleHBhbmREcm9wZG93bihldmVudCk7XG4gIH0sIDEwMDApO1xufSAqL1xuXG4vL2FwcGVuZERyb3Bkb3duTWVudShtZW51SXRlbXMxLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUxXCIpKTtcbi8vYXBwZW5kUmluZ1NwaW5uZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikpO1xuLyogc2hvd1NwaW5uZXJCYWNrZHJvcCgpO1xuXG5zZXRUaW1lb3V0KHJlbW92ZVNwaW5uZXJCYWNrZHJvcCwgMTAwMCk7ICovXG4vL2FwcGVuZERyb3Bkb3duTWVudShtZW51SXRlbXMyLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUyXCIpKTtcblxuLy9hcHBlbmRTcGlubmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9