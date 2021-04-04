const { Application } = require("./test/pageobjects/application");

require("ts-node").register({files:true});
const {App} = require("../pageobjects/application")
exports.config = {
    runner: 'local',
    specs: [
         './test/specs/*.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    beforeTest: function (test, context) {
    console.log('WDIO: BEFORE SUITE: ', test, context)
    },
    // before: function (capabilities, specs){
    //     global.App = App;
    // },
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ["disable-infobars",
            "--disable-dev-shm-usage",
            "--disable-web-security",
            "--disable-site-isolation-trials",
            "--allow-running-insecure-content",
            "--disable-popup-blocking",
            "--allow-insecure-localhost"
        ],
            prefs: {
                'profile.default_content_setting_values.cookies': 1,
                'profile.block_third_party_cookies': false
            },
        },
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://automationpractice.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 10000,
        retries: 1,
        slow: 1000,
        grep: '@SMOKE'
    },  
}
