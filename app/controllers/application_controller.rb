class ApplicationController < ActionController::Base
  before_action :cart_item_count
  def ensure_user_has_cart
    unless current_user.recipe_cart
      RecipeCart.create! user: current_user
    end
  end

  def cart_item_count
    begin
      @cart_count = current_user.recipe_cart.items.count
    rescue
      @cart_count =  0 
    end  
  end
end
