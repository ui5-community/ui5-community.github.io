/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./PluginBase","sap/base/Log","sap/base/strings/formatMessage","sap/base/security/encodeXML","sap/m/OverflowToolbarButton","../library","sap/ui/core/Element","sap/ui/core/Lib","sap/ui/Device"],function(t,e,n,o,i,s,r,l,a){"use strict";const c=s.plugins.CopyPreference;const u=t.extend("sap.m.plugins.CopyProvider",{metadata:{library:"sap.m",properties:{extractData:{type:"function",invalidate:false},copySparse:{type:"boolean",defaultValue:false,invalidate:false},excludeContext:{type:"function",invalidate:false},visible:{type:"boolean",defaultValue:true,invalidate:false},copyPreference:{type:"sap.m.plugins.CopyPreference",defaultValue:c.Cells,invalidate:false}},events:{copy:{allowPreventDefault:true,parameters:{data:{type:"any[][]"}}}}}});function p(){return Boolean(a.system.desktop&&ClipboardItem&&navigator.clipboard?.write)}function f(t){return t!=null}function g(t,e){if(f(t)){e.push(...[].concat(t))}}function h(t){if(!f(t)){return""}const e=String(t).replaceAll("\r\n","\n").replaceAll("\t","    ");return o(e).replaceAll("&#x20;","&nbsp;").replaceAll("&#xa;","<br>")}function d(t){if(!f(t)){return""}const e=String(t);return/\n|\r|\t/.test(e)?'"'+e.replaceAll('"','""')+'"':e}u.prototype._shouldManageExtractData=function(){const t=this.getControl();const e=this.getParent();return t!==e&&e.indexOfDependent(this)==-1};u.prototype.isApplicable=function(){if(this._shouldManageExtractData()){if(this.getExtractData()){throw new Error("extractData property must not be defined for "+this)}if(!this.getParent().getColumnClipboardSettings){throw new Error("getColumnClipboardSettings method must be defined for "+this.getParent())}}else if(!this.getExtractData()){throw new Error("extractData property must be defined for "+this)}return true};u.prototype.onActivate=function(t){this._oDelegate={onkeydown:this.onkeydown,onBeforeRendering:this.onBeforeRendering};t.addEventDelegate(this._oDelegate,this);this._oCopyButton?.setEnabled(true);this._shouldManageExtractData()&&this.setExtractData(this._extractData.bind(this));this._bCellsAreSelectable=this.getPlugin("sap.m.plugins.CellSelector")?.isSelectable()};u.prototype.onDeactivate=function(t){t.removeEventDelegate(this._oDelegate,this);this._oDelegate=null;this._oCopyButton?.setEnabled(false);this._shouldManageExtractData()&&this.setExtractData()};u.prototype.setVisible=function(t){this.setProperty("visible",t,true);this._updateCopyButtonVisibility();return this};u.prototype.setParent=function(){t.prototype.setParent.apply(this,arguments);if(!this.getParent()&&this._oCopyButton){this._oCopyButton.destroy(true);this._oCopyButton=null}};u.prototype.getCopyButton=function(t){if(!this._oCopyButton){const e=l.getResourceBundleFor("sap.m").getText("COPYPROVIDER_COPY");this._oCopyButton=new i({icon:"sap-icon://copy",enabled:this.getEnabled(),visible:this._getEffectiveVisible(),text:e,tooltip:e,press:function(){this._bActivatedByButton=true;this.copySelectionData(true);this._bActivatedByButton=false}.bind(this),...t})}return this._oCopyButton};u.prototype.exit=function(){if(this._oCopyButton){this._oCopyButton.destroy(true);this._oCopyButton=null}if(this._mColumnClipboardSettings){this._mColumnClipboardSettings=null}};u.prototype.getSelectionData=function(e=false){const n=this.getControl();const o=this.getExtractData();if(!n||!o){return[]}let i=this.getConfig("selectableColumns",n);if(!i.length){return[]}if(n.getParent().isA("sap.ui.mdc.Table")){i=i.map(function(t){return r.getElementById(t.getId().replace(/\-innerColumn$/,""))})}let s=[];const l=[];const a=this.getCopySparse();const u=this.getExcludeContext();const h=t.getPlugin(this.getParent(),"sap.m.plugins.CellSelector")??t.getPlugin(n,"sap.m.plugins.CellSelector");const d=h&&h.getSelectionRange();const C=d?h.getSelectedRowContexts():[];const y=Boolean(C.length);const b=y||a;let _=0;let m=0;if(this.getCopyPreference()==c.Full||!y){s=this.getConfig("selectedContexts",n,b);Object.assign(l,s);_=s.reduce((t,e)=>{if(e){t++}return t},0)}if(y){Object.assign(l,Array(d.from.rowIndex).concat(C));m=C.length*(Math.abs(d.to.colIndex-d.from.colIndex)+1)}const S=[];const x=[];let E=false;if(e&&!p()){e=false}for(let t=0;t<l.length;t++){const n=l[t];if(!n){if(a){if(x.length){x.push(Array(x[0].length))}if(E&&S.length){S.push(Array(S[0].length))}}}else if(u&&u(n)){continue}else{const r=[];const l=[];const c=n==s[t];i.forEach((t,i)=>{if(c||i>=d?.from.colIndex&&i<=d?.to.colIndex){const i=o(n,t,e);if(!f(i)){return}if(e&&i.hasOwnProperty("html")){E=true;g(i.html,r)}if(E&&i.hasOwnProperty("text")){g(i.text,l)}else{g(i,l)}}else if(s.length){l.push(undefined);r.push(undefined)}});if(E&&(a||r.some(f))){S.push(r)}if(a||l.some(f)){x.push(l)}}}const P=E?{text:x,html:S}:x;P.__iRows=_;P.__iCells=m;return P};u.prototype.copySelectionData=function(t){const e=this.getSelectionData(true);const n=e.text||e;if(!n.length||t&&!this.fireCopy({data:n},true)){if(this._bActivatedByButton&&!n.length){this._notifyUser(0,0)}return Promise.resolve()}if(!navigator.clipboard){throw new Error(this+" requires a secure context in order to access the clipboard API.")}const o=e.html||[];const i=n.map(t=>t.map(d).join("\t")).join("\n");let s=null;if(!o.length){s=navigator.clipboard.writeText(i);this._notifyUser(e.__iRows,e.__iCells);return s}const r="text/html";const l="text/plain";const a="<table><tr>"+o.map(t=>"<td>"+t.map(h).join("</td><td>")+"</td>").join("</tr><tr>")+"</tr></table>";const c=new ClipboardItem({[l]:new Blob([i],{type:l}),[r]:new Blob([a],{type:r})});s=navigator.clipboard.write([c]);this._notifyUser(e.__iRows,e.__iCells);return s};u.prototype.onCellSelectorSelectableChange=function(t){this._bCellsAreSelectable=t;this._updateCopyButtonVisibility()};u.prototype.onBeforeRendering=function(){this._updateCopyButtonVisibility()};u.prototype.onkeydown=function(t){if(t.isMarked()||t.code!="KeyC"||!(t.ctrlKey||t.metaKey)||!t.target.matches(this.getConfig("allowForCopySelector"))||!this._isControlSelectable()){return}t.setMarked();t.preventDefault();this.copySelectionData(true)};u.prototype._isControlSelectable=function(){return Boolean(this.getConfig("isSelectable",this.getControl())||this._bCellsAreSelectable)};u.prototype._getEffectiveVisible=function(){return this.getVisible()?this._isControlSelectable():false};u.prototype._updateCopyButtonVisibility=function(){this._oCopyButton?.setVisible(this._getEffectiveVisible())};u.prototype._extractData=function(t,o,i){if(!this._mColumnClipboardSettings){this._mColumnClipboardSettings=new WeakMap}let s=this._mColumnClipboardSettings.get(o);if(s===undefined){s=this.getParent().getColumnClipboardSettings(o);this._mColumnClipboardSettings.set(o,s)}if(!s){return}const r=s.properties.map(function(n,o){let i=t.getProperty(n);const r=s.types[o];if(r){try{i=r.formatValue(i,"string")}catch(t){e.error(this+': Formatting error during copy "'+t.message+'"')}}return f(i)?i:""});const l=s.unitFormatter;if(l){r[0]=l(r[0],r[1])}if(!i){return r}let a=r.some(String)?n(s.template,r).trim():"";if(a[0]=="("&&/^\([0-9]+\)$/.test(a)){a=a.slice(1,-1)}return{text:r,html:a}};u.prototype._notifyUser=function(t,e,n,o="Error"){const i=t>0||e>0;const s=l.getResourceBundleFor("sap.m");return new Promise(function(r,l){if(n===""&&o==="Error"){n=s.getText("COPYPROVIDER_DEFAULT_ERROR_MSG")}if(!i&&!n){n=s.getText("COPYPROVIDER_NOSELECTION_MSG");o="Information"}if(n){sap.ui.require(["sap/m/MessageBox"],function(t){const e=o.toLowerCase();if(typeof t[e]==="function"){t[e](n);r()}l()})}else if(i){const n=this.getCopyPreference()==="Cells";sap.ui.require(["sap/m/MessageToast"],function(o){let i;if(t==1&&e<=0){i=s.getText("COPYPROVIDER_SELECT_ROW_SINGLE_MSG")}else if(t>1&&e<=0){i=s.getText("COPYPROVIDER_SELECT_ROW_MULTI_MSG")}else if(e==1&&(t==0||n)){i=s.getText("COPYPROVIDER_SELECT_CELL_SINGLE_MSG")}else if(e>1&&(t==0||n)){i=s.getText("COPYPROVIDER_SELECT_CELL_MULTI_MSG")}else if(t>0&&e>0){i=s.getText("COPYPROVIDER_SELECT_ROW_AND_CELL_MSG")}if(i){o.show(i);r()}else{l()}})}}.bind(this))};t.setConfigs({"sap.m.Table":{allowForCopySelector:".sapMLIBFocusable,.sapMLIBSelectM,.sapMLIBSelectS",selectedContexts:function(t,e){const n=[];const o=t.getBindingInfo("items");t.getItems(true).forEach(function(t,i){if(t.isSelectable()&&t.getVisible()){if(t.getSelected()){const s=o?t.getBindingContext(o.model):t;const r=e?i:n.length;n[r]=s}}});return n},selectableColumns:function(t){return t.getRenderedColumns()},isSelectable:function(t){return t.getMode().includes("Select")}},"sap.ui.table.Table":{allowForCopySelector:".sapUiTableCell",selectedContexts:function(e,n){const o=t.getPlugin(e,"sap.ui.table.plugins.SelectionPlugin")||e;if(o.getSelectedContexts){return o.getSelectedContexts()}const i=[];o.getSelectedIndices().forEach(function(t){const o=e.getContextByIndex(t);if(o){const e=n?t:i.length;i[e]=o}});return i},selectableColumns:function(t){return t.getColumns().filter(function(t){return t.getDomRef()})},isSelectable:function(t){return t.getSelectionMode()!="None"}}},u);return u});
//# sourceMappingURL=CopyProvider.js.map