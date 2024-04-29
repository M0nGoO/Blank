//1. Launch amazon.com
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe('Basic Functions of webDriverIO',() => {
    it('basic functions in action', async() => {
        await browser.url('https://www.amazon.com/');

        const pageTitle = await browser.getTitle();

    
    //2. Verify page title contains "Spend less.Smile more"
    expect(pageTitle.startsWith( 'Amazon.com. Spend less. Smile more'), 'Page title does not start with "Spend less.Smile more"').to.be.true;

    //3. Launch hotels.com
    await browser.url('https://www.hotels.com');

    const pageUrl = await browser.getUrl();

    //4.Verify curret url contains "hotels.com"
    expect(pageUrl.includes('hotels.com'), 'page does not include "hotels.com"').to.be.true;

    //5. Go back
    await browser.back();

    const pageUrl1 = await browser.getUrl();

    //6. Verify current url contains "amazon.com"
    expect(pageUrl1.includes('amazon.com'), 'page does not include "amazon.com"').to.be.true;

    //7. Go Forward
    await browser.forward();

    const pageTitle1 = await browser.getTitle();

    //8. Verify page title contains " Deals & Discounts for Hotel Reservations"
    expect(pageTitle1.startsWith( 'Hotels.com - Deals & Discounts for Hotel Reservations'), 'Page title does not start with "Deals & Discounts for Hotel Reservations"').to.be.true;


    })
})
cd