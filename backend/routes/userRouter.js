const Router = require('express')
const UserController = require('../controllers/UserController')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()
router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/check',authMiddleware, UserController.check)
module.exports = router