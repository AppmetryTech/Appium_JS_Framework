class Catalog {

    get productsList() { return $$("~store item text") }

    get product() { return $("(//android.view.ViewGroup[@content-desc=\"store item\"])[1]/android.view.ViewGroup[1]/android.widget.ImageView"); }

    async validateProduct(productName) {
        await this.product.waitForDisplayed({ timeout: 5000 });
        let ProductCount = await this.productsList.length;
        console.log("LENGHT  --> " + ProductCount)
        // const count = await this.productsList.count();
        // console.log(count)
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
        }

    }

    async validateProductFilter() {

    }

    async addToCart() {


    }

}

module.exports = new Catalog();