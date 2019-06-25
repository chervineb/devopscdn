// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    junitReporter: {
      outputDir: '../'
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['cobertura', 'html', 'lcov'],
      fixWebpackSourcePaths: true,
      combineBrowserReports: true,
      // thresholds: {
      //   statements: 83.5,
      //   lines: 83.5,
      //   branches: 72.0,
      //   functions: 73.1,
      // },
      'report-config': {
        html: {
          subdir: 'html'
        }
      },
    },
    reporters: ['progress', 'kjhtml', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    // reportSlowerThan: 500,
    browsers: ['ChromeHeadlessNoSandbox'],
    captureTimeout: 60000,
    browserDisconnectTimeout : 100000,
    browserDisconnectTolerance : 3,
    browserNoActivityTimeout : 100000,//by default 10000
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true
  });
};
