
//@ts-check
const LoginPage = require('../pageobjects/login.page')
const Catalog = require('../pageobjects/catalog.page')
const Cart = require('../pageobjects/cart.page')
const CheckOut = require('../pageobjects/checkout.page')
const appium = require('appium');
const { checkNodeOk } = require('appium/build/lib/config');

let productName = "Test.allTheThings() T-Shirt"
let fullName = "Tom Lathem";
let addLine1 = "Shivaji Park"
let addLine2 = "Lay Bae city"
let city = "Delhi"
let state = "Delhi"
let zipCode = 453290
let country = "India"
let cardNo = "3258 1265 7568 789"
let expiryDate = "03/25"
let cvv = "123"

describe('Validate CheckOut', () => {
    it('Validate Checkout', async () => {
        await LoginPage.login('bob@example.com', '10203040');
        await Catalog.validateProduct(productName);
        await Catalog.addToCart();
        await Cart.clickOnCheckOut();
        await CheckOut.enterFullName(fullName);
        await CheckOut.enterAddress(addLine1);
        await CheckOut.enterCity(city);
        await CheckOut.enterState(state);
        await CheckOut.enterZipCode(zipCode);
        await CheckOut.entercountry(country);
        await CheckOut.enterFullName(fullName);
        await CheckOut.clickOnPayment();
        await CheckOut.enterPaymentDetails(cardNo, expiryDate, cvv);
        await CheckOut.clickreviewOrder();
        await CheckOut.clickplaceOrder();
    });
})

