var express = require('express');
var router = express.Router();
var Client=require('../models/apic'); 
var apicontroller=require('../controller/apicontroller')



router.get("/showall", apicontroller.show)
router.post('/add', apicontroller.add)

module.exports = router;