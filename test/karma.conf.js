module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-aria/angular-aria.js',
            'app/bower_components/angular-material/angular-material.js',
            'app/bower_components/angular-animate/angular-animate.js',
            'app/bower_components/angular-messages/angular-messages.js',
            'app/bower_components/angular-material-icons/angular-material-icons.js',
            'app/bower_components/ng-flow/dist/ng-flow-standalone.js',
            'app/directives/tkMdCapitalizeFirstLetter.js',
            'app/app.js',
            'app/questionnaire/**/*.js',
            'app/hello/**/*.js',
            'test/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};