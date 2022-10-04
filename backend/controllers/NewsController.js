class NewsController {
    static news = [{id : 1, text : "Hi 1"}, {id : 2, text : "Hi 2"}]
    async getAllNews (req, res)  {
        console.log(NewsController.news)
        return res.json(NewsController.news)
    }
}
module.exports = new NewsController()