import {PageAction} from "../../../common/models/ui";
import {ResourceHelper} from "../../../common/helpers/resourceHelper";

export class CategoriesModel{
    public actions: Array<PageAction> = [];
    public options: any = {};
    public eventKey: string;
    constructor(resourceHelper: ResourceHelper){
        this.eventKey = "Category_onLoad";
        this.options = {
            columns: [
                {field: "name", title: resourceHelper.resolve("contentManagement.categories.grid.columns.name"), index: 0},
                {field: "description", title: resourceHelper.resolve("contentManagement.categories.grid.columns.desc"), index: 1},
                {field: "status", title: resourceHelper.resolve("contentManagement.categories.grid.columns.status"), index: 2}
            ],
            data: [],
            enableEdit: true,
            enableDelete: true
        };
    }
    public addAction(action: PageAction): void{
        this.actions.push(action);
    }
    public import(items: Array<any>): void{
        let eventManager = window.ioc.resolve("IEventManager");
        eventManager.publish(this.eventKey, items);
    }
}