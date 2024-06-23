const { expect } = require("chai");

describe('Multiple Elements Assignment', () =>{
    it('Verify there are more than 40 links on the facebook.com', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Verify number of links is more than 40
         * 
         */

        //1.Launch facebook.com
        await browser.url('https://www.facebook.com');
        await browser.pause(4000);

        //2. Verify number of links is more than 40
        const allLinks = await $$('<a>');
        expect(allLinks.length > 40, 'Number of links are NOT as expected').to.be.true;
    })


    it.only('Verify number of options in Church Chairs is equals to 4', async () => {
         /**
         * 1. Launch https://classroomessentialsonline.com/  
            2. Move mouse to Church Chairs
             3. Verify there are 4-options in Church Chairs
         * 
         */

        //1.Launch classroomessentialsonline.com
        await browser.url('https://classroomessentialsonline.com/');
        await browser.pause(4000);

        //2.Move mouse to Church Chairs
        var optionLocatorsStart = '//li[starts-with(@class, "header__navigation-item")]/a[contains(text(), "Church'
        var optionLocatorEnd = '")]'
        //var optionName = Church;
        $(optionLocatorsStart+optionLocatorEnd).moveTo();

        await browser.pause(4000);

         //3. Verify there are 4-options in Church Chairs
         const churchChairOptions = await $$('(//li[starts-with(@class, "header__navigation-item")]/a[contains(text(), "Church")]/following-sibling::ul//li)[1]//a[not(contains(@class, "text-base"))]');
         
        expect(churchChairOptions.length , 'Number of Options are NOT as expected').to.equal(4);


    })

})

//I could not locate certain elements regarding the dropdown menu so i was forced to use abs xpath
//in order to complete the assignment. 