const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync({ force: true }) // {force: true} tells sequelize that when tables are related, it's ok to modify old data on the table
  .then(() => console.log("Database schema updated"))
  .catch(console.error);

module.exports = db;
