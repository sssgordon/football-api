const { Router } = require("express");
const Player = require("./model");
const router = new Router();

router.get("/player", (req, res, next) => {
  Player.findAll()
    .then(players => res.json(players))
    .catch(next);
});

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

module.exports = router;
