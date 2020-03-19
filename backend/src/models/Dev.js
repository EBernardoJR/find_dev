const mongosse = require('mongoose')
const PointSchema = require('./utils/PointSchema')


//estrutura
const DevSchema = new mongosse.Schema({
    //campos
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String], //o campo vai armazenar varias string

    
    //localização
    location:{
        type: PointSchema,
        index: '2dsphere'//tipo de busca
    }
})


module.exports = mongosse.model("Dev", DevSchema)