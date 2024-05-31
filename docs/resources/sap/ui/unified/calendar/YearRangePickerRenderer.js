/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","./YearPickerRenderer","./CalendarDate","sap/ui/core/format/DateFormat","sap/ui/core/date/UniversalDate","sap/ui/unified/calendar/CalendarUtils"],function(e,t,a,r,i,l){"use strict";var n=e.extend(t);n.apiVersion=2;n.getAccessibilityState=function(){return{role:"grid",readonly:"true",multiselectable:false,roledescription:sap.ui.getCore().getLibraryResourceBundle("sap.ui.unified").getText("YEAR_RANGE_PICKER")}};n.renderCells=function(e,t){var n=t.getProperty("_middleDate")?t.getProperty("_middleDate"):t._getDate(),o=new a(n,t.getPrimaryCalendarType()),s=new a(o,t.getPrimaryCalendarType()),d=l._minDate(t.getProperty("primaryCalendarType")).getYear(),g=l._maxDate(t.getProperty("primaryCalendarType")).getYear(),c,p="",y="",u="",f=t.getId(),m=t.getColumns(),C=t.getYears(),Y=t._getSecondaryCalendarType(),S=t._getLocaleData(),D=S.getIntervalPattern(),T="",_,b,v;s.setYear(s.getYear()-Math.floor(t.getRangeSize()/2));s.setYear(s.getYear()-Math.floor(C/2)*t.getRangeSize());if(s.getYear()<d){s.setYear(d)}else if(s.getYear()>g-C){s.setYear(g-Math.floor(C)*t.getRangeSize()+1)}c=new a(s,t.getPrimaryCalendarType());c.setYear(c.getYear()+t.getRangeSize()-1);if(m>0){T=100/m+"%"}else{T=100/C+"%"}for(v=0;v<C;v++){b=t._oFormatYyyymmdd.format(s.toUTCJSDate(),true);_={role:"gridcell"};if(m>0&&v%m==0){e.openStart("div");e.accessibilityState(null,{role:"row"});e.openEnd()}e.openStart("div",f+"-y"+b);e.class("sapUiCalItem");if(!t._checkDateEnabled(s,c)){e.class("sapUiCalItemDsbl");_["disabled"]=true}p=t._oYearFormat.format(i.getInstance(s.toUTCJSDate(),s.getCalendarType()),true);y=t._oYearFormat.format(i.getInstance(c.toUTCJSDate(),c.getCalendarType()),true);u=D.replace(/\{0\}/,p).replace(/\{1\}/,y);_["label"]=u;if(Y){var R=t._getDisplayedSecondaryDates(s),U=r.getDateInstance({format:"y",calendarType:t.getSecondaryCalendarType()}),I;if(R.start.getYear()===R.end.getYear()){I=U.format(R.start.toUTCJSDate(),true)}else{I=D.replace(/\{0\}/,U.format(R.start.toUTCJSDate(),true)).replace(/\{1\}/,U.format(R.end.toUTCJSDate(),true))}_["label"]=_["label"]+" "+I}e.attr("tabindex","-1");e.attr("data-sap-year-start",b);e.style("width",T);e.accessibilityState(null,_);e.openEnd();if(l._isBetween(t._oDate,s,c,true)){t._iSelectedIndex=v}e.text(u);if(Y){e.openStart("div",f+"-y"+b+"-secondary");e.class("sapUiCalItemSecText");e.openEnd();e.text(I);e.close("div")}e.close("div");if(m>0&&(v+1)%m==0){e.close("div")}s.setYear(c.getYear()+1);c.setYear(c.getYear()+t.getRangeSize())}};return n},true);
//# sourceMappingURL=YearRangePickerRenderer.js.map