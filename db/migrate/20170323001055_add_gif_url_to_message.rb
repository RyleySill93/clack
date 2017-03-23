class AddGifUrlToMessage < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :gif_url, :string
  end
end
