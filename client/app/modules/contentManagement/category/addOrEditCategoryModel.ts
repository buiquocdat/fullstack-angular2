import {ValidationException} from "../../../common/models/exception";

export class AddOrEditCategoryModel {
    public id: string = String.empty;
    public name: string = String.empty;
    public description: string = String.empty;
    public status: boolean;
    public inValid(): boolean {
        let validation: ValidationException = new ValidationException();
        if (String.isNullOrWhiteSpace(this.name)) {
            validation.add("contentManagement.addOrEditCategory.validation.nameIsRequired");
        }
        validation.throwIfHasError();
        return !validation.hasError();
    }
}