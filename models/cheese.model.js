const { Model, DataTypes } = require("sequelize")
const db = require("../db/db")

class Cheese extends Model {}

Cheese.init({
    title:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    }
}, {sequelize: db, timestamps: false})

module.exports = Cheese