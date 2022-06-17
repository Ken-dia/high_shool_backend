const mongoose = require('mongoose');

const classeSchema = mongoose.Schema({
    name: { type: String }
})

const Classe = mongoose.model('classe', classeSchema);

module.exports = Classe;