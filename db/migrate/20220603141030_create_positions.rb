class CreatePositions < ActiveRecord::Migration[7.0]
  def change
    create_table :positions do |t|
      t.integer :x
      t.integer :y
      t.integer :distance
      t.integer :dx
      t.integer :dy

      t.timestamps
    end
  end
end
