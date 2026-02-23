const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculator.controller');

router.post('/calculate', calculatorController.calculate);

router.put('/update/:id', calculatorController.update);

router.delete('/delete/:id', calculatorController.remove);

router.get('/items', calculatorController.getAll);

module.exports = router;