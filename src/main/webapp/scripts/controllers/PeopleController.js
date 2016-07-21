angular
  .module('frontend')
  .controller('PeopleController', ['$scope', 'peopleService', PeopleController]);

function PeopleController($scope, peopleService) {
  peopleService
    .listPeople()
    .then(function (resp) {
      $scope.people = resp.data;
    })
    .catch(function (error) {
      console.log(error);
    })
}
