class CreateWays < ActiveRecord::Migration[7.0]
  def change
    create_table :ways do |t|
      t.string :depart
      t.string :arrive
      t.integer :chemin
      t.integer :dx
      t.integer :dy
      t.integer :ax
      t.integer :ay

      t.timestamps
    end
  end
end
