@regression
Feature: Pengguna Page functionality
  
    @addPengguna @penggunaScenario @smoke
    Scenario Outline: User can add new user
        Given I open the Kasir Aja website
        When I login with valid credentials
        Then I should see the Dashboard Page
        When I click on the Pengguna Tab
        Then I should see the Pengguna Page
        When I click the Tambah button
        Then I shoul see the Pengguna Create Page
        When I input a "<name>", "<email>" and "<password>" for the new User
        And I Click Save Button
        Then I should see the new "<name>" user in the list

    Examples:
    | name      | email                    | password          |
    | pengguna1 | emailpengguna1@gmail.com | passwordpengguna1 |

    @addPenggunaFaill @penggunaScenario @smoke
    Scenario Outline: User add pengguna with blank nama
        Given I open the Kasir Aja website
        When I login with valid credentials
        Then I should see the Dashboard Page
        When I click on the Pengguna Tab
        Then I should see the Pengguna Page
        When I click the Tambah button
        Then I shoul see the Pengguna Create Page
        And I Click Save Button
        Then I should see an error message pengguna "<message>"

    Examples:
      | message                            |
      | "name" is not allowed to be empty  |


    @updatePengguna @penggunaScenario
    Scenario Outline: User can update data userS
        Given I open the Kasir Aja website
        When I login with valid credentials
        Then I should see the Dashboard Page
        When I click on the Pengguna Tab
        Then I should see the Pengguna Page
        When I click option Espisilis button on user <old_user>
        Then I should see submenu
        When I clik ubah button on user <old_user>
        Then I should See Update User Page
        When I input a new "<new_name>", "<new_email>" and "<new_password>"
        And I Click Save Button
        Then I should see the update <new_name> user in the list

    Examples:
      | new_name        | new_email                 | new_password      | old_user  |
      | pengguna1update | pengguna1update@gmail.com | updatepengguna1   | pengguna1 |

    @deletePengguna @penggunaScenario
    Scenario Outline: User can delete existing user
        Given I open the Kasir Aja website
        When I login with valid credentials
        Then I should see the Dashboard Page
        When I click on the Pengguna Tab
        Then I should see the Pengguna Page
        When I click option Espisilis button on user <delete_user>
        Then I should see submenu
        When I Click hapus button on user <delete_user>
        Then I should See Pop Up verification
        When I click Delete Button
        Then I should see the <delete_user> user was deleted

    Examples:
    | delete_user     |
    | pengguna1update |