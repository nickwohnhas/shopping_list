class ApplicationController < ActionController::Base

  def ensure_user_has_cart
    unless current_user.recipe_cart
      RecipeCart.create! user: current_user
    end
  end
end
