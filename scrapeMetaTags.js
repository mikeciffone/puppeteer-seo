// scrapeMetaTags.js
/*const puppeteer = require('puppeteer');

async function scrapeRobotsMetaTags(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const robotsMetaTags = await page.evaluate(() => {
        const tags = [];
        const metaTags = document.querySelectorAll('meta[name="robots"], meta[name="ROBOTS"]');
        const titleTag = document.querySelectorAll('title');
        metaTags.forEach(tag => {
            tags.push({name: tag.getAttribute('name'), content: tag.getAttribute('content')});
        });
        return tags;
    });

    await browser.close();
    return robotsMetaTags;
}*/

const puppeteer = require('puppeteer');

async function scrapePageDetails(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const pageDetails = await page.evaluate(() => {
        const details = {};

        // Get the title tag
        const titleTag = document.querySelector('title');
        details.title = titleTag ? titleTag.innerText : '';

        // Get the meta description
        const metaDescriptionTag = document.querySelector('meta[name="description"]');
        details.metaDescription = metaDescriptionTag ? metaDescriptionTag.getAttribute('content') : '';

        // Get robots meta tags
        const robotsMetaTags = [];
        const metaTags = document.querySelectorAll('meta[name="robots"], meta[name="ROBOTS"]');
        metaTags.forEach(tag => {
            robotsMetaTags.push({name: tag.getAttribute('name'), content: tag.getAttribute('content')});
        });
        details.robotsMetaTags = robotsMetaTags;

        return details;
    });

    await browser.close();
    return pageDetails;
}

module.exports = scrapePageDetails;

