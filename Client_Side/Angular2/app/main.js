System.register(['angular2/platform/browser', 'angular2/http', 'angular2/router', './components/userService', './layout'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, http_1, router_1, userService_1, layout_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            },
            function (layout_1_1) {
                layout_1 = layout_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(layout_1.DefaultLayout, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                userService_1.UserService
            ]).catch(function (error) { return console.error(error); });
        }
    }
});
//# sourceMappingURL=main.js.map