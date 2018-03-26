var mongoose = require('mongoose');
var extendSchema = require('mongoose-extend-schema');
var Schema = mongoose.Schema;

var TrabajadorSchema = extendSchema(PersonaSchema, {
    empresa: {
        type: Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Trabajador', TrabajadorSchema);