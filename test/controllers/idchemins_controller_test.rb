require "test_helper"

class IdcheminsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @idchemin = idchemins(:one)
  end

  test "should get index" do
    get idchemins_url
    assert_response :success
  end

  test "should get new" do
    get new_idchemin_url
    assert_response :success
  end

  test "should create idchemin" do
    assert_difference("Idchemin.count") do
      post idchemins_url, params: { idchemin: { idchem: @idchemin.idchem } }
    end

    assert_redirected_to idchemin_url(Idchemin.last)
  end

  test "should show idchemin" do
    get idchemin_url(@idchemin)
    assert_response :success
  end

  test "should get edit" do
    get edit_idchemin_url(@idchemin)
    assert_response :success
  end

  test "should update idchemin" do
    patch idchemin_url(@idchemin), params: { idchemin: { idchem: @idchemin.idchem } }
    assert_redirected_to idchemin_url(@idchemin)
  end

  test "should destroy idchemin" do
    assert_difference("Idchemin.count", -1) do
      delete idchemin_url(@idchemin)
    end

    assert_redirected_to idchemins_url
  end
end
