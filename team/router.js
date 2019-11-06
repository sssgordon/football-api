const { Router } = require("express");
const Team = require("./model");
const router = new Router();

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teamList => res.json(teamList)) // no need .send because the arrow function automatically sends by returning
    .catch(next);
});

router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(newTeam => res.json(newTeam))
    .catch(next);
});

router.get("/team/:id", (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(team => {
      if (!team) {
        res.status(404).end();
      } else {
        res.json(team);
      }
    })
    .catch(next);
});

router.patch("/team/:id", (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(team => {
      if (team) {
        team.update(req.body).then(newTeam => res.json(newTeam));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
