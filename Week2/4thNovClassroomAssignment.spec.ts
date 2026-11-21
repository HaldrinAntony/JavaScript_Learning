import test, { chromium } from "@playwright/test"

test ("Test to launch a Browser", async({page})=>{

    //load the url
    await page.goto("https://login.salesforce.com/"); //await is used because the function had promise and we need  time to satisfy either of the conditons pending, fullfillment and rejected

    await page.waitForTimeout(5000) // 5 seconds timeout to view the web login page
})

// test ("Test to launch a Browser", async()=>{
//     let browser = await chromium.launch(); //creating a variable to store chrome browser actions

//     let context = await browser.newContext() ; // one browser can have multiple contexts

//     let page = await context.newPage(); // one context can have multiple page

//     await page.goto("https://login.salesforce.com/");

// }
// )