const mongoose = require('mongoose');
const Classe = require('../classes/classes.schema')

const eleveSchema = mongoose.Schema({
    nom: { type: String },
    prenom: { type: String },
    genre: { type: String },
    lieuNaiss: { type: String },
    dateNaiss: { type: Date },
    classe: { type: mongoose.Types.ObjectId, ref: Classe }
    
})

const Eleve = mongoose.model('eleve', eleveSchema);

module.exports = Eleve;
