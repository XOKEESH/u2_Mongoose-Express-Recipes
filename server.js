const express = require ('express')
const db = require('./db')
const cuisineController = require('./controllers/cuisineController')
const directionsController = require('./controllers/directionsController')
const recipeController = require('./controllers/recipeController')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')


const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`express server running on ${PORT}`)
})

app.get ('/', (req,res) => {
    res.send("Express Recipes!")
})

app.get('/cuisine', cuisineController.getAllCuisines)
app.get('/cuisine/:id', cuisineController.getCuisineById)
app.post('/cuisine', cuisineController.createCuisine)
app.put('/cuisine/:id', cuisineController.updateCuisine)
app.delete('/cuisine/:id', cuisineController.deleteCuisine)

app.get('/direction', directionsController.getAllDirections)
app.get('/direction/:id', directionsController.getDirectionsById)
app.post('/direction', directionsController.createDirections)
app.put('/direction/:id', directionsController.updateDirections)
app.delete('/direction/:id', directionsController.deleteDirections)

app.get('/recipe', recipeController.getAllRecipes)
app.get('/recipe/:id', recipeController.getRecipesById)
app.post('/recipe', recipeController.createRecipes)
app.put('/recipe/:id', recipeController.updateRecipes)
app.delete('/recipe/:id', recipeController.deleteRecipes)