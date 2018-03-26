'use strict';
module.exports = (sequelize, DataTypes) => {
  var TipoContrato = sequelize.define('TipoContrato', {
    nombre: DataTypes.STRING
  }, {
    tableName: 'tipocontrato'
  });
  TipoContrato.associate = function(models) {
    TipoContrato.hasMany(models.LineaContrato, {
      foreignKey: 'tipocontratoId'
    });
  };
  return TipoContrato;
};