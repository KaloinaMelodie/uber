# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_21_105511) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chemins", force: :cascade do |t|
    t.integer "chemin"
    t.integer "x"
    t.integer "y"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "idchemins", force: :cascade do |t|
    t.string "idchem"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lists", force: :cascade do |t|
    t.integer "idtaxi"
    t.integer "idclient"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "logins", force: :cascade do |t|
    t.string "idclient"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "positions", force: :cascade do |t|
    t.integer "x"
    t.integer "y"
    t.integer "distance"
    t.integer "dx"
    t.integer "dy"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "taxis", force: :cascade do |t|
    t.string "numero"
    t.integer "x"
    t.integer "y"
    t.integer "dx"
    t.integer "dy"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ways", force: :cascade do |t|
    t.string "depart"
    t.string "arrive"
    t.integer "chemin"
    t.integer "dx"
    t.integer "dy"
    t.integer "ax"
    t.integer "ay"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
