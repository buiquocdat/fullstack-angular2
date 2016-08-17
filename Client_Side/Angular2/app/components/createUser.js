System.register(['angular2/core', './userService', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, userService_1, router_1;
    var CreateUser, ActionType;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CreateUser = (function () {
                function CreateUser(params, userService, router) {
                    this.actionType = ActionType.AddNew;
                    this.newUser = {};
                    var self = this;
                    self.router = router;
                    self.userService = userService;
                }
                CreateUser.prototype.createNewUser = function (newUser) {
                    this.userService.createNewUser(newUser);
                    var self = this;
                    self.userService.createNewUser(newUser);
                    self.router.navigate(["Users"]);
                };
                CreateUser.prototype.ngAfterViewInit = function () {
                    $('#birthday').daterangepicker({
                        singleDatePicker: true,
                        calender_style: "picker_4"
                    }, function (start, end, label) {
                        console.log(start.toISOString(), end.toISOString(), label);
                    });
                };
                CreateUser = __decorate([
                    core_1.Component({
                        selector: 'create-user',
                        templateUrl: 'app/components/createUser.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, userService_1.UserService, router_1.Router])
                ], CreateUser);
                return CreateUser;
            }());
            exports_1("CreateUser", CreateUser);
            (function (ActionType) {
                ActionType[ActionType["AddNew"] = 0] = "AddNew";
                ActionType[ActionType["Edit"] = 1] = "Edit";
            })(ActionType || (ActionType = {}));
            ;
        }
    }
});
//# sourceMappingURL=createUser.js.map