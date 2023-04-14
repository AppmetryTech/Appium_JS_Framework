const config = require('../wdio.conf').config;

config.specs = [

    '../test/specs/webview.spec.js'
];

config.capabilities = [
    {
        platformName: 'Android',
        "appium:automationName": 'UiAutomator2',
        "appium:deviceName": "Vivo Y15",
        "appium:udid": 'emulator-5554',
        "appium:platformVersion": '13',
        "appium:orientation": 'PORTRAIT',
        // app: path.join(process.cwd(), './apps/saucelab.apk'),
        "appium:appPackage": "com.saucelabs.mydemoapp.rn",
        "appium:appActivity": "com.saucelabs.mydemoapp.rn.MainActivity",
        "appium:noReset": true,
        "appium:forceAppLaunch": true,
    },
];

exports.config = config;