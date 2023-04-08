const express = require('express')
const nombreControler = require('../controllers/nombreController')

const router = express.Router()

router.get('/:nombre', nombreControler.getDataByName)

module.exports = router
