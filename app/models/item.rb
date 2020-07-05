class Item < ApplicationRecord
  belongs_to :group
  belongs_to :recipe_cart
  validates_presence_of :name
end
