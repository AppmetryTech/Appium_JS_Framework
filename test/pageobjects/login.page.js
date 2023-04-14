

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     * 
     */

    get clickOnMenu() {
        return $('~open menu')
    }
    get ClickOnLoginBtn() {
        return $('~menu item log in')
    }
    get inputUsername() {
        return $('~Username input field');
    }

    get inputPassword() {
        return $('~Password input field');
    }

    get btnSubmit() {
        return $('~Login button');
    }

    get errorMessage() {
        return $(`~generic-error-message`)
    }

    get logOutbtn() {
        return $(`~menu item log out`)
    }

    get confirmLogOut() {
        return $('id:android:id/button1')
    }

    get drawingBtn() {
        return $(`~menu item drawing`)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password, expectedErrorMessage) {
        await this.clickOnMenu.click();
        await this.ClickOnLoginBtn.waitForDisplayed({ timeout: 15000 });
        await this.ClickOnLoginBtn.click();
        await this.inputUsername.waitForDisplayed({ timeout: 15000 });
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForDisplayed({ timeout: 15000 });
        await this.btnSubmit.click();

        /* if (await this.errorMessage.isDisplayed()) {
             await this.errorMessage.waitForDisplayed();
             let actualErrorMessage = await this.errorMessage.getText();
             expect(actualErrorMessage).toEqual(expectedErrorMessage);
             console.log("Login with invalid/locked Creds")
         } else {
             console.log("Login with Valid Creds");
         }*/
    }

    async logOut() {
        await this.clickOnMenu.waitForDisplayed({ timeout: 3000 })
        await this.clickOnMenu.click();
        await this.logOutbtn.waitForDisplayed({ timeout: 3000 })
        await this.logOutbtn.click();

        await this.confirmLogOut.click();
        await this.confirmLogOut.waitForDisplayed({ timeout: 5000 })
        await this.confirmLogOut.click()
        // await browser.saveScreenshot("./screenshot/test.png")
    }

    async clickOnDrawingBtn() {
        await this.clickOnMenu.click();
        await this.ClickOnLoginBtn.waitForDisplayed({ timeout: 15000 });
        await this.drawingBtn.click();
    }


}

module.exports = new LoginPage();
