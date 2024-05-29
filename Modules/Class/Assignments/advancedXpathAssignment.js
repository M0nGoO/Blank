//TC-1: Verify current temp is less than or equals to feel-like temp
const { expect } = require("chai");

describe(' Xpath locator strategy', () => {
    it('Verify current tem is less than or equals to feel-like temp', async  () => {
        /**
         * 1. Launch accuweather.com
         * 2. Verify current-temp is in between 45 and 55
         */

        //1.Launch facebook.com
        await browser.url('https://www.accuweather.com');

        await browser.pause(4000);
        
         //4. Verify Male gender is selected
        const currentTempElement = await $('//*[@class="recent-location-temp"]');
        const currentTempValue = await currentTempElement.getText();    // String (" 78° ") -> "78" -> 78
        const currentTempNumber = parseInt(currentTempValue.trim().replace("°", ""))
        /*
          age > 18 and age < 50
        */
        const result = currentTempNumber > 45 && currentTempNumber < 85
        expect (result,'Current temp value is NOT in between the desired range').to.be.true;
     })
 
 })

 //TC-2: Verify error on empty login flow
    it.only('Verify error on empty login flow', async () => {
    /**
      1. Launch https:www.facebook.com/
      2. Click 'Log In' button
      3. Verify error msg is displayed */

      //1. Launch https:www.facebook.com/

        await browser.url('https://www.facebook.com');
        await browser.pause(4000);

        //2. Click 'Log In' button
        const loginBtn= await $('//button[@data-testid="royal_login_button"]');
        await loginBtn.click();
        await browser.pause(4000);

        const errorMsg = await $('//img[@src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/O287_AcFyg4.png"]');
        await errorMsg.isDisplayed()
    

    })

    //TC-3: Verify the empty messenger login flow
    it.only('Verify error on empty login flow', async () => {
        /**
        1. Launch https:www.facebook.com/
        2. Click on 'Messenger' link
        3. Verify 'Keep me signed in' checkbox is NOT selected
        4. Click 'Log In' button
        5. Verify link -> "Find your account and log in" is displayed
        6. Verify 'Continue' button is enabled
        7. Verify 'Keep me signed in' checkbox is NOT selected
        8. Click 'Keep me signed in' checkbox
        9. Verify 'Keep me signed in' checkbox is selected */
    
          //1. Launch https:www.facebook.com/
    
            await browser.url('https://www.facebook.com');
            await browser.pause(4000);
    
            //2. Click 'Messenger' button
            const MsnBtn= await $('//a[@href="https://messenger.com/"]');
            await MsnBtn.click();
            await browser.pause(4000);

            //3. Verify 'Keep me signed in' checkbox is NOT selected
    
            // const keepMeSignedInCheckBox = await $('//label[text()="Keep me signed in"]/preceding::label');  // isBtnSelected is storing a webElement
            const keepMeSignedInCheckBox = await $('//input[@type="checkbox"]');
            const isBtnSelected = await keepMeSignedInCheckBox.isSelected();
            expect (isBtnSelected, 'Button is selected').to.be.false    // isBtnSelected (boolean) is equals to false
            await browser.pause(4000);

             //4. Click 'Log In' button

            const logInBtn= await $('//button[@id="loginbutton"]');
            await logInBtn.click();
             await browser.pause(4000);
        
             // 5. Verify link -> "Find your account and log in" is displayed
             const findYourAccBtn = await $('//a[text()="Find your account and log in."]');
             await findYourAccBtn.isDisplayed();
            

             //6. Verify 'Continue' button is enabled
             const continueBtn = await $('//button[@id="loginbutton"]');
             await continueBtn.isEnabled();
            

            //7. Verify 'Keep me signed in' checkbox is NOT selected
            const boxSignIn = await $('//input[@name="persistent"]');
            await boxSignIn.isDisplayed()
            await browser.pause(4000);
            

            //8. Click 'Keep me signed in' checkbox
            const clickBoxKeepMeSignIn = await $('//input[@name="persistent"]//following-sibling::span');
            await clickBoxKeepMeSignIn.click()
            await browser.pause(4000);

            //9. Verify 'Keep me signed in' checkbox is selected

            const SignedInCheckBox = await $('//input[@type="checkbox"]');
            const selectBox = await SignedInCheckBox.isSelected();
            expect (selectBox, 'Button is NOT selected').to.be.true    // isBtnSelected (boolean) is equals to false
            await browser.pause(4000);

        })