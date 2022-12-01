const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authjwt');
const { createAudiobook, getAudiobook, getAudiobooks, deleteAudiobook, updateAudiobook} = require('../controllers/audio.controller');

router.get('/', getAudiobooks);
router.get('/:id', verifyToken, getAudiobook);
router.post('/', verifyToken, createAudiobook);
router.delete('/:id',verifyToken, deleteAudiobook);
router.put('/:id', verifyToken, updateAudiobook);

module.exports = router;