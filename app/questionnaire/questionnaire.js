'use strict';

/* Questionnaire controller module */
angular.module('hostForm.questionnaire', ['ngMaterial', 'ngMessages', 'flow'])

    .controller('QuestionnaireCtrl', [ '$scope', function ($scope) {
        // The renamed flow object
        $scope.uploader = {};

        $scope.user = {
            email: '',
            name: '',
            city: '',

            place: {
                placeType: 'Residential',
                residentialDescription: '',
                residentialAirBnbUrl: '',
                hospitalityDescription: '',
                workspaceDescription: '',
                retailDescription: '',
                otherDescription: ''
            },

            numberOfRooms: '',
            numberOfPeople: '',
            numberOfVisitors: '',
            averageSize: '',

            biography: '',
            submissionDate: ''
        };


        // default values
        $scope.roomNumberOptions = ([1, 2, 3, 4, 5, 'More than 5']);
        $scope.artWorkNumberOptions = (['1 to 3 ($300)', '4 to 6 ($500)']);
        $scope.primaryUseOptions = (['friends & family', 'strangers']);
        $scope.peopleNumberOptions = (['1 to 2', '3 to 5', '6 to 10', 'more than 10', "I don't know"]);
        $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function (state) {
            return {abbrev: state};
        });
        $scope.placeTypes = ('Residential Hospitality Workspace Retail Other').split(' ').map(function (placeType) {
            return {entry: placeType};
        });
        $scope.placeResidentialOptions = ('Airbnb,Home Office,Informal Event Space,None').split(',').map(function (option) {
            return {entry: option}
        });
        $scope.placeHospitalOptions = ('Airbnb,B&B,Vacation Rental,Boutique Hotel,Hotel').split(',').map(function (option) {
            return {entry: option}
        });
        $scope.placeWorkspaceOptions = ('Coworking Space,Private Office,Conference Room,Lobby,Lounge/Cafe').split(',').map(function (option) {
            return {entry: option}
        });

        $scope.averageSizeOptions = ('Less than 400 square feet.,400-800 square feet,800+ square feet').split(',').map(function (option) {
            return {entry: option}
        });

    }])

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');
    })

    .config(['flowFactoryProvider', function (flowFactoryProvider) {
        flowFactoryProvider.defaults = {
            target: '',
            permanentErrors: [500, 501],
            maxChunkRetries: 1,
            chunkRetryInterval: 5000,
            simultaneousUploads: 1
        };
        flowFactoryProvider.on('catchAll', function (event) {
            console.log('catchAll', arguments);
        });
    }]);