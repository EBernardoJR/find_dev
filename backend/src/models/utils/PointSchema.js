const mongosse = require('mongoose')


const PointSchema = new mongosse.Schema({
    type: {
        type: String,
        enum: ['Point'],//tipo de coordenadas
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
})

module.exports = PointSchema