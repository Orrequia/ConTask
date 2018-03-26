const ConnectRoles = require('connect-roles');
const express = require('express');
const router = express.Router();
const Grupo = require('../models').Grupo;

var getGrupo = async function(grupoId) {
    let err, grupo;

    console.log(grupoId);
    [err, grupo] = await to(Grupo.findById(grupoId));
    if(err)
        return err;

    console.log(grupo.nombre);
    return grupo.nombre;
};

var roles = new ConnectRoles({
    failureHandler: function (req, res, action) {
        // optional function to customise code that runs when
        // user fails authorisation
        var accept = req.headers.accept || '';
        res.status(403);
        if (~accept.indexOf('html')) {
            res.render('access-denied', {action: action});
        } else {
            res.send('Access Denied - You don\'t have permission to: ' + action);
        }
    }
});

module.exports = roles;

roles.use('access penback post', async function(req, res, next) {

    let grupo;
    grupo = getGrupo(req.user.grupoId);

    if(await grupo === 'admin') {
        console.log("bien");
        return true;
    }
});

//moderator users can access private page, but
//they might not be the only ones so we don't return
//false if the user isn't a moderator
roles.use('access private page', function (req) {
    if (req.user.role === 'moderator') {
        return true;
    }
});

//admin users can access all pages
roles.use(function (req) {
    if (req.user.role === 'admin') {
        return true;
    }
});