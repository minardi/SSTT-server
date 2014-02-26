json.array!(@teams) do |team|
  json.extract! team, :id, :project_id
  json.url team_url(team, format: :json)
end
