const LoginPage = require('../pageobjects/login.page')

describe("Demo Test", async () => {

    it("Demo test 01", async () => {
        // await LoginPage.login(LoginData.Email, LoginData.Pwd);
        await LoginPage.clickOnDrawingBtn()
    })
}
)