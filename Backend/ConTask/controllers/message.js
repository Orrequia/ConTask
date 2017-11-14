var mongoose = require('mongoose');
var Message = mongoose.model('Message');

//GET - Return all registers
exports.findAll = function(req, res) {
    Message.find(function(err, messages) {
        if(err) res.send(500, err.message);
        console.log('GET /messages')
        res.status(200).jsonp(messages);
    });
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
    Message.findById(req.params.id, function(err, message) {
        if(err) return res.send(500, err.message);
        console.log('GET /message/' + req.params.id);
        res.status(200).jsonp(message);
    });
};

//POST - Insert a new register
exports.add = function(req, res) {
    console.log('POST');
    console.log(req.body);
    var message = new Message({
        text: req.body.text
    });
    message.save(function(err, client) {
        if(err) return res.send(500, err.message);
        res.status(200).jsonp(message);
    });
};

//PUT - Update a register already exists
exports.update = function(req, res) {
    Message.findById(req.params.id, function(err, message) {
        message.text = req.body.text;
        message.save(function(err) {
            if(err) return res.send(500, err.message);
            res.status(200).jsonp(client);
        });
    });
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
    Message.findById(req.params.id, function(err, message) {
        message.remove(function(err) {
            if(err) return res.send(500, err.message);
            res.json({ message: 'Successfully deleted' });
        });
    });
};