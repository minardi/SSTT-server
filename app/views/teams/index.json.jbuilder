json.array!(@teams) do |team|
  json.extract! team, :id, :title, :description, :project_id
  json.url team_url(team, format: :json)
end
