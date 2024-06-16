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
        $('//ra-header/div[1]/div[1]/nav[1]/ul[1]/li[2]/a[1]').moveTo();

        await browser.pause(4000);

         //3. Verify there are 4-options in Church Chairs
         const churchChairOptions = await $$('/html[1]/body[1]/div[4]/ra-header[1]/div[1]/div[1]/nav[1]/ul[1]/li[2]/ul[1]/div[1]/div[1]/div[1]/li[1]/a[1]//following-sibling::ul//li');
         
        expect(churchChairOptions.length , 'Number of Options are NOT as expected').to.equal(4);


    })

})

//I could not locate certain elements regarding the dropdown menu so i was forced to use abs xpath
//in order to complete the assignment. 