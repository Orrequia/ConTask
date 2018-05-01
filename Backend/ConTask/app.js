require('./config/database');
require('./global_functions');

const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//Express
const express = require('express');
const app = express();

//Pasport
const passport = require('passport');
require('./middleware/passport')(passport); // pass passport for configuration

//Cookie and session
const cookieParser = require('cookie-parser');
const session = require('express-session');
app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'this is my super secret',
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//Body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Helmet
const helmet = require('helmet');
app.use(helmet());
app.disable('x-powered-by');

const auth = require('./routes/auth');
const docs = require('./routes/doc');
const empresa = require('./routes/empresa');
const tienda = require('./routes/tienda');
const trabajador = require('./routes/trabajador');
const provincia = require('./routes/provincia');
const contrato = require('./routes/contrato');
const mochila = require('./routes/mochila');
const tipoempresa = require('./routes/tipoempresa');
const tipocontrato = require('./routes/tipocontrato');
const tipomochila = require('./routes/tipomochila');
const models = require('./models');

models.sequelize.authenticate().then(() => {
    console.log('Conectado a la base de datos SQL:', CONFIG.database);
})
    .catch(err => {
        console.error('No se puede conectar a la base de datos:',CONFIG.database, err);
    });
if(CONFIG.app==='dev'){
    models.sequelize.sync();//creates table if they do not already exist
    // models.sequelize.sync({ force: true });//deletes all tables then recreates them useful for testing and development purposes
}

// CORS
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use('/auth', auth);
app.use('/api', docs);

app.use('/empresa', empresa);
app.use('/tienda', tienda);
app.use('/trabajador', trabajador);
app.use('/provincia', provincia);
app.use('/contrato', contrato);
app.use('/mochila', mochila);
app.use('/tipoempresa', tipoempresa);
app.use('/tipomochila', tipomochila);
app.use('/tipocontrato', tipocontrato);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    //res.render('error');
    res.json({
        message: err.message,
        error: err
    });
});

module.exports = app;

app.listen(3000, function () {
    console.log("Node server running on http://localhost:3000");
});