'use strict';
const bcrypt = require('bcrypt');
const bcrypt_p = require('bcrypt-promise');
const jwt = require('jsonwebtoken');
const fs = require('fs');

module.exports = (sequelize, DataTypes) => {

    var Usuario = sequelize.define('Usuario', {
        nombre: {
            type: DataTypes.STRING
        },
        correo: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: "El correo es invalido"
                }
            }
        },
        telefono: {
            type: DataTypes.STRING,
        },
        alias: {
            type: DataTypes.STRING,
            unique: true
        },
        contrasena: {
            type: DataTypes.STRING
        }
    }, {
      tableName: 'usuario'
    });

    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Grupo, {
            foreignKey: 'grupoId'
        });
    };

    Usuario.beforeSave(async (usuario, opciones) => {
        let err;
        if (usuario.changed('contrasena')){
            let salt, hash;
            [err, salt] = await to(bcrypt.genSalt(10));
            if(err)
                TE(err.message, true);

            [err, hash] = await to(bcrypt.hash(usuario.contrasena, salt));
            if(err)
                TE(err.message, true);

            usuario.contrasena = hash;
        }
    });

    Usuario.prototype.comparePassword = async function (pw) {
        let err, pass;
        if(!this.contrasena)
            TE('Contraseña no introducida');

        [err, pass] = await to(bcrypt_p.compare(pw, this.contrasena));

        if(err)
            TE(err);

        if(!pass)
            TE('Contraseña invalida');

        return this;
    };

    Usuario.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return "Bearer "+jwt.sign({usuario_id:this.id}, CONFIG.secret, {expiresIn: expiration_time});
    };

    Usuario.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Usuario;
};