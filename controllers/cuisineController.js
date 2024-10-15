//Get Index
const { Cuisine } = require('../models')
const getAllCuisines = async (req,res) => {
    try {
        const cuisines = await Cuisine.find()
        res.json(cuisines)
    } catch (e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
    }

//Get Show
const getCuisineById = async (req,res) => {
    try {
        const { id } = req.params
        const cuisine = await Cuisine.findById(id)
        if (cuisine) {
            return res.json(cuisine)
        }
        return res.status(404).send('cuisine with ID not found.')
    }
    catch(e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
}

//Create => Post
const createCuisine = async (req, res) => {
    try {
        const cuisine = await new Cuisine(req.body)
        await cuisine.save()
        return res.status(201).json({cuisine})
    }
    catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message })
    }
}

//Update => Put
const updateCuisine = async (req,res) => {
    try {
        let { id } = req.params
        let cuisine = await Cuisine.findByIdAndUpdate(id, req.body, { new: true })
        if (cuisine) {
            return res.status(200).json(cuisine)
        }
        throw new Error("Cuisine not found.")
    }
    catch (e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
}

//Delete =>
const deleteCuisine = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Cuisine.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Cuisine deleted")
        }
        throw new Error("Cuisine not found.")
    }
    catch (e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllCuisines,
    getCuisineById,
    createCuisine,
    updateCuisine,
    deleteCuisine
}