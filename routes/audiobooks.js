const express = require('express');
const router = express.Router();
const { verifyToken, isAnAdmin } = require('../middleware/authjwt');
const { createAudiobook, getAudiobook, getAudiobooks, deleteAudiobook, updateAudiobook} = require('../controllers/audiobooks.controller');

router.get('/', getAudiobooks);
router.get('/:id', getAudiobook);
router.post('/', [verifyToken, isAnAdmin], createAudiobook);
router.delete('/:id',[verifyToken, isAnAdmin], deleteAudiobook);
router.put('/:id', [verifyToken, isAnAdmin], updateAudiobook);

module.exports = router;