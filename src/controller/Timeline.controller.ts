import Event from "sap/ui/base/Event";
import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";

/**
 * @namespace org.openui5.bestofui5.controller
 */
export default class Timeline extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("timeline").attachPatternMatched(this.onPatternMatched, this);
	}

	/**
	 * route to package when clicking on item in timeline list
	 * @param event
	 */
	public onNameClick(event: Event): void {
		this.navTo("RouteObjectView", {
			name: event.getSource().getBindingContext("versions").getObject().name,
		});
	}

	/**
	 * headerkey defines the emphasized button in linkheader
	 * set headerKey Property of the JSONModel settings
	 * @param event
	 */
	public onPatternMatched(event: Event): void {
		(this.getView().getModel("settings") as JSONModel).setProperty("/headerKey", "timeline");
	}
}
