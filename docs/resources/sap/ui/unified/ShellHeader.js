/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/Device","sap/ui/core/theming/Parameters","sap/ui/thirdparty/jquery","sap/ui/core/Configuration"],function(e,t,i,a,jQuery,r){"use strict";var s=t.extend("sap.ui.unified.ShellHeader",{metadata:{properties:{logo:{type:"sap.ui.core.URI",defaultValue:""},searchVisible:{type:"boolean",defaultValue:true}},aggregations:{headItems:{type:"sap.ui.unified.ShellHeadItem",multiple:true},headEndItems:{type:"sap.ui.unified.ShellHeadItem",multiple:true},search:{type:"sap.ui.core.Control",multiple:false},user:{type:"sap.ui.unified.ShellHeadUserItem",multiple:false}}},renderer:{render:function(e,t){var i=t.getId();e.write("<div");e.writeControlData(t);e.writeAttribute("class","sapUiUfdShellHeader");if(r.getAccessibility()){e.writeAttribute("role","toolbar")}e.write(">");e.write("<div id='",i,"-hdr-begin' class='sapUiUfdShellHeadBegin'>");this.renderHeaderItems(e,t,true);e.write("</div>");e.write("<div id='",i,"-hdr-center' class='sapUiUfdShellHeadCenter'>");this.renderSearch(e,t);e.write("</div>");e.write("<div id='",i,"-hdr-end' class='sapUiUfdShellHeadEnd'>");this.renderHeaderItems(e,t,false);e.write("</div>");e.write("</div>")},renderSearch:function(e,t){var i=t.getSearch();e.write("<div id='",t.getId(),"-hdr-search'");if(r.getAccessibility()){e.writeAttribute("role","search")}e.writeAttribute("class","sapUiUfdShellSearch"+(t.getSearchVisible()?"":" sapUiUfdShellHidden"));e.write("><div>");if(i){e.renderControl(i)}e.write("</div></div>")},renderHeaderItems:function(e,t,i){e.write("<div class='sapUiUfdShellHeadContainer'>");var a=i?t.getHeadItems():t.getHeadEndItems();for(var s=0;s<a.length;s++){e.write("<div tabindex='0'");e.writeElementData(a[s]);e.addClass("sapUiUfdShellHeadItm");if(a[s].getStartsSection()){e.addClass("sapUiUfdShellHeadItmDelim")}if(a[s].getShowSeparator()){e.addClass("sapUiUfdShellHeadItmSep")}if(!a[s].getVisible()){e.addClass("sapUiUfdShellHidden")}if(a[s].getSelected()&&a[s].getToggleEnabled()){e.addClass("sapUiUfdShellHeadItmSel")}if(a[s].getShowMarker()){e.addClass("sapUiUfdShellHeadItmMark")}e.writeClasses();var d=a[s].getTooltip_AsString();if(d){e.writeAttributeEscaped("title",d)}if(r.getAccessibility()){e.writeAccessibilityState(a[s],{role:"button",selected:null,pressed:a[s].getToggleEnabled()?a[s].getSelected():null})}e.write("><span></span><div class='sapUiUfdShellHeadItmMarker'><div></div></div></div>")}var l=t.getUser();if(!i&&l){e.write("<div tabindex='0'");e.writeElementData(l);e.addClass("sapUiUfdShellHeadUsrItm");if(!l.getShowPopupIndicator()){e.addClass("sapUiUfdShellHeadUsrItmWithoutPopup")}e.writeClasses();var d=l.getTooltip_AsString();if(d){e.writeAttributeEscaped("title",d)}if(r.getAccessibility()){e.writeAccessibilityState(l,{role:"button"});if(l.getShowPopupIndicator()){e.writeAttribute("aria-haspopup","true")}}e.write("><span id='",l.getId(),"-img' aria-hidden='true' class='sapUiUfdShellHeadUsrItmImg'></span>");e.write("<span id='"+l.getId()+"-name' class='sapUiUfdShellHeadUsrItmName'");var n=l.getUsername()||"";e.writeAttributeEscaped("title",n);e.write(">");e.writeEscaped(n);e.write("</span><span class='sapUiUfdShellHeadUsrItmExp' aria-hidden='true'></span></div>")}e.write("</div>");if(i){this._renderLogo(e,t)}},_renderLogo:function(e,t){var i=sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified"),a=i.getText("SHELL_LOGO_TOOLTIP"),r=t._getLogo();e.write("<div class='sapUiUfdShellIco'>");e.write("<img id='",t.getId(),"-icon'");e.writeAttributeEscaped("title",a);e.writeAttributeEscaped("alt",a);e.write("src='");e.writeEscaped(r);e.write("'");if(!r){e.addStyle("display","none");e.writeStyles()}e.write(">");e.write("</div>")}}});s.prototype.init=function(){var e=this;this._rtl=r.getRTL();this._handleMediaChange=function(t){if(!e.getDomRef()){return}e._refresh()};i.media.attachHandler(this._handleMediaChange,this,i.media.RANGESETS.SAP_STANDARD);this._handleResizeChange=function(t){if(!e.getDomRef()||!e.getUser()){return}var i=this.getUser();var a=i._checkAndAdaptWidth(!e.$("hdr-search").hasClass("sapUiUfdShellHidden")&&!!e.getSearch());if(a){e._refresh()}};i.resize.attachHandler(this._handleResizeChange,this);this.data("sap-ui-fastnavgroup","true",true)};s.prototype.exit=function(){i.media.detachHandler(this._handleMediaChange,this,i.media.RANGESETS.SAP_STANDARD);delete this._handleMediaChange;i.resize.detachHandler(this._handleResizeChange,this);delete this._handleResizeChange};s.prototype.onAfterRendering=function(){this._refresh();this.$("hdr-center").toggleClass("sapUiUfdShellAnim",!this._noHeadCenterAnim)};s.prototype.onThemeChanged=function(){if(this.getDomRef()){this.invalidate()}};s.prototype._getLogo=function(){var e=this.getLogo();if(!e){e=a._getThemeImage(null,true)}return e};s.prototype._refresh=function(){function e(e){for(var t=0;t<e.length;t++){e[t]._refreshIcon()}}e(this.getHeadItems());e(this.getHeadEndItems());var t=this.getUser(),i=jQuery("html").hasClass("sapUiMedia-Std-Phone"),a=!this.$("hdr-search").hasClass("sapUiUfdShellHidden"),r=this.$("icon");if(t){t._refreshImage();t._checkAndAdaptWidth(a&&!!this.getSearch())}r.parent().toggleClass("sapUiUfdShellHidden",i&&a&&!!this.getSearch());var s=this.$("hdr-end").outerWidth(),d=this.$("hdr-begin").outerWidth(),l=Math.max(s,d),n=(i&&a?d:l)+"px",h=(i&&a?s:l)+"px";this.$("hdr-center").css({left:this._rtl?h:n,right:this._rtl?n:h})};return s});
//# sourceMappingURL=ShellHeader.js.map