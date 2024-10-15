const mongoose = require('mongoose')
const db = require('../db')
const { Cuisine, Direction, Recipe } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
// Wait for the database connection to be open
    await db.once('open', async () => {
     // Clear the collections
     await Cuisine.deleteMany({})
     await Recipe.deleteMany({})
     await Direction.deleteMany({})

    // Create Cuisines
    const cuisines = await Cuisine.insertMany([
    {
        name: 'Italian',
        origin: 'Italy',
        description: 'A rich cuisine characterized by its regional diversity, quality ingredients, and simplicity.',
        isVegetarianFriendly: true,
        isVeganFriendly: false,
        isGlutenFree: false
    },
    {
        name: 'French',
        origin: 'France',
        description: 'Known for its sophisticated techniques and rich flavors, French cuisine emphasizes quality ingredients.',
        isVegetarianFriendly: true,
        isVeganFriendly: false,
        isGlutenFree: true
    },
    {
        name: 'Japanese',
        origin: 'Japan',
        description: 'A cuisine that balances taste, texture, and presentation, focusing on seasonal ingredients.',
        isVegetarianFriendly: true,
        isVeganFriendly: false,
        isGlutenFree: false
    }
])
console.log('Created cuisines!')

    const recipe = await Recipe.insertMany([
    {
        name: 'Truffle Risotto',
        cuisine: cuisine[0]._id,
        ingredients: [
            { name: "Arborio rice", quantity: 300, unit: "g" },
            { name: "Chicken broth", quantity: 1, unit: "L" },
            { name: "White truffle oil", quantity: 2, unit: "tbsp" },
            { name: "Parmesan cheese", quantity: 100, unit: "g" },
            { name: "Shallots", quantity: 2, unit: "pieces" },
            { name: "Fresh black truffle", quantity: 10, unit: "g" }
        ],
        difficulty: 'Medium',
        prepTime: 10,
        cookTime: 30,
        servings: 4,
    },
    {
        name: 'Caviar Blini',
        cuisine: cuisine[1]._id,
        ingredients: [
            { name: "Buckwheat flour", quantity: 150, unit: "g" },
            { name: "Eggs", quantity: 2, unit: "pieces" },
            { name: "Milk", quantity: 200, unit: "ml" },
            { name: "Butter", quantity: 50, unit: "g" },
            { name: "Caviar", quantity: 100, unit: "g" },
            { name: "Sour cream", quantity: 150, unit: "g" }
        ],
        difficulty: 'Hard',
        prepTime: 20,
        cookTime: 10,
        servings: 6,
    },
    {
        name: 'Lavender Gelato',
        cuisine: cuisine[2]._id,
        ingredients: [
            { name: "Milk", quantity: 500, unit: "ml" },
            { name: "Heavy cream", quantity: 250, unit: "ml" },
            { name: "Sugar", quantity: 150, unit: "g" },
            { name: "Dried lavender", quantity: 2, unit: "tbsp" },
            { name: "Egg yolks", quantity: 4, unit: "pieces" }
        ],
        difficulty: 'Medium',
        prepTime: 15,
        cookTime: 30,
        servings: 6,
    }    
])
console.log('Created recipes!')

    await Direction.insertMany([
    {
        recipe: recipe[0]._id,
        instructions: 'Step 1: In a saucepan, sauté shallots until translucent. Step 2: Add Arborio rice and stir until coated with oil. Step 3: Gradually add warm chicken broth, stirring continuously. Step 4: Once creamy, stir in grated Parmesan and white truffle oil. Step 5: Garnish with shaved fresh black truffle before serving.',
        duration: "30 minutes"
    },    
    {
        recipe: recipe[1]._id,
        instructions: 'Whisk together buckwheat flour, eggs, and milk until smooth. Step 2: Heat a non-stick pan and melt butter. Step 3: Pour small amounts of batter to create blinis and cook until golden on both sides. Step 4: Top each blini with sour cream and a spoonful of caviar.',
        duration: "15 minutes"
    },
    {
        recipe: recipe[2]._id,
        instructions: 'Step 1: In a saucepan, heat milk, cream, and dried lavender until just boiling. Step 2: In a bowl, whisk together egg yolks and sugar until pale. Step 3: Slowly pour the warm milk mixture into the egg mixture, whisking continuously. Step 4: Return to the saucepan and cook on low heat until thickened. Step 5: Strain out the lavender and chill the mixture before churning in an ice cream maker.',
        duration: "30 minutes"
    }  
])
console.log('Created directions!')
})
}

const run = async () => {
    await main()
    db.close()
    await mongoose.connection.close()
}

run()