const Router = require('express')
const router = Router()
const infoController = require('../controllers/infoController')


router.post('/', infoController.create)
router.get('/', infoController.getAll)

module.exports = router