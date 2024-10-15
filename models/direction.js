const { Schema } = require('mongoose')

const directionSchema = new Schema(
    {
        recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' },
        instructions: { type: String, required: true },
        duration: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = directionSchema