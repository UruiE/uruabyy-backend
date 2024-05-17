const siteRouter = require('./site');
const dataRouter = require('./data');
const mapRouter = require('./map');
const scheduleRouter = require('./schedule');
express = require('express');

function route(app) {

  app.use(express.json());

  app.use('/', siteRouter);
  app.use('/data', dataRouter);
  app.use('/map', mapRouter);
  app.use('/schedule', scheduleRouter);
}
module.exports = route;
