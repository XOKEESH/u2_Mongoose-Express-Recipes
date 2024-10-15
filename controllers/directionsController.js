//Get Index
const Direction = require('../models/direction')
const getAllDirections = async (req,res) => {
    try {
        const directions = await Directions.find()
        res.json(directions)
    } catch (e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
    }

//Get Show
const getDirectionsById = async (req,res) => {
    try {
        const { id } = req.params
        const direction = await Direction.findById(id)
        if (direction) {
            return res.json(direction)
        }
        return res.status(404).send('Directions with ID not found.')
    }
    catch(e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
}

//Create => Post
const createDirections = async (req, res) => {
    try {
        const direction = await new Direction(req.body)
        await direction.save()
        return res.status(201).json({direction})
    }
    catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message })
    }
}

//Update => Put
const updateDirections = async (req,res) => {
    try {
        let { id } = req.params
        let direction = await Direction.findByIdAndUpdate(id, req.body, { new: true })
        if (direction) {
            return res.status(200).json(direction)
        }
        throw new Error("Directions not found.")
    }
    catch (e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
}

//Delete =>
const deleteDirections = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Direction.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Directions deleted")
        }
        throw new Error("Directions not found.")
    }
    catch (e) {
        console.error(e)
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllDirections,
    getDirectionsById,
    createDirections,
    updateDirections,
    deleteDirections
}