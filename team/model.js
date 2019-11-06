const Sequelize = require("sequelize");
const db = require("../db");
const City = require("../city/model");

const Team = db.define("team", {
  name: Sequelize.STRING
});

Team.belongsTo(City);

module.exports = Team;
