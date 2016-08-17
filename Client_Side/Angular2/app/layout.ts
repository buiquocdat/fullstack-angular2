import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Users} from './components/users';
import {CreateUser} from './components/createUser';

@Component({
    selector: 'default-layout',
    templateUrl: 'app/layout.html',
    directives: [RouterOutlet, RouterLink]
})

@RouteConfig([
    {path: '/users', name: 'Users', component: Users},
    {path: './createUser', name: 'Create User', component: CreateUser, useAsDefault: true}
])

export class DefaultLayout{}