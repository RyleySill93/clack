class CreateReactionRelationships < ActiveRecord::Migration[5.0]
  def change
    create_table :reaction_relationships do |t|
      t.timestamps
    end
  end
end
