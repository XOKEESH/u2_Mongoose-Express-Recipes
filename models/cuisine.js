const { Schema } = require('mongoose')

const cuisineSchema = new Schema(
    {
        name: { type: String, required: true },
        origin: { type: String, required: true },
        description: { type: String, required: true },
        isVegetarianFriendly: { type: Boolean, required: true },
        isVeganFriendly: { type: Boolean, required: true },
        isGlutenFree: { type: Boolean, required: true }
    },
    { timestamps: true }
)

module.exports = cuisineSchema
