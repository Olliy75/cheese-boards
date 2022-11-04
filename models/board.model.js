const { Model, DataTypes } = require("sequelize")
const db = require("../db/db")

class Board extends Model {}

Board.init({
    type:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    rating:{
        type: DataTypes.NUMBER
    }
}, {sequelize: db, timestamps: false})

module.exports = Board