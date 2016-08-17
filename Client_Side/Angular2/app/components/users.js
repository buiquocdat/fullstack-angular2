System.register(['angular2/core', './userService'], function(exports_1, context_1) {
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
    var core_1, userService_1;
    var Users;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            }],
        execute: function() {
            Users = (function () {
                function Users(userService) {
                    this.users = [];
                    this.selectedUser = {};
                    this.users = userService.getListUsers();
                }
                Users.prototype.onQuickViewClicked = function (user) {
                    this.selectedUser = user;
                };
                Users.prototype.ngAfterViewInit = function () {
                    $('#datatable-responsive').DataTable();
                };
                Users = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: 'app/components/users.html'
                    }), 
                    __metadata('design:paramtypes', [userService_1.UserService])
                ], Users);
                return Users;
            }());
            exports_1("Users", Users);
        }
    }
});
//# sourceMappingURL=users.js.map