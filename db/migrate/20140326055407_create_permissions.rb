class CreatePermissions < ActiveRecord::Migration
  def change
    create_table :permissions do |t|
      t.string :content
      t.string :page
      t.string :right

      t.timestamps
    end
  end
end
