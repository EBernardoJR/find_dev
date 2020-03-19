const axios = require('axios')
const Dev = require('../models/Dev')
//função para transformar string em um array
const parseStringToArray = require('../utils/ParseStringToArray')

module.exports = {
    //cadastro do dev
    async store (req, res) {
        //obtendo o username
        const { github_username, techs, latitude, longitude } = req.body

        //verificar se o usuário ja esta cadastrado
        let dev = await Dev.findOne({ github_username })

        //se não existir, irá prosseguir com o cadastro
        if (!dev){
            const response = await axios.get(`https://api.github.com/users/${github_username}`)
    
            const { name = login, avatar_url, bio } = response.data
                //(valor padrão do name) se o nome não vier, o login vai assumir o lugar do nome no cadastro
        
            //transformando as techs em array
            const techsArry = parseStringToArray(techs)
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]//o padrão do mongo é long - lati
            }
        
            //cadastrar o usuário
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArry,
                location
            })

        }
    
    
    
        return res.json(dev)
    },

    //listagem
    async index(req, res){
        const devs = await Dev.find({})
        return res.json(devs)
    }
}