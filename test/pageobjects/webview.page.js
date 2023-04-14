class Webview {
    get webviewBtn() {
        return $('~container header')
    }
    get searchField() {
        return $(`~URL input field`)
    }

    get clickOnSearchBtn() {
        return $(`~Go To Site button`)
    }

    async clickWebView() {
        await this.webviewBtn.waitForDisplayed({ timeout: 10000 })
        await this.webviewBtn.click();
    }

    async searchThings(search) {
        await this.searchField.waitForDisplayed({ timeout: 15000 });
        await this.searchField.setValue(search);
        await this.clickOnSearchBtn.click();
    }
}
module.exports = new Webview();