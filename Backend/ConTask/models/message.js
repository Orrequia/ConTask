var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    text: { type: String }
});

module.exports = mongoose.model('Message', messageSchema);