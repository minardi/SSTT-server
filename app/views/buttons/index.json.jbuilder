json.array!(@buttons) do |button|
  json.extract! button, :id, :content, :glyph, :permittion
  json.url button_url(button, format: :json)
end
