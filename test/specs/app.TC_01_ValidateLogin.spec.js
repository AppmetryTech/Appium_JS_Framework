//@ts-check
const LoginData = require('../../Data/login_data.json')
const LoginPage = require('../pageobjects/login.page')


describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await LoginPage.login(LoginData.Email, LoginData.Pwd, LoginData.errorMessage);
        await driver.deleteSession();
    });

    it('Login with locked credentials', async () => {
        await LoginPage.login(LoginData.lockedEmail, LoginData.Pwd, LoginData.errorMessage)
    })

})