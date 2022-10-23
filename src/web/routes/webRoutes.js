const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' })
})

router.get('/api', (req, res) => {
  res.render('apiDoc', { url_page: process.env.PAGE_HTTP })
})

router.get('/preguntas', (req, res) => {
  res.render('preguntas', { foo: 'FOO' })
})

module.exports = router
