class User < ActiveRecord::Base
    has_many :team_members
end
