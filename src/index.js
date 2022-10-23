const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()

const v1RutRouter = require('./v1/routes/rutRoutes')
const webRouter = require('./web/routes/webRoutes')

const app = express()

// Variables
const PORT = process.env.PORT_APP || 3000
const QUERY_LOG_FORMAT = process.env.QUERY_LOG_FORMAT || 'dev'

// Config
app.set('views', path.join(__dirname, 'web', 'views'))
app.set('view engine', 'ejs')
app.use(morgan(QUERY_LOG_FORMAT))

// Routes
app.use('/api/v1/rut', v1RutRouter)
app.use(webRouter)
app.use(express.static(path.join(__dirname, 'web', 'static')))

// Start server
app.listen(PORT, () => {
  console.log('-----------------------------')
  console.log(`Aplicación en puerto ${PORT}`)
  console.log('-----------------------------')
})
