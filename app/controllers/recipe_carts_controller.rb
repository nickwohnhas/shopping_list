class RecipeCartsController < ApplicationController
  before_action :authenticate_user!
  before_action :ensure_user_has_cart

  def all_items
    @items = RecipeCart.find_by(user: current_user).items
  end

private

  def ensure_user_has_cart
    unless current_user.recipe_cart
      RecipeCart.create! user: current_user
    end
  end
end