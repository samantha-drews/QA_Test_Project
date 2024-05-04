Feature: The Login Page

  Scenario: As a user, I login when correct login credentials are entered
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I am directed to the product page

  Scenario: As a user, I do not login when incorrect login credentials are entered
    Given I am on the login page
    When I login with "not_real_user" and "invalid_password"
    Then I should see an error message saying "Epic sadface: Username and password do not match any user in this service"

  Scenario Outline: As a user, I see an appropriate error message when certain login credentials haven't are not entered
    Given I am on the login page
    When I login with "<username>" and "<password>"
    Then I should see an error message saying "<message>"
      Examples:
        | username       | password       | message                              |
        |                |                | Epic sadface: Username is required   |
        |                | secret_sauce   | Epic sadface: Username is required   |
        | standard_user  |                | Epic sadface: Password is required   |
