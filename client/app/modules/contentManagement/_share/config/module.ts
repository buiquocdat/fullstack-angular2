import {IModule, Module, MenuItem} from "../../../../common/models/layout";
import {AuthenticationMode} from "../../../../common/enum";
import {Categories} from "../../category/categories";
import {AddOrEditCategory} from "../../category/addOrEditCategory";
import routerConfig from "./routerConfig";

let contentManagement: IModule = createModule();
export default contentManagement;
function createModule() {
    let module = new Module("app/modules/contentManagement", "contentManagement");
    module.menus.push(
        new MenuItem(
            "Content Management", "/Categories", "fa fa-folder-open",
            new MenuItem("Categories", "/Categories", "")
        )
    );
    module.addRoutes([
        {path: routerConfig.categories.path, name: routerConfig.categories.name, component: Categories, data: {authentication: AuthenticationMode.Require}},
        {path: routerConfig.addCategory.path, name: routerConfig.addCategory.name, component: AddOrEditCategory, data: {authentication: AuthenticationMode.Require}},
        {path: routerConfig.editCategory.path, name: routerConfig.editCategory.name, component: AddOrEditCategory, data: {authentication: AuthenticationMode.Require}}
    ]);
    return module;
}