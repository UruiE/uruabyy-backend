const express = require('express');
const cors = require('cors');
const router = express.Router();

const DataController = require('../app/controllers/DataController');
var corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }



router.get('/:slug' , cors(corsOptions), DataController.show);


module.exports = router;
