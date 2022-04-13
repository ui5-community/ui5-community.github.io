import BaseController from "./BaseController";
import History from "sap/ui/core/History";

/**
 * @namespace org.openui5.ui5community.controller
 */
export default class Main extends BaseController {
  public onInit(): void {
    this.getRouter().getRoute("RouteObjectView").attachPatternMatched(this.onPatternMatched, this);
  }

  public async onPatternMatched(event): Promise<void> {
    const objectName = event.getParameter("arguments").name;
    const model = await this.getModelAwait("data");
    const data = model.getData();
    // find object index in data
    const objectIndex = data.packages.findIndex((object) => object.name === objectName);
    if (!objectIndex) {
      //object not found
      // return
    }
    this.getView().bindElement({
      path: `/packages/${objectIndex}`,
      model: "data",
    });
  }

  public onNavBack(event): void {
    var sPreviousHash = History.getInstance().getPreviousHash();

    if (sPreviousHash !== undefined) {
      history.go(-1);
    } else {
      this.getRouter().navTo("RouteMainView", {}, true);
    }
  }
}
