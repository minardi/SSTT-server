class DelTables < ActiveRecord::Migration
  def change
    drop_table :buttons
    drop_table :permissions
  end
end
