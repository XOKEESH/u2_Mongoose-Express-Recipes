//Get Index
const Recipe = require('../models/recipe')
const getAllRecipes = async (req,res) => {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
    }

//Get Show
const getRecipesById = async (req,res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json(recipe)
        }
        return res.status(404).send('Recipes with ID not found.')
    }
    catch(e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
}

//Create => Post
const createRecipes = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body)
        await recipe.save()
        return res.status(201).json({recipe})
    }
    catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message })
    }
}

//Update => Put
const updateRecipes = async (req,res) => {
    try {
        let { id } = req.params
        let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipe) {
            return res.status(200).json(recipe)
        }
        throw new Error("Recipes not found.")
    }
    catch (e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
}

//Delete =>
const deleteRecipes = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe deleted")
        }
        throw new Error("Recipes not found.")
    }
    catch (e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllRecipes,
    getRecipesById,
    createRecipes,
    updateRecipes,
    deleteRecipes
}