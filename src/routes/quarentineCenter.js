const router = require('express').Router();

const { create, find, findById, update } = require('../controllers/quarentineCenter');

router.get('/centers', find);
router.get('/centers/:id', findById);
router.post('/centers', create);
router.put('/centers/:id', update)

module.exports = router;