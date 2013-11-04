require 'test_helper'

class MoviePagesControllerTest < ActionController::TestCase
  test "should get movies" do
    get :movies
    assert_response :success
  end

end
