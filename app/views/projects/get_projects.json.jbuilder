json.array!(@proj) do |project|
  json.extract! project, :id, :title, :description, :owner, :start, :finish
  json.url project_url(project, format: :json)
end
