System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserService;
    return {
        setters:[],
        execute: function() {
            UserService = (function () {
                function UserService() {
                    this.users = [
                        { Id: 1, FirstName: "User", LastName: "1", Gender: "Male", Age: 35, Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com" },
                        { Id: 2, FirstName: "User", LastName: "2", Gender: "Female", Age: 24, Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com" },
                        { Id: 3, FirstName: "User", LastName: "3", Gender: "Male", Age: 15, Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com" },
                        { Id: 4, FirstName: "User", LastName: "4", Gender: "Female", Age: 75, Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com" },
                        { Id: 5, FirstName: "User", LastName: "5", Gender: "Male", Age: 43, Birthday: "03/04/1986", Phone: "0123456789", Email: "abc@abc.com" },
                    ];
                }
                UserService.prototype.getListUsers = function () {
                    return this.users;
                };
                UserService.prototype.createNewUser = function (newUser) {
                    newUser.Id = this.users.length + 1;
                    this.users.concat(newUser);
                };
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=userService.js.map