const { Autor } = require('../models/autor.models');

module.exports.findAllAutores = (req,res) => {
    Autor.find()
        .then((autores)=> res.json({ autores: autores}))
        .catch((err) => res.json({ message: "algo salio mal", error:err}));
}

module.exports.findAutor = (req,res) =>{
    Autor.findOne({_id:req.params.id})
        .then((autor) => res.json({  autor: autor}))
        .catch((err) => res.json({ message: "Algo salio mal en el back de buscar un autor", error:err}));
};

module.exports.createAutor = (req,res) =>{
    Autor.create(req.body)
        .then((newAutor) => res.json({message: "", autor: newAutor}))
        .catch((err) => res.json({ message: "Something went wrong", errors:err.errors}));
};

module.exports.updateAutor = (req,res) =>{
    Autor.findOneAndUpdate({_id:req.params.id}, req.body,{new:true, runValidators: true})
        .then((autor) => res.json({ message: "", autor: autor}))
        .catch((err) => res.json({ message: "Something went wrong", errors:err.errors}));
};

module.exports.deleteAutor = (req,res) =>{
    Autor.deleteOne({_id:req.params.id})
        .then((autor) => res.json({ autor: autor}))
        .catch((err) => res.json({ message: "Something went wrong", errors:err.errors}));
};
