const {Service} = require('../models/models')

class ServiceController {
    async create(req, res) {
        const {name} = req.body
        const service = await Service.create({name})
        return res.json(service)
    }

    async getAll(req, res) {
        const services = await Service.findAll()
        return res.json(services)
    }

}

module.exports = new ServiceController()