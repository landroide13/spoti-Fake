const express = require('express');
const router = express.Router();
const { verifyToken, isAnAdmin } = require('../middleware/authjwt');
const { createUser } = require('../controllers/users.controller');

router.post("/", [verifyToken, isAnAdmin], createUser);



module.exports = router;