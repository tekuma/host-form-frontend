'use strict';

/* Questionnaire controller module */
angular.module('hostForm.questionnaire', ['ngMaterial', 'ngMessages'])

    .controller('QuestionnaireCtrl', function($scope) {
        $scope.user = {
            email: '',
            name: 'fei niu',
            company: 'Google',
            address: '1600 Amphitheatre Pkwy',
            city: 'Mountain View',
            state: 'CA',
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode: '94043',

            place: {
                placeType: 'Residential',
                residentialDescription: '',
                hospitalityDescription: '',
                workspaceDescription: '',
                retailDescription: '',
                otherDescription: ''
            }
        };

        $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function(state) {
            return {abbrev: state};
        });

        $scope.placeTypes = ('Residential Hospitality Workspace Retail Other').split(' ').map(function(placeType) {
            return {entry: placeType};
        });
        $scope.placeResidentialOptions = ('Airbnb ,Home Office ,Informal Event Space ,None ').split(',').map(function(option) {
            return {entry: option}
        });
        $scope.placeHospitalOptions = ('Airbnb ,B&B ,Vacation Rental ,Boutique Hotel ,Hotel ').split(',').map(function(option) {
            return {entry: option}
        });
        $scope.placeWorkspaceOptions = ('Coworking Space ,Private Office ,Conference Room ,Lobby ,Lounge/Cafe ').split(',').map(function(option) {
            return {entry: option}
        });

    })

    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');
    });