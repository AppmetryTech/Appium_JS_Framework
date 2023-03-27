describe('Swipe Function', () => {

    it('Swipe up and down', async () => {
        //const element = await driver.$("(//android.widget.TextView[@content-desc=\"store item text\"])[3]");
        let element = "(//android.widget.TextView[@content-desc='store item text'])[3]"

        // webdriver.io example
        await driver.touchScroll(10, 100, element);

        // wd example
        await driver.scroll(10, 100);



    })
})