class FixColName < ActiveRecord::Migration
  def change
    rename_column :Buttons, :not, :must_not
  end
end
