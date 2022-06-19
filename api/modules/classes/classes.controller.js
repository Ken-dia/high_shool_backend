const Classe = require('./classes.schema');

module.exports.findAll = async (req, res) => {
    const classes = await Classe.find();

    return res.json(classes);
}

module.exports.create = async (req, res) => {
    const classe = await Classe.create(req.body);
    return res.send(classe);
}

module.exports.findOne = async (req, res) => {
    const classe = await Classe.findOne({ _id: req.params.id});
    return res.send(classe);
}

module.exports.updateOne = async (req, res) => {
    const classe = await Classe.updateOne({ _id: req.params.id }, { $set: req.body });
    return res.send(classe);
}

module.exports.deleteOne = async (req, res) => {
    const classe = await Classe.deleteOne({ _id: req.params.id });
    return res.send(true);
}