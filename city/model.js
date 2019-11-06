const Sequelize = require("sequelize");
const db = require("../db");

const City = db.define("city", {
  name: Sequelize.STRING,
  population: Sequelize.INTEGER
});

module.exports = City;
