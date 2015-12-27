'use strict';

/* App Module */
angular.module('hostFormApp', [
        'ngRoute',
        'hostForm.questionnaire'
    ])

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
            when('/questionnaire', {
                templateUrl: 'questionnaire/questionnaire.html',
                controller: 'questionnaireCtrl'
            }).
            when('/hello', {
                templateUrl: 'hello/hello.html',
                controller: 'helloCtrl'
            }).
            otherwise({
                redirectTo: '/questionnaire'
            })
        }]);