require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const IndexRoutes = require("./app/routes/index.routes.js");

const app = express();
// settings
const PORT = process.env.NODE_DOCKER_PORT || 8080;
var corsOptions = { origin: "http://localhost:8081" };

// middlewares
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true }));// parse requests of content-type - application/x-www-form-urlencoded
// routes
app.use("/", IndexRoutes);

// db
const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

require("./app/routes/turorial.routes")(app);

// server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
