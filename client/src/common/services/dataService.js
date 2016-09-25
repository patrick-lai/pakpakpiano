(function() {
  'use strict';

  function dataService($http, Backand) {
    return {
      get: function() {
        return $http({
          method: 'GET',
          url: Backand.getApiUrl() + '/1/objects/Projects',
          params: {
            pageSize: 20,
            pageNumber: 1,
            filter: null,
            sort: ''
          }
        });
      }
    };
  }

  angular.module('common.services.data', [])
    .factory('DataService', dataService);
})();
