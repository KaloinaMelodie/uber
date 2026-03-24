class CreateTaxis < ActiveRecord::Migration[7.0]
  def change
    create_table :taxis do |t|
      t.string :numero
      t.integer :x
      t.integer :y
      t.integer :dx
      t.integer :dy
      t.integer :status

      t.timestamps
    end
  end
end
