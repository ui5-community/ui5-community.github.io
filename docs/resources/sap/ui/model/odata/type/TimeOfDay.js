/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/util/extend","sap/ui/core/CalendarType","sap/ui/core/date/UI5Date","sap/ui/core/format/DateFormat","sap/ui/model/FormatException","sap/ui/model/ParseException","sap/ui/model/ValidateException","sap/ui/model/odata/type/ODataType"],function(t,e,o,n,i,a,r,s,l){"use strict";function u(t){return sap.ui.getCore().getLibraryResourceBundle().getText("EnterTime",[t.formatValue("23:59:58","string")])}function f(e,o){var n,i;e.oConstraints=undefined;if(o){n=o.nullable;i=o.precision;if(n===false){e.oConstraints={nullable:false}}else if(n!==undefined&&n!==true){t.warning("Illegal nullable: "+n,null,e.getName())}if(i===Math.floor(i)&&i>0&&i<=12){e.oConstraints=e.oConstraints||{};e.oConstraints.precision=i}else if(i!==undefined&&i!==0){t.warning("Illegal precision: "+i,null,e.getName())}}}var p=l.extend("sap.ui.model.odata.type.TimeOfDay",{constructor:function(t,e){l.apply(this,arguments);this.oModelFormat=undefined;this.rTimeOfDay=undefined;this.oFormat=undefined;f(this,e);this.oFormatOptions=t}});p.prototype._handleLocalizationChange=function(){this.oFormat=null};p.prototype._resetModelFormatter=function(){this.oModelFormat=undefined};p.prototype.formatValue=function(t,e){var o,i,r;if(t===undefined||t===null){return null}r=this.getPrimitiveType(e);switch(r){case"any":return t;case"object":case"string":i=t.indexOf(".");if(i>=0){t=t.slice(0,i+4)}o=this.getModelFormat().parse(t);if(o){if(r==="object"){return n.getInstance(1970,0,1,o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds())}return this.getFormat().format(o)}throw new a("Illegal "+this.getName()+" value: "+t);default:throw new a("Don't know how to format "+this.getName()+" to "+e)}};p.prototype.getDateValue=function(t){return t?n.getInstance("1970-01-01T"+t):null};p.prototype.getFormat=function(){if(!this.oFormat){var t=e({strictParsing:true},this.oFormatOptions);t.UTC=true;this.oFormat=i.getTimeInstance(t)}return this.oFormat};p.prototype.getISOStringFromModelValue=function(t){return t?t:null};p.prototype.getModelFormat=function(){var t="HH:mm:ss",e;if(!this.oModelFormat){e=this.oConstraints&&this.oConstraints.precision;if(e){t+="."+"".padEnd(e,"S")}this.oModelFormat=i.getTimeInstance({calendarType:o.Gregorian,pattern:t,strictParsing:true,UTC:true})}return this.oModelFormat};p.prototype.getModelValue=function(t){var e;if(t===null){e=null}else{n.checkDate(t);e=n.getInstance(0);e.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds());e=this.getModelFormat().format(e)}this.validateValue(e);return e};p.prototype.getModelValueFromISOString=function(t){return t?this.getModelFormat().format(n.getInstance("1970-01-01T"+t+"Z")):null};p.prototype.getName=function(){return"sap.ui.model.odata.type.TimeOfDay"};p.prototype.parseValue=function(t,e){var o;if(t===""||t===null){return null}switch(this.getPrimitiveType(e)){case"object":return this.getModelFormat().format(t,false);case"string":o=this.getFormat().parse(t);if(!o){throw new r(u(this))}return this.getModelFormat().format(o);default:throw new r("Don't know how to parse "+this.getName()+" from "+e)}};p.prototype.validateValue=function(t){var e;if(t===null){if(this.oConstraints&&this.oConstraints.nullable===false){throw new s(u(this))}return}if(!this.rTimeOfDay){e=this.oConstraints&&this.oConstraints.precision;this.rTimeOfDay=new RegExp("^(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d"+(e?"(\\.\\d{1,"+e+"})?":"")+")?$")}if(!this.rTimeOfDay.test(t)){throw new s("Illegal sap.ui.model.odata.type.TimeOfDay value: "+t)}};return p});
//# sourceMappingURL=TimeOfDay.js.map