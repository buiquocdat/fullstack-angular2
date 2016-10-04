import {Component} from "angular2/core";
import {BasePage} from "../../../common/models/ui";
import {ValidationDirective} from "../../../common/directive";
import {Router, RouteParams} from "angular2/router";
import {AddOrEditCategoryModel} from "./addOrEditCategoryModel";
import categoryService from "../_share/service/categoryService";
import routerConfig from "../_share/config/routerConfig";

@Component({
    templateUrl: "app/modules/contentManagement/category/addOrEditCategory.html",
    directives: [ValidationDirective]
})

export class AddOrEditCategory extends BasePage{
    public model: AddOrEditCategoryModel = new AddOrEditCategoryModel();
    private router: Router;
    private routeParams: RouteParams;
    public pageTitle: string;
    public itemId: string = String.empty;
    constructor(router: Router, routeParams: RouteParams){
        super();
        this.router = router;
        this.routeParams = routeParams;
        if(this.routeParams.get("id") != null){
            this.itemId = this.routeParams.get("id");
            this.pageTitle = this.i18nHelper.resolve("contentManagement.addOrEditCategory.editTitle");
            this.loadCategory(this.itemId);
        } else {
            this.pageTitle = this.i18nHelper.resolve("contentManagement.addOrEditCategory.addTitle");
        }
    }
    public loadCategory(itemId: string){
        let self: AddOrEditCategory = this;
        categoryService.getCategoryById(itemId).then((result: any) => {
            self.model.id = result.id;
            self.model.name = result.name;
            self.model.description = result.description;
            self.model.status = result.status;
        });
    }
    public onSaveClicked(): void{
        let self: AddOrEditCategory = this;
        if(!this.model.inValid()){
            return;
        }
        if(String.isNullOrWhiteSpace(this.itemId)){
            categoryService.add(this.model).then(() => {
                self.router.navigate([routerConfig.categories.name]);
            });
        } else {
            categoryService.edit(this.model).then(() => {
                self.router.navigate([routerConfig.categories.name]);
            });
        }
    }
    public onCancelClicked(): void{
        this.router.navigate([routerConfig.categories.name]);
    }
}