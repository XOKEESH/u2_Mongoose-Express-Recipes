const { Schema } = require('mongoose')

const recipeSchema = new Schema(
    {
        name: { type: String, required: true },
        cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine' },
        ingredients: [{
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            unit: { type: String, required: true }
            }],
        difficulty: { type: String, required: true },
        prepTime: { type: Number, required: true },
        cookTime: { type: Number, required: true },
        servings: { type: Number, required: true },
    },
    { timestamps: true }
)

module.exports = recipeSchema