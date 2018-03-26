const Usuario = require('./../models').Usuario;
const validator = require('validator');

const createUser = async function(userInfo){
    let err;

    if(userInfo.correo == undefined || validator.isEmail(userInfo.correo)) {

        [err, usuario] = await to(Usuario.create(userInfo));
        if(err)
            TE('El alias de este usuario ya está utilizado.');

        return usuario;
    }
    else {
        TE('Los datos introducidos no son correctos.');
    }
};
module.exports.createUser = createUser;

const authUser = async function(userInfo){//returns token

    if(!userInfo.alias || !userInfo.contrasena)
        TE('Por favor introduce un alias o contraseña');

    [err, usuario] = await to(Usuario.findOne({where:{alias:userInfo.alias}}));

    if(err)
        TE(err.message);

    if(!usuario)
        TE('El usuario o la contraseña son invalidos');

    [err, usuario] = await to(usuario.comparePassword(userInfo.contrasena));

    if(err)
        TE(err.message);

    return usuario;

};
module.exports.authUser = authUser;