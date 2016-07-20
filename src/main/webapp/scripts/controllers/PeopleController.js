angular
    .module('frontend')
    .controller('PeopleController', PeopleController);

function PeopleController($scope, peopleService) {
    peopleService
        .listPeople()
        .then((resp) => {
            $scope.people = resp.data;
        })
        .catch((error) => {
            console.log(error);
        })
}