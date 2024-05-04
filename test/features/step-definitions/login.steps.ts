import { Given, When, Then } from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals'

Given('I am on the login page', () => {
    browser.url('https://www.saucedemo.com/');
});

When('I click the login button', () => {
    const loginButton = $('[data-test="login-button"]');
    loginButton.click();
});

When('I login with {string} and {string}', async (username: string, password: string) => {
    const usernameField = await $('#user-name');
    await usernameField.setValue(username);

    const passwordField = await $('#password');
    await passwordField.setValue(password);

    // Click login button
    const loginButton = await $('#login-button');
    await loginButton.click();
});

Then('I should see an error message saying {string}', async (expectedMessage) => {
    const errorMessageElement = await $('.error-message-container.error h3[data-test="error"]');
    const errorMessageText = await errorMessageElement.getText();
    expect(errorMessageText).toContain(expectedMessage);
});

Then('I am directed to the product page', async () => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('https://www.saucedemo.com/inventory.html');
});
