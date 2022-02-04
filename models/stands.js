const mongoose = require('mongoose')

const standsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    power: {
        type: String
    },
    owner: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Stands', standsSchema)

