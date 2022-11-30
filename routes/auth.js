const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/auth.controller');
const { verifyDuplicatedUser } = require('../middleware/signup')

router.post("/signup", verifyDuplicatedUser, signup);
router.post("/signin", signin);

module.exports = router