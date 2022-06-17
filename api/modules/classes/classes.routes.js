const express = require('express');

const router = express.Router();

const Ctrl = require('./classes.controller');

router.get('/', Ctrl.findAll);
router.post('/', Ctrl.create);
router.get('/:id', Ctrl.findOne);
router.put('/update/:id', Ctrl.updateOne);
router.delete('/delete/:id', Ctrl.deleteOne);

module.exports = router;