Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can interact with the login page

    Given I am on the login page
    When I click the login button
    Then I should see an error message