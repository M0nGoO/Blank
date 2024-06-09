const { expect } = require("chai");
const moment = require("moment");

describe(' Xpath locator strategy', () => {
    it.only('Verify the current date is select by default in Sign Up dropdown', async  () => {
        /**
         * 1. Launch facebook.com
         * 2. Click on Create New Account button
         * 3. Verify current date is displayed in the birthdate dropdowns.
         */

        //1.Launch facebook.com
        await browser.url('https://www.facebook.com');

        await browser.pause(4000);
        
         //2. Click on Create New Account button
        const newAccBtn = await $('//a[@data-testid="open-registration-form-button"]');
        await newAccBtn.click()

        //3. Verify current date is displayed in the birthdate dropdowns.
        /*
          find the locator of month-option where seelcted=1
          using the locator find webElement
          find the text of webElement (Jun)

          
        */

          await browser.pause(4000);

        var currentMonth = moment().format('MMM');

        const selectedMonthElement = await $('//select[@id="month"]//option[@selected]');
        const selectedMonthOnWeb = await selectedMonthElement.getText();
        expect ( selectedMonthOnWeb, "Current month is not selected in Fb Sign Up form").to.equals(currentMonth)
        
        
      await browser.pause(4000);
      const currentDay = moment().format('D')

      const selectedDayElement = await $('//select[@id="day"]//option[@selected]');
      const selectedDayOnWeb = await selectedDayElement.getText();
      expect ( selectedDayOnWeb, "Current Day is not selected in Fb Sign Up form").to.equals(currentDay)
      
      
    await browser.pause(4000);


    const currentYear = moment().format('YYYY')

    const selectedYearElement = await $('//select[@id="year"]//option[@selected]');
    const selectedYearOnWeb = await selectedYearElement.getText();
    expect ( selectedYearOnWeb, "Current Year is not selected in Fb Sign Up form").to.equals(currentYear)
    

     })
 
 })


 it.only('Verify the current date is select by default in Sign Up dropdown', async () => {

  /**  1. Launch hotels.com 
      2. Make Adults=4 in Room-1
      3. Click Add another room
      4. Make Adults=3 in Room-2
      5. Click on Done button
      6. Verify total-travalers is equals to the number of adults mentioned in rooms */

      //1. Launch hotels.com 
    await browser.url('https://www.hotels.com');

    await browser.pause(4000);

    //2. Make Adults=4 in Room-1

    const roomPickerBtn = await $('//button[@data-stid="open-room-picker"]');
    await roomPickerBtn.click();
    await browser.pause(4000);

    const increaseAdultTravelers = await $('//input[@id="traveler_selector_adult_step_input-0"]//following-sibling::button');
    await increaseAdultTravelers.click()
    await increaseAdultTravelers.click();
    await browser.pause(4000);

    //3. Click Add another room

    const addAnotherRoomBtn = await $('//button[@id="traveler_selector_add_room"]');
    await addAnotherRoomBtn.click();
    await browser.pause(4000);

    //4. Make Adults=3 in Room-2
    const increaseAdultsRoom2 = await $('//input[@id="traveler_selector_adult_step_input-1"]//following-sibling::button');
    await increaseAdultsRoom2.click();
    await increaseAdultsRoom2.click();
    await browser.pause(4000);

    //5. Click on Done button
    const doneBtn = await $('//button[@id="traveler_selector_done_button"]');
    await doneBtn.click();
    await browser.pause(4000);
    //6. Verify total-travalers is equals to the number of adults mentioned in rooms */

    //Have to discuss during session!!






  






 })