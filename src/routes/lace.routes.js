const Routes = require('express')
const laceRoutes = Routes()

const LaceController = require('../controllers/LaceController')
const laceController = new LaceController()

laceRoutes.post('/create', laceController.create)
laceRoutes.get('/', laceController.index)
laceRoutes.get('/show', laceController.show)

module.exports = laceRoutes