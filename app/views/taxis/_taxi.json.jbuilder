json.extract! taxi, :id, :numero, :x, :y,:dx,:dy,:status, :created_at, :updated_at
json.url taxi_url(taxi, format: :json)
