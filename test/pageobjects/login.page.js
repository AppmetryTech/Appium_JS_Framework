const Page = require('./page');

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

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.clickOnMenu.click();
        await this.ClickOnLoginBtn.waitForDisplayed({ timeout: 15000 });
        await this.ClickOnLoginBtn.click();
        await this.inputUsername.waitForDisplayed({ timeout: 15000 });
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForDisplayed({ timeout: 15000 });
        await this.btnSubmit.click();
    }


}

module.exports = new LoginPage();
