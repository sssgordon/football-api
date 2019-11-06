const Sequelize = require("sequelize");
const db = require("../db");
const Team = require("../team/model");
const City = require("../city/model");

const Player = db.define("player", {
  name: Sequelize.STRING,
  number: Sequelize.INTEGER
});

Player.belongsTo(Team); // sequelize will add a teamId field to players
Player.belongsTo(City);

module.exports = Player;
