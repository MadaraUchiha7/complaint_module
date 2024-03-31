const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')
route.get('/', services.homeRoutes)

route.get('/add-complaint', services.add_complaint)

route.get('/update-complaint', services.update_complaint)

route.post('/complaints', controller.create)
route.get('/complaints', controller.find)
route.put('/complaints/:id', controller.update)
route.delete('/complaints/:id', controller.delete)

module.exports = route