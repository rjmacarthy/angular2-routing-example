

import 'core-js';
import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import AppComponent from './components/App/App';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Reddit} from './services/reddit';
bootstrap(AppComponent, [...ROUTER_PROVIDERS, ...HTTP_PROVIDERS, Reddit] );
