const calculatorService = require('../services/calculator.service');

let items = []; 

function calculate(req, res) {
    const { num1, num2, operation } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: "Los valores deben ser números" });
    }

    try {
        let result;
        switch (operation) {
            case "sum": result = calculatorService.sum(num1, num2); break;
            case "subtract": result = calculatorService.subtract(num1, num2); break;
            case "multiply": result = calculatorService.multiply(num1, num2); break;
            case "divide": result = calculatorService.divide(num1, num2); break;
            default: return res.status(400).json({ error: "Operación no válida" });
        }

        const newEntry = { 
            id: items.length + 1, 
            operation, 
            num1, 
            num2, 
            result,
            deleted: false 
        };
        items.push(newEntry);

        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

function update(req, res) {
    const id = Number(req.params.id);
    const { newResult } = req.body;
    const item = items.find(i => i.id === id && !i.deleted);

    if (!item) return res.status(404).json({ error: "No encontrado" });

    item.result = newResult;
    res.json(item);
}

function remove(req, res) {
    const id = Number(req.params.id);
    const item = items.find(i => i.id === id);

    if (!item) return res.status(404).json({ error: "No existe" });

    item.deleted = true; 
    res.status(204).send(); 
}

function getAll(req, res) {
    const activeItems = items.filter(i => !i.deleted);
    res.json(activeItems); 
}

module.exports = { calculate, update, remove, getAll };