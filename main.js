/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHomeContent)();\n\n    document.getElementById('homeBtn').addEventListener('click', () => {\n        loadView('home');\n    });\n\n    document.getElementById('menuBtn').addEventListener('click', () => {\n        loadView('menu');\n    });\n\n    document.getElementById('contactBtn').addEventListener('click', () => {\n        loadView('contact');\n    });\n});\n\nfunction loadView(view) {\n    const content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n\n    if (view === \"home\") {\n        (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHomeContent)();\n    } else if (view === \"menu\") {\n        (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuContent)();\n    } else if (view === \"contact\") {\n        (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContactContent)();\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFrRDtBQUNBO0FBQ007O0FBRXhEO0FBQ0EsSUFBSSxpRUFBZTs7QUFFbkI7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsaUVBQWU7QUFDdkIsTUFBTTtBQUNOLFFBQVEsaUVBQWU7QUFDdkIsTUFBTTtBQUNOLFFBQVEsdUVBQWtCO0FBQzFCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVyZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzP2ZmZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsb2FkSG9tZUNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy9ob21lLmpzJztcbmltcG9ydCB7bG9hZE1lbnVDb250ZW50fSBmcm9tICcuL21vZHVsZXMvbWVudS5qcyc7XG5pbXBvcnQge2xvYWRDb250YWN0Q29udGVudH0gZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxvYWRIb21lQ29udGVudCgpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9hZFZpZXcoJ2hvbWUnKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRWaWV3KCdtZW51Jyk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsb2FkVmlldygnY29udGFjdCcpO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGxvYWRWaWV3KHZpZXcpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGlmICh2aWV3ID09PSBcImhvbWVcIikge1xuICAgICAgICBsb2FkSG9tZUNvbnRlbnQoKTtcbiAgICB9IGVsc2UgaWYgKHZpZXcgPT09IFwibWVudVwiKSB7XG4gICAgICAgIGxvYWRNZW51Q29udGVudCgpO1xuICAgIH0gZWxzZSBpZiAodmlldyA9PT0gXCJjb250YWN0XCIpIHtcbiAgICAgICAgbG9hZENvbnRhY3RDb250ZW50KCk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/modules/contact.js"
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactContent: () => (/* binding */ loadContactContent)\n/* harmony export */ });\nfunction loadContactContent() {\n    const contactMsg = document.createElement(\"p\");\n    contactMsg.textContent = \"Get in touch with us!\";\n    document.getElementById(\"content\").appendChild(contactMsg);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanM/ZjRmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3RDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRhY3RNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0TXNnLnRleHRDb250ZW50ID0gXCJHZXQgaW4gdG91Y2ggd2l0aCB1cyFcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoY29udGFjdE1zZyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/contact.js\n\n}");

/***/ },

/***/ "./src/modules/home.js"
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomeContent: () => (/* binding */ loadHomeContent)\n/* harmony export */ });\nfunction loadHomeContent() {\n    const welcomeMsg = document.createElement(\"p\");\n    welcomeMsg.textContent = \"Welcome to The Restaurant!\";\n    document.getElementById(\"content\").appendChild(welcomeMsg);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hvbWUuanM/ZjVmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZEhvbWVDb250ZW50KCkge1xuICAgIGNvbnN0IHdlbGNvbWVNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB3ZWxjb21lTXNnLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIFRoZSBSZXN0YXVyYW50IVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmRDaGlsZCh3ZWxjb21lTXNnKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/home.js\n\n}");

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuContent: () => (/* binding */ loadMenuContent)\n/* harmony export */ });\nfunction loadMenuContent() {\n    const menuMsg = document.createElement(\"p\");\n    menuMsg.textContent = \"Take a look at our menu!\";\n    document.getElementById(\"content\").appendChild(menuMsg);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUuanM/NjdkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZE1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IG1lbnVNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtZW51TXNnLnRleHRDb250ZW50ID0gXCJUYWtlIGEgbG9vayBhdCBvdXIgbWVudSFcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQobWVudU1zZyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;