
const {Info} = require('../models/models')
const ApiError = require('../error/ApiError')

class InfoController {
    async create(req, res, next) {
        try {
            const {firstname, lastname, patronymic, phone} = req.body
            const info = await Info.create({firstname, lastname, patronymic, phone})
            return res.json(info)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const infos = await Info.findAll()
        return res.json(infos)
    }
}
module.exports = new InfoController()