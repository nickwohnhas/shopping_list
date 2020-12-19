class CreateList < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.references :user, foreign_key: true
      t.string :name, required: true
    end
  end
end
