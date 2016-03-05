module.exports = function(config) {
    config.set({

        basePath: '../',

        files: [
            'public/lib/angular/angular.js',
            'public/lib/angular-mocks.js',
            'public/lib/select/select.js',
            'public/lib/angular-sanitize.js',
            'public/js/**/*.js',
            'test/unit/**/*.js'
        ],

        exclude: [
            'public/js/background.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
