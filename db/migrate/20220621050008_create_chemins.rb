class CreateChemins < ActiveRecord::Migration[7.0]
  def change
    create_table :chemins do |t|
      t.integer :chemin
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end
end
