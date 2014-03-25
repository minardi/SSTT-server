class CreateButtons < ActiveRecord::Migration
  def change
    create_table :buttons do |t|
      t.string :content
      t.string :glyph
      t.string :permittion

      t.timestamps
    end
  end
end
