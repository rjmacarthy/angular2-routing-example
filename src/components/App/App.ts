import { Component } from 'angular2/core';
import { RouterOutlet, RouteConfig, ROUTER_DIRECTIVES  } from 'angular2/router';
import Home  from '../Home/Home';
import SubRoute  from '../SubRoute/SubRoute';

@Component({
    selector: 'app',
    templateUrl: './components/App/App.html',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
})

@RouteConfig([
    { path: '/', component: Home, as: 'Home', useAsDefault : true },
    { path: '/subroute/...', component: SubRoute, as: 'SubRoute' }
])

class AppComponent {
    title: string = 'App';
}

export default AppComponent;
