const router = require('express').Router();

const { create, find, findById, update } = require('../controllers/state');

router.get('/states', find);
router.get('/states/:id', findById);
router.post('/states', create);
router.put('/states/:id', update)

module.exports = router;