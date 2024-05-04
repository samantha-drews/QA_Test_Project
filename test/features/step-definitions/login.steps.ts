import { Given, When, Then } from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals'

Given('I am on the login page', () => {
    browser.url('https://www.saucedemo.com/');
});

When('I click the login button', () => {
    const loginButton = $('[data-test="login-button"]');
    loginButton.click();
});

Then('I should see an error message', async () => {
    const errorMessage = await $(`.error-message-container.error h3[data-test="error"]`);
    const errorMessageText = await errorMessage.getText();
    expect(errorMessageText).toContain('Epic sadface: Username is required');
});
