const Routes = require('express')
const routes = Routes()

const laceRoutes = require('./lace.routes')

routes.use('/laces', laceRoutes)

module.exports = routes