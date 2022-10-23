const express = require('express')
const rutController = require('../controllers/rutController')

const router = express.Router()

router.get('/:rut', rutController.getDataByRut)

module.exports = router
