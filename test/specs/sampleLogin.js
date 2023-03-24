const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        const elem = await $('~open menu')
        elem.click();
        const login = await $('~menu item log in');
        await login.waitForDisplayed({ timeout: 1500 });
        login.click();
        let userName = await $("~Username input field");
        userName.waitForDisplayed({ timeout: 1500 })
        await userName.setValue("bob@example.com");
        let password = await $("~Password input field");
        await password.setValue("10203040");
        let clickLogin = await $("~Login button");
        clickLogin.waitForDisplayed({ timeout: 5000 })
        await clickLogin.click();
        console.log("Login Successfully")

        let clickOnFirstProduct = await driver.$("(//android.view.ViewGroup[@content-desc=\"store item\"])[1]/android.view.ViewGroup[1]/android.widget.ImageView");
        await clickOnFirstProduct.click();
        let clickAddToCart = await driver.$("~Add To Cart button");
        await clickAddToCart.click();
        let clickOnCartIcon = await driver.$("//android.view.ViewGroup[@content-desc=\"cart badge\"]/android.widget.ImageView");
        await clickOnCartIcon.click();

        let CheckOut = await driver.$("~Proceed To Checkout button");
        await CheckOut.click();
        let enterFirstName = await driver.$("~Full Name* input field");
        await enterFirstName.setValue("Test user");

        let enterAddress = await driver.$("~Address Line 1* input field");
        await enterAddress.setValue("House no 4327");
        // let els1 = await driver.$$("~To Payment button");
        //els1.click();
        let enterCity = await driver.$("~City* input field");
        await enterCity.setValue("Delhi");
        let enterState = await driver.$("~State/Region input field");
        await enterState.setValue("Delhi");
        let enterZipCode = await driver.$("~Zip Code* input field");
        await enterZipCode.setValue("441209");
        let enterCountry = await driver.$("~Country* input field");
        await enterCountry.setValue("India");

        //let el8 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout");
        // await el8.click();

        let clickOnPaymentBtn = await driver.$("~To Payment button");
        await clickOnPaymentBtn.click();

        let clickOnFullName = await driver.$("~Full Name* input field");
        await clickOnFullName.setValue("Chetan Motghare");

        let enterCardNo = await driver.$("~Card Number* input field");
        await enterCardNo.setValue("3258 1265 7568 789");
        let enterExpiryDate = await driver.$("~Expiration Date* input field");
        await enterExpiryDate.setValue("03/25");
        let enterCVV = await driver.$("~Security Code* input field");
        await enterCVV.setValue("123");

        let placeOrderBtn = await $("~Place Order button")
        placeOrderBtn.click();
        let logOut = await $("~menu item log out")
        logOut.click();

        let confirmLogOut = await driver.$$("//*[text()=\"LOG OUT\"]");


        await confirmLogOut.click();
        let comfirmOk = await driver.$("android:id/button1");
        await comfirmOk.click();
        let LoginText = await $("//android.view.ViewGroup[@content-desc=\"container header\"]/android.widget.TextView");
        let text = await LoginText.getValue();
        console.log(text)


    })
})


