/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/base/DataType","sap/ui/Device","sap/ui/thirdparty/jquery","sap/ui/base/Object","sap/ui/core/library","sap/f/library","sap/m/library","sap/ui/layout/library"],function(e,a,t,jQuery,i){"use strict";var s=sap.ui.getCore().initLibrary({name:"sap.uxap",dependencies:["sap.ui.core","sap.f","sap.m","sap.ui.layout"],designtime:"sap/uxap/designtime/library.designtime",types:["sap.uxap.BlockBaseColumnLayout","sap.uxap.BlockBaseFormAdjustment","sap.uxap.Importance","sap.uxap.ObjectPageConfigurationMode","sap.uxap.ObjectPageHeaderDesign","sap.uxap.ObjectPageHeaderPictureShape","sap.uxap.ObjectPageSubSectionLayout","sap.uxap.ObjectPageSubSectionMode"],interfaces:["sap.uxap.IHeaderTitle","sap.uxap.IHeaderContent"],controls:["sap.uxap.AnchorBar","sap.uxap.BlockBase","sap.uxap.BreadCrumbs","sap.uxap.HierarchicalSelect","sap.uxap.ObjectPageHeader","sap.uxap.ObjectPageDynamicHeaderTitle","sap.uxap.ObjectPageDynamicHeaderContent","sap.uxap.ObjectPageHeaderActionButton","sap.uxap.ObjectPageHeaderContent","sap.uxap.ObjectPageLayout","sap.uxap.ObjectPageSection","sap.uxap.ObjectPageSectionBase","sap.uxap.ObjectPageSubSection"],elements:["sap.uxap.ModelMapping","sap.uxap.ObjectPageAccessibleLandmarkInfo","sap.uxap.ObjectPageHeaderLayoutData","sap.uxap.ObjectPageLazyLoader"],version:"1.120.3",extensions:{flChangeHandlers:{"sap.uxap.ObjectPageHeader":"sap/uxap/flexibility/ObjectPageHeader","sap.uxap.ObjectPageLayout":"sap/uxap/flexibility/ObjectPageLayout","sap.uxap.ObjectPageSection":"sap/uxap/flexibility/ObjectPageSection","sap.uxap.ObjectPageSubSection":"sap/uxap/flexibility/ObjectPageSubSection","sap.uxap.ObjectPageDynamicHeaderTitle":"sap/uxap/flexibility/ObjectPageDynamicHeaderTitle","sap.uxap.ObjectPageHeaderActionButton":"sap/uxap/flexibility/ObjectPageHeaderActionButton","sap.ui.core._StashedControl":{unstashControl:{changeHandler:"default",layers:{USER:true}},stashControl:{changeHandler:"default",layers:{USER:true}}}},"sap.ui.support":{publicRules:true}}});s.BlockBaseColumnLayout=a.createType("sap.uxap.BlockBaseColumnLayout",{isValid:function(e){return/^(auto|[1-4]{1})$/.test(e)}},a.getType("string"));s.BlockBaseFormAdjustment={BlockColumns:"BlockColumns",OneColumn:"OneColumn",None:"None"};s.ObjectPageConfigurationMode={JsonURL:"JsonURL",JsonModel:"JsonModel"};s.ObjectPageHeaderDesign={Light:"Light",Dark:"Dark"};s.ObjectPageHeaderPictureShape={Circle:"Circle",Square:"Square"};s.ObjectPageSubSectionLayout={TitleOnTop:"TitleOnTop",TitleOnLeft:"TitleOnLeft"};s.ObjectPageSubSectionMode={Collapsed:"Collapsed",Expanded:"Expanded"};s.Importance={Low:"Low",Medium:"Medium",High:"High"};s.Utilities={getClosestOPL:function(e){while(e&&!i.isObjectA(e,"sap.uxap.ObjectPageLayout")){e=e.getParent()}return e},isPhoneScenario:function(e){if(t.system.phone){return true}return s.Utilities._isCurrentMediaSize("Phone",e)},isTabletScenario:function(e){return s.Utilities._isCurrentMediaSize("Tablet",e)},_isCurrentMediaSize:function(e,a){return a&&a.name===e},getChildPosition:function(e,a){var t=e instanceof jQuery?e:jQuery(e),i=a instanceof jQuery?a:jQuery(a),s=jQuery(document.documentElement),n=t.position(),p=t.offsetParent(),u;while(!p.is(i)&&!p.is(s)){u=p.position();n.top+=u.top;n.left+=u.left;p=p.offsetParent()}return n}};return s});
//# sourceMappingURL=library.js.map