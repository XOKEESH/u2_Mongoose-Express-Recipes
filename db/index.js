const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://XOKEESH:Anoire7117@cluster7.yf6pw.mongodb.net/recipeDatabase?retryWrites=true&w=majority&appName=Cluster7')
    .then(() => {
        console.log('Successfully connected.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })


const db = mongoose.connection

module.exports = db