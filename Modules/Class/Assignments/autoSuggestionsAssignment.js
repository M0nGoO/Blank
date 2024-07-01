const { expect } = require("chai");

describe(' Autosuggestion scenario', () => {
    it('Verify user can select value from auto-suggestion', async  () => {
        /**
         * 1. Launch hotels.com
         * 2. Enter "new" in the destination
         * 3. Select "Newport Beach" from auto-suggestion         */

        //1.Launch facebook.com
        await browser.url('https://www.hotels.com');

        await browser.pause(4000);
        
         //2. Enter "new" in the destination
        await $('//button[@aria-label="Where to?"]').click();

        await browser.pause(4000);
        
        await $('#destination_form_field').setValue('newport');

        await browser.pause(4000);
        //3. Select "Newport Beach" from auto-suggestion
        const allSuggestions = await $$('//button[@data-stid="destination_form_field-result-item-button"]');

        for(const suggestion of allSuggestions) {
            const suggestionText = await suggestion.getAttribute('aria-label');
            if (suggestionText.startsWith('Newport Beach')) {
                await suggestion.click();
                break;

            }
        }
        
        await browser.pause(10000);
     })
 
 })
