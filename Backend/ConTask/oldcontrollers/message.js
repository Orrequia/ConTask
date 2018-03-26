var mongoose = require('mongoose');
var Message = mongoose.model('Message');

//GET - Return all registers
exports.findAll = function(req, res) {
    Message.find(function(err, messages) {
        if(err)
            res.send(500, err.message);
        res.status(200).jsonp(messages);
    });
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
    Message.findById(req.params.id, function(err, message) {
        if(err)
            return res.send(500, err.message);
        res.json(message);
    });
};

//POST - Insert a new register
exports.add = function(req, res) {
    var message = new Message({
        text: req.body.text
    });
    message.save(function(err, client) {
        if(err)
            return res.send(500, err.message);
        res.status(200).jsonp(message);
    });
};

//PUT - Update a register already exists
exports.update = function(req, res) {
    Message.findById(req.params.id, function(err, message) {
        if(err)
            res.status(500).send({message: "Could not find a note with id " + req.params.id});

        message.text = req.body.text;
        message.save(function(err) {
            if(err)
                return res.send(err.message);
            res.json(message);
        });
    });
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
    Message.findByIdAndRemove(req.params.id, function(err) {
        if(err)
            return res.send(500, err.message);
        res.json({ message: 'Successfully deleted' });
        //res.send({message: "Note deleted successfully!"});
    });
};