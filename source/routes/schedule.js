const express = require('express');
const cors = require('cors');
const router = express.Router();

const ScheduleController = require('../app/controllers/ScheduleController');
var corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

router.get('/' , cors(corsOptions), ScheduleController.show);

module.exports = router;
