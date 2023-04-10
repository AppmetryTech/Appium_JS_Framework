
//@ts-check
const LoginPage = require('../pageobjects/login.page')
const Catalog = require('../pageobjects/catalog.page')
const Cart = require('../pageobjects/cart.page')
const CheckOut = require('../pageobjects/checkout.page')
const appium = require('appium');
const { checkNodeOk } = require('appium/build/lib/config');
const LoginData  = require('../../Data/login_data.json')
const AddressData  = require('../../Data/address_data.json')
const ProductData  = require('../../Data/product_detail.json')
const PaymentData  = require('../../Data/payment_data.json')


let cardNo = "3258 1265 7568 789"
let expiryDate = "03/25"
let cvv = "123"

describe('Validate CheckOut', () => {
    it('Validate Checkout', async () => {
        await LoginPage.login(LoginData.Email, LoginData.Pwd);
        await Catalog.validateProduct(ProductData.productName);
        await Catalog.addToCart();
        await Cart.clickOnCheckOut();
        await CheckOut.enterFullName(AddressData.fullName);
        await CheckOut.enterAddress(AddressData.addLine1);
        await CheckOut.enterCity(AddressData.city);
        await CheckOut.enterState(AddressData.state);
        await CheckOut.enterZipCode(AddressData.zipCode);
        await CheckOut.entercountry(AddressData.country);
        await CheckOut.enterFullName(AddressData.fullName);
        await CheckOut.clickOnPayment();
        await CheckOut.enterPaymentDetails(cardNo, expiryDate, cvv);
        await CheckOut.clickreviewOrder();
        await CheckOut.clickplaceOrder();
    });
})

