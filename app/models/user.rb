class User < ApplicationRecord
  has_one :fridge
  has_one :recipe_cart
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  after_create :assign_fridge

  def assign_fridge
    Fridge.create! user: self
  end
end
