angular
  .module('frontend')
  .factory('peopleService', ['$http', 'API_ENDPOINT', peopleService]);

function peopleService($http, API_ENDPOINT) {
  var service = {};

  service.listPeople = function () {
    return $http.get(API_ENDPOINT + '/people');
  };

  return service;
}
