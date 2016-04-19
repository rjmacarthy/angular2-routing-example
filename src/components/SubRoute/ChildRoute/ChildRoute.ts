import { Component } from 'angular2/core';
let template = require('./ChildRoute.html');

@Component({
    selector: 'childroute',
    template
   // templateUrl: './components/SubRoute/ChildRoute/ChildRoute.html'
})

class ChildRoute {
    title: string = 'ChildRoute';
}

export default ChildRoute;
