var passport = require('passport');
var config = require('../config/database');
require('../middleware/passport')(passport);
var jwt = require('jsonwebtoken');
var Usuario = require("../models").Usuario;
const authService = require('../services/AuthService');

const signup = async function(req, res) {

    res.setHeader('Content-Type', 'application/json');
    const body = req.body;

    if (!req.body.alias || !req.body.contrasena) {
        return ReE(res, 'Por favor introduzca al menos un alias y contrasena')
    } else {
        let err, usuario;

        [err, usuario] = await to(authService.createUser(body));

        if(err)
            return ReE(res, err, 422);

        return ReS(res, {message:'Nuevo usuario creado correctamente', usuario:usuario.toWeb(), token:usuario.getJWT()}, 201);
        /*var nuevoUsuario = new Usuario({
            alias: req.body.alias,
            contrasena: req.body.contrasena
        });
        // save the user
        nuevoUsuario.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });*/
    }
};
module.exports.signup = signup;

const login = async function(req, res) {
    const body = req.body;
    let err, usuario;

    [err, usuario] = await to(authService.authUser(req.body));
    if(err) return ReE(res, err, 422);

    return ReS(res, {token:usuario.getJWT(), usuario:usuario.toWeb()});
};
module.exports.login = login;

/*exports.getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

/*
Usuario.findOne({
        alias: req.body.alias
    }, function(err, usuario) {
        if (err) throw err;

        if (!usuario) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            usuario.comparePassword(req.body.contrasena, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.sign(usuario, config.secret);
                    // return the information including token as JSON
                    res.json({success: true, token: 'JWT ' + token});
                } else {
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });*/