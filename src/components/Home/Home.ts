import { Component, Inject } from 'angular2/core';
import * as actions from '../../actions/user';
import BaseComponent from '../base/BaseComponent';
import registrations from './Registrations';


@Component({
    selector: 'home',
    templateUrl: './components/Home/Home.html'
})

class Home extends BaseComponent {
    constructor( @Inject('ngRedux') ngRedux) {
		super(actions, registrations, ngRedux);
    }

    ngOnInit() {

    }
}

export default Home;
