class CreateButtons < ActiveRecord::Migration
  def change
    create_table :buttons do |t|
      t.string :content
      t.string :glyph
      t.string :must
      t.string :must_not

      t.timestamps
    end
  end
end
