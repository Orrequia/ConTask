var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProvinciaSchema = new Schema({
    nombre: {
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('Provincia', ProvinciaSchema);