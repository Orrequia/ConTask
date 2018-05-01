/*var db = require('../models/index');

module.exports = function(app, passport){

    /* Loggedin GET
    app.get('/loggedin', function(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    });

    /* Handle Login POST
    app.post('/login', passport.authenticate('local'), function(req, res) {
        res.json(req.user);
    });

    /* Handle Logout POST
    app.post("/logout", function(req, res) {
        req.logOut();
        res.sendStatus(200);
    });

    /* Handle Registration POST
    app.post('/signup', function(req, res) {
        db.User.findOne({
            username: req.body.username
        }, function(err, user) {
            if (user) {
                res.json(null);
                return;
            } else {
                var newUser = new db.User();
                newUser.username = req.body.username.toLowerCase();
                newUser.password = newUser.generateHash(req.body.password);

                newUser.save(function(err, user) {
                    req.login(user, function(err) {
                        if (err) {
                            return next(err);
                        }
                        res.json(user);
                    });
                });
            }
        });
    });
};*/
var passport = require('passport');

var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth');

require('../middleware/passport')(passport);
// Crear un nuevo usuario.
router.post('/signup', authController.signup);

// Loguearse
router.post('/login', authController.login);

router.get('/logged', authController.logged);

router.post('/logout', authController.logout);

module.exports = router;