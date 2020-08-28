class RecipeCartsController < ApplicationController
  before_action :authenticate_user!

  def all_items
    @items = RecipeCart.find_by(user: current_user).items
  end

  def add_items
    group = Group.find(params[:group_id])
    items = Item.where(id: params[:group][:item_ids])
    current_user.recipe_cart.items << items
     if current_user.recipe_cart.save
        redirect_to group_path(group), notice: "Successfully added items to cart!"
     else
      redirect_to group_path(group), notice: "Failed to add items"
     end
  end

  def get_recipes
    food_items = Item.where(recipe_cart: current_user.recipe_cart).pluck(:name).join(",")
    response = Faraday.get "https://api.spoonacular.com/recipes/findByIngredients?apiKey=#{ENV["SPOONTACULAR_API_KEY"]}&ingredients=#{food_items}"
    @items = JSON.parse(response.body)
  end
end