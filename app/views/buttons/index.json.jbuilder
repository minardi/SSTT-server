json.array!(@buttons) do |button|
  json.extract! button, :id, :content, :glyph, :must, :must_not
  json.url button_url(button, format: :json)
end
