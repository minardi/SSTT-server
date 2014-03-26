class MyEmpty < ActiveRecord::Migration
  def up
    drop_table :buttons
  end
  
  def down
    ActiveRecord:: IrreversibleMigration
  end
end
