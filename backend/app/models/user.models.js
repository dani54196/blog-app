const { Model, DataTypes } = require('sequelize');
const sequelize = require("./index");

class User extends Model { }
User.init({
  user_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING
},
  {
    sequelize,
    modelName: "user",
    timestamps: false,
  }
)

module.exports = User