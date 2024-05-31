/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/webc/WebComponent","./library","./thirdparty/Popover"],function(e,a){"use strict";var t=a.PopoverHorizontalAlign;var o=a.PopoverPlacementType;var l=a.PopoverVerticalAlign;var p=a.PopupAccessibleRole;var r=e.extend("sap.ui.webc.main.Popover",{metadata:{library:"sap.ui.webc.main",tag:"ui5-popover-ui5",properties:{accessibleName:{type:"string",defaultValue:undefined},accessibleRole:{type:"sap.ui.webc.main.PopupAccessibleRole",defaultValue:p.Dialog},allowTargetOverlap:{type:"boolean",defaultValue:false},headerText:{type:"string",defaultValue:""},height:{type:"sap.ui.core.CSSSize",mapping:"style"},hideArrow:{type:"boolean",defaultValue:false},hideBackdrop:{type:"boolean",defaultValue:false},horizontalAlign:{type:"sap.ui.webc.main.PopoverHorizontalAlign",defaultValue:t.Center},modal:{type:"boolean",defaultValue:false},open:{type:"boolean",defaultValue:false},placementType:{type:"sap.ui.webc.main.PopoverPlacementType",defaultValue:o.Right},preventFocusRestore:{type:"boolean",defaultValue:false},verticalAlign:{type:"sap.ui.webc.main.PopoverVerticalAlign",defaultValue:l.Center},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true},footer:{type:"sap.ui.core.Control",multiple:true,slot:"footer"},header:{type:"sap.ui.core.Control",multiple:true,slot:"header"}},associations:{opener:{type:"sap.ui.core.Control",multiple:false,mapping:{type:"property",to:"opener"}},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,mapping:{type:"property",to:"accessibleNameRef",formatter:"_getAriaLabelledByForRendering"}},initialFocus:{type:"sap.ui.core.Control",multiple:false,mapping:{type:"property",to:"initialFocus"}}},events:{afterClose:{parameters:{}},afterOpen:{parameters:{}},beforeClose:{allowPreventDefault:true,parameters:{escPressed:{type:"boolean"}}},beforeOpen:{allowPreventDefault:true,parameters:{}}},methods:["applyFocus","close","isOpen","showAt"],designtime:"sap/ui/webc/main/designtime/Popover.designtime"}});return r});
//# sourceMappingURL=Popover.js.map