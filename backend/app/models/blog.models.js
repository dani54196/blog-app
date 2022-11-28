const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

class Blog extends Model { }
Blog.init({
  title: DataTypes.STRING,
  body: DataTypes.TEXT,
}, {
  sequelize,
  modelName: "blog",
  timestamps: true,
}
);

module.exports = Blog;
