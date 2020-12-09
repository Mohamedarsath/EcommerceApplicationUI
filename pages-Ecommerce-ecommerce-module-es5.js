function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Ecommerce-ecommerce-module"], {
  /***/
  "./src/app/pages/Ecommerce/ecommerce-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/Ecommerce/ecommerce-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: EcommerceRoutingModule */

  /***/
  function srcAppPagesEcommerceEcommerceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcommerceRoutingModule", function () {
      return EcommerceRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ecommerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ecommerce.component */
    "./src/app/pages/Ecommerce/ecommerce.component.ts");

    var routes = [{
      path: '',
      component: _ecommerce_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceComponent"]
    }];

    var EcommerceRoutingModule = function EcommerceRoutingModule() {
      _classCallCheck(this, EcommerceRoutingModule);
    };

    EcommerceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EcommerceRoutingModule
    });
    EcommerceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EcommerceRoutingModule_Factory(t) {
        return new (t || EcommerceRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcommerceRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Ecommerce/ecommerce.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/Ecommerce/ecommerce.component.ts ***!
    \********************************************************/

  /*! exports provided: EcommerceComponent */

  /***/
  function srcAppPagesEcommerceEcommerceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function () {
      return EcommerceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EcommerceComponent = /*#__PURE__*/function () {
      function EcommerceComponent() {
        _classCallCheck(this, EcommerceComponent);
      }

      _createClass(EcommerceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EcommerceComponent;
    }();

    EcommerceComponent.ɵfac = function EcommerceComponent_Factory(t) {
      return new (t || EcommerceComponent)();
    };

    EcommerceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EcommerceComponent,
      selectors: [["app-home"]],
      decls: 0,
      vars: 0,
      template: function EcommerceComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0Vjb21tZXJjZS9lY29tbWVyY2UuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './ecommerce.component.html',
          styleUrls: ['./ecommerce.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/Ecommerce/ecommerce.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/Ecommerce/ecommerce.module.ts ***!
    \*****************************************************/

  /*! exports provided: EcommerceModule */

  /***/
  function srcAppPagesEcommerceEcommerceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcommerceModule", function () {
      return EcommerceModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ecommerce-routing.module */
    "./src/app/pages/Ecommerce/ecommerce-routing.module.ts");
    /* harmony import */


    var _ecommerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ecommerce.component */
    "./src/app/pages/Ecommerce/ecommerce.component.ts");

    var EcommerceModule = function EcommerceModule() {
      _classCallCheck(this, EcommerceModule);
    };

    EcommerceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EcommerceModule
    });
    EcommerceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EcommerceModule_Factory(t) {
        return new (t || EcommerceModule)();
      },
      imports: [[_ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_1__["EcommerceRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcommerceModule, {
        declarations: [_ecommerce_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceComponent"]],
        imports: [_ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_1__["EcommerceRoutingModule"]],
        exports: [_ecommerce_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_1__["EcommerceRoutingModule"]],
          declarations: [_ecommerce_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceComponent"]],
          exports: [_ecommerce_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-Ecommerce-ecommerce-module-es5.js.map