const express = require('express');
const app = express();
const mongoose = require('mongoose')
const { db } = require('./.env')
const routes = require('./routes')


mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        //evitar erros
}
)
//usar JSON nas requisições!!!
app.use(express.json())

//importar as rotas
app.use(routes)

/*
app.get('/teste', (req, res) => {
    //console.log(req.query.name)
    console.log()
    return res.json({
        message: "Segunda rota"
    })
})
app.put('/teste/:id', (req, res) => {
    //console.log(req.query.name)
    console.log(req.params.id)
    return res.json({
        message: "Segunda rota"
    })
})
app.post('/teste', (req, res) => {
    console.log(req.body)
    return res.json({
        message: "Segunda rota"
    })
})
*/




const port = 3333
app.listen(port, () => {console.log('servidor rodando na porta ' + port)})
