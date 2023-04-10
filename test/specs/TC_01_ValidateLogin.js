const LoginPage = require('../../pageobjects/login.page')
const { LoginData } = require('../../Data/login_data')

describe('My Login application', () => {
    before("Start APPIUM server", async () => {
        console.log("BEFORE ALL TEST CASES")
    })
    after("Kill Server", async () => {
        console.log("AFTER ALL TEST CASES")
    })

    it('should login with valid credentials', async () => {

        await LoginPage.login(LoginData.Email, LoginData.pwd);

    });

})