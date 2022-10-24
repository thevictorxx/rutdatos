const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { url_page: process.env.PAGE_HTTP })
})

router.get('/api', (req, res) => {
  res.render('apiDoc', { url_page: process.env.PAGE_HTTP })
})

router.get('/preguntas', (req, res) => {
  res.render('preguntas', { url_page: process.env.PAGE_HTTP })
})

module.exports = router
