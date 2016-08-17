import {Component, AfterViewInit} from 'angular2/core';
import {UserService} from './userService';
import {RouteParams, Router} from 'angular2/router';

@Component({
    selector: 'create-user',
    templateUrl: 'app/components/createUser.html'
})

export class CreateUser implements AfterViewInit{
    private actionType: ActionType = ActionType.AddNew;
    private router: Router;
    newUser: any = {};
    userService: UserService;

    constructor(params: RouteParams, userService: UserService, router: Router) {
        let self: CreateUser = this;
        
        self.router = router;
        self.userService = userService;
    }

    public createNewUser(newUser: any){
        this.userService.createNewUser(newUser);
        let self: CreateUser = this;
        self.userService.createNewUser(newUser);
        self.router.navigate(["Users"]);
    }

    ngAfterViewInit() {
        $('#birthday').daterangepicker({
            singleDatePicker: true,
            calender_style: "picker_4"
        }, function(start, end, label) {
            console.log(start.toISOString(), end.toISOString(), label);
        });
    }
}

enum ActionType {
    AddNew,
    Edit
};