// conf.js
exports.config = {
   seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar",
    specs: ['specs/*Spec.js'],
    baseUrl: 'http://google.com',

    framework: 'jasmine2',

    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            'args': ['disable-extensions', 'start-maximized', 'enable-crash-reporter-for-testing']
        },
        'loggingPrefs': {
            'browser': 'ALL'
        },
        sharedTestFiles: true,
        maxInstances: 2
    },

}