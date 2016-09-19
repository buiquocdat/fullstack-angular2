import {ValidationException} from "../../../common/models/exception";

export class AddOrEditPermissionModel {
    public id: string = String.empty;
    public name: string = String.empty;
    public key: string = String.empty;
    public description: string = String.empty;
    public inValid(): boolean {
        let validation: ValidationException = new ValidationException();
        if (String.isNullOrWhiteSpace(this.name)) {
            validation.add("security.addOrEditPermission.validation.nameIsRequired");
        }
        if (String.isNullOrWhiteSpace(this.key)) {
            validation.add("security.addOrEditPermission.validation.keyIsRequired");
        }
        if (this.key.split(" ").length > 1) {
            validation.add("security.addOrEditPermission.validation.keyHasNotWhiteSpace");
        }
        validation.throwIfHasError();
        return !validation.hasError();
    }
}