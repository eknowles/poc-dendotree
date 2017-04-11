import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-chart.js';
import 'angular-material';
import 'angular-sanitize';
import 'chart.js';

import '../styles/base.scss';

import AppConfig from './app.config';

import Components from './components/components';

angular
  .module('app', [
    'ngMaterial',
    'ngAria',
    'ngAnimate',
    'ngSanitize',
    'chart.js',
    Components.name,
  ])
  .config(AppConfig)
;
