const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('Ola carai')
})

app.get('/teste', (req, res) => {
    return res.send('Você esta na segunda rota')
})


const port = 3333
app.listen(port, () => {console.log('servidor rodando na porta ' + port)})
