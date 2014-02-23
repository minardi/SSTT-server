# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
projects = Project.create([
	{
		title: 'car', 
		description: 'Magazine'
	},
	{
		title: 'web', 
		description: 'WebApp'
	},
	{
		title: 'sport', 
		description: 'Training'
	}])

users = User.create([
	{
		first_name: 'new_user_1', 
		last_name: 'new_user_1'
	},
	{
		first_name: 'new_user_2', 
		last_name: 'new_user_2'
	},
	{
		first_name: 'Enzo', 
		last_name: 'Ferrary'
	}])

teams = Team.create([
	{
		project_id: 1
	},
	{
		project_id: 2
	},
	{
		project_id: 3
	}])

team_member = TeamMember.create([
	{
		user_id: 3,
		team_id: 1,
		role: 'watcher'
		},
	{
		user_id: 3,
		team_id: 2,
		role: 'watcher'
	},
	{
		user_id: 3,
		team_id: 3,
		role: 'dev'
	}])
	
stories = Story.create([
  {
    :title => "Project1.Sprintstory1",
    :description => "beatiful",
	:status => "Sprint",
	:project_id => "1",
	:sprint_id => "1"
  },
  {
    :title => "Project1.Productstory1",
    :description => "beatiful",
	:status => "Product",
	:project_id => "1",
	:sprint_id => "1"
  },
  {
    :title => "Project2.Productstory1",
    :description => "beatiful",
	:status => "Product",
	:project_id => "2",
	:sprint_id => "1"
  },
  {
    :title => "Project1.Productstory2",
    :description => "beatiful",
	:status => "Product",
	:project_id => "1",
	:sprint_id => "1"
  }])
