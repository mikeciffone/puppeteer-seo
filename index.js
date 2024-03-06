// index.js
const scrapeRobotsMetaTags = require('./scrapeMetaTags');

// Process command line arguments
const args = process.argv.slice(2); // Remove the first two default arguments

// Example command: node index.js scrapeMetaTags "http://example.com"
// Example command: node index.js anotherFunction

if (args.length === 0) {
    console.log("No function specified.");
    process.exit(1);
}

const functionName = args[0];
const url = args[1]; // Assuming the URL is the second argument for scrapeMetaTags

switch (functionName) {
    case 'scrapeMetaTags':
        if (!url) {
            console.log("URL must be provided for scraping meta tags.");
            process.exit(1);
        }
        scrapeRobotsMetaTags(url)
            .then(tags => console.log(tags))
            .catch(err => console.error('Error scraping robots meta tags:', err));
        break;
    default:
        console.log(`Function ${functionName} not recognized.`);
        process.exit(1);
}


