json.array!(@permissions) do |permission|
  json.extract! permission, :id, :content, :page, :right
  json.url permission_url(permission, format: :json)
end
