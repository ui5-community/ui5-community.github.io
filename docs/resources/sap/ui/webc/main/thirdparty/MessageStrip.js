sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/decorators/property","sap/ui/webc/common/thirdparty/base/decorators/slot","sap/ui/webc/common/thirdparty/base/decorators/event","sap/ui/webc/common/thirdparty/base/decorators/customElement","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/icons/decline","sap/ui/webc/common/thirdparty/icons/information","sap/ui/webc/common/thirdparty/icons/sys-enter-2","sap/ui/webc/common/thirdparty/icons/error","sap/ui/webc/common/thirdparty/icons/alert","./types/MessageStripDesign","./generated/templates/MessageStripTemplate.lit","./Icon","./Button","./generated/i18n/i18n-defaults","./generated/themes/MessageStrip.css"],function(e,t,i,o,n,r,s,a,d,u,c,l,p,g,m,f,h,y,b){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=v(t);i=v(i);o=v(o);n=v(n);r=v(r);s=v(s);g=v(g);m=v(m);f=v(f);h=v(h);b=v(b);function v(e){return e&&e.__esModule?e:{default:e}}var S=void 0&&(void 0).__decorate||function(e,t,i,o){var n=arguments.length,r=n<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r;return n>3&&r&&Object.defineProperty(t,i,r),r};var _;var E;(function(e){e["Information"]="ui5-message-strip-root--info";e["Positive"]="ui5-message-strip-root--positive";e["Negative"]="ui5-message-strip-root--negative";e["Warning"]="ui5-message-strip-root--warning"})(E||(E={}));var I;(function(e){e["Information"]="information";e["Positive"]="sys-enter-2";e["Negative"]="error";e["Warning"]="alert"})(I||(I={}));let w=_=class e extends t.default{_closeClick(){this.fireEvent("close")}static async onDefine(){_.i18nBundle=await(0,a.getI18nBundle)("@ui5/webcomponents")}static designAnnouncementMappings(){const e=e=>_.i18nBundle.getText(e);return{Information:e(y.MESSAGE_STRIP_INFORMATION),Positive:e(y.MESSAGE_STRIP_SUCCESS),Negative:e(y.MESSAGE_STRIP_ERROR),Warning:e(y.MESSAGE_STRIP_WARNING)}}get hiddenText(){return`${_.designAnnouncementMappings()[this.design]} ${this.hideCloseButton?"":this._closableText}`}get _closeButtonText(){return _.i18nBundle.getText(y.MESSAGE_STRIP_CLOSE_BUTTON)}get _closableText(){return _.i18nBundle.getText(y.MESSAGE_STRIP_CLOSABLE)}get classes(){return{root:{"ui5-message-strip-root":true,"ui5-message-strip-root-hide-icon":this.hideIcon,"ui5-message-strip-root-hide-close-button":this.hideCloseButton,[this.designClasses]:true}}}get iconProvided(){return this.icon.length>0}get standardIconName(){return I[this.design]}get designClasses(){return E[this.design]}};S([(0,i.default)({type:g.default,defaultValue:g.default.Information})],w.prototype,"design",void 0);S([(0,i.default)({type:Boolean})],w.prototype,"hideIcon",void 0);S([(0,i.default)({type:Boolean})],w.prototype,"hideCloseButton",void 0);S([(0,o.default)()],w.prototype,"icon",void 0);w=_=S([(0,r.default)({tag:"ui5-message-strip",languageAware:true,renderer:s.default,template:m.default,styles:b.default,dependencies:[f.default,h.default]}),(0,n.default)("close")],w);w.define();var T=w;e.default=T});
//# sourceMappingURL=MessageStrip.js.map