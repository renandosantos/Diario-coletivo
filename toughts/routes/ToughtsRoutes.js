const express = require('express')
const router = express.Router()
const ToughtController = require('../controller/ToughtsController')

//CONTROLLER

router.get('/', ToughtController.showToughts)

module.exports = router