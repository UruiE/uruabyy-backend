
const Data = require('../models/data');


const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  async index(req, res, next) {
    Data.find({})
      .then(datas => {
        res.json(datas);
       // res.render('home', {
        //  datas: mutipleMongooseToObject(datas)
       // });
      })
      .catch(next)
  }
}

module.exports = new SiteController();
