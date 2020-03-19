const Dev = require('../models/Dev')
const parseStringToArray = require('../utils/ParseStringToArray')


module.exports = {
    async index(req, res){
        //listar os devs de acordo com as coordenadas
        //buscar todos num raio de 10km e por tech
        const { latitude, longitude, techs } = req.query

        const techsArray = parseStringToArray(techs)


        const devs = await Dev.find({
            //filtros
            techs: {
                $in: techsArray//techs q estão dentro do array passado

            },
            location: {
                //objetos pertos
                $near: {
                    $geometry: {//ponto
                        type: "Point",
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000 //distancia em metros (10km)
                },
            },
        })

        return res.send({ devs })
    }
}