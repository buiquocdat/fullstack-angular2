import configHelper from "../../../../common/helpers/configHelper";

let categoryService = {
    getCategories: getCategories,
    remove: remove,
    getCategoryById: getCategoryById,
    add: add,
    edit: edit
}

export default categoryService;

function getCategories() {
    let connector = window.ioc.resolve("IConnector");
    let url = String.format("{0}/categories", configHelper.getAppConfig().api.baseUrl);
    return connector.get(url);
}

function remove(itemId: string) {
    let connector = window.ioc.resolve("IConnector");
    let url = String.format("{0}/categories/{1}", configHelper.getAppConfig().api.baseUrl, itemId);
    return connector.delete(url);
}

function getCategoryById(itemId: string) {
    let connector = window.ioc.resolve("IConnector");
    let url = String.format("{0}/categories/{1}", configHelper.getAppConfig().api.baseUrl, itemId);
    return connector.get(url);
}

function add(item: any) {
    let connector = window.ioc.resolve("IConnector");
    let url = String.format("{0}/categories", configHelper.getAppConfig().api.baseUrl);
    return connector.post(url, item);
}

function edit(item: any) {
    let connector = window.ioc.resolve("IConnector");
    let url = String.format("{0}/categories", configHelper.getAppConfig().api.baseUrl);
    return connector.put(url, item);
}