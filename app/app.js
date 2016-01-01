'use strict';

/* App Module */
angular.module('hostFormApp', [
        'ngRoute',
        'ngMdIcons',
        'tkMdCapitalizeFirstLetter',
        'hostForm.questionnaire',
        'hostForm.testData'
    ])

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
            when('/questionnaire', {
                templateUrl: 'questionnaire/questionnaire.html',
                controller: 'QuestionnaireCtrl'
            }).
            when('/testData', {
                templateUrl: 'testData/testData.html',
                controller: 'TestDataCtrl'
            }).
            otherwise({
                redirectTo: '/questionnaire'
            })
        }]);