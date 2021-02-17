require("ts-node").register({files:true});
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
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 10000,
        retries: 2,
        slow: 1000,
        grep: '@SMOKE'
    },  
}
