require "test_helper"

class VnearControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get vnear_new_url
    assert_response :success
  end

  test "should get create" do
    get vnear_create_url
    assert_response :success
  end

  test "should get vnear" do
    get vnear_vnear_url
    assert_response :success
  end
end
