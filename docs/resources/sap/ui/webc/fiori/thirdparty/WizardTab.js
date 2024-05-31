sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/decorators/customElement","sap/ui/webc/common/thirdparty/base/decorators/property","sap/ui/webc/common/thirdparty/base/decorators/event","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/Keys","sap/ui/webc/main/thirdparty/Icon","./generated/templates/WizardTabTemplate.lit","./generated/themes/WizardTab.css"],function(e,t,a,i,r,o,d,n,s,c){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=l(t);a=l(a);i=l(i);r=l(r);o=l(o);n=l(n);s=l(s);c=l(c);function l(e){return e&&e.__esModule?e:{default:e}}var u=void 0&&(void 0).__decorate||function(e,t,a,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,a):i,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,a,i);else for(var n=e.length-1;n>=0;n--)if(d=e[n])o=(r<3?d(o):r>3?d(t,a,o):d(t,a))||o;return r>3&&o&&Object.defineProperty(t,a,o),o};let p=class e extends t.default{_onclick(){if(!this.disabled){this.fireEvent("selection-change-requested")}}_onkeyup(e){if(this.disabled){return}if(((0,d.isSpace)(e)||(0,d.isEnter)(e))&&!(0,d.isSpaceShift)(e)){e.preventDefault();this.fireEvent("selection-change-requested")}}_onfocusin(){this.fireEvent("focused")}get tabIndex(){return Number(this._tabIndex)}get hasTexts(){return this.titleText||this.subtitleText}get accInfo(){return{ariaSetsize:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaSetsize,ariaPosinset:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaPosinset,ariaLabel:this._wizardTabAccInfo&&this._wizardTabAccInfo.ariaLabel,ariaCurrent:this.selected?"true":undefined,ariaDisabled:this.disabled?"true":undefined}}};u([(0,i.default)()],p.prototype,"icon",void 0);u([(0,i.default)()],p.prototype,"titleText",void 0);u([(0,i.default)()],p.prototype,"subtitleText",void 0);u([(0,i.default)()],p.prototype,"number",void 0);u([(0,i.default)({type:Boolean})],p.prototype,"disabled",void 0);u([(0,i.default)({type:Boolean})],p.prototype,"selected",void 0);u([(0,i.default)({type:Boolean})],p.prototype,"hideSeparator",void 0);u([(0,i.default)({type:Boolean})],p.prototype,"activeSeparator",void 0);u([(0,i.default)({type:Boolean})],p.prototype,"branchingSeparator",void 0);u([(0,i.default)({defaultValue:"-1"})],p.prototype,"_tabIndex",void 0);p=u([(0,a.default)({tag:"ui5-wizard-tab",renderer:o.default,styles:c.default,template:s.default,dependencies:[n.default]}),(0,r.default)("selection-change-requested")],p);p.define();var f=p;e.default=f});
//# sourceMappingURL=WizardTab.js.map