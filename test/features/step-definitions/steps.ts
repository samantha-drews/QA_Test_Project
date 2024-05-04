import { Given, When, Then } from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page';

// const pages = {
//     login: LoginPage
// }

Given('I am on the login page', () => {
    browser.url('https://the-internet.herokuapp.com/login');
});

When('I click the login button', () => {
    const loginButton = $('button[type="submit"]');
    loginButton.click();
});

Then('I should see an error message', () => {
    const successMessage = $('.flash.success');
    expect(successMessage).toBeDisplayed();
});

// // Given(/^I am on the (\w+) page$/, async (page) => {
// //     await pages[page].open()
// // });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

