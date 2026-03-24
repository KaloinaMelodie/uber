require "application_system_test_case"

class IdcheminsTest < ApplicationSystemTestCase
  setup do
    @idchemin = idchemins(:one)
  end

  test "visiting the index" do
    visit idchemins_url
    assert_selector "h1", text: "Idchemins"
  end

  test "should create idchemin" do
    visit idchemins_url
    click_on "New idchemin"

    fill_in "Idchem", with: @idchemin.idchem
    click_on "Create Idchemin"

    assert_text "Idchemin was successfully created"
    click_on "Back"
  end

  test "should update Idchemin" do
    visit idchemin_url(@idchemin)
    click_on "Edit this idchemin", match: :first

    fill_in "Idchem", with: @idchemin.idchem
    click_on "Update Idchemin"

    assert_text "Idchemin was successfully updated"
    click_on "Back"
  end

  test "should destroy Idchemin" do
    visit idchemin_url(@idchemin)
    click_on "Destroy this idchemin", match: :first

    assert_text "Idchemin was successfully destroyed"
  end
end
