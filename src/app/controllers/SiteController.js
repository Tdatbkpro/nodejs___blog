const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
    //Get /news
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
    // Get glu
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
