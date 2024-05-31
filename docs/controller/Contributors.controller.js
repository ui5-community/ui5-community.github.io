"use strict";sap.ui.define(["sap/ui/model/json/JSONModel","./BaseController"],function(t,e){function o(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const r=o(e);const n=r.extend("org.openui5.bestofui5.controller.Timeline",{onInit:function e(){this.getRouter().getRoute("contributors").attachPatternMatched(this.onPatternMatched,this);const o=new t;o.setData({direction:"Row",wrap:"Wrap"});this.getView().setModel(o,"contributorsView")},onPatternMatched:function t(e){this.getView().getModel("settings").setProperty("/headerKey","contributors");this.getView().getParent().getParent().getParent().scrollTo(this.getView().getModel("scrollState").getProperty("/contributors"))},onExpandDetails:function t(e){const o=this.getView().getModel("contributorsView");const r=this.getView().byId("contributorsFlexBox");const n=r.getDirection();if(n==="Column"){o.setProperty("/direction","Row");o.setProperty("/wrap","Wrap")}else{o.setProperty("/direction","Column");o.setProperty("/wrap","NoWrap")}}});return n});
//# sourceMappingURL=Contributors.controller.js.map