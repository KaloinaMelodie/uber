require "application_system_test_case"

class TaxisTest < ApplicationSystemTestCase
  setup do
    @taxi = taxis(:one)
  end

  test "visiting the index" do
    visit taxis_url
    assert_selector "h1", text: "Taxis"
  end

  test "should create taxi" do
    visit taxis_url
    click_on "New taxi"

    fill_in "Numero", with: @taxi.numero
    fill_in "X", with: @taxi.x
    fill_in "Y", with: @taxi.y
    click_on "Create Taxi"

    assert_text "Taxi was successfully created"
    click_on "Back"
  end

  test "should update Taxi" do
    visit taxi_url(@taxi)
    click_on "Edit this taxi", match: :first

    fill_in "Numero", with: @taxi.numero
    fill_in "X", with: @taxi.x
    fill_in "Y", with: @taxi.y
    click_on "Update Taxi"

    assert_text "Taxi was successfully updated"
    click_on "Back"
  end

  test "should destroy Taxi" do
    visit taxi_url(@taxi)
    click_on "Destroy this taxi", match: :first

    assert_text "Taxi was successfully destroyed"
  end
end
