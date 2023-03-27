const LoginPage = require('../../pageobjects/login.page')

describe('My Login application', () => {
    before("Start APPIUM server", async () => {
        console.log("BEFORE ALL TEST CASES")
    })
    after("Kill Server", async () => {
        console.log("AFTER ALL TEST CASES")
    })

    it('should login with valid credentials', async () => {
        //await LoginPage.open();
        await LoginPage.login('bob@example.com', '10203040*');

    });

})