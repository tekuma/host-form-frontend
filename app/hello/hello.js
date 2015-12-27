'use strict';

/* Questionnaire controller module */
angular.module('hostForm.hello', [])

    .controller('HelloCtrl', ['$scope',
        function ($scope) {
            $scope.pageName = 'hello';
        }]);