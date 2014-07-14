module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      'main-test.js',
      'assets/css/test.css',
      {pattern: '**/img/*.png', included: false},
      {pattern: '**/img/*.gif', included: false},
      {pattern: '**/vid/*.mp4', included: false},
      {pattern: '**/vid/*.webm', included: false},
      {pattern: '**/css/*.css', included: false},
      {pattern: '**/*.js', included: false},
      {pattern: '**/*.spec.js', included: false},
      {pattern: '**/*.scenario.js', included: false}
    ],

    plugins: [
        // these plugins will be require() by Karma
        'requirejs',
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-safari-launcher',
        'karma-opera-launcher',
        'karma-phantomjs-launcher',
        'karma-requirejs',
        'karma-junit-reporter',
    ],


    // list of files to exclude
    exclude: [
        'assets/js/main.js'      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'junit'],
    junitReporter: {
        outputFile: 'test-results.xml'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    //browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS', 'Opera'],
    //browsers: ['Chrome', 'Safari', 'PhantomJS', 'Opera'],
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
