import { Component } from '@angular/core';
import { RouterOutlet, RouteConfig, ROUTER_DIRECTIVES  } from '@angular/router-deprecated';
import Home  from '../Home/Home';
import SubRoute  from '../SubRoute/SubRoute';

@Component({
    selector: 'app',
    styleUrls: ['./components/App/app.css'],
    templateUrl: './components/App/App.html',
    directives: [RouterOutlet, ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', component: Home, as: 'Home', useAsDefault: true },
    { path: '/subroute/...', component: SubRoute, as: 'SubRoute' }
])

class AppComponent {
    public title: string = 'App';
}

export default AppComponent;
