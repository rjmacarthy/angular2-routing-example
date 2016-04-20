///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../typings/main.d.ts"/>

import 'core-js';
import 'zone.js/dist/zone';
import { bootstrap } from 'angular2/platform/browser';
import App from './components/App/App';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
//TODO : Replace with import when d.ts becomes available.
var provider = require('ng2-redux').provider;

let store = createStore(rootReducer, compose(
	applyMiddleware(thunk),
    (<any>window).devToolsExtension ? (<any>window).devToolsExtension() : f => f
));

bootstrap(App, [ROUTER_PROVIDERS, provider(store)]);
