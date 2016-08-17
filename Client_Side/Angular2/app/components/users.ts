import {Component, AfterViewInit} from 'angular2/core';
import {UserService} from './userService';

@Component({
    selector: 'users',
    templateUrl: 'app/components/users.html'
})

export class Users implements AfterViewInit{
    users: Array<any> = [];
    selectedUser: any = {};

    constructor(userService: UserService){
        this.users = userService.getListUsers();
    }

    public onQuickViewClicked(user: any){
        this.selectedUser = user;
    }

    ngAfterViewInit() {
        $('#datatable-responsive').DataTable();
    }
}