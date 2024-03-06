# Puppeteer SEO

An ongoing collection of Puppeteer functions that can be run from a terminal/shell to quickly and easily scrape pages for relevant SEO data.

![](/img/puppeteer-seo.webp)

## How it works

macOS

`brew install node`

Linux

`apt-get install nodejs npm`

`yum install nodejs npm`

Windows

`choco install nodejs`

Pull this repository and navigate to the directory you pulled it to from your terminal/shell. The only dependency is Puppeteer.

`npm install`

Now you have it.

## Usage

So far I have functions set up to get a Title Tag, Meta Description, and/or any Robots Meta tags that exist on the page.

Creating new functions can be done with Chat GPT easily even if you don't know JavaScript

- Copy a link of your choice
- Look for the function you want to run (these are your individual tools)
- To run a function on a given URL structure your command like so:

`node index.js [ function name ] [ URL ]`

eg., `node index.js scrapeMetaTags "Post URL"`
