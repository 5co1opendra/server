const Router = require('express')
const router = Router()
const entryController = require('../controllers/entryController')

router.post('/', entryController.create)
router.get('/', entryController.getAll)
router.get('/:id', entryController.getOne)

module.exports = router