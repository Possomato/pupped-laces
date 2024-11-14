const express = require('express')
const app = express()
const routes = require('./routes')

const door = 9090

app.use(express.json())
app.use(routes)

app.listen(door, console.log(`rodaando em http://localhost:${door}`))
