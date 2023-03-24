const LoginPage = require('../pageobjects/login.page')

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        before(function () {
            console.log("BEFORE ALL TEST CASES")
        })
        after(function () {
            console.log("AFTER ALL TEST CASES")
        })
        beforeEach(function () {
            console.log("BEFORE EACH ALL TEST CASES")
        })
        afterEach(function () {
            console.log("AFTER EACH ALL TEST CASES")
        })

        it('should login with valid credentials', async () => {
            await LoginPage.login('bob@example.com', '10203040*');

        });
    })
})