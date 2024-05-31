sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(i,t){"use strict";Object.defineProperty(i,"__esModule",{value:true});i.default=void 0;function e(i,e,n){return(0,t.html)`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  aria-pressed="${(0,t.ifDefined)(this.pressed)}"  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${(0,t.ifDefined)(this.tabIndexValue)} aria-expanded="${(0,t.ifDefined)(this.accessibilityAttributes.expanded)}" aria-controls="${(0,t.ifDefined)(this.accessibilityAttributes.controls)}" aria-haspopup="${(0,t.ifDefined)(this.accessibilityAttributes.hasPopup)}" aria-label="${(0,t.ifDefined)(this.ariaLabelText)}" title="${(0,t.ifDefined)(this.buttonTitle)}" part="button">${this.icon?s.call(this,i,e,n):undefined}<span id="${(0,t.ifDefined)(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.hasButtonType?o.call(this,i,e,n):undefined}</button> `}function s(i,e,s){return s?(0,t.html)`<${(0,t.scopeTag)("ui5-icon",e,s)} class="ui5-button-icon" name="${(0,t.ifDefined)(this.icon)}" accessible-role="${(0,t.ifDefined)(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${(0,t.scopeTag)("ui5-icon",e,s)}>`:(0,t.html)`<ui5-icon class="ui5-button-icon" name="${(0,t.ifDefined)(this.icon)}" accessible-role="${(0,t.ifDefined)(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function o(i,e,s){return(0,t.html)`<span class="ui5-hidden-text">${(0,t.ifDefined)(this.buttonTypeText)}</span>`}var n=e;i.default=n});
//# sourceMappingURL=ToggleButtonTemplate.lit.js.map