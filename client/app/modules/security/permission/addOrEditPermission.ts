import {Component} from "angular2/core";
import {ValidationDirective} from "../../../common/directive";
import {BasePage} from "../../../common/models/ui";
import {AddOrEditPermissionModel} from "./addOrEditPermissionModel";
import {Router, RouteParams} from "angular2/router";
import routerConfig from "../_share/config/routerConfig";
import permissionService from "../_share/service/permissionService";

@Component({
    templateUrl: "app/modules/security/permission/addOrEditPermission.html",
    directives: [ValidationDirective]
})

export class AddOrEditPermission extends BasePage {
    public model: AddOrEditPermissionModel = new AddOrEditPermissionModel();
    private router: Router;
    private routeParams: RouteParams;
    public pageTitle: string;
    public perId: string = String.empty;
    constructor(router: Router, routeParams: RouteParams) {
        super();
        this.router = router;
        this.routeParams = routeParams;
        if (this.routeParams.get("id") != null) {
            this.pageTitle = this.i18nHelper.resolve("security.addOrEditPermission.editTitle");
            this.perId = this.routeParams.get("id");
            this.getPermissionById(this.perId);
        } else {
            this.pageTitle = this.i18nHelper.resolve("security.addOrEditPermission.addTitle");
        }
    }

    public getPermissionById(perId: string) {
        let self: AddOrEditPermission = this;
        permissionService.getPermissionById(perId).then((response: any) => {
            self.model.id = response.id;
            self.model.name = response.name;
            self.model.key = response.key;
            self.model.description = response.description;
        });
    }

    public onSaveClicked(): void {
        let self: AddOrEditPermission = this;
        if (!this.model.inValid()) {
            return;
        }
        if (String.isNullOrWhiteSpace(this.perId)) {
            permissionService.create(this.model).then(() => {
                self.router.navigate([routerConfig.permissions.name]);
            });
        } else {
            permissionService.edit(this.model).then(() => {
                self.router.navigate([routerConfig.permissions.name]);
            });
        }
    }

    public onCancelClicked(): void {
        this.router.navigate([routerConfig.permissions.name]);
    }
}