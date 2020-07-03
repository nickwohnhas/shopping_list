class GroupsController < ApplicationController
  before_action :authenticate_user!
  def index
    @groups = Group.where(fridge: current_user.fridge)
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(name: params[:group][:name], fridge: current_user.fridge)
    if @group.save
      redirect_to groups_path
    else
      render :new
    end
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    @group.update(group_params)
    redirect_to groups_path
  end

private

  def group_params
    params.require(:group).permit(:name)
  end
end
