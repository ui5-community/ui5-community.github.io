/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/ManagedObjectObserver","./ListItemBase","./library","sap/ui/core/IconPool","sap/m/ObjectNumber","sap/ui/core/library","./ObjectMarker","./Text","./ObjectListItemRenderer","sap/ui/core/Configuration","sap/m/ImageHelper"],function(t,e,r,i,o,s,a,n,u,p,g){"use strict";var l=r.ObjectMarkerType;var c=s.TextAlign;var h=s.TextDirection;var b=s.ValueState;var m=e.extend("sap.m.ObjectListItem",{metadata:{library:"sap.m",properties:{title:{type:"string",group:"Misc",defaultValue:null},number:{type:"string",group:"Misc",defaultValue:null},numberUnit:{type:"string",group:"Misc",defaultValue:null},intro:{type:"string",group:"Misc",defaultValue:null},icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},activeIcon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},iconDensityAware:{type:"boolean",group:"Misc",defaultValue:true},markFavorite:{type:"boolean",group:"Misc",defaultValue:null,deprecated:true},markFlagged:{type:"boolean",group:"Misc",defaultValue:null,deprecated:true},showMarkers:{type:"boolean",group:"Misc",defaultValue:null,deprecated:true},numberState:{type:"sap.ui.core.ValueState",group:"Misc",defaultValue:b.None},titleTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:h.Inherit},introTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:h.Inherit},numberTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:h.Inherit},markLocked:{type:"boolean",group:"Misc",defaultValue:false,deprecated:true}},defaultAggregation:"attributes",aggregations:{attributes:{type:"sap.m.ObjectAttribute",multiple:true,singularName:"attribute"},firstStatus:{type:"sap.m.ObjectStatus",multiple:false},secondStatus:{type:"sap.m.ObjectStatus",multiple:false},markers:{type:"sap.m.ObjectMarker",multiple:true,singularName:"marker"},_objectNumber:{type:"sap.m.ObjectNumber",multiple:false,visibility:"hidden"}},designtime:"sap/m/designtime/ObjectListItem.designtime",dnd:{draggable:true,droppable:true}},renderer:u});m.prototype.init=function(t){this._generateObjectNumber();this._observerObjectItemChanges=this._observerObjectItemChanges.bind(this);this._oItemsObservers={}};m.prototype.exit=function(t){if(this._oImageControl){this._oImageControl.destroy()}if(this._oTitleText){this._oTitleText.destroy();this._oTitleText=undefined}e.prototype.exit.apply(this)};m.prototype.onAfterRendering=function(){var t=this.getAggregation("_objectNumber"),e=p.getRTL(),r=e?c.Left:c.Right;if(t&&t.getNumber()){t.setTextAlign(r)}};m.prototype._generateObjectNumber=function(){var t=this.getNumber(),e=this.getNumberUnit(),r=this.getNumberState(),i=this.getNumberTextDirection();this.setAggregation("_objectNumber",new o(this.getId()+"-ObjectNumber",{number:t,unit:e,state:r,textDirection:i}),true)};m.prototype._hasAttributes=function(){var t=this.getAttributes();if(t.length>0){for(var e=0;e<t.length;e++){if(!t[e]._isEmpty()){return true}}}return false};m.prototype._hasStatus=function(){return this.getFirstStatus()&&!this.getFirstStatus()._isEmpty()||this.getSecondStatus()&&!this.getSecondStatus()._isEmpty()};m.prototype._hasBottomContent=function(){if(this.getShowMarkers()||this.getMarkLocked()){return true}return this._hasAttributes()||this._hasStatus()||this._getVisibleMarkers().length>0};m.prototype._getVisibleAttributes=function(){var t=this.getAttributes();var e=[];for(var r=0;r<t.length;r++){if(t[r].getVisible()){e.push(t[r])}}return e};m.prototype.addAttribute=function(t){this._startObservingItem(t);return e.prototype.addAggregation.call(this,"attributes",t)};m.prototype.insertAttribute=function(t,r){this._startObservingItem(t);return e.prototype.insertAggregation.call(this,"attributes",t,r)};m.prototype.removeAttribute=function(t){var r=e.prototype.removeAggregation.call(this,"attributes",t);this._stopObservingItem(r);return r};m.prototype.removeAllAttributes=function(){var t=e.prototype.removeAllAggregation.call(this,"attributes");for(var r=0;r<t.length;r++){this._stopObservingItem(t[r])}return t};m.prototype.destroyAttributes=function(){this.getAttributes().forEach(function(t){this._stopObservingItem(t)},this);return e.prototype.destroyAggregation.call(this,"attributes")};m.prototype._getVisibleMarkers=function(){var t=this.getMarkers();var e=[];for(var r=0;r<t.length;r++){if(t[r].getVisible()){e.push(t[r])}}return e};m.prototype._getImageControl=function(){var t=this.getId()+"-img";var e="2.5rem";var r;if(i.isIconURI(this.getIcon())){r={src:this.getIcon(),height:e,width:e,size:e,useIconTooltip:false,densityAware:this.getIconDensityAware()}}else{r={src:this.getIcon(),useIconTooltip:false,densityAware:this.getIconDensityAware()}}var o=["sapMObjLIcon"];this._oImageControl=g.getImageControl(t,this._oImageControl,this,r,o);return this._oImageControl};m.prototype._activeHandlingInheritor=function(){var t=this.getActiveIcon();if(this._oImageControl&&t){this._oImageControl.setSrc(t)}};m.prototype._inactiveHandlingInheritor=function(){var t=this.getIcon();if(this._oImageControl){this._oImageControl.setSrc(t)}};m.prototype.setNumber=function(t){this.setProperty("number",t,true);this.getAggregation("_objectNumber").setNumber(t);return this};m.prototype.setNumberUnit=function(t){this.setProperty("numberUnit",t,true);this.getAggregation("_objectNumber").setUnit(t);return this};m.prototype.setNumberTextDirection=function(t){this.setProperty("numberTextDirection",t,true);this.getAggregation("_objectNumber").setTextDirection(t);return this};m.prototype.setNumberState=function(t){this.setProperty("numberState",t,true);this.getAggregation("_objectNumber").setState(t);return this};m.prototype.setMarkFavorite=function(t){return this._setOldMarkers(l.Favorite,t)};m.prototype.setMarkFlagged=function(t){return this._setOldMarkers(l.Flagged,t)};m.prototype.setMarkLocked=function(t){return this._setOldMarkers(l.Locked,t)};m.prototype.setShowMarkers=function(t){var e;var r=this.getMarkers();this.setProperty("showMarkers",t,false);for(var i=0;i<r.length;i++){e=r[i].getType();if(e===l.Flagged&&this.getMarkFlagged()||e===l.Favorite&&this.getMarkFavorite()||e===l.Locked&&this.getMarkLocked()){r[i].setVisible(t)}}return this};m.prototype.addMarker=function(t){this._startObservingItem(t);return e.prototype.addAggregation.call(this,"markers",t)};m.prototype.insertMarker=function(t,r){this._startObservingItem(t);return e.prototype.insertAggregation.call(this,"markers",t,r)};m.prototype.removeMarker=function(t){var r=e.prototype.removeAggregation.call(this,"markers",t);this._stopObservingItem(r);return r};m.prototype.removeAllMarkers=function(){var t=e.prototype.removeAllAggregation.call(this,"markers");for(var r=0;r<t.length;r++){this._stopObservingItem(t[r])}return t};m.prototype.destroyMarkers=function(){this.getMarkers().forEach(function(t){this._stopObservingItem(t)},this);return e.prototype.destroyAggregation.call(this,"markers")};m.prototype.getContentAnnouncement=function(){};m.prototype._observerObjectItemChanges=function(t){if(t.current!==t.old){this.invalidate()}};m.prototype._startObservingItem=function(e){var r=new t(this._observerObjectItemChanges);this._oItemsObservers[e.getId()]=r;r.observe(e,{properties:true});return this};m.prototype._stopObservingItem=function(t){var e=t.getId();this._oItemsObservers[e].disconnect();delete this._oItemsObservers[e];return this};m.prototype._setOldMarkers=function(t,e){var r=this.getMarkers();var i=false;var o={Flagged:"-flag",Favorite:"-favorite",Locked:"-lock"};this.setProperty("mark"+t,e,false);if(!this.getShowMarkers()){e=false}for(var s=0;s<r.length;s++){if(r[s].getType()===t){i=true;r[s].setVisible(e);break}}if(!i){this.insertAggregation("markers",new a({id:this.getId()+o[t],type:t,visible:e}))}return this};m.prototype._getTitleText=function(){if(!this._oTitleText){this._oTitleText=new n(this.getId()+"-titleText",{maxLines:2});this._oTitleText.setParent(this,null,true)}return this._oTitleText};return m});
//# sourceMappingURL=ObjectListItem.js.map