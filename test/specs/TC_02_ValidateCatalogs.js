const LoginPage = require('../pageobjects/login.page')
const Catalog = require('../pageobjects/catalog.page')

describe('Catalog items', () => {
    it('Validate Catalog items', async () => {
        await LoginPage.login('bob@example.com', '10203040');
        const productName = "Sauce Labs Onesie"
        await Catalog.validateProduct(productName);

        await Catalog.validateProductDetails(productName, 7.99)
    });



})