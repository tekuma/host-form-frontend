'use strict';

/* App Module */
angular.module('hostFormApp', [
        'ngRoute',
        'hostForm.questionnaire',
        'ngMdIcons',
        'tkMdCapitalizeFirstLetter'
    ])

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
            when('/questionnaire', {
                templateUrl: 'questionnaire/questionnaire.html',
                controller: 'QuestionnaireCtrl'
            }).
            when('/hello', {
                templateUrl: 'hello/hello.html',
                controller: 'HelloCtrl'
            }).
            otherwise({
                redirectTo: '/questionnaire'
            })
        }]);