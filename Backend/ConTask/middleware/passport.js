const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    Usuario = require("../models/index").Usuario;

module.exports = function(passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    //opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = CONFIG.secret;

    passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {

        let err, usuario;
        [err, usuario] = await to(Usuario.findById(jwt_payload.usuario_id));

        if (err) {
            return done(err, false);
        }
        if (usuario) {
            return done(null, usuario);
        }
        else {
            done(null, false);
        }
    }));
};

/*module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use('local', new LocalStrategy(
        function(username, passport, done) {
            User.findOne({
                username: username.toLowerCase()
            }, function(err, user) {
                if(err)
                    return done(err);

                if(!user)
                    return done(null, false);

                if(!user.validPassword(passport))
                    return done(null, false);

                return done(null, user);
            });
        }
    ));
};*/