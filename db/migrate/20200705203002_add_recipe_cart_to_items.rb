class AddRecipeCartToItems < ActiveRecord::Migration[6.0]
  def change
    add_reference :items, :recipe_cart, null: true, foreign_key: true
  end
end
