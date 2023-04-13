
//@ts-check
const LoginPage = require('../pageobjects/login.page')
const Catalog = require('../pageobjects/catalog.page')
const Cart = require('../pageobjects/cart.page')
const CheckOut = require('../pageobjects/checkout.page')
const LoginData = require('../../Data/login_data.json')
const AddressData = require('../../Data/address_data.json')
const ProductData = require('../../Data/product_detail.json')
const PaymentData = require('../../Data/payment_data.json')
const { remote } = require('webdriverio');


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
        await CheckOut.clickOnPayment();
        await CheckOut.enterFullName(AddressData.fullName);
        await CheckOut.enterPaymentDetails(PaymentData.cardNo, PaymentData.expiryDate, PaymentData.cvv);
        await CheckOut.clickreviewOrder();
        await CheckOut.clickplaceOrder();
    });

    it("LogOut", async () => {
        await LoginPage.logOut();
    })

    /* it("Validate Product Details", async () => {
         console.log("Test3")
     })*/
})

