class CreateLists < ActiveRecord::Migration[7.0]
  def change
    create_table :lists do |t|
      t.integer :idtaxi
      t.integer :idclient

      t.timestamps
    end
  end
end
