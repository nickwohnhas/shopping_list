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

  def recipes
  end

  def ingredients
    response = Faraday.get "https://api.spoonacular.com/recipes/#{params[:recipe_cart][:id]}/ingredientWidget.json?apiKey=#{ENV["SPOONTACULAR_API_KEY"]}"
    json = JSON.parse(response.body)
    render json: json
  end

  def search_recipes
    response = Faraday.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=#{ENV["SPOONTACULAR_API_KEY"]}&query=#{params[:name]}")
    json = JSON.parse(response.body)
    render json: json
  end

  def remove_item
    food_items = Item.where(recipe_cart: current_user.recipe_cart).where.not(id: params[:id])
    current_user.recipe_cart.items = food_items
    if current_user.recipe_cart.save
      redirect_to recipe_cart_all_items_path, notice: "Item has been removed."
    else
      redirect_to recipe_cart_all_items_path, notice: "Failed to remove item"
    end
  end
end
