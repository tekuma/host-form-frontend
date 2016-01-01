'use strict';

angular.module('hostForm.testData', [])

    .controller('TestDataCtrl', ['$scope', '$http', function ($scope, $http) {
        // TODO: create a backend data store
        $http.get("https://ancient-sea-8793.herokuapp.com/persons")
            .then(function (response) {
                $scope.testPersons = response.data;
            });

        $scope.addedPersonName = "None";

        $scope.addPerson = function(name) {
            $http.post("https://ancient-sea-8793.herokuapp.com/person", {"userName": name})
                .then(function (response) {
                    //$scope.testPersons = response.data;s
                });

            $scope.addedPersonName = name;
        };
    }]);