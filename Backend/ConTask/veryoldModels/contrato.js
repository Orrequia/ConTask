var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContratoSchema = new Schema({
    tipoContrato: {
        type: Schema.Types.ObjectId,
        ref: 'TipoContrato',
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa'
    },
    fechaInicio: {
        type: Date
    },
    fechaFin: {
        type: Date
    }

});

module.exports = mongoose.model('Contrato', ContratoSchema);