angular
    .module('frontend')
    .factory('peopleService', peopleService);

function peopleService($http, API_ENDPOINT) {
    let service = {};

    service.listPeople = () => {
        return $http.get(API_ENDPOINT + '/people');
    };

    return service;
}