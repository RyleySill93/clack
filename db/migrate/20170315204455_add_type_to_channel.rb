class AddTypeToChannel < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :type, :string, null: false
  end
end
