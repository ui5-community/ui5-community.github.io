sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/decorators/property","sap/ui/webc/common/thirdparty/base/decorators/customElement","sap/ui/webc/common/thirdparty/base/types/CSSSize","./generated/templates/ToolbarSpacerTemplate.lit","./ToolbarItem","./ToolbarRegistry"],function(e,t,r,o,a,i,l){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=d(t);r=d(r);o=d(o);a=d(a);i=d(i);function d(e){return e&&e.__esModule?e:{default:e}}var s=void 0&&(void 0).__decorate||function(e,t,r,o){var a=arguments.length,i=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,o);else for(var d=e.length-1;d>=0;d--)if(l=e[d])i=(a<3?l(i):a>3?l(t,r,i):l(t,r))||i;return a>3&&i&&Object.defineProperty(t,r,i),i};let u=class e extends i.default{get styles(){return this.width?{width:this.width}:{flex:"auto"}}get ignoreSpace(){return this.width===""}get hasFlexibleWidth(){return this.width===""}static get toolbarTemplate(){return a.default}static get toolbarPopoverTemplate(){return a.default}get isInteractive(){return false}};s([(0,t.default)({validator:o.default})],u.prototype,"width",void 0);u=s([(0,r.default)({tag:"ui5-toolbar-spacer"})],u);(0,l.registerToolbarItem)(u);u.define();var c=u;e.default=c});
//# sourceMappingURL=ToolbarSpacer.js.map