//const { default: driver } = require('appium-uiautomator2-driver/build/lib/driver')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {

    it('should login with valid credentials', async () => {

        //click on menu options
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

        //click on Product 
        let clickOnFirstProduct = await $("(//android.view.ViewGroup[@content-desc=\"store item\"])[1]/android.view.ViewGroup[1]/android.widget.ImageView");
        await clickOnFirstProduct.click();
        let clickAddToCart = await $("~Add To Cart button");
        await clickAddToCart.click();
        let clickOnCartIcon = await $("//android.view.ViewGroup[@content-desc=\"cart badge\"]/android.widget.ImageView");
        await clickOnCartIcon.click();

        let CheckOut = await $("~Proceed To Checkout button");
        await CheckOut.click();
        let enterFirstName = await $("~Full Name* input field");
        await enterFirstName.setValue("Test user");

        let enterAddress = await $("~Address Line 1* input field");
        await enterAddress.setValue("House no 4327");
        // let els1 = await $$("~To Payment button");
        //els1.click();
        let enterCity = await $("~City* input field");
        await enterCity.setValue("Delhi");
        let enterState = await $("~State/Region input field");
        await enterState.setValue("Delhi");
        let enterZipCode = await $("~Zip Code* input field");
        await enterZipCode.setValue("441209");
        let enterCountry = await $("~Country* input field");
        await enterCountry.setValue("India");
        let clickOnPaymentBtn = await $("~To Payment button");
        await clickOnPaymentBtn.click();

        //payment details

        let clickOnFullName = await $("~Full Name* input field");
        await clickOnFullName.setValue("Chetan Motghare");

        let enterCardNo = await $("~Card Number* input field");
        await enterCardNo.setValue("3258 1265 7568 789");
        let enterExpiryDate = await $("~Expiration Date* input field");
        await enterExpiryDate.setValue("03/25");
        let enterCVV = await $("~Security Code* input field");
        await enterCVV.setValue("123");

        let reviewOrder = await $("~Review Order button");

        await reviewOrder.waitForDisplayed({ timeout: 5000 });
        await reviewOrder.click();
        //place order
        let placeOrder = await $("~Place Order button");
        await placeOrder.waitForDisplayed({ timeout: 2000 })
        await placeOrder.click()

        //logout 
        await elem.waitForDisplayed({ timeout: 1500 })
        await elem.click();

        let logOut = await $("~menu item log out")
        await logOut.click();


        let comfirmlogOut = await $('id:android:id/button1')
        await comfirmlogOut.click();
        await comfirmlogOut.waitForDisplayed({ timeout: 5000 })
        await comfirmlogOut.click()
        /* let LoginText = await $("//android.view.ViewGroup[@content-desc='container header']/android.widget.TextView");
         let text = await LoginText.getValue();
         console.log(text)*/

        //save screenshot 
        await browser.saveScreenshot("./screenshot/test.png")


    })
})


