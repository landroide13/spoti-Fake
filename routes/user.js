const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authjwt');
const { getUsers, getUser } = require('../controllers/user.controller');

router.get("/", verifyToken, getUsers );
router.get("/:id", verifyToken, getUser );



module.exports = router;