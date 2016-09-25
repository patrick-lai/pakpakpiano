(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config(BackandProvider, $stateProvider, $urlRouterProvider, $logProvider, $httpProvider, $mdThemingProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);

    BackandProvider.setAppName('pakpakpiano');
    BackandProvider.setSignUpToken('4b5612b4-1817-46fe-90dd-8d6961767c06');
    BackandProvider.setAnonymousToken('add432aa-5f8e-43db-a8aa-64c051fcb4e0');

    $mdThemingProvider.theme('default')
      .dark();

    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterCtrl'
          }
        }
      });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl loaded!');
  }

  function run($log, $rootScope) {
    $log.debug('App is running!');
    $rootScope.item = null;
    $rootScope.showSheet = false;
  }

  angular.module('app', [
      'ui.router',
      'backand',
      'home',
      'getting-started',
      'common.header',
      'common.footer',
      'common.services.backand',
      'common.services.data',
      'common.directives.version',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates',
      'ngLodash',
      'ngMaterial',
      'youtube-embed',
      'ngAnimate'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
