sap.ui.define(["exports","../Render","../getSharedResource","../EventProvider"],function(t,e,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.getCustomCSS=t.detachCustomCSSChange=t.attachCustomCSSChange=t.addCustomCSS=void 0;n=s(n);o=s(o);function s(t){return t&&t.__esModule?t:{default:t}}const u=()=>(0,n.default)("CustomStyle.eventProvider",new o.default);const a="CustomCSSChange";const r=t=>{u().attachEvent(a,t)};t.attachCustomCSSChange=r;const C=t=>{u().detachEvent(a,t)};t.detachCustomCSSChange=C;const S=t=>u().fireEvent(a,t);const c=()=>(0,n.default)("CustomStyle.customCSSFor",{});let d;r(t=>{if(!d){(0,e.reRenderAllUI5Elements)({tag:t})}});const l=(t,n)=>{const o=c();if(!o[t]){o[t]=[]}o[t].push(n);d=true;try{S(t)}finally{d=false}return(0,e.reRenderAllUI5Elements)({tag:t})};t.addCustomCSS=l;const i=t=>{const e=c();return e[t]?e[t].join(""):""};t.getCustomCSS=i});
//# sourceMappingURL=CustomStyle.js.map