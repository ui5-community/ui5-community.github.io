sap.ui.define(["exports","../util/createLinkInHead","../validateThemeRoot","../InitialConfiguration","./Theme"],function(e,t,o,s,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.setThemeRoot=e.getThemeRoot=e.attachCustomThemeStylesToHead=void 0;t=i(t);o=i(o);function i(e){return e&&e.__esModule?e:{default:e}}let a;const u=()=>{if(a===undefined){a=(0,s.getThemeRoot)()}return a};e.getThemeRoot=u;const r=e=>{if(a===e){return}a=e;if(!(0,o.default)(e)){console.warn(`The ${e} is not valid. Check the allowed origins as suggested in the "setThemeRoot" description.`);return}return d((0,sap.ui.require("sap/ui/webc/common/thirdparty/base/config/Theme").getTheme)())};e.setThemeRoot=r;const c=e=>`${u()}Base/baseLib/${e}/css_variables.css`;const d=async e=>{const o=document.querySelector(`[sap-ui-webcomponents-theme="${e}"]`);if(o){document.head.removeChild(o)}await(0,t.default)(c(e),{"sap-ui-webcomponents-theme":e})};e.attachCustomThemeStylesToHead=d});
//# sourceMappingURL=ThemeRoot.js.map