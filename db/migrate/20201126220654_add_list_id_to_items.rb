class AddListIdToItems < ActiveRecord::Migration[6.0]
  def change
    add_reference :items, :list, null: true, foreign_key: true
  end
end
