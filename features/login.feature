@regression
Feature: Test Login Fungsionality

  @positiveLogin @LoginScenario
  Scenario: User can login using valid credentials
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page

  @negativeLogin @LoginScenario
  Scenario: User login with various invalid inputs
    Given I open the Kasir Aja website
    When I attempt to login with "<email>" and "<password>"
    Then I should see an error message "<message>"

    Examples:
      | email                 | password             | message                            |
      | emailtoko@gmail.com   | password             | Kredensial yang Anda berikan salah |
      | emailtoko@gmail.co.id | passwordtoko         | Kredensial yang Anda berikan salah |
      | emailtokogmail.com    | passwordtoko         | "email" must be a valid email      |
      | emailtoko@gmail.co.id | tokopassword         | Kredensial yang Anda berikan salah |

