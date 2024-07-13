const { expect } = require("chai");

describe('', () => {
    it('', async () => {
        /**
         * 1. Launch facebook.com  
      2. Click Meta Pay
      3. Click Meta Quest
      4. Click Instagram
      5. Click Meta Store
      6. Close all tabs except Instagram
      7. Click 'sign up' on Instagram
      8. Verify "Have an account? Log in" is displayed
      */
        //1...5 click steps
        await browser.url('https://www.facebook.com');

        await $('=Meta Pay').click();

        await $('=Meta Quest').click();

        await $('=Meta Store').click();

        await $('=Instagram').click();

        await browser.pause(5000)



        const allHandles = await browser.getWindowHandles();


        for (handle of allHandles) {
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if (title !== 'Instagram') {
                await browser.closeWindow();

            }
            
        }

        await browser.switchWindow("instagram.com")
        await browser.pause(4000);


        //7. Click 'sign up' on Instagram
        await $('//span[contains(text(),"Sign up")]').click();

        await browser.pause(4000);

        //8. Verify "Have an account? Log in" is displayed
        const haveAnAccountDisplay = await $('//p[contains(text(),"Have an account? ")]');

        const isHaveAnAccountDisplayed = await haveAnAccountDisplay.isDisplayed();

        expect(await isHaveAnAccountDisplayed, 'is NOT Displayed').to.be.true;

        await browser.pause(8000);



    })
})