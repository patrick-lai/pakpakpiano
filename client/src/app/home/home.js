(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/home/home.tpl.html',
            controller: 'HomeCtrl as home',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl(data, $scope, $rootScope, $sce) {
    $scope.projects = data.data;
    $scope.setItem = function(item){
      $rootScope.item = item;
    };

    $scope.openYoutube = function(item){
      window.open(item.youtubeUrl);
    };

    $scope.toggleSheet = function(){
      $rootScope.showSheet = !$rootScope.showSheet;
    };

    $scope.openSheet = function(item){
      window.open(item.sheetMusicUrl);
    };

    $scope.getPdfPreview = function(item){
      var id = item.sheetMusicUrl.split("id=")[1];
      var url = "https://drive.google.com/file/d/"+id+"/preview";
      return $sce.trustAsResourceUrl(url)
    }
  }

  function MenuCtrl() {

  }

  angular.module('home', [])
    .config(config)
    .controller('HomeCtrl',HomeCtrl)
    .controller('MenuCtrl',MenuCtrl);
})();
