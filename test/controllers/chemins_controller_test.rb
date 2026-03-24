require "test_helper"

class CheminsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @chemin = chemins(:one)
  end

  test "should get index" do
    get chemins_url
    assert_response :success
  end

  test "should get new" do
    get new_chemin_url
    assert_response :success
  end

  test "should create chemin" do
    assert_difference("Chemin.count") do
      post chemins_url, params: { chemin: { chemin: @chemin.chemin, x: @chemin.x, y: @chemin.y } }
    end

    assert_redirected_to chemin_url(Chemin.last)
  end

  test "should show chemin" do
    get chemin_url(@chemin)
    assert_response :success
  end

  test "should get edit" do
    get edit_chemin_url(@chemin)
    assert_response :success
  end

  test "should update chemin" do
    patch chemin_url(@chemin), params: { chemin: { chemin: @chemin.chemin, x: @chemin.x, y: @chemin.y } }
    assert_redirected_to chemin_url(@chemin)
  end

  test "should destroy chemin" do
    assert_difference("Chemin.count", -1) do
      delete chemin_url(@chemin)
    end

    assert_redirected_to chemins_url
  end
end
