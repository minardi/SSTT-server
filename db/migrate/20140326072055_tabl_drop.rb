class TablDrop < ActiveRecord::Migration
  def change
    drop_table :Buttons
  end
end
