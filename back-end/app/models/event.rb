class Event < ApplicationRecord
    has_many :eventlists
    has_many :admins, through: :eventlists
end
