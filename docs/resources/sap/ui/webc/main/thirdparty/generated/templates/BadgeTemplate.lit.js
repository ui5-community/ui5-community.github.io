sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;function i(e,i,n){return(0,t.html)`<div class="ui5-badge-root"><slot name="icon"></slot>${this.hasText?s.call(this,e,i,n):undefined}<span class="ui5-hidden-text">${(0,t.ifDefined)(this.badgeDescription)}</span></div>`}function s(e,i,s){return(0,t.html)`<label class="ui5-badge-text"><bdi><slot></slot></bdi></label>`}var n=i;e.default=n});
//# sourceMappingURL=BadgeTemplate.lit.js.map