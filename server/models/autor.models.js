const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({

    name: { type: String, 
            required:[true,"Autor es un campo requerido"],
            minlength:[3, "El Autor debe terner más de 3 caracteres"]
        },
},{ timestamps: true });

module.exports.Autor = mongoose.model('Autor', AutorSchema);