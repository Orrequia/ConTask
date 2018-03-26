'use strict';
module.exports = (sequelize, DataTypes) => {
  var TipoContrato = sequelize.define('TipoContrato', {
    nombre: DataTypes.STRING
  }, {});
  TipoContrato.associate = function(models) {
    // associations can be defined here
  };
  return TipoContrato;
};