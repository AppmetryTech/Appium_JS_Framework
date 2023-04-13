// webdriverio as W3C capabilities

const wdio = require("webdriverio");
const assert = require("assert");
describe("Test", async () => {
    let client;
    const opts = {
        path: '/wd/hub',
        port: 4723,
        capabilities: {
            platformName: "Android",
            "appium:platformVersion": "9",
            "appium:deviceName": "Vivo Y15",
            "appium:udid": 'U47TLZUOIZDIEAKR',
            // "appium:app": "/path/to/the/downloaded/ApiDemos-debug.apk",
            "appium:appPackage": "com.saucelabs.mydemoapp.rn",
            "appium:appActivity": "com.saucelabs.mydemoapp.rn.MainActivity",
            "appium:noReset": true,
            "appium:forceAppLaunch": true,
            "appium:automationName": "UiAutomator2"
        }
    };
    before("Start APPIUM server", async () => {
        client = await wdio.remote(opts);
    })

    it('should login with valid credentials', async () => {

        const elem = await $('~open menu')
        await elem.click();
        const login = await $('~menu item log in');
        await login.waitForDisplayed({ timeout: 1500 });
        login.click();
        await browser.saveScreenshot("./screenshot/login.png")
        //login screeen
        let userName = await $("~Username input field");
        await userName.waitForDisplayed({ timeout: 1500 })
        await userName.clearValue();
        await userName.setValue("bob@example.com");
        let password = await $("~Password input field");
        await password.clearValue();
        await password.setValue("10203040");
        let clickLogin = await $("~Login button");
        await clickLogin.waitForDisplayed({ timeout: 5000 })
        await clickLogin.click();
        console.log("Login Successfully")

    });

    after("Stop server", async () => {
        await client.deleteSession();
    })


})


