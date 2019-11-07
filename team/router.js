const { Router } = require("express");
const Team = require("./model");
const City = require("../city/model");
const router = new Router();

router.get("/team", (req, res, next) => {
  Team.findAll({ include: [City] })
    .then(teamList => res.json(teamList)) // no need .send() because the arrow function automatically sends by returning
    .catch(next);
});

router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(newTeam => res.json(newTeam))
    .catch(next);
});

router.get("/team/:teamId", (req, res, next) => {
  Team.findByPk(req.params.teamId, { include: [City] })
    .then(team => {
      if (!team) {
        res.status(404).end();
      } else {
        res.json(team);
      }
    })
    .catch(next);
});

router.patch("/team/:teamId", (req, res, next) => {
  Team.findByPk(req.params.teamId)
    .then(team => {
      if (team) {
        team.update(req.body).then(newTeam => res.json(newTeam));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

//delete all teams
router.delete("/team", (req, res, next) => {
  Team.destroy()
    .then(() => res.status(204).end())
    .catch(next);
});

//delete a specific team by id
router.delete("/team/:teamId", (req, res, next) => {
  Team.destroy({ where: { id: req.params.teamId } })
    .then(teamDeleted => {
      if (teamDeleted) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
