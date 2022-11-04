const Board = require("../models/board.model")
const Cheese = require("../models/cheese.model")
const User = require("../models/user.model")

test("Board Model integrity", async () =>{
    const testObj = {type:"xyz", description:"poggies", rating:2}
    let testBoard = await Board.create(testObj)
    expect(testBoard).toBeTruthy()
})

test("Cheese Model integrity", async () =>{
    const testObj = {title:"xyz", description:"poggies"}
    let testCheese = await Cheese.create(testObj)
    expect(testCheese).toBeTruthy()
})

test("User Model integrity", async () =>{
    const testObj = {name:"xyz", email:"xyz@gmail.com"}
    let testUser = await User.create(testObj)
    expect(testUser).toBeTruthy()
})