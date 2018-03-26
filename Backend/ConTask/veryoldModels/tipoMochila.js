var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoMochilaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('TipoMochila', TipoMochilaSchema);