const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./index.js");

class User extends Model { }
User.init({
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: "user",
  timestamps: false,
})

module.exports = User