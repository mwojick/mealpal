require 'test_helper'

class Api::TreatsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_treats_index_url
    assert_response :success
  end

  test "should get search" do
    get api_treats_search_url
    assert_response :success
  end

end
