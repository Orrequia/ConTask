var Sequelize = require('sequelize');
/*var Tienda = require('./tienda');
var Contrato = require('./contrato');*/

module.exports = function(sequelize) {

    sequelize.define('Empresa', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nif: {
            type: Sequelize.STRING,
            unique: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        notas: {
            type: Sequelize.STRING
        },
        enlaceArchivos: {
            type: Sequelize.STRING
        },
        esAutonomo: {
            type: Sequelize.BOOLEAN
        }
    });
    /*contrato: {
        type: Schema.Types.ObjectId,
        ref: Contrato
    },
    listaTienda: [[Schema.Types.Tienda]]*/
};