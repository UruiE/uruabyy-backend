
const Data = require('../models/data');

const { mutipleMongooseToObject } = require('../../util/mongoose');
class dataController {

    async show(req, res ,next) {
        Data.findOne({ uid: req.params.slug })
            .then(datas => {
                res.json(datas);
            })
            .catch(next);
    }


}

module.exports = new dataController();
