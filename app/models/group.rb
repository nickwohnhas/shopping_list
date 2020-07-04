class Group < ApplicationRecord
  belongs_to :fridge
  has_many :items
end
