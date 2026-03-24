require "application_system_test_case"

class CheminsTest < ApplicationSystemTestCase
  setup do
    @chemin = chemins(:one)
  end

  test "visiting the index" do
    visit chemins_url
    assert_selector "h1", text: "Chemins"
  end

  test "should create chemin" do
    visit chemins_url
    click_on "New chemin"

    fill_in "Chemin", with: @chemin.chemin
    fill_in "X", with: @chemin.x
    fill_in "Y", with: @chemin.y
    click_on "Create Chemin"

    assert_text "Chemin was successfully created"
    click_on "Back"
  end

  test "should update Chemin" do
    visit chemin_url(@chemin)
    click_on "Edit this chemin", match: :first

    fill_in "Chemin", with: @chemin.chemin
    fill_in "X", with: @chemin.x
    fill_in "Y", with: @chemin.y
    click_on "Update Chemin"

    assert_text "Chemin was successfully updated"
    click_on "Back"
  end

  test "should destroy Chemin" do
    visit chemin_url(@chemin)
    click_on "Destroy this chemin", match: :first

    assert_text "Chemin was successfully destroyed"
  end
end
