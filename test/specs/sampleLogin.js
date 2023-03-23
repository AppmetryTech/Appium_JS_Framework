const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const elem = await $('~open menu')
        elem.click();
        const login = await $('~menu item log in');
        login.click();
        let userName = await $("~Username input field");
        await userName.setValue("bob@example.com");
        let password = await $("~Password input field");
        await password.setValue("10203040");
        let clickLogin = await $("~Login button");
        await clickLogin.click();
        console.log("Login Successfully")
    })
})


