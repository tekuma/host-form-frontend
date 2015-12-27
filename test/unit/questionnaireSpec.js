'use strict';

describe('Questionnaire module', function () {

    beforeEach(function () {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    // The main app
    beforeEach(module('hostFormApp'));

    describe('QuestionnaireCtrl', function () {
        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('QuestionnaireCtrl', {$scope: scope});
        }));

        it('should db_log', inject(function ($rootScope, $controller) {
            expect(ctrl).toBeDefined();
        }));

    });

});