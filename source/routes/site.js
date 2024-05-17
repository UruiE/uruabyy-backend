const express = require('express');
const router = express.Router();
var cors = require('cors');


const SiteController = require('../app/controllers/SiteController');


var corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

router.get('/',cors(corsOptions), SiteController.index);


module.exports = router;
