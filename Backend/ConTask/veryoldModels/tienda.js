var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TiendaSchema = new Schema({
    nombre: {
        type: String
    },
    direccion: {
        type: String
    },
    provincia: {
        type: Schema.Types.ObjectId,
        ref: 'Provincia',
        unique: true
    },
    correo: {
        type: String
    },
    listaTrabajador: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Trabajador'
        }
    ]
});

module.exports = mongoose.model('Tienda', TiendaSchema);