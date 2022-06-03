const Router = require('express')
const router = Router()
const entryRouter = require('./entryRouter')
const userRouter = require('./userRouter')
const infoRouter = require('./infoRouter')
const serviceRouter = require('./serviceRouter')

router.use('/user', userRouter)
router.use('/info', infoRouter)
router.use('/entry', entryRouter)
router.use('/service', serviceRouter)

module.exports = router