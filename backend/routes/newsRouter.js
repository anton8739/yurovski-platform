const Router = require('express')
const NewsController = require('../controllers/NewsController')
const router = new Router()
router.get('/', NewsController.getAllNews)
module.exports = router