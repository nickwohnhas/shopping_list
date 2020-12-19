class ListsController < ApplicationController
  before_action :authenticate_user!

  def new
    @list = List.new
  end

  def create
    list = List.new(name: params[:list][:name], user: current_user)
    items = RecipeCart.find_by(user: current_user).items
    list.items = items

    if list.save
      redirect_to list_path(list), notice: "Successfully created the list!"
    else
      redirect_to new_list_path, notice: "Failed to create list!"
    end
  end

  def index
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
  end
end