const express = require("express");
const router =express.Router();
const database = require('../database.js');
 //http://localhost:9090/
router.get('/post', database.getAllUser);
router.post('/insert',database.insertData);
router.post('/delete', database.deleteByID);
router.post('/update', database.updateData);

module.exports = router;