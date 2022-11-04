const {Board,User,Cheese} = require("../models")

const db = require("./db")

async function seed (){

// drop and create all tables in the db
await db.sync({force :true})

const cheese = await Cheese.create({
    title: "Parmesan",
    description: "The flavor power of parmesan can take a savory dish from acceptable to amazing with a dusting of this delicious cheese. Lots of words are used to describe parmesan: rich, tangy, nutty, sharp, complex, fruity, and bold to name a few. It has a somewhat gritty texture and a strong umami taste."
})

const board = await Board.create({
    type: "idek what to put for type",
    description: "its a board idk",
    rating: 5
})


const user = await User.create({
    name: "Lechonk",
    email: "GOAT@gmail.com"
})

await user.addBoard(board)
await board.addCheese(cheese)

}

seed()