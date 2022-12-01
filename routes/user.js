const express = require('express');
const router = express.Router();
const { verifyToken, isAnAdmin } = require('../middleware/authjwt');
const { createUser } = require('../controllers/user.controller');

router.post("/", verifyToken, createUser);



module.exports = router;