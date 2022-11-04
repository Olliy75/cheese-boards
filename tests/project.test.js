const db = require("../db/db")
const {Board,Cheese,User} = require("../models")

test("Board table is created and can have data inserted", async () =>{
    const testObj = {type:"xyz", description:"poggies", rating:2}
    let testBoard = await Board.create(testObj)
    expect(testBoard).toBeTruthy()
    expect(testBoard).toHaveProperty("type", "xyz")
    expect(testBoard).toHaveProperty("description", "poggies")
    expect(testBoard).toHaveProperty("rating", 2)
    await testBoard.destroy()
})

test("Cheese table is created and can have data inserted", async () =>{
    const testObj = {title:"xyz", description:"poggies"}
    let testCheese = await Cheese.create(testObj)
    expect(testCheese).toBeTruthy()
    expect(testCheese).toHaveProperty("title", "xyz")
    expect(testCheese).toHaveProperty("description", "poggies")
    await testCheese.destroy()
})

test("User table is created and can have data inserted", async () =>{
    const testObj = {name:"xyz", email:"xyz@gmail.com"}
    let testUser = await User.create(testObj)
    expect(testUser).toBeTruthy()
    expect(testUser).toHaveProperty("name", "xyz")
    expect(testUser).toHaveProperty("email", "xyz@gmail.com")
    await testUser.destroy()
})


test("board can be loaded with its cheeses", async () =>{
    const boardTestObj = {type:"xyz", description:"poggies", rating:2}
    let testBoard = await Board.create(boardTestObj)
    const cheeseTestObj = {title:"xyz", description:"poggies"}
    let testCheese = await Cheese.create(cheeseTestObj)

    await testBoard.addCheese(testCheese)
    const testy = await testBoard.getCheeses()
    expect(testy[0].id).toEqual(testCheese.id)

    await testBoard.destroy()
    await testCheese.destroy()
})

test("a user can be loaded with its boards", async () =>{
    const UserTestObj = {name:"xyz", email:"xyz@gmail.com"}
    let testUser = await User.create(UserTestObj)
    const boardTestObj = {type:"xyz", description:"poggies", rating:2}
    let testBoard = await Board.create(boardTestObj)


     await testUser.addBoard(testBoard)
    const testy = await testUser.getBoards()
    expect(testy[0].id).toEqual(testBoard.id)


    await testUser.destroy()
    await testBoard.destroy()
})

test("a cheese can be loaded with its board data", async () =>{
    const cheeseTestObj = {title:"xyz", description:"poggies"}
    let testCheese = await Cheese.create(cheeseTestObj)
    const boardTestObj = {type:"xyz", description:"poggies", rating:2}
    let testBoard = await Board.create(boardTestObj)


    await testCheese.addBoard(testBoard)
    const testy = await testCheese.getBoards()
    expect(testy[0].id).toEqual(testBoard.id)


    await testCheese.destroy()
    await testBoard.destroy()
})

