const { remote } = require('webdriverio');

describe('Youtube Most Liked commnent', () => {
    let videoName = "Samsung S23"

    it('Validate the most like commnet and most like reply', async () => {
        await driver.pause(10000);

        // Search for a video
        //const searchField = await driver.$('~Search');
        const searchField = await driver.$('//android.widget.ImageView[@content-desc="Search"]');
        const searchInput = await driver.$('id:com.google.android.youtube:id/search_edit_text')
        const searchedContent = await driver.$("//android.view.ViewGroup[contains(@content-desc,'Samsung Galaxy S23 &')]/android.view.ViewGroup/android.view.ViewGroup[1]")


        await searchField.click();
        await driver.pause(2000);
        await searchInput.setValue(videoName);
        await driver.pressKeyCode(66); // ENTER key ( showing null )
        await driver.pause(15000);
        await driver.touchPerform([
            { action: 'press', options: { x: 530, y: 2055 } },
            { action: 'wait', options: { ms: 3000 } },
            { action: 'moveTo', options: { x: 530, y: 214 } },
            { action: 'release', options: {} }

        ]);

        //click on searched video

        await searchedContent.click();
        await driver.pause(10000);
        const commnetSection = await driver.$("//android.support.v7.widget.RecyclerView/android.view.ViewGroup[4]/android.view.ViewGroup");
        await commnetSection.waitForDisplayed({ timeout: 15000 });
        await commnetSection.click();

        await driver.pause(5000);

        const { height, width } = await driver.getWindowRect();
        console.log("height --> " + height + " width --> " + width)

        // Find the most liked comment
        const numberList = [];
        let biggestNumber;
        let previousNumber = 0;
        let hasScrolledToEnd = false;

        while (!hasScrolledToEnd) {
            await driver.pause(500);
            const commentsLike = await driver.$$("//android.view.ViewGroup[contains(@content-desc,'Like this comment along')]");
            let Count = await commentsLike.length;
            console.log("count is " + Count);

            for (let i = 0; i < Count; i++) {
                const likeString = await commentsLike[i];
                console.log(likeString);
                let likes = await likeString.getAttribute("content-desc");
                const regex = /\d+/g;
                const numbers = likes.match(regex);
                console.log(" likeText ----> " + likes + " Like Count ----> " + numbers);

                const currentNumber = await parseFloat(numbers);
                await numberList.push(currentNumber);
                // Check if current number is greater than previous number
                if (currentNumber > previousNumber) {
                    // If yes, store it as the biggest number so far
                    biggestNumber = currentNumber;
                }

                // Update previous number to current number for next iteration
                previousNumber = currentNumber;

                // Print the final list and biggest number found
                console.log("Number list:", numberList);
                console.log("More No of Like :---> ", biggestNumber);

                await driver.touchPerform([
                    { action: 'press', options: { x: 530, y: 2150 } },
                    { action: 'wait', options: { ms: 1500 } },
                    { action: 'moveTo', options: { x: 530, y: 799 } },
                    { action: 'release', options: {} }

                ]);

            }
        }
    })
})



/* for (const commentElement of commentsLike) {
     const likesStr = await commentElement.$("//android.view.ViewGroup[contains(@content-desc,'Like this comment along')]").getAttribute("content-desc");
 
     const regex = /\d+/g;
     const numbers = likesStr.match(regex);
     console.log(likesStr, numbers);
 
     await driver.touchPerform([
         { action: 'press', options: { x: 530, y: 2150 } },
         { action: 'wait', options: { ms: 3000 } },
         { action: 'moveTo', options: { x: 530, y: 799 } },
         { action: 'release', options: {} }
 
     ]);
 }*/


