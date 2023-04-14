const { config } = require('../main')

config.capabilities = [
    {
        platformName: 'Android',
        "appium:automationName": 'UiAutomator2',
        "appium:deviceName": "Pixel 4",
        "appium:udid": 'emulator-5554',
        "appium:platformVersion": '13',
        "appium:orientation": 'PORTRAIT',
        // app: path.join(process.cwd(), './apps/saucelab.apk'),
        "appium:appPackage": "com.saucelabs.mydemoapp.rn",
        "appium:appActivity": "com.saucelabs.mydemoapp.rn.MainActivity",

        "appium:noReset": true,
        "appium:forceAppLaunch": true,
        "appium:systemPort": 7001,
        port: 7000,

    },
    {
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
        "appium:systemPort": 6001,
        port: 6000,

    }
]
config.specs = [
    //'../test/specs/app.TC_01_ValidateLogin.spec.js',

    //'../test/specs/app.TC_03_ValidateCheckOut.spec.js'
    '../test/specs/TC_Demo.spec.js'
],
    // define specific suites   //to run suite cmd :- npm run test1 --suite login  or to run multiple suite: npm run test1 --suite login --suite otherFeature
    config.suites = {
        login: [
            './test/specs/app.TC_01_ValidateLogin.spec.js',
            './test/specs/app.TC_03_ValidateCheckOut.spec.js'
        ]

    }

exports.config = config