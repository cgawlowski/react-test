# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.create(
  name: "Festival international de Jazz de Montreal",
  description: "Le Festival international de jazz de Montréal est un festival mettant en vedette des artistes et musiciens surtout issus du jazz, qui se déroule annuellement au mois de juillet à Montréal depuis 19801. Selon l'édition 2004 du Guinness World Records, il est l'un des plus importants festivals de jazz au monde en termes d'affluence.",
  start_date: Time.now,
  end_date: Time.now + 60
)

Event.create(
  name: "Festival MURAL",
  description: "Le Festival MURAL est un festival international annuel d'art urbain.
  Il a lieu en juin à Montréal, Québec, Canada. Inauguré en 2013, il vise à célébrer la démocratisation de l'art de rue à Montréal.",
  start_date: Time.now,
  end_date: Time.now + 60
)

Event.create(
  name: "Juste pour Rire",
  description: "Plus grand festival du genre, il invite des humoristes du monde entier.
  Il propose des spectacles d'humour en salles, des théâtres de rue et des parades, des projections de films humoristiques, des émissions de télévision et des tournées en région.",
  start_date: Time.now,
  end_date: Time.now + 60
)
