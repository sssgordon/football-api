const Sequelize = require("sequelize");
const db = require("../db");

const Player = db.define("player", {
  name: Sequelize.STRING,
  number: Sequelize.INTEGER
});

module.exports = Player;
