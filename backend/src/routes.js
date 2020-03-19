const { Router } = require('express')
const routes = Router()//usar todas as rotas das aplicações
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

//cadastro
routes.post("/devs", DevController.store)
//listagem
routes.get("/devs", DevController.index)
//listar a partir da localização
routes.get("/search", SearchController.index)

module.exports = routes;//importa um objeto e nao uma funcao