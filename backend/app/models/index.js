const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
});

// db test
sequelize.sync({ force: true })
  .then(() => {
    console.log("db Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
