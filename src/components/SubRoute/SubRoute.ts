import { Component } from '@angular/core';
import { RouterOutlet, RouteConfig, ROUTER_DIRECTIVES  } from '@angular/router-deprecated';
import ChildRoute  from './ChildRoute/ChildRoute';
import ChildRoute2  from './ChildRoute2/ChildRoute2';

@Component({
    selector: 'subroute',
    templateUrl: './components/SubRoute/SubRoute.html',
    directives: [RouterOutlet, ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/childroute', component: ChildRoute, name: 'ChildRoute', useAsDefault: true },
    { path: '/childroute2', component: ChildRoute2, name: 'ChildRoute2'  }
])

class SubRoute {
    title: string = 'SubRoute';
}



export default SubRoute;
