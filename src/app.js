const express = require('express');
const app = express();

const calculatorRoutes = require('./routes/calculator.routes');

app.use(express.json());
app.use('/api', calculatorRoutes);

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});