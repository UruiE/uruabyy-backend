
const location = require('../models/map');

class MapController {
  async show(req, res, next) {
    location.find({})
      .then(locations => {
        res.json(locations);
      })
      .catch(next)
  }
}

module.exports = new MapController();
