'use strict';

angular.module('nodeJsOpenShiftSandboxApp.auth', [
  'nodeJsOpenShiftSandboxApp.constants',
  'nodeJsOpenShiftSandboxApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
