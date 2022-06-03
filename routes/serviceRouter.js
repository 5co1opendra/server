const Router = require('express')
const router = Router()
const serviceController = require('../controllers/serviceController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), serviceController.create)
router.get('/', serviceController.getAll)

module.exports = router