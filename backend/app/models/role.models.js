const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./index.js");

class Role extends Model {}
Role.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
},{
  sequelize,
  modelName: "role",
})

module.exports = Role