const expectChai = require('chai').expect;

class Catalog {

    get counterPlus() { return $('~counter plus button') }
    get counterMinus() { return $('~counter minus button') }
    get totalPrice() { return $('~total price') }
    get counter() { return $('~counter amount') }
    get checkOut() { return $(`~Proceed To Checkout button`) }

    get cartBadge() { return $('~cart badge') }

    async validateProduct(productName) {
    }
}