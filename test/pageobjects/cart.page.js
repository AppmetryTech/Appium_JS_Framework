const expectChai = require('chai').expect;

class Cart {

    get counterPlus() { return $('~counter plus button') }
    get counterMinus() { return $('~counter minus button') }
    get totalPrice() { return $('~total price') }
    get counter() { return $('~counter amount') }
    get checkOut() { return $(`~Proceed To Checkout button`) }
    get cartBadge() { return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView') }


    async validatePlusCounter(Cartcount) {
        await this.counterPlus.waitForDisplayed();
        // Click on the plus icon the number of times equal to the input
        for (let i = 1; i < Cartcount; i++) {
            await driver.setImplicitTimeout(1000)
            await this.counterPlus.click();
        }
        await this.cartBadge.waitForDisplayed();
        let cartBadge = await this.cartBadge.getText();
        console.log("Total Cart count ---> ", cartBadge);
        expectChai(parseInt(cartBadge)).to.be.equal(Cartcount);
    }



    async validateMinusCounter() { }

    async validateTotalPrice(TotalPrice) {
        await this.totalPrice.waitForDisplayed();
        let price = await this.totalPrice.getText();

        let Finalprice = await price.match(/\$(\d+\.\d+)/)[1];
        console.log("Final Price --> ", Finalprice);
        expectChai(parseFloat(Finalprice)).to.be.equal(TotalPrice);
    }

}

module.exports = new Cart();