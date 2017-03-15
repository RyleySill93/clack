class ChangeTypeName < ActiveRecord::Migration[5.0]
  def change
    rename_column :channels, :type, :kind
  end
end
