'use strict';
module.exports = (sequelize, DataTypes) => {
    var Empresa = sequelize.define('Empresa', {
        nif: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notas: DataTypes.STRING,
        enlaceArchivos: DataTypes.STRING
    }, {
        tableName: 'empresa'
    });
    Empresa.associate = function(models) {
      Empresa.belongsTo(models.TipoEmpresa, {
          foreignKey: 'tipoempresaId'
      });
      Empresa.hasMany(models.Contrato, {
          foreignKey: 'empresaId',
          as: 'Contratos'
      });
      Empresa.hasMany(models.Tienda, {
          foreignKey: 'empresaId',
          as: 'Tiendas'
      });
      Empresa.hasMany(models.Trabajador, {
          foreignKey: 'empresaId',
          as: 'Propietarios'
      });
    };

    return Empresa;
};