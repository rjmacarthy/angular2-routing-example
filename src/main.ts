///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import 'core-js';
import 'zone.js/dist/zone';
import { bootstrap } from 'angular2/platform/browser';
import AppComponent from './components/App/App';
import {ROUTER_PROVIDERS} from 'angular2/router';
bootstrap(AppComponent, [ROUTER_PROVIDERS] );
