import * as actions from '../../actions/group';
import BaseComponent from '../base/BaseComponent';
import ChildRoute  from './ChildRoute/ChildRoute';
import ChildRoute2  from './ChildRoute2/ChildRoute2';
import registrations from './Registrations';
import { Component, Inject } from 'angular2/core';
import { RouterOutlet, RouteConfig, ROUTER_DIRECTIVES  } from 'angular2/router';


@Component({
    selector: 'subroute',
    templateUrl: './components/SubRoute/SubRoute.html',
    directives: [RouterOutlet, ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/childroute', component: ChildRoute, name: 'ChildRoute', useAsDefault: true },
    { path: '/childroute2', component: ChildRoute2, name: 'ChildRoute2'  }
])

class SubRoute extends BaseComponent {
    constructor( @Inject('ngRedux') ngRedux) {
		super(actions, registrations, ngRedux);
    }
}



export default SubRoute;
