describe('Swipe Function', () => {

    it('Swipe up and down', async () => {

        // Swipe down
        const startElement = await $("(//android.view.ViewGroup[@content-desc=\"store item\"])[1]/android.view.ViewGroup[1]/android.widget.ImageView");
        const endElement = await driver.$("(//android.widget.TextView[@content-desc=\"store item text\"])[3]");
        await driver.touchAction({
            action: 'press',
            element: endElement,
            // x and y values are offsets from the end element's top-left corner
            x: 0,
            y: 0,
        });
        await driver.touchAction({
            action: 'moveTo',
            element: startElement,
            // x and y values are offsets from the start element's top-left corner
            x: 420,
            y: 2131,
        });
        await driver.touchAction({ action: 'release' });


    })
})