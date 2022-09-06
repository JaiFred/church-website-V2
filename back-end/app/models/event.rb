class Event < ApplicationRecord
    has_many :eventLists
    has_many :admins, through: :eventLists
end
