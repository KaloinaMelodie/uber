require "application_system_test_case"

class WaysTest < ApplicationSystemTestCase
  setup do
    @way = ways(:one)
  end

  test "visiting the index" do
    visit ways_url
    assert_selector "h1", text: "Ways"
  end

  test "should create way" do
    visit ways_url
    click_on "New way"

    fill_in "Arrive", with: @way.arrive
    fill_in "Ax", with: @way.ax
    fill_in "Ay", with: @way.ay
    fill_in "Chemin", with: @way.chemin
    fill_in "Depart", with: @way.depart
    fill_in "Dx", with: @way.dx
    fill_in "Dy", with: @way.dy
    click_on "Create Way"

    assert_text "Way was successfully created"
    click_on "Back"
  end

  test "should update Way" do
    visit way_url(@way)
    click_on "Edit this way", match: :first

    fill_in "Arrive", with: @way.arrive
    fill_in "Ax", with: @way.ax
    fill_in "Ay", with: @way.ay
    fill_in "Chemin", with: @way.chemin
    fill_in "Depart", with: @way.depart
    fill_in "Dx", with: @way.dx
    fill_in "Dy", with: @way.dy
    click_on "Update Way"

    assert_text "Way was successfully updated"
    click_on "Back"
  end

  test "should destroy Way" do
    visit way_url(@way)
    click_on "Destroy this way", match: :first

    assert_text "Way was successfully destroyed"
  end
end
