const schedule = require('../models/schedule');

class ScheduleController {
  async show(req, res, next) {
    schedule.find({})
      .then(schedules => {
        res.json(schedules);
      })
      .catch(next)
  }
}

module.exports = new ScheduleController();
