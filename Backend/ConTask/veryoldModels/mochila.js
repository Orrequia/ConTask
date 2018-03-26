var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MochilaSchema = new Schema({
    tipoMochila: {
        type: Schema.Types.ObjectId,
        ref: "TipoMochila",
        unique: true
    },
    numero: {
        type: String
    }
});

module.exports = mongoose.model('Mochila', MochilaSchema);