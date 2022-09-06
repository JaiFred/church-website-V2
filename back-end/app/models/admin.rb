class Admin < ApplicationRecord
    has_many :eventLists
    has_many :event, through: :eventLists
end
