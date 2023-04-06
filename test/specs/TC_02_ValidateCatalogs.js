const LoginPage = require('../pageobjects/login.page')
const Catalog = require('../pageobjects/catalog.page')

let productName = "Sauce Labs Onesie"
//let productName = "Test.allTheThings() T-Shirt"
let price = 7.99;

describe('Catalog items', () => {
    it('Validate Catalog items', async () => {
        await LoginPage.login('bob@example.com', '10203040');
        await Catalog.validateProduct(productName);
        await Catalog.validateProductDetails(productName, price);
        await Catalog.addToCart();
    });



})