// Choose any web application and explore its DOM using the browser Developer Tools. Identify different
// types of web elements and use Playwright's built-in locators to locate those elements. The focus of this
// assignment is on understanding the DOM and practicing locator usage. Assertions and result validations
// are not required.
// REQUIREMENTS
// 1. Create a Playwright TypeScript test and open the selected web application.
// 2. Inspect the application's DOM using Developer Tools.
// 3. Identify different elements such as buttons(☑️), links(☑️), text(☑️), textboxes(☑️), checkboxes(☑️), radio buttons(☑️), labels(☑️),
// images, and elements having title or data-testid attributes.
// 4. Use the appropriate Playwright built-in locator for each identified element.
// 5. Perform simple interactions wherever applicable, such as click, fill, check, uncheck, or selectOption.
// 6. Use at least one example for each of the following built-in locators: getByRole(☑️),getByText(☑️),getByLabel(☑️), getByPlaceholder(☑️), getByAltText(☑️), getByTitle(❌), and getByTestId(☑️).
// 7. Do not use assertions for this assignment.
// 8. Do not use page.waitForTimeout().
// 9. Avoid XPath and CSS selectors when a suitable built-in locator is available.

import test from "@playwright/test"

test("Test explore the DOM page", async({page})=>{
    //Load the url
    await page.goto("https://qapracticehub.com/");

    //Navigating to Form 
    await page.getByText("Forms",{exact:true}).click();

    //identify the element - textbox || Username -  getByRole
    await page.getByRole("textbox",{name:"Username"}).fill("tester");

    //identify the element - textbox || Password - getByLabel
    await page.getByLabel("Password",{exact:true}).fill("password123");

    //identify the element - button || Login button -  getByRole
    await page.getByRole("button",{name:"Login"}).click();
    
    //Navigating to Inputs 
    await page.getByText("Inputs",{exact:true}).click();

    //identify the element - textbox ||  getByPlaceholder()
    await page.getByPlaceholder("Enter your name").fill("LeafName");

    //identify the element - textbox || getByTestId 
    await page.getByTestId("email-input").fill("newNat@leaf.com");

    //Navigating to Selection 
    await page.getByText("Selection",{exact:true}).click();

    //identify the element - radio button || getByText 
    await page.getByText("Male",{exact:true}).click();

    //identify the element - checkboxes || getByRole 
    await page.getByRole("checkbox",{name:"Playwright"}).click();

    //Navigating to Changing Attributes 
    await page.getByTestId("nav-changing-attrs").click();

    //identify the element - link || getByRole 
    await page.getByRole("link",{name:"Open dynamic ticket"}).click();

     //Navigating to Shopping 
    await page.getByText("Shopping",{exact:true}).click();

    //identify the element - alttext || getByAltText 
    await page.getByAltText("Wireless Headphones").click();
    

    //getByTitle // Title is available but with dynamic number and so it kept changing

})