import {JsonHeaders} from "../../../../common/models/http";
import configHelper from "../../../../common/helpers/configHelper";

let permissionService = {
    getPermissions: getPermissions,
    remove: remove,
    create: create,
    getPermissionById: getPermissionById,
    edit: edit
};

export default permissionService;

function getPermissionById(perId: string) {
    let connector = window.ioc.resolve("IConnector");
    let url = String.format("{0}/permissions/{1}", configHelper.getAppConfig().api.baseUrl, perId);
    return connector.get(url);
}

function edit(item: any) {
    let connector = window.ioc.resolve("IConnector");
    let url = String.format("{0}/permissions", configHelper.getAppConfig().api.baseUrl);
    return connector.put(url, item);
}

function getPermissions() {
    let connector = window.ioc.resolve("IConnector");
    let url = String.format("{0}/permissions", configHelper.getAppConfig().api.baseUrl);
    return connector.get(url);
}

function remove(itemId: any) {
    let connector = window.ioc.resolve("IConnector");
    let url = String.format("{0}/permissions/{1}", configHelper.getAppConfig().api.baseUrl, itemId);
    return connector.delete(url);
}

function create(item: any) {
    let connector = window.ioc.resolve("IConnector");
    let url = String.format("{0}/permissions", configHelper.getAppConfig().api.baseUrl);
    return connector.post(url, item);
}