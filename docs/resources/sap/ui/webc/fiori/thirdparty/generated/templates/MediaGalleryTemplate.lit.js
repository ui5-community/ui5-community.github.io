sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"],function(i,e){"use strict";Object.defineProperty(i,"__esModule",{value:true});i.default=void 0;function l(i,l,a){return(0,e.html)`<div class="ui5-media-gallery-root"><div class="ui5-media-gallery-display-wrapper"><div class="ui5-media-gallery-display" @click="${this._onDisplayAreaClick}">${this._isPhonePlatform?t.call(this,i,l,a):s.call(this,i,l,a)}</div></div>${this._showThumbnails?n.call(this,i,l,a):undefined}</div>`}function t(i,l,t){return t?(0,e.html)`<${(0,e.scopeTag)("ui5-carousel",l,t)} @ui5-navigate="${(0,e.ifDefined)(this._onCarouselNavigate)}" hide-navigation-arrows>${(0,e.repeat)(this._selectableItems,(i,e)=>i._id||e,(e,s)=>a.call(this,i,l,t,e,s))}</${(0,e.scopeTag)("ui5-carousel",l,t)}>`:(0,e.html)`<ui5-carousel @ui5-navigate="${(0,e.ifDefined)(this._onCarouselNavigate)}" hide-navigation-arrows>${(0,e.repeat)(this._selectableItems,(i,e)=>i._id||e,(e,s)=>a.call(this,i,l,t,e,s))}</ui5-carousel>`}function a(i,l,t,a,s){return(0,e.html)`<slot name="${(0,e.ifDefined)(a._individualSlot)}"></slot>`}function s(i,l,t){return t?(0,e.html)`<${(0,e.scopeTag)("ui5-media-gallery-item",l,t)} ?_interactive="${(0,e.ifDefined)(this.interactiveDisplayArea)}" ?_square="${(0,e.ifDefined)(this._shouldHaveSquareDisplay)}" _tab-index="${(0,e.ifDefined)(this._mainItemTabIndex)}"></${(0,e.scopeTag)("ui5-media-gallery-item",l,t)}>`:(0,e.html)`<ui5-media-gallery-item ?_interactive="${(0,e.ifDefined)(this.interactiveDisplayArea)}" ?_square="${(0,e.ifDefined)(this._shouldHaveSquareDisplay)}" _tab-index="${(0,e.ifDefined)(this._mainItemTabIndex)}"></ui5-media-gallery-item>`}function n(i,l,t){return(0,e.html)`<div class="ui5-media-gallery-thumbnails-wrapper"><ul>${(0,e.repeat)(this._visibleItems,(i,e)=>i._id||e,(e,a)=>r.call(this,i,l,t,e,a))}${this._showOverflowBtn?u.call(this,i,l,t):undefined}</ul></div>`}function r(i,l,t,a,s){return(0,e.html)`<li id="${(0,e.ifDefined)(a.id)}" class="ui5-media-gallery-thumbnail" role="option" @click="${this._onThumbnailClick}" @ui5-click="${(0,e.ifDefined)(this._onThumbnailClick)}"><slot name="${(0,e.ifDefined)(a._individualSlot)}"></slot></li>`}function u(i,l,t){return t?(0,e.html)`<li class="ui5-media-gallery-overflow"><${(0,e.scopeTag)("ui5-button",l,t)} @click="${this._onOverflowBtnClick}">+${(0,e.ifDefined)(this._overflowSize)}</${(0,e.scopeTag)("ui5-button",l,t)}></li>`:(0,e.html)`<li class="ui5-media-gallery-overflow"><ui5-button @click="${this._onOverflowBtnClick}">+${(0,e.ifDefined)(this._overflowSize)}</ui5-button></li>`}var o=l;i.default=o});
//# sourceMappingURL=MediaGalleryTemplate.lit.js.map