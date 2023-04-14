let chai = require("chai")
const allure = require('allure-commandline');

exports.config = {
    runner: 'local',
     port: 4723,
    // hostname: '0.0.0.0',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        //require: ['@babel/register'],
        timeout: 600000
    },
    waitforTimeout: 10000,
    maxInstances: 10,
    sync: true,
    /* specs: [
         './src/test_scripts/account/TC_001_Login.js'
     ],*/
    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,

        }]
    ],

    before: function () {
        global.chaiExpect = chai.expect
    },


}