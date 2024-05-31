"use strict";

sap.ui.define(["./App.controller"], function (__AppController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const AppController = _interopRequireDefault(__AppController);
  /**
   * @namespace org.openui5.bestofui5.controller
   */
  const NotFound = AppController.extend("org.openui5.bestofui5.controller.NotFound", {
    onInit: function _onInit() {
      console.log("NotFound.onInit");
    }
  });
  return NotFound;
});
//# sourceMappingURL=NotFound.controller.js.map