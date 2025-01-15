const express = require('express');
const app = express();
const port = 8090;

app.get('/', (req, res) => {
    res.send('¡Hola!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
}); 

