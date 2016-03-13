'use strict';

angular.module('nodeJsOpenShiftSandboxApp', [
  'nodeJsOpenShiftSandboxApp.auth',
  'nodeJsOpenShiftSandboxApp.admin',
  'nodeJsOpenShiftSandboxApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
