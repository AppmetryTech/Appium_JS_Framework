const LoginPage = require('../pageobjects/login.page')
const WebView = require(`../pageobjects/webview.page`)

describe('Validate CheckOut', () => {


    it('Validate Checkout', async () => {
        await LoginPage.clickMenu();
        let connection = await driver.getNetworkConnection();
        console.log(connection);
        await WebView.clickWebView();
        await WebView.searchThings("https://www.google.com");
        let context = await driver.getContexts(); 
        console.log(context);
    })
})