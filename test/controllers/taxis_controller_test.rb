require "test_helper"

class TaxisControllerTest < ActionDispatch::IntegrationTest
  setup do
    @taxi = taxis(:one)
  end

  test "should get index" do
    get taxis_url
    assert_response :success
  end

  test "should get new" do
    get new_taxi_url
    assert_response :success
  end

  test "should create taxi" do
    assert_difference("Taxi.count") do
      post taxis_url, params: { taxi: { numero: @taxi.numero, x: @taxi.x, y: @taxi.y } }
    end

    assert_redirected_to taxi_url(Taxi.last)
  end

  test "should show taxi" do
    get taxi_url(@taxi)
    assert_response :success
  end

  test "should get edit" do
    get edit_taxi_url(@taxi)
    assert_response :success
  end

  test "should update taxi" do
    patch taxi_url(@taxi), params: { taxi: { numero: @taxi.numero, x: @taxi.x, y: @taxi.y } }
    assert_redirected_to taxi_url(@taxi)
  end

  test "should destroy taxi" do
    assert_difference("Taxi.count", -1) do
      delete taxi_url(@taxi)
    end

    assert_redirected_to taxis_url
  end
end
