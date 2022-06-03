
const {Entry} = require('../models/models')
const ApiError = require('../error/ApiError')

class EntryController {
    async create(req, res, next) {
        console.log(req)
        try {
            const {infoId, dateEntry, serviceId} = req.body

            const entry = await Entry.create({infoId, dateEntry, serviceId})

            return res.json(entry)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const {infoId, serviceId} = req.params
        let entries;
        if (!infoId && !serviceId) {
            entries = await Entry.findAll()
        }
        if (infoId && !serviceId) {
            entries = await Entry.findAll({where:{infoId}})
        }
        if (!infoId && serviceId) {
            entries = await Entry.findAll({where:{serviceId}})
        }
        if (infoId && serviceId) {
            entries = await Entry.findAll({where:{serviceId, infoId}})
        }
        return res.json(entries)
    }
    async getOne(req, res) {
        const {id} = req.params
        const entry = await Entry.findOne({where:{id}})
        return res.json(entry)
    }
}

module.exports = new EntryController()