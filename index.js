const express = require("express");
const teamRouter = require("./team/router");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json(); // jsonParser!

const app = express();

app.use(jsonParser);
app.use(teamRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port :${port}!`));
