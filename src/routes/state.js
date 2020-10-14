const router = require('express').Router();

const { create, find, findById } = require('../controllers/state');

router.get('/states', find);
router.get('/states/:id', findById);
router.post('/states', create);

module.exports = router;