﻿'use strict';

/**
 * @ngdoc overview
 * @name RTMSApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
  .module('RTMSApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'pascalprecht.translate',
    'ui.bootstrap',
    'nya.bootstrap.select',
    'highcharts-ng',
    'angularjs-dropdown-multiselect'
  ]).config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
      $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: 'app/views/dashboard.html',
            controller: 'DashboardCtrl'
        });

      $translateProvider.registerAvailableLanguageKeys(['en', 'zh'], {
          'en': 'en',
          'zh': 'zh'
      });

      $translateProvider.fallbackLanguage('en');
      $translateProvider.determinePreferredLanguage();
      $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope) {
    $rootScope.IsSidebarCollapsed = false;
  });

