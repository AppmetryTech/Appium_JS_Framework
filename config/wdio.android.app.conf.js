const path = require('path');
const config = require('../wdio.conf').config;

// ============
// Specs
// ============
config.specs = [
    // '../test/specs/app*.spec.js',
    //'../test/specs/app.TC_03_ValidateCheckOut.spec.js'
    // '../test/specs/RealDeviceRecorded.spec.js'
    '../test/specs/app.TC_01_ValidateLogin.spec.js'
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {

        // The defaults you need to have in your config
        platformName: 'Android',
        "appium:automationName": 'UiAutomator2',
        "appium:deviceName": "Vivo Y15",
        "appium:udid": 'U47TLZUOIZDIEAKR',
        "appium:platformVersion": '9.0',
        "appium:orientation": 'PORTRAIT',
        // app: path.join(process.cwd(), './apps/saucelab.apk'),
        "appium:appPackage": "com.saucelabs.mydemoapp.rn",
        "appium:appActivity": "com.saucelabs.mydemoapp.rn.MainActivity",

        "appium:noReset": true,
        "appium:forceAppLaunch": true,


    },
];

exports.config = config;