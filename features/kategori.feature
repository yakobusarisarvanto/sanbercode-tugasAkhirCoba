@regression
Feature: Kategori Page functionality
  
  @addKategori @kategoriScenario
  Scenario: User can add new kategori
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page
    When I click on the Kategori Tab
    Then I should see the Kategori Page
    When I click the Tambah button
    Then I shoul see the Kategori Create Page
    When I input a "<name>" and "<description>" for the new Kategori
    And I Click Save Button
    Then I should see the new "<name>" kategori in the list

    Examples:
      | name              | description       |
      | peralatan makan   | satuan satu lusin |

  @addKategoriFaill @kategoriScenario
  Scenario: User add category with blank nama
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page
    When I click on the Kategori Tab
    Then I should see the Kategori Page
    When I click the Tambah button
    Then I shoul see the Kategori Create Page
    And I Click Save Button
    Then I should see an error message kategori "<message>"
    
    Examples:
      | message                            |
      | "name" is not allowed to be empty  |

  @updateKategori @kategoriScenario
  Scenario: User can update kategori
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page
    When I click on the Kategori Tab
    Then I should see the Kategori Page
    When I click option Espisilis button on kategori <old_name>
    Then I should see submenu
    When I clik ubah button on kategori <old_name>
    Then I should See Update Kategori Page
    When I input a new "<new_name>" and "<new_description>"
    And I Click Save Button
    Then I should see the update <new_name> kategori in the list

    Examples:
      | new_name   | new_description        | old_name          |
      | aksesoris  | satuan satu pcs        | peralatan makan   |
  
  @deleteKategori @kategoriScenario
  Scenario: User can delete Kategori
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page
    When I click on the Kategori Tab
    Then I should see the Kategori Page
    When I click option Espisilis button on kategori <delete_name>
    Then I should see submenu
    When I Click hapus button on kategori <delete_name>
    Then I should See Pop Up verification
    When I click Delete Button
    Then I should see the <delete> kategori was deleted

    Examples:
    | delete_name |
    | aksesoris   |