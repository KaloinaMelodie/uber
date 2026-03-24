class CreateIdchemins < ActiveRecord::Migration[7.0]
  def change
    create_table :idchemins do |t|
      t.string :idchem

      t.timestamps
    end
  end
end
