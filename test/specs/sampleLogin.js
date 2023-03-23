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

        let el1 = await driver.$("(//android.view.ViewGroup[@content-desc=\"store item\"])[1]/android.view.ViewGroup[1]/android.widget.ImageView");
        await el1.click();
        let el2 = await driver.$("~Add To Cart button");
        await el2.click();
        let el3 = await driver.$("//android.view.ViewGroup[@content-desc=\"cart badge\"]/android.widget.ImageView");
        await el3.click();
        let el4 = await driver.$("~Proceed To Checkout button");
        await el4.click();
        let el5 = await driver.$("~Full Name* input field");
        await el5.setValue("Test user");
        let el6 = await driver.$("~Address Line 1* input field");
        await el6.setValue("House no 4327");
        let els1 = await driver.$$("~To Payment button");
        els1.click();
    })
})


