import {IModule, Module, MenuItem} from "../../../../common/models/layout";
import {Permissions} from "../../permission/permissions";
import {AuthenticationMode} from "../../../../common/enum";
import {AddOrEditPermission} from "../../permission/addOrEditPermission";
import routerConfig from "./routerConfig";
let security: IModule = createModule();
export default security;
function createModule() {
    let module = new Module("app/modules/security", "security");
    module.menus.push(
        new MenuItem(
            "Security", "/Permissions", "fa fa-users",
            new MenuItem("Permissions", "/Permissions", "")
        )
    );
    module.addRoutes([
        { path: routerConfig.permissions.path, name: routerConfig.permissions.name, component: Permissions, data: { authentication: AuthenticationMode.Require } },
        { path: routerConfig.addPermission.path, name: routerConfig.addPermission.name, component: AddOrEditPermission, data: { authentication: AuthenticationMode.Require}},
        { path: routerConfig.editPermission.path, name: routerConfig.editPermission.name, component: AddOrEditPermission, data: { authentication: AuthenticationMode.Require }} 
    ]);
    return module;
}