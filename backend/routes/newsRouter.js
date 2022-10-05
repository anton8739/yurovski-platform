const Router = require('express')
const NewsController = require('../controllers/NewsController')
const router = new Router()
router.get('/all', NewsController.getAllNews)
router.post('/create', NewsController.createNews)
router.put('/update/:id', NewsController.updateNews)
router.delete('/delete/:id', NewsController.deleteNews)
module.exports = router