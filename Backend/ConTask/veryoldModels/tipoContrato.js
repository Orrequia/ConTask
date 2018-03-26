var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipoContratoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('TipoContrato', TipoContratoSchema);