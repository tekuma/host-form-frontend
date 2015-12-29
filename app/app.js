'use strict';

/* App Module */
angular.module('hostFormApp', [
        'ngRoute',
        'hostForm.questionnaire',
        'ngMdIcons'
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
        }])

    .directive('capitalizeFirstLetter', function ($parse) {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                var capitalize = function(inputValue) {
                    if (inputValue === undefined) { inputValue = ''; }

                    var capitalizeFirstLetter = function (word) {
                        return word.charAt(0).toUpperCase() + word.substring(1);
                    };
                    var parts = inputValue.split(" ");
                    var capitalized = parts.map(capitalizeFirstLetter).join(" ");

                    if(capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                    return capitalized;
                };

                modelCtrl.$parsers.push(capitalize);

                capitalize($parse(attrs.ngModel)(scope)); // capitalize initial value
            }
        };
    });