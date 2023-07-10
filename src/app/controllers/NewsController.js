class NewsController {
    //Get /news
    index(req, res) {
        res.render('news');
    }
    // Get glu
    show(req, res) {
        res.send('NEWS DETAIL');
    }
}

module.exports = new NewsController();
