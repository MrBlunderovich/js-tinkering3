/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/MenuModule.js":
/*!***************************!*\
  !*** ./src/MenuModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/SpinnerModule.js":
/*!******************************!*\
  !*** ./src/SpinnerModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendSpinner": () => (/* binding */ appendSpinner)
/* harmony export */ });
//
function appendSpinner(target) {
  const element = document.createElement("div");
  const dynamicStyles = document.createElement("style");

  const rules = `
      .spinner {
          margin-left: auto;
          position: relative;
          height: 3rem;
          width: 3rem;
          border-radius: 50%;
          background-color: #d3faff;
        }
        .spinner::before,
        .spinner::after {
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
        .spinner::before {
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
  element.classList.add("spinner");
  target.appendChild(element);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _SpinnerModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerModule */ "./src/SpinnerModule.js");
/* harmony import */ var _MenuModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuModule */ "./src/MenuModule.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'femtoid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// 'npm run start' in terminal starts webpack dev server






const menuItems1 = ["Home", "Save", "Turn", "Return", "Extern", "Exit"];
const menuItems2 = ["Not", "A", "Lot", "Going", "On", "Here"];

document.addEventListener("click", handleClick);
function handleClick(event) {
  (0,_MenuModule__WEBPACK_IMPORTED_MODULE_2__.expandDropdown)(event);
}

(0,_MenuModule__WEBPACK_IMPORTED_MODULE_2__.appendDropdownMenu)(menuItems1, document.querySelector(".menu1"));
(0,_MenuModule__WEBPACK_IMPORTED_MODULE_2__.appendDropdownMenu)(menuItems2, document.querySelector(".menu2"));

//appendSpinner(document.querySelector("header"));
console.log(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'femtoid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNoREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVxQjtBQUMyQjtBQUNrQjtBQUNwQzs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwyREFBYztBQUNoQjs7QUFFQSwrREFBa0I7QUFDbEIsK0RBQWtCOztBQUVsQjtBQUNBLFlBQVksc0lBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9zcmMvTWVudU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczLy4vc3JjL1NwaW5uZXJNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy10aW5rZXJpbmczL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtdGlua2VyaW5nMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXRpbmtlcmluZzMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy9cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmREcm9wZG93bk1lbnUoaXRlbXMsIHRhcmdldCkge1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG4gICAgbWVudUl0ZW0uZGF0YXNldC5jdXN0b21BdHRyaWJ1dGUgPSBcImRhdGEtZHJvcGRvd24taXRlbVwiO1xuICAgIG1lbnVJdGVtLmRhdGFzZXQudHlwZSA9IGl0ZW07XG4gICAgbWVudUl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG4gIHRhcmdldC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZURyb3Bkb3ducygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93blwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmREcm9wZG93bihldmVudCkge1xuICBjb25zdCB0YXJnZXREcm9wZG93biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmRyb3Bkb3duXCIpO1xuICBpZiAodGFyZ2V0RHJvcGRvd24pIHtcbiAgICBjb25zdCBpc1Zpc2libGUgPSB0YXJnZXREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmxlXCIpO1xuICAgIGNsb3NlRHJvcGRvd25zKCk7XG4gICAgaWYgKCFpc1Zpc2libGUpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmRyb3Bkb3duXCIpLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjbG9zZURyb3Bkb3ducygpO1xuICB9XG59XG4iLCIvL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFNwaW5uZXIodGFyZ2V0KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkeW5hbWljU3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG4gIGNvbnN0IHJ1bGVzID0gYFxuICAgICAgLnNwaW5uZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2ZhZmY7XG4gICAgICAgIH1cbiAgICAgICAgLnNwaW5uZXI6OmJlZm9yZSxcbiAgICAgICAgLnNwaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgbGVmdDogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2E0OTtcbiAgICAgICAgICBhbmltYXRpb246IGNsb2Nrd2lzZSAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgfVxuICAgICAgICAuc3Bpbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyM2E0OTtcbiAgICAgICAgICBhbmltYXRpb246IGNsb2Nrd2lzZSAyNTAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIH1cbiAgICAgICAgQGtleWZyYW1lcyBjbG9ja3dpc2Uge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuXG4gIGR5bmFtaWNTdHlsZXMudGV4dENvbnRlbnQgPSBydWxlcztcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkeW5hbWljU3R5bGVzKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic3Bpbm5lclwiKTtcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyAnbnBtIHJ1biBzdGFydCcgaW4gdGVybWluYWwgc3RhcnRzIHdlYnBhY2sgZGV2IHNlcnZlclxuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYXBwZW5kU3Bpbm5lciB9IGZyb20gXCIuL1NwaW5uZXJNb2R1bGVcIjtcbmltcG9ydCB7IGFwcGVuZERyb3Bkb3duTWVudSwgZXhwYW5kRHJvcGRvd24gfSBmcm9tIFwiLi9NZW51TW9kdWxlXCI7XG5pbXBvcnQgZmVtdG9pZCBmcm9tIFwiZmVtdG9pZFwiO1xuXG5jb25zdCBtZW51SXRlbXMxID0gW1wiSG9tZVwiLCBcIlNhdmVcIiwgXCJUdXJuXCIsIFwiUmV0dXJuXCIsIFwiRXh0ZXJuXCIsIFwiRXhpdFwiXTtcbmNvbnN0IG1lbnVJdGVtczIgPSBbXCJOb3RcIiwgXCJBXCIsIFwiTG90XCIsIFwiR29pbmdcIiwgXCJPblwiLCBcIkhlcmVcIl07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG5mdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICBleHBhbmREcm9wZG93bihldmVudCk7XG59XG5cbmFwcGVuZERyb3Bkb3duTWVudShtZW51SXRlbXMxLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUxXCIpKTtcbmFwcGVuZERyb3Bkb3duTWVudShtZW51SXRlbXMyLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUyXCIpKTtcblxuLy9hcHBlbmRTcGlubmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIikpO1xuY29uc29sZS5sb2coZmVtdG9pZCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==