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
		description: 'Magazine',
		start: '10.10.10',
		finish: '11.11.11',
		owner: 'A',
		pm: '1'
	},
	{
		title: 'web', 
		description: 'WebApp',
		start: '10.10.10',
		finish: '12.12.12',
		owner: 'B',
		pm: '2'
	},
	{
		title: 'sport', 
		description: 'Training',
		start: '13.13.13',
		finish: '14.14.14',
		owner: 'C',
		pm: '2'
	},
	{
		title: 'TaskManager', 
		description: 'Task Manager SoftServe',
		start: '10.02.14',
		finish: '10.03.14',
		owner: 'B',
		pm: '1'
	}])

users = User.create([
	{
		first_name: 'Enzo', 
		last_name: 'Ferrary',
		email: 'enzoferrary@i.ua',
		password: '12345678',
		password_confirmation: '12345678'
	},
	{
		first_name: 'Name', 
		last_name: 'Surname',
		email: 'surname@mail.ru',
		password: '11111111',
		password_confirmation: '11111111'
	}])
	# {
	# 	first_name: 'new_user', 
	# 	last_name: 'new_user',
	# 	email: 'new_user@i.ua',
	# 	password: '12345678',
	# 	password_confirmation: '12345678'
	# }])

teams = Team.create([
	{
		project_id: 1
	},
	{
		project_id: 2
	},
	{
		project_id: 3
	},
	{
	    project_id: 4
	}])

team_member = TeamMember.create([
	{
		user_id: 1,
		team_id: 1,
		role: 'watcher'
		},
	{
		user_id: 1,
		team_id: 2,
		role: 'watcher'
	},
	{
		user_id: 1,
		team_id: 3,
		role: 'dev'
	},
	{
		user_id: 2,
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

tasks = Task.create([
	{
		title: 'First task',
		description: 'task for 1 story',
		story_id: 1,        
        status: 'todo'
	},
	{
		title: 'Second task',
		description: 'task for 1 story',
		story_id: 1,       
        status: 'done'
	},
	{
		title: 'Third task',
		description: 'task for 1 story',
		story_id: 1,        
        status: 'in-progress'
	},
	{
		title: 'Fifth task',
		description: 'task for 2 story',
		story_id: 2,        
        status: 'done'
    },
    {
    	title: 'Sixth task',
		description: 'task for 3 story',
		story_id: 3,       
        status: 'in-progress'  
    }])

