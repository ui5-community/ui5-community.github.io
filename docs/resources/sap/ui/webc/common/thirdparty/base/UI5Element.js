sap.ui.define(["exports","./thirdparty/merge","./Boot","./UI5ElementMetadata","./EventProvider","./util/getSingletonElementInstance","./StaticAreaItem","./updateShadowRoot","./IgnoreCustomElements","./Render","./CustomElementsRegistry","./DOMObserver","./config/NoConflict","./locale/getEffectiveDir","./util/StringHelper","./util/isValidPropertyName","./util/SlotsHelper","./util/arraysAreEqual","./locale/RTLAwareRegistry","./theming/preloadLinks","./renderer/executeTemplate"],function(t,e,s,i,a,n,r,o,l,c,h,d,u,f,p,g,m,_,y,v,w){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.instanceOfUI5Element=t.default=void 0;e=b(e);i=b(i);a=b(a);n=b(n);r=b(r);o=b(o);f=b(f);g=b(g);_=b(_);v=b(v);w=b(w);function b(t){return t&&t.__esModule?t:{default:t}}let C=0;const A=new Map;const M=new Map;function S(t){if(this._suppressInvalidation){return}this.onInvalidation(t);this._changedState.push(t);(0,c.renderDeferred)(this);this._eventProvider.fireEvent("invalidate",{...t,target:this})}class E extends HTMLElement{constructor(){super();const t=this.constructor;this._changedState=[];this._suppressInvalidation=true;this._inDOM=false;this._fullyConnected=false;this._childChangeListeners=new Map;this._slotChangeListeners=new Map;this._eventProvider=new a.default;let e;this._domRefReadyPromise=new Promise(t=>{e=t});this._domRefReadyPromise._deferredResolve=e;this._doNotSyncAttributes=new Set;this._state={...t.getMetadata().getInitialState()};this._upgradeAllProperties();if(t._needsShadowDOM()){this.attachShadow({mode:"open"})}}get _id(){if(!this.__id){this.__id=`ui5wc_${++C}`}return this.__id}render(){const t=this.constructor.template;return(0,w.default)(t,this)}renderStatic(){const t=this.constructor.staticAreaTemplate;return(0,w.default)(t,this)}async connectedCallback(){const t=this.constructor;this.setAttribute(t.getMetadata().getPureTag(),"");if(t.getMetadata().supportsF6FastNavigation()){this.setAttribute("data-sap-ui-fastnavgroup","true")}const e=t.getMetadata().slotsAreManaged();this._inDOM=true;if(e){this._startObservingDOMChildren();await this._processChildren()}if(!this._inDOM){return}(0,c.renderImmediately)(this);this._domRefReadyPromise._deferredResolve();this._fullyConnected=true;this.onEnterDOM()}disconnectedCallback(){const t=this.constructor;const e=t.getMetadata().slotsAreManaged();this._inDOM=false;if(e){this._stopObservingDOMChildren()}if(this._fullyConnected){this.onExitDOM();this._fullyConnected=false}if(this.staticAreaItem&&this.staticAreaItem.parentElement){this.staticAreaItem.parentElement.removeChild(this.staticAreaItem)}(0,c.cancelRender)(this)}onBeforeRendering(){}onAfterRendering(){}onEnterDOM(){}onExitDOM(){}_startObservingDOMChildren(){const t=this.constructor;const e=t.getMetadata().hasSlots();if(!e){return}const s=t.getMetadata().canSlotText();const i={childList:true,subtree:s,characterData:s};(0,d.observeDOMNode)(this,this._processChildren.bind(this),i)}_stopObservingDOMChildren(){(0,d.unobserveDOMNode)(this)}async _processChildren(){const t=this.constructor.getMetadata().hasSlots();if(t){await this._updateSlots()}}async _updateSlots(){const t=this.constructor;const e=t.getMetadata().getSlots();const s=t.getMetadata().canSlotText();const i=Array.from(s?this.childNodes:this.children);const a=new Map;const n=new Map;for(const[t,s]of Object.entries(e)){const e=s.propertyName||t;n.set(e,t);a.set(e,[...this._state[e]]);this._clearSlot(t,s)}const r=new Map;const o=new Map;const c=i.map(async(s,i)=>{const a=(0,m.getSlotName)(s);const n=e[a];if(n===undefined){if(a!=="default"){const t=Object.keys(e).join(", ");console.warn(`Unknown slotName: ${a}, ignoring`,s,`Valid values are: ${t}`)}return}if(n.individualSlots){const t=(r.get(a)||0)+1;r.set(a,t);s._individualSlot=`${a}-${t}`}if(s instanceof HTMLElement){const t=s.localName;const e=t.includes("-")&&!(0,l.shouldIgnoreCustomElement)(t);if(e){const e=window.customElements.get(t);if(!e){const e=window.customElements.whenDefined(t);let s=A.get(t);if(!s){s=new Promise(t=>setTimeout(t,1e3));A.set(t,s)}await Promise.race([e,s])}window.customElements.upgrade(s)}}s=t.getMetadata().constructor.validateSlotValue(s,n);if(O(s)&&n.invalidateOnChildChange){const t=this._getChildChangeListener(a);if(t){s.attachInvalidate.call(s,t)}}if(s instanceof HTMLSlotElement){this._attachSlotChange(s,a)}const c=n.propertyName||a;if(o.has(c)){o.get(c).push({child:s,idx:i})}else{o.set(c,[{child:s,idx:i}])}});await Promise.all(c);o.forEach((t,e)=>{this._state[e]=t.sort((t,e)=>t.idx-e.idx).map(t=>t.child)});let h=false;for(const[t,s]of Object.entries(e)){const e=s.propertyName||t;if(!(0,_.default)(a.get(e),this._state[e])){S.call(this,{type:"slot",name:n.get(e),reason:"children"});h=true}}if(!h){S.call(this,{type:"slot",name:"default",reason:"textcontent"})}}_clearSlot(t,e){const s=e.propertyName||t;const i=this._state[s];i.forEach(e=>{if(O(e)){const s=this._getChildChangeListener(t);if(s){e.detachInvalidate.call(e,s)}}if(e instanceof HTMLSlotElement){this._detachSlotChange(e,t)}});this._state[s]=[]}attachInvalidate(t){this._eventProvider.attachEvent("invalidate",t)}detachInvalidate(t){this._eventProvider.detachEvent("invalidate",t)}_onChildChange(t,e){if(!this.constructor.getMetadata().shouldInvalidateOnChildChange(t,e.type,e.name)){return}S.call(this,{type:"slot",name:t,reason:"childchange",child:e.target})}attributeChangedCallback(t,e,s){let i;if(this._doNotSyncAttributes.has(t)){return}const a=this.constructor.getMetadata().getProperties();const n=t.replace(/^ui5-/,"");const r=(0,p.kebabToCamelCase)(n);if(a.hasOwnProperty(r)){const t=a[r];const e=t.type;let n=t.validator;if(e&&e.isDataTypeClass){n=e}if(n){i=n.attributeToProperty(s)}else if(e===Boolean){i=s!==null}else{i=s}this[r]=i}}_updateAttribute(t,e){const s=this.constructor;if(!s.getMetadata().hasAttribute(t)){return}const i=s.getMetadata().getProperties();const a=i[t];const n=a.type;let r=a.validator;const o=(0,p.camelToKebabCase)(t);const l=this.getAttribute(o);if(n&&n.isDataTypeClass){r=n}if(r){const t=r.propertyToAttribute(e);if(t===null){this._doNotSyncAttributes.add(o);this.removeAttribute(o);this._doNotSyncAttributes.delete(o)}else{this.setAttribute(o,t)}}else if(n===Boolean){if(e===true&&l===null){this.setAttribute(o,"")}else if(e===false&&l!==null){this.removeAttribute(o)}}else if(typeof e!=="object"){if(l!==e){this.setAttribute(o,e)}}}_upgradeProperty(t){if(this.hasOwnProperty(t)){const e=this[t];delete this[t];this[t]=e}}_upgradeAllProperties(){const t=this.constructor.getMetadata().getPropertiesList();t.forEach(this._upgradeProperty.bind(this))}_getChildChangeListener(t){if(!this._childChangeListeners.has(t)){this._childChangeListeners.set(t,this._onChildChange.bind(this,t))}return this._childChangeListeners.get(t)}_getSlotChangeListener(t){if(!this._slotChangeListeners.has(t)){this._slotChangeListeners.set(t,this._onSlotChange.bind(this,t))}return this._slotChangeListeners.get(t)}_attachSlotChange(t,e){const s=this._getSlotChangeListener(e);if(s){t.addEventListener("slotchange",s)}}_detachSlotChange(t,e){t.removeEventListener("slotchange",this._getSlotChangeListener(e))}_onSlotChange(t){S.call(this,{type:"slot",name:t,reason:"slotchange"})}onInvalidation(t){}_render(){const t=this.constructor;const e=t.getMetadata().hasIndividualSlots();this._suppressInvalidation=true;this.onBeforeRendering();if(this._onComponentStateFinalized){this._onComponentStateFinalized()}this._suppressInvalidation=false;this._changedState=[];if(t._needsShadowDOM()){(0,o.default)(this)}if(this.staticAreaItem){this.staticAreaItem.update()}if(e){this._assignIndividualSlotsToChildren()}this.onAfterRendering()}_assignIndividualSlotsToChildren(){const t=Array.from(this.children);t.forEach(t=>{if(t._individualSlot){t.setAttribute("slot",t._individualSlot)}})}_waitForDomRef(){return this._domRefReadyPromise}getDomRef(){if(typeof this._getRealDomRef==="function"){return this._getRealDomRef()}if(!this.shadowRoot||this.shadowRoot.children.length===0){return}const t=[...this.shadowRoot.children].filter(t=>!["link","style"].includes(t.localName));if(t.length!==1){console.warn(`The shadow DOM for ${this.constructor.getMetadata().getTag()} does not have a top level element, the getDomRef() method might not work as expected`)}return t[0]}getFocusDomRef(){const t=this.getDomRef();if(t){const e=t.querySelector("[data-sap-focus-ref]");return e||t}}async getFocusDomRefAsync(){await this._waitForDomRef();return this.getFocusDomRef()}async focus(t){await this._waitForDomRef();const e=this.getFocusDomRef();if(e&&typeof e.focus==="function"){e.focus(t)}}fireEvent(t,e,s=false,i=true){const a=this._fireEvent(t,e,s,i);const n=(0,p.kebabToCamelCase)(t);if(n!==t){return a&&this._fireEvent(n,e,s)}return a}_fireEvent(t,e,s=false,i=true){const a=new CustomEvent(`ui5-${t}`,{detail:e,composed:false,bubbles:i,cancelable:s});const n=this.dispatchEvent(a);if((0,u.skipOriginalEvent)(t)){return n}const r=new CustomEvent(t,{detail:e,composed:false,bubbles:i,cancelable:s});const o=this.dispatchEvent(r);return o&&n}getSlottedNodes(t){return(0,m.getSlottedNodesList)(this[t])}get effectiveDir(){(0,y.markAsRtlAware)(this.constructor);return(0,f.default)(this)}get isUI5Element(){return true}get classes(){return{}}static get observedAttributes(){return this.getMetadata().getAttributesList()}static _needsShadowDOM(){return!!this.template||Object.prototype.hasOwnProperty.call(this.prototype,"render")}static _needsStaticArea(){return!!this.staticAreaTemplate||Object.prototype.hasOwnProperty.call(this.prototype,"renderStatic")}getStaticAreaItemDomRef(){if(!this.constructor._needsStaticArea()){throw new Error("This component does not use the static area")}if(!this.staticAreaItem){this.staticAreaItem=r.default.createInstance();this.staticAreaItem.setOwnerElement(this)}if(!this.staticAreaItem.parentElement){(0,n.default)("ui5-static-area").appendChild(this.staticAreaItem)}return this.staticAreaItem.getDomRef()}static _generateAccessors(){const t=this.prototype;const e=this.getMetadata().slotsAreManaged();const s=this.getMetadata().getProperties();for(const[e,i]of Object.entries(s)){if(!(0,g.default)(e)){console.warn(`"${e}" is not a valid property name. Use a name that does not collide with DOM APIs`)}if(i.type===Boolean&&i.defaultValue){throw new Error(`Cannot set a default value for property "${e}". All booleans are false by default.`)}if(i.type===Array){throw new Error(`Wrong type for property "${e}". Properties cannot be of type Array - use "multiple: true" and set "type" to the single value type, such as "String", "Object", etc...`)}if(i.type===Object&&i.defaultValue){throw new Error(`Cannot set a default value for property "${e}". All properties of type "Object" are empty objects by default.`)}if(i.multiple&&i.defaultValue){throw new Error(`Cannot set a default value for property "${e}". All multiple properties are empty arrays by default.`)}Object.defineProperty(t,e,{get(){if(this._state[e]!==undefined){return this._state[e]}const t=i.defaultValue;if(i.type===Boolean){return false}else if(i.type===String){return t}else if(i.multiple){return[]}else{return t}},set(t){let s;const a=this.constructor;const n=a.getMetadata().constructor;t=n.validatePropertyValue(t,i);const r=i.type;let o=i.validator;const l=this._state[e];if(r&&r.isDataTypeClass){o=r}if(o){s=!o.valuesAreEqual(l,t)}else if(Array.isArray(l)&&Array.isArray(t)&&i.multiple&&i.compareValues){s=!(0,_.default)(l,t)}else{s=l!==t}if(s){this._state[e]=t;S.call(this,{type:"property",name:e,newValue:t,oldValue:l});this._updateAttribute(e,t)}}})}if(e){const e=this.getMetadata().getSlots();for(const[s,i]of Object.entries(e)){if(!(0,g.default)(s)){console.warn(`"${s}" is not a valid property name. Use a name that does not collide with DOM APIs`)}const e=i.propertyName||s;Object.defineProperty(t,e,{get(){if(this._state[e]!==undefined){return this._state[e]}return[]},set(){throw new Error("Cannot set slot content directly, use the DOM APIs (appendChild, removeChild, etc...)")}})}}}static get styles(){return""}static get staticAreaStyles(){return""}static get dependencies(){return[]}static getUniqueDependencies(){if(!M.has(this)){const t=this.dependencies.filter((t,e,s)=>s.indexOf(t)===e);M.set(this,t)}return M.get(this)||[]}static whenDependenciesDefined(){return Promise.all(this.getUniqueDependencies().map(t=>t.define()))}static async onDefine(){return Promise.resolve()}static async define(){await(0,s.boot)();await Promise.all([this.whenDependenciesDefined(),this.onDefine()]);const t=this.getMetadata().getTag();const e=(0,h.isTagRegistered)(t);const i=customElements.get(t);if(i&&!e){(0,h.recordTagRegistrationFailure)(t)}else if(!i){this._generateAccessors();(0,h.registerTag)(t);window.customElements.define(t,this);(0,v.default)(this)}return this}static getMetadata(){if(this.hasOwnProperty("_metadata")){return this._metadata}const t=[this.metadata];let s=this;while(s!==E){s=Object.getPrototypeOf(s);t.unshift(s.metadata)}const a=(0,e.default)({},...t);this._metadata=new i.default(a);return this._metadata}}E.metadata={};const O=t=>"isUI5Element"in t;t.instanceOfUI5Element=O;var D=E;t.default=D});
//# sourceMappingURL=UI5Element.js.map