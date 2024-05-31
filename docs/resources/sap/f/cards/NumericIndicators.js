/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./NumericIndicatorsRenderer","sap/ui/core/Control","sap/m/NumericContent"],function(e,t,a){"use strict";var i=t.extend("sap.f.cards.NumericIndicators",{metadata:{library:"sap.f",properties:{number:{type:"string",group:"Data"},numberSize:{type:"string",group:"Appearance",defaultValue:"L"},numberVisible:{type:"boolean",defaultValue:true},scale:{type:"string",group:"Data"},trend:{type:"sap.m.DeviationIndicator",group:"Appearance",defaultValue:"None"},state:{type:"sap.m.ValueColor",group:"Appearance",defaultValue:"Neutral"},sideIndicatorsAlignment:{type:"sap.f.cards.NumericHeaderSideIndicatorsAlignment",group:"Appearance",defaultValue:"Begin"}},aggregations:{sideIndicators:{type:"sap.f.cards.NumericSideIndicator",multiple:true},_mainIndicator:{type:"sap.m.NumericContent",multiple:false,visibility:"hidden"}}},renderer:e});i.prototype.onBeforeRendering=function(){this._getMainIndicator().setValue(this.getNumber()).setScale(this.getScale()).setIndicator(this.getTrend()).setValueColor(this.getState()).setVisible(this.getNumberVisible())};i.prototype._getMainIndicator=function(){var e=this.getAggregation("_mainIndicator");if(!e){e=new a({id:this.getId()+"-mainIndicator",withMargin:false,nullifyValue:false,animateTextChange:false,truncateValueTo:100});this.setAggregation("_mainIndicator",e)}return e};return i});
//# sourceMappingURL=NumericIndicators.js.map