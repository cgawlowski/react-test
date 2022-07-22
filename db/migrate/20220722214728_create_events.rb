class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name, limit: 32
      t.string :description
      t.timestamp :start_date
      t.timestamp :end_date

      t.timestamps
    end
  end
end
