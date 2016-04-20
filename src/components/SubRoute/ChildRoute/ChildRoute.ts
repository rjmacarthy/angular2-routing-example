import { Component } from 'angular2/core';

@Component({
    selector: 'childroute',
   	templateUrl: './components/SubRoute/ChildRoute/ChildRoute.html'
})

class ChildRoute {
    title: string = 'ChildRoute';
}

export default ChildRoute;
