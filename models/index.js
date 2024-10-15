const mongoose = require('mongoose')
const cuisineSchema = require('./cuisine')
const directionSchema = require('./direction')
const recipeSchema = require('./recipe')

const Cuisine = mongoose.model('Cuisine', cuisineSchema)
const Direction = mongoose.model('Direction', directionSchema)
const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = {
    Cuisine, 
    Direction,
    Recipe
}