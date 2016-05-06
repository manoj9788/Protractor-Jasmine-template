exports.config = {
   directConnect: true,
   //If you want to use a particular seleniumserver then you may change the path accordingly. However using directConntect is faster.
   //seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar",
    specs: ['specs/*[sS]pec.js'],
    baseUrl: 'http://google.com/',

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
