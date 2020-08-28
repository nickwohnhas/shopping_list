class Item < ApplicationRecord
  belongs_to :group
  belongs_to :recipe_cart, optional: true
  validates_presence_of :name
end
