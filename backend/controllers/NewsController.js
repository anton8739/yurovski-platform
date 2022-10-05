const ApiError = require("../error/ApiError");
const {getUserFromAuth} = require("../utils/helpers");
const {News} = require('../models/models')
class NewsController {
    static news = [{id : 1, text : "Hi 1"}, {id : 2, text : "Hi 2"}]
    async getAllNews (req, res, next)  {
        const news = await News.findAll()
        return res.json(news)
    }
    async createNews (req, res, next)  {
        const user = getUserFromAuth(req)
        if (!user) {
            return next(ApiError.forbidden('Недостаточно прав для создания новости'))
        }
        const {title, content} = req.body
        const news = await News.create({title, content, userId : user.id})
        return res.json(news)
    }
    async deleteNews (req, res,next)  {
        const {id} =req.params
        const user = getUserFromAuth(req)
        if (!user) {
            return next(ApiError.forbidden('Недостаточно прав для удаления новости'))
        }
        if(!id || !Number(id)) {
            return next(ApiError.badRequest('Не верный id'))
        }
        const news = await News.findOne({where: {id}})
        if(!news) {
            return next(ApiError.badRequest('Такой новости не существует'))
        }
        const count = await News.destroy({ where: { id: id } });
        return res.json({count})
    }
    async updateNews (req, res, next)  {
        const {id} =req.params
        const {content,title} = req.body
        const user = getUserFromAuth(req)
        if (!user) {
            return next(ApiError.forbidden('Недостаточно прав для удаления новости'))
        }
        if(!id || !Number(id)) {
            return next(ApiError.badRequest('Не верный id'))
        }
        const news = await News.findOne({where: {id}})
        if(!news) {
            return next(ApiError.badRequest('Такой новости не существует'))
        }
        console.log(content)
        console.log(title)
        await News.update({content,title},{ where: { id: id } });
        const result = await News.findOne({where: {id}})
        return res.json({result})
    }
}
module.exports = new NewsController()