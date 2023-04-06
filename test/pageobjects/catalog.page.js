class Catalog {

    get productsList() { return $$("~store item text") }

    get product() { return $("(//android.view.ViewGroup[@content-desc=\"store item\"])[3]/android.view.ViewGroup[1]/android.widget.ImageView"); }

    async validateProduct(productName) {
        await this.product.waitForDisplayed({ timeout: 5000 });
        // get device dimensions
        const { height, width } = await driver.getWindowRect();

        console.log("height --> " + height + " width --> " + width)
        /*const startX = width / 2;
        const startY = height / 4;
        const endX = width / 2;
        const endY = height / 2;
        console.log(startX, startY, endX, endY)*/

        await driver.setImplicitTimeout(10000);
        let ProductCount = await this.productsList.length;
        console.log("ProductCount  --> " + ProductCount)

        // Find all product elements and loop through them to find the matching product

        for (let i = 0; i <= ProductCount; i++) {
            const product = await this.productsList[i];
            const titleElement = await product.getText();
            console.log("Title --> " + titleElement)
            // const title = await titleElement.getText();
            if (titleElement === productName) {
                await product.click();
                break;
            }
            await driver.touchPerform([
                { action: 'press', options: { x: 530, y: 1928 } },
                { action: 'wait', options: { ms: 1000 } },
                { action: 'moveTo', options: { x: 530, y: 986 } },
                { action: 'release', options: {} }

            ]);
        }

    }

    async validateProductFilter() {

    }

    async addToCart() {


    }

}

module.exports = new Catalog();