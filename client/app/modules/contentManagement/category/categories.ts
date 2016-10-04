import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {PageActions, Grid} from "../../../common/directive";
import {PageAction, BasePage} from "../../../common/models/ui";
import {CategoriesModel} from "./categoriesModel";
import categoryService from "../_share/service/categoryService";
import routerConfig from "../_share/config/routerConfig";

@Component({
    templateUrl: "app/modules/contentManagement/category/categories.html",
    directives: [PageActions, Grid]
})

export class Categories extends BasePage{
    public model: CategoriesModel;
    private router: Router;
    constructor(router: Router){
        super();
        let self: Categories = this;
        this.router = router;
        this.model = new CategoriesModel(this.i18nHelper);
        this.model.addAction(new PageAction("btnAddCategory", "contentManagement.categories.addCategoryAction", () => {
            self.onAddCategoryClicked();
        }));
        this.loadCategories();
    }
    private loadCategories(): void{
        let self: Categories = this;
        categoryService.getCategories().then((results: Array<any>) => {
            self.model.import(results);
        });
    }
    private onAddCategoryClicked(): void {
        this.router.navigate([routerConfig.addCategory.name]);
    }
    private onEditCategoryClicked(item: any){
        this.router.navigate([routerConfig.editCategory.name, {id: item.item.id}]);
    }
    private onDeleteCategoryClicked(item: any){
        let self: Categories = this;
        categoryService.remove(item.item.id).then(() => {
            self.loadCategories();
        });
    }
}