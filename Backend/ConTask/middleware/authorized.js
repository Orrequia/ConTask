const Grupo = require('../models').Grupo;
const auth = require('authorized');

var getGrupo = async function(grupoId) {
    let err, grupo;

    console.log(grupoId);
    [err, grupo] = await to(Grupo.findById(grupoId));
    if(err)
        return err;

    console.log(grupo.nombre);
    return grupo.nombre;
};

//Roles
auth.role('admin', async function(req, done) {

    if(await getGrupo(req.user.grupoId) === 'admin')
        done(null, req.user && req.user.grupoId);
    else
        done();
});

auth.role('jefe', async function(req, done) {

    if(await getGrupo(req.user.grupoId) === 'jefe')
        done(null, req.user && req.user.grupoId);
    else
        done();
});

auth.role('trabajador', async function(req, done) {

    if(await getGrupo(req.user.grupoId) === 'trabajador')
        done(null, req.user && req.user.grupoId);
    else
        done();
});

auth.action('all penback', ['admin', 'jefe']);
auth.action('all company', ['admin', 'jefe', 'trabajador']);
auth.action('all shop', ['admin', 'jefe', 'trabajador']);
auth.action('all employee', ['admin', 'jefe', 'trabajador']);
auth.action('all contract', ['admin', 'jefe']);
auth.action('all typeCompany', ['admin']);
auth.action('all typePenback', ['admin']);
auth.action('all typeContract', ['admin']);
auth.action('all lineContract', ['admin', 'jefe']);
auth.action('all province', ['admin', 'jefe', 'trabajador']);


module.exports = auth;