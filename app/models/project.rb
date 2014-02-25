class Project < ActiveRecord::Base
    has_many :teams
	has_many :stories
end
