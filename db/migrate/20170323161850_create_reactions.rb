class CreateReactions < ActiveRecord::Migration[5.0]
  def change
    create_table :reactions do |t|
      t.integer :user_id, null: false
      t.integer :message_id, null: false
      t.string :image, null: false
      t.integer :likes, null: false
      t.timestamps
    end
  end
end
