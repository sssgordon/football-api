const { Router } = require("express");
const Team = require("./model");
const router = new Router();
router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teamList => res.json(teamList)) // no need .send because the arrow function automatically sends by returning
    .catch(next);
});

module.exports = router;
