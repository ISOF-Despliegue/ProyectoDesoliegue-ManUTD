// controllers/calculator.controller.js

const calculatorService = require('../services/calculator.service');

function calculate(req, res) {
    const { num1, num2, operation } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: "Los valores deben ser números" });
    }

    try {
        let result;

        switch (operation) {
            case "sum":
                result = calculatorService.sum(num1, num2);
                break;
            case "subtract":
                result = calculatorService.subtract(num1, num2);
                break;
            case "multiply":
                result = calculatorService.multiply(num1, num2);
                break;
            case "divide":
                result = calculatorService.divide(num1, num2);
                break;
            default:
                return res.status(400).json({ error: "Operación no válida" });
        }

        res.json({ result });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    calculate
};