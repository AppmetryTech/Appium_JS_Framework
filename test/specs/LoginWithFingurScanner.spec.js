const wdio = require('webdriverio');


describe("Login with fingerprint authentication", () => {
    let driver;
    const caps = { "appium:platformName": "android", "appium:PlatformVersion": "13", "appium:deviceName": "Pixel", "appium:automationName": "uiautomator2", "appium:udid": "emulator-5554", "appium:appPackage": "com.saucelabs.mydemoapp.rn", "appium:appActivity": "com.saucelabs.mydemoapp.rn.MainActivity", "appium:noReset": true, "appium:forceAppLaunch": true, "appium:newCommandTimeout": 3600, "appium:connectHardwareKeyboard": true }

    // Set the desired capabilities for the Appium server
    const opts = {
        protocol: "http",
        hostname: "127.0.0.1",
        path: "/wd/hub",
        port: 4723,
        capabilities: caps
    };

    before(async () => {
        // Start the Appium server with the desired capabilities
        driver = await wdio.remote(opts);
    });

    after(async () => {
        // Close the Appium server and end the session
        await driver.deleteSession();
    });

    it("should login with fingerprint authentication", async () => {
        // Wait for the app to load
        await driver.pause(5000);

        // Find the login button and click it
        const elem = await $('~open menu')
        await elem.click();
        const login = await $('~menu item log in');
        await login.waitForDisplayed({ timeout: 1500 });

        // Wait for the fingerprint authentication screen to appear
        await driver.pause(5000);

        // Use fingerprint authentication to log in
        const fingerprintAuth = await driver.$("#fingerprint_auth");
        await fingerprintAuth.click();

        // Wait for the login process to complete
        await driver.pause(10000);
    });
});


/*async function main() {
    const caps = { "appium:platformName": "android", "appium:PlatformVersion": "13", "appium:deviceName": "Pixel", "appium:automationName": "uiautomator2", "appium:udid": "emulator-5554", "appium:appPackage": "com.saucelabs.mydemoapp.rn", "appium:appActivity": "com.saucelabs.mydemoapp.rn.MainActivity", "appium:noReset": true, "appium:forceAppLaunch": true, "appium:newCommandTimeout": 3600, "appium:connectHardwareKeyboard": true }
    const driver = await wdio.remote({
        protocol: "http",
        hostname: "127.0.0.1",
        port: 4723,
        path: "/wd/hub/",
        capabilities: caps
    });
    describe('My Login application', () => {

        it('should login with valid credentials', async () => {

            //click on menu options
            const elem = await $('~open menu')
            await elem.click();
            const login = await $('~menu item log in');
            await login.waitForDisplayed({ timeout: 1500 });
        })
    })

    await driver.deleteSession();
}*/

main().catch(console.log);