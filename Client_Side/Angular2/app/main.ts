import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide, enableProdMode} from 'angular2/core';
import {UserService} from './components/userService';
import {DefaultLayout} from './layout';

bootstrap(DefaultLayout, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    UserService
]) .catch(error => console.error(error));