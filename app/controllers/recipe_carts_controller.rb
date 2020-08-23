class RecipeCartsController < ApplicationController
  before_action :authenticate_user!

  def all_items
    @items = RecipeCart.find_by(user: current_user).items
  end
end