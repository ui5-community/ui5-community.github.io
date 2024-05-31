/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/base/security/encodeCSS"],function(e,a){"use strict";var t=e.AvatarSize;var s=e.AvatarType;var l={apiVersion:2};l.render=function(e,l){var r=l.getEnabled(),i=l.getInitials(),n=l._getActualDisplayType(),o=l._getImageFallbackType(),p=l.getDisplaySize(),c=l.getDisplayShape(),d=l.getImageFitType(),g=l.getCustomDisplaySize(),y=l.getCustomFontSize(),f=l._getAvatarSrc(),u="sapFAvatar",b=l.getTooltip_AsString(),S=l._getAriaLabelledBy(),v=l.getAriaDescribedBy(),A=l.getAriaHasPopup(),I=l.hasListeners("press"),C=I?l._getBadge():null,h=l._getDefaultTooltip(),m=i.length,_=l.getActive()&&I;e.openStart("span",l);e.class(u);e.class("sapFAvatarColor"+l._getActualBackgroundColor());e.class(u+p);e.class(u+n);e.class(u+c);if(_){e.class("sapMAvatarPressed")}if(r){if(I){e.class("sapMPointer");e.class(u+"Focusable");e.attr("role","button");e.attr("tabindex",0)}else if(l.getDecorative()){e.attr("role","presentation");e.attr("aria-hidden","true")}else{e.attr("role","img")}}else{e.attr("disabled","disabled");e.class("sapMAvatarDisabled")}if(l.getShowBorder()){e.class("sapFAvatarBorder")}if(p===t.Custom){e.style("width",g);e.style("height",g);e.style("font-size",y)}if(b){e.attr("title",b);e.attr("aria-label",b)}else if(i){e.attr("aria-label",h+" "+i)}else{e.attr("aria-label",h)}if(S&&S.length>0){e.attr("aria-labelledby",S.join(" "))}if(v&&v.length>0){e.attr("aria-describedby",v.join(" "))}if(A&&A!=="None"){e.attr("aria-haspopup",A.toLowerCase())}e.openEnd();if(n===s.Icon||o===s.Icon){e.renderControl(l._getIcon().addStyleClass(u+"TypeIcon"))}else if(n===s.Initials||o===s.Initials){if(m===3){e.renderControl(l._getIcon().addStyleClass(u+"TypeIcon").addStyleClass(u+"HiddenIcon"))}e.openStart("span");e.class(u+"InitialsHolder");e.openEnd();e.text(i);e.close("span")}if(n===s.Image){e.openStart("span");e.class(u+"ImageHolder");e.class(u+n+d);e.style("background-image","url('"+a(f)+"')");e.openEnd();e.close("span")}if(C){e.openStart("div");e.class(u+"BadgeIconActiveArea");if(g){e.style("font-size",g)}e.openEnd();e.openStart("span");e.class(u+"BadgeIcon");e.openEnd();e.renderControl(C);e.close("span");e.close("div")}e.close("span")};return l},true);
//# sourceMappingURL=AvatarRenderer.js.map