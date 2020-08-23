class ItemsController < ApplicationController
  before_action :authenticate_user!
  def new
    @group = Group.find(params[:group_id])
    @item = Item.new
  end

  def create
    group = Group.find(params[:group_id])
    @item = Item.new name: params[:item][:name], group: group, recipe_cart: current_user.recipe_cart

    if @item.save
      redirect_to group_path(group)
    else
      render :new
    end
  end
end