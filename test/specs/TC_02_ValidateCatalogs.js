const Catalog = require('../pageobjects/catalog.page')

describe('Catalog items', () => {


    it('Validate Catalog items', async () => {
        //await LoginPage.open();
        //const productName = "Sauce Labs Fleece Jacket"
        const productName = "Sauce Labs Onesie"
        await Catalog.validateProduct(productName);

    });

})