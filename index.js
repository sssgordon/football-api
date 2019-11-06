const express = require("express");
const teamRouter = require("./team/router");

const app = express();

app.use(teamRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port :${port}!`));
