Feature: Logout

# NOTE: These scenarios are excluded from the run as they have no step definitions written yet. 
# TODO: 1) Write the corresponding step definitions in /step-definitions/logout.steps.ts
#       2) Update wdio.conf.ts to enable this feature file to run (uncomment line 27)

  Scenario Outline: As a logged in user, I am able to log out from any page
    Given I am a logged in user on the "<webpage>"
    When I click the logout button
    Then I should be redirected to the login page
    And I should no longer be able to access the Cart Page
      Examples:
        | webpage                  |
        | Product List Page        |
        | About Page               |
        | Cart Page                |
        | Checkout Step One Page   |
        | Checkout Step Two Page   |
        | Checkout Complete Page   |
