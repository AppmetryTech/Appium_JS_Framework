const expectChai = require('chai').expect;

class CheckOut {

    get fullName() { return $('~Full Name* input field') }
    get addLine1() { return $('~Address Line 1* input field') }
    get addLine2() { return $('~Address Line 2* input fieldn') }
    get city() { return $('~City* input field') }
    get state() { return $('~State/Region input field') }
    get zipCode() { return $('~Zip Code* input field') }
    get country() { return $('~Country* input field') }
    get paymentBtn() { return $('~To Payment button') }
    get cardNo() { return $('~Card Number* input field') }
    get expiryDate() { return $('"~Expiration Date* input field') }
    get cvv() { return $('~Security Code* input field') }
    get reviewOrder() { return $('~Review Order button') }

    async enterFullName(fullName) {
        await this.fullName.waitForDisplayed({ timeout: 2000 });
        await this.fullName.setValue(fullName);
    }

    async enterAddress(addLine1, addLine2) {
        await this.addLine1.setValue(addLine1);
        await this.addLine2.setValue(addLine2);
    }

    async enterCity(city) {
        await this.city.setValue(city);
    }

    async enterState(state) {
        await this.state.setValue(state);
    }
    async enterZipCode(zipcode) {
        await this.zipCode.setValue(zipcode);
    }

    async entercountry(country) {
        await this.country.setValue(country);
    }
    async clickOnPayment() {
        await this.paymentBtn.waitForDisplayed({ timeout: 1000 });
        await this.paymentBtn.click();
    }

    async enterPaymentDetails(cardNo,expiryDate,cvv){
        await enterCardNo.setValue(cardNo);
        await enterExpiryDate.setValue(expiryDate);
        await enterCVV.setValue(cvv);

    }



}

module.exports = new CheckOut();