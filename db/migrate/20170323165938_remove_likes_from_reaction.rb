class RemoveLikesFromReaction < ActiveRecord::Migration[5.0]
  def change
    change_column :reactions, :likes, :integer, :null => true
  end
end
