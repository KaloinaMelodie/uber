class CreateLogins < ActiveRecord::Migration[7.0]
  def change
    create_table :logins do |t|
      t.string :idclient

      t.timestamps
    end
  end
end
