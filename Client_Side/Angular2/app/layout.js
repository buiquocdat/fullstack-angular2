System.register(['angular2/core', 'angular2/router', './components/users', './components/createUser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, users_1, createUser_1;
    var DefaultLayout;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_1_1) {
                users_1 = users_1_1;
            },
            function (createUser_1_1) {
                createUser_1 = createUser_1_1;
            }],
        execute: function() {
            DefaultLayout = (function () {
                function DefaultLayout() {
                }
                DefaultLayout = __decorate([
                    core_1.Component({
                        selector: 'default-layout',
                        templateUrl: 'app/layout.html',
                        directives: [router_1.RouterOutlet, router_1.RouterLink]
                    }),
                    router_1.RouteConfig([
                        { path: '/users', name: 'Users', component: users_1.Users },
                        { path: './createUser', name: 'Create User', component: createUser_1.CreateUser, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], DefaultLayout);
                return DefaultLayout;
            }());
            exports_1("DefaultLayout", DefaultLayout);
        }
    }
});
//# sourceMappingURL=layout.js.map