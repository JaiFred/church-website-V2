# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding Admin 🌱"

ad1 = Admin.create(name: "Charles", username: "CharlesDW", email: "CharlesDW@gmail.com")
# ad2 = Admin.create(name: "Martha", username: "MarthaWithers", password: "321Admin", email: "MarthaWithers@gmail.com")

puts "seeding Events 🌱"

# t.string "title"
# t.string "activity"
# t.text "description"
# t.string "location"
# t.datetime "starts"
# t.datetime "ends"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false

e1 = Event.create(title: "Morning Prayer", activity: "Regular Service", description: "", location: "Main Room", starts: "8/30/2022", ends: "8/30/2022")
e2 = Event.create(title: "Community Gardening", activity: "Community Service", description: "", location: "Reston", starts: "9/1/2022", ends: "9/1/2022")
e3 = Event.create(title: "Community Jungle Gym Fundraiser", activity: "Community Service", description: "", location: "Herndon", starts: "2/14/2022", ends: "10/25/2022")
e4 = Event.create(title: "Late Service", activity: "Regular Service", description: "", location: "Main Room", starts: "8/26/2022", ends: "8/26/2022")
e5 = Event.create(title: "Weekend Potluck", activity: "Outside Service", description: "", location: "Franklin Park", starts: "9/16/2022", ends: "9/16/2022")

puts "seeding EventLists 🌱"

# t.string "title"
# t.string "type"
# t.integer "admin_id", null: false
# t.integer "event_id", null: false

el1 = EventList.create(title: "Prayers", eventType: "General Service", admin_id: ad1.id, event_id: e1.id)

