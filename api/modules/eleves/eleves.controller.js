const Eleve = require('./eleves.schema');

module.exports.findAll = async (req, res) => {
    const eleves = await Eleve.find().populate("classe");

    return res.send(eleves);
}

module.exports.create = async (req, res) => {
    const eleve = await Eleve.create(req.body);
    return res.send(eleve);
}

module.exports.findOne = async (req, res) => {
    const eleve = await Eleve.findOne({ _id: req.params.id}).populate("classe");
    return res.send(eleve);
}

module.exports.updateOne = async (req, res) => {
    const eleve = await Eleve.updateOne({ _id: req.params.id }, { $set: req.body });
    return res.send(eleve);
}

module.exports.deleteOne = async (req, res) => {
    const eleve = await Eleve.deleteOne({ _id: req.params.id });
    return res.send(true);
}