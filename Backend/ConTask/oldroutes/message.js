module.exports = function(app) {

    var messages = require('../oldcontrollers/message');

    // Create a new Note
    app.post('/api/messages', messages.add);

    // Retrieve all Notes
    app.get('/api/messages', messages.findAll);

    // Retrieve a single Note with noteId
    app.get('/api/messages/:id', messages.findById);

    // Update a Note with noteId
    app.put('/api/messages/:id', messages.update);

    // Delete a Note with noteId
    app.delete('/api/messages/:id', messages.delete);
};