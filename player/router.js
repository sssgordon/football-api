const { Router } = require("express");
const Player = require("./model");
const router = new Router();
const Team = require("../team/model");
const City = require("../city/model");

router.get("/player", (req, res, next) => {
  Player.findAll({ include: [Team, City] })
    .then(players => res.json(players))
    .catch(next);
});

router.get("/player/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId, { include: [Team, City] }) // shows also the team info that the player belongs to; require team model!
    .then(player => {
      if (player) {
        res.json(player);
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

// // takes a team name as a parameter and returns all players that belong to that team
// router.get("/player/:teamName", (req, res, next) => {
//   Player.findAll({ where: {} }, { include: [Team, City] })
//     .then(players => res.json(players))
//     .catch(next);
// });

router.post("/player", (req, res, next) => {
  Player.create(req.body)
    .then(newPlayer => res.json(newPlayer))
    .catch(next);
});

router.put("/player/:playerId", (req, res, next) => {
  Player.findByPk(req.params.playerId)
    .then(player => {
      if (player) {
        player.update(req.body).then(updatedPlayer => res.json(updatedPlayer));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

//delete all players
router.delete("/player", (req, res, next) => {
  Player.destroy()
    .then(() => res.status(204).end())
    .catch(next);
});

//delete a specific player by id
router.delete("/player/:playerId", (req, res, next) => {
  Player.destroy({ where: { id: req.params.playerId } })
    .then(playerDeleted => {
      if (playerDeleted) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
