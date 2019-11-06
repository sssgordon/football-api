const { Router } = require("express");
const City = require("./model");
const router = new Router();

//get all cities
router.get("/city", (req, res, next) => {
  City.findAll()
    .then(cities => res.json(cities))
    .catch(next);
});

//get specific city
router.get("/city/:cityId", (req, res, next) => {
  City.findByPk(req.params.cityId)
    .then(city => {
      if (!city) {
        res.status(404).end();
      } else {
        res.json(city);
      }
    })
    .catch(next);
});

router.post("/city", (req, res, next) => {
  City.create(req.body)
    .then(newCity => res.json(newCity))
    .catch(next);
});

router.put("/city/:cityId", (req, res, next) => {
  City.findByPk(req.params.cityId)
    .then(city => {
      if (city) {
        city.update(req.body).then(newCity => res.json(newCity));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

//delete all cities
router.delete("/city", (req, res, next) => {
  City.destroy()
    .then(() => res.status(204).end())
    .catch(next);
});

//delete a specific city by id
router.delete("/city/:cityId", (req, res, next) => {
  City.destroy(req.params.cityId)
    .then(cityDeleted => {
      if (cityDeleted) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
