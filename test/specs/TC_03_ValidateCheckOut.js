
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
        await CheckOut.enterAddress(addLine1, addLine2);
        await CheckOut.enterCity(city);
        await CheckOut.state(state);
        await CheckOut.country(country);
        await CheckOut.enterPaymentDetails(cardNo, expiryDate, cvv);
        await CheckOut.clickreviewOrder();
        await CheckOut.placeOrder();
    });
})

